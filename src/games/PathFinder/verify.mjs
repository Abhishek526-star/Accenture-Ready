// Headless sanity tests for the PathFinder engine (docs/Path Finder/05-test-scripts.md, test.js suite).
// Run: node src/games/PathFinder/verify.mjs
import * as PF from './logic.js';
import { VARIANTS } from './data.js';

let failures = 0;
function check(name, ok) {
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name);
  if (!ok) failures++;
}

// 1. Initially invalid boards
VARIANTS.forEach(function (v) {
  var res = PF.validate(v.data.practice, v.data.practice.blocks);
  check('initially invalid [' + v.id + '] -> ' + res.valid, res.valid === false);
});

// 2. Solved reference map valid (3x3)
var v3 = VARIANTS[0];
var solved = PF.layoutToBlocks(v3.data.solvedMap, 3);
var sres = PF.validate(v3.data.practice, solved);
check('3x3 solvedMap valid (path ' + (sres.valid ? sres.path.length : '-') + ')', sres.valid === true);

// 3. Idempotency: rotate x4 == identity; flip x numVariants == identity (3x3 blocks)
var idOk = true;
v3.data.practice.blocks.forEach(function (b) {
  var nb = PF.cloneBlocks([b])[0];
  var orig = JSON.stringify(nb.cells.map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; }));
  for (var i = 0; i < 4; i++) PF.rotateBlock(nb);
  var afterRot = JSON.stringify(nb.cells.map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; }));
  if (afterRot !== orig) idOk = false;
  var nb2 = PF.cloneBlocks([b])[0];
  var nv = PF.numVariants(b.shapeType);
  for (var j = 0; j < nv; j++) PF.flipBlock(nb2);
  var afterFlip = JSON.stringify(nb2.cells.map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; }));
  if (afterFlip !== orig) idOk = false;
});
check('rotate x4 / flip x numVariants identity', idOk);

// 4. Reachability: each 3x3 solved block reachable from its scrambled counterpart
var reachOk = true;
solved.forEach(function (sb) {
  var start = v3.data.practice.blocks.find(function (b) { return b.id === sb.id; });
  if (!start) return;
  var states = PF.reachableStates(start);
  var key = function (b) {
    return JSON.stringify(
      b.cells
        .filter(function (c) { return c.isDark; })
        .map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; })
        .sort()
    );
  };
  var set = {};
  states.forEach(function (cells) {
    set[
      JSON.stringify(
        cells
          .filter(function (c) { return c.isDark; })
          .map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; })
          .sort()
      )
    ] = true;
  });
  if (!set[key(sb)]) { reachOk = false; console.log('  unreachable: ' + sb.id); }
});
check('all 3x3 solved blocks reachable', reachOk);

// 5. Constants
check(
  'grid sizes 9,9,9,12,12,12,15,15,15,18,18',
  VARIANTS.map(function (v) { return v.data.practice.gridSize; }).join(',') === '9,9,9,12,12,12,15,15,15,18,18'
);
check(
  'time limits all 240',
  VARIANTS.every(function (v) { return v.data.practice.timeLimit === 240; })
);

// 6. Built-in solver from every variant's initial state, re-validates
VARIANTS.forEach(function (v) {
  var res = PF.solve(v.data.practice, v.data.practice.blocks);
  if (!res) { check('solver [' + v.id + ']', false); return; }
  var re = PF.validate(v.data.practice, res.blocks);
  check(
    'solver [' + v.id + '] path ' + res.path.length + ', revalidate ' + re.valid,
    re.valid === true
  );
});

if (failures === 0) {
  console.log('ALL TESTS PASSED');
} else {
  console.log(failures + ' FAILURES');
  process.exit(1);
}

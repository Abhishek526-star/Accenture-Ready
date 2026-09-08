// src/utils/sqlEngine.js
import initSqlJs from 'sql.js';

let SQL = null;
let initPromise = null;

/**
 * Initializes and returns the singleton sql.js instance
 */
export async function getSQLInstance() {
  if (SQL) return SQL;
  if (!initPromise) {
    initPromise = initSqlJs({
      locateFile: (file) => {
        if (typeof window === 'undefined') {
          return `./node_modules/sql.js/dist/${file}`;
        }
        return `/sql-wasm.wasm`;
      }
    }).then((instance) => {
      SQL = instance;
      return SQL;
    });
  }
  return initPromise;
}

/**
 * Creates an isolated database for a given question and populates it with dataset
 * @param {Object} question - The question object containing tableSchema
 * @param {Object} dataset - Object mapping tableName -> Array of row objects
 * @returns {SQL.Database} In-memory SQLite database instance
 */
export async function createIsolatedDB(question, dataset) {
  const sqlInstance = await getSQLInstance();
  const db = new sqlInstance.Database();

  // Create tables according to schema
  if (question.tableSchema && Array.isArray(question.tableSchema)) {
    for (const table of question.tableSchema) {
      const colDefs = table.columns.map((col) => {
        let def = `"${col.name}" ${col.type}`;
        if (col.primaryKey) def += ' PRIMARY KEY';
        return def;
      });

      const createSql = `CREATE TABLE "${table.name}" (${colDefs.join(', ')});`;
      db.run(createSql);
    }
  }

  // Insert dataset rows
  if (dataset && typeof dataset === 'object') {
    for (const [tableName, rows] of Object.entries(dataset)) {
      if (!Array.isArray(rows) || rows.length === 0) continue;

      for (const row of rows) {
        const keys = Object.keys(row);
        const placeholders = keys.map(() => '?').join(', ');
        const cols = keys.map((k) => `"${k}"`).join(', ');
        const values = Object.values(row);

        const insertSql = `INSERT INTO "${tableName}" (${cols}) VALUES (${placeholders});`;
        db.run(insertSql, values);
      }
    }
  }

  return db;
}

/**
 * Executes a user's SQL query on a database instance
 * @param {SQL.Database} db 
 * @param {string} query 
 * @returns {Object} { success: boolean, columns: string[], rows: Object[], rawValues: any[][], rowCount: number, error: string|null, executionTimeMs: number }
 */
export function executeQuery(db, query) {
  if (!query || !query.trim()) {
    return {
      success: false,
      columns: [],
      rows: [],
      rawValues: [],
      rowCount: 0,
      error: 'Query is empty.',
      executionTimeMs: 0
    };
  }

  const startTime = performance.now();
  try {
    let stmt;
    try {
      stmt = db.prepare(query);
    } catch (prepErr) {
      // If db.prepare fails (e.g. multi-statement with trailing semicolons), fallback to db.exec
      const res = db.exec(query);
      const executionTimeMs = Math.round((performance.now() - startTime) * 100) / 100;
      if (!res || res.length === 0) {
        return {
          success: true,
          columns: [],
          rows: [],
          rawValues: [],
          rowCount: 0,
          error: null,
          executionTimeMs
        };
      }
      const lastResult = res[res.length - 1];
      const columns = lastResult.columns || [];
      const values = lastResult.values || [];
      const rows = values.map((rowArr) => {
        const rowObj = {};
        columns.forEach((col, idx) => {
          rowObj[col] = rowArr[idx];
        });
        return rowObj;
      });
      return {
        success: true,
        columns,
        rows,
        rawValues: values,
        rowCount: rows.length,
        error: null,
        executionTimeMs
      };
    }

    const columns = stmt.getColumnNames() || [];
    const rows = [];
    const rawValues = [];

    while (stmt.step()) {
      const rowArr = stmt.get();
      rawValues.push(rowArr);
      const rowObj = {};
      columns.forEach((col, idx) => {
        rowObj[col] = rowArr[idx];
      });
      rows.push(rowObj);
    }
    stmt.free();

    const executionTimeMs = Math.round((performance.now() - startTime) * 100) / 100;

    return {
      success: true,
      columns,
      rows,
      rawValues,
      rowCount: rows.length,
      error: null,
      executionTimeMs
    };
  } catch (err) {
    const executionTimeMs = Math.round((performance.now() - startTime) * 100) / 100;
    return {
      success: false,
      columns: [],
      rows: [],
      rawValues: [],
      rowCount: 0,
      error: err.message || 'SQL Execution Error',
      executionTimeMs
    };
  }
}

/**
 * Normalizes a column name for case-insensitive comparison
 */
function normalizeCol(col) {
  return String(col || '').trim().toLowerCase();
}

/**
 * Normalizes a value for comparison
 */
function normalizeVal(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const num = Number(val);
    if (!isNaN(num) && val.trim() !== '') return num;
    return val.trim();
  }
  return val;
}

/**
 * Validates columns and compares actual vs expected rows
 * @param {Object} actual - { columns, rows }
 * @param {Array} expectedRows - Array of objects
 * @param {Array} expectedColumns - Array of expected column names
 * @param {boolean} orderSensitive - Whether row order matters
 * @returns {Object} { passed: boolean, message: string }
 */
export function compareResults(actual, expectedRows = [], expectedColumns = [], orderSensitive = false) {
  if (!actual.success) {
    return {
      passed: false,
      message: actual.error || 'Query failed to execute'
    };
  }

  // 1. Column Name Validation (if expectedColumns specified)
  if (expectedColumns && expectedColumns.length > 0) {
    const actualColsNorm = (actual.columns || []).map(normalizeCol);
    const expectedColsNorm = expectedColumns.map(normalizeCol);

    for (const expCol of expectedColsNorm) {
      if (!actualColsNorm.includes(expCol)) {
        return {
          passed: false,
          message: `Column mismatch. Expected column "${expectedColumns.find(c => normalizeCol(c) === expCol)}" but query returned columns: [${actual.columns.join(', ')}]`
        };
      }
    }
  }

  const actualRows = actual.rows || [];

  // 2. Row count check
  if (actualRows.length !== expectedRows.length) {
    if (expectedRows.length === 0) {
      return {
        passed: false,
        message: `Expected 0 rows (empty result set), but received ${actualRows.length} rows.`
      };
    }
    if (actualRows.length === 0) {
      return {
        passed: false,
        message: `Expected ${expectedRows.length} row(s), but received 0 rows (empty result set).`
      };
    }
    return {
      passed: false,
      message: `Row count mismatch. Expected ${expectedRows.length} rows, but received ${actualRows.length} rows.`
    };
  }

  if (expectedRows.length === 0 && actualRows.length === 0) {
    return { passed: true, message: 'Passed (Empty result set matches).' };
  }

  // 3. Row contents normalization & mapping
  // We match columns case-insensitively
  const normalizeRow = (row, colsToUse) => {
    const normalized = {};
    const rowKeys = Object.keys(row);

    colsToUse.forEach((targetCol) => {
      const matchingKey = rowKeys.find((k) => normalizeCol(k) === normalizeCol(targetCol));
      normalized[normalizeCol(targetCol)] = matchingKey ? normalizeVal(row[matchingKey]) : null;
    });

    return normalized;
  };

  const colsToCompare = (expectedColumns && expectedColumns.length > 0)
    ? expectedColumns
    : (expectedRows.length > 0 ? Object.keys(expectedRows[0]) : actual.columns);

  const normActual = actualRows.map((r) => normalizeRow(r, colsToCompare));
  const normExpected = expectedRows.map((r) => normalizeRow(r, colsToCompare));

  if (orderSensitive) {
    for (let i = 0; i < normExpected.length; i++) {
      const exp = normExpected[i];
      const act = normActual[i];
      for (const col of colsToCompare) {
        const cKey = normalizeCol(col);
        if (exp[cKey] !== act[cKey]) {
          return {
            passed: false,
            message: `Row ${i + 1} mismatch at column "${col}". Expected: ${JSON.stringify(exp[cKey])}, Received: ${JSON.stringify(act[cKey])}`
          };
        }
      }
    }
    return { passed: true, message: 'All rows match in expected order.' };
  } else {
    // Order insensitive comparison (Multiset / Set equality)
    const rowToString = (r) => {
      const sortedKeys = Object.keys(r).sort();
      return sortedKeys.map((k) => `${k}:${JSON.stringify(r[k])}`).join('|');
    };

    const actualMap = new Map();
    normActual.forEach((r) => {
      const str = rowToString(r);
      actualMap.set(str, (actualMap.get(str) || 0) + 1);
    });

    for (const r of normExpected) {
      const str = rowToString(r);
      const count = actualMap.get(str) || 0;
      if (count <= 0) {
        return {
          passed: false,
          message: `Missing expected record: ${JSON.stringify(r)}`
        };
      }
      actualMap.set(str, count - 1);
    }

    return { passed: true, message: 'All records match correctly.' };
  }
}

/**
 * Runs a user SQL query against a single dataset (e.g. for "Run Query" button on visible example)
 */
export async function runQueryOnDataset(question, query, dataset) {
  let db = null;
  try {
    db = await createIsolatedDB(question, dataset);
    const result = executeQuery(db, query);
    return result;
  } catch (err) {
    return {
      success: false,
      columns: [],
      rows: [],
      rawValues: [],
      rowCount: 0,
      error: err.message || 'Database initialization error',
      executionTimeMs: 0
    };
  } finally {
    if (db) {
      try { db.close(); } catch (e) { /* ignore */ }
    }
  }
}

/**
 * Executes user SQL against all test cases for a question and computes pass/fail status
 */
export async function runAssessmentTests(question, query) {
  const results = [];
  let passedCount = 0;

  for (const testCase of question.testCases) {
    let db = null;
    let actualResult;
    try {
      db = await createIsolatedDB(question, testCase.data);
      actualResult = executeQuery(db, query);
    } catch (err) {
      actualResult = {
        success: false,
        columns: [],
        rows: [],
        rawValues: [],
        rowCount: 0,
        error: err.message,
        executionTimeMs: 0
      };
    } finally {
      if (db) {
        try { db.close(); } catch (e) { /* ignore */ }
      }
    }

    const comparison = compareResults(
      actualResult,
      testCase.expected,
      question.expectedColumns,
      question.orderSensitive || false
    );

    if (comparison.passed) {
      passedCount++;
    }

    results.push({
      id: testCase.id,
      name: testCase.name,
      isHidden: testCase.isHidden,
      passed: comparison.passed,
      message: comparison.message,
      executionTimeMs: actualResult.executionTimeMs,
      // For visible tests, include output details for user debugging
      actualColumns: actualResult.columns,
      actualRows: actualResult.rows,
      error: actualResult.error,
      // Hidden test inputs/outputs are not meant for UI display
      expectedColumns: testCase.isHidden ? null : question.expectedColumns,
      expectedRows: testCase.isHidden ? null : testCase.expected,
      testData: testCase.isHidden ? null : testCase.data
    });
  }

  const allPassed = passedCount === question.testCases.length;

  return {
    allPassed,
    passedCount,
    totalCount: question.testCases.length,
    testResults: results
  };
}

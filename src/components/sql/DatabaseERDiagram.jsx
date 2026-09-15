// src/components/sql/DatabaseERDiagram.jsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Database, Key, Link2, Sparkles, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import './DatabaseERDiagram.css';

// Infer SQL data types if not explicitly specified in the schema
function inferDataType(colName) {
  if (!colName) return 'VARCHAR';
  const c = colName.toUpperCase();
  if (c.endsWith('_ID') || c === 'ID' || c.endsWith('ID') || c === 'TRANSNO' || c === 'SECTION_ID' || c === 'COURSE_ID' || c === 'SCHEDULE_ID') {
    return 'INT';
  }
  if (
    c.includes('AMOUNT') ||
    c.includes('BALANCE') ||
    c.includes('PRICE') ||
    c.includes('SALARY') ||
    c.includes('NETPAY') ||
    c.includes('TOTAL_EARNING') ||
    c.includes('ALLOWANCE') ||
    c.includes('SPEED') ||
    c.includes('RATING') ||
    c.includes('GRADE') ||
    c.includes('BASIC') ||
    c.includes('FUND') ||
    c.includes('UNIT_PRICE')
  ) {
    return 'DECIMAL';
  }
  if (
    c.includes('DATE') ||
    c.includes('TIME') ||
    c.endsWith('_DT') ||
    c === 'DOB' ||
    c === 'STARTTIME' ||
    c === 'ENDTIME'
  ) {
    return 'DATE';
  }
  if (c === 'YEAR' || c === 'MONTH' || c === 'YRS_OF_EXP' || c === 'TOTAL_LEAVES' || c === 'QUANTITY') {
    return 'INT';
  }
  return 'VARCHAR';
}

const RELATIONSHIP_PALETTES = [
  { stroke: '#f59e0b', gradStart: '#f59e0b', gradEnd: '#ea580c', dot: '#fbbf24' }, // Amber / Orange
  { stroke: '#06b6d4', gradStart: '#06b6d4', gradEnd: '#3b82f6', dot: '#38bdf8' }, // Cyan / Blue
  { stroke: '#a855f7', gradStart: '#a855f7', gradEnd: '#ec4899', dot: '#c084fc' }, // Violet / Pink
  { stroke: '#10b981', gradStart: '#10b981', gradEnd: '#059669', dot: '#34d399' }, // Emerald / Green
  { stroke: '#f43f5e', gradStart: '#f43f5e', gradEnd: '#e11d48', dot: '#fb7185' }, // Rose / Crimson
];

export default function DatabaseERDiagram({ schema, title = 'Database Schema (ER Diagram)' }) {
  const canvasRef = useRef(null);
  const [connections, setConnections] = useState([]);
  const [activeRel, setActiveRel] = useState(null);
  const [activeTable, setActiveTable] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(1.5, Math.round((prev + 0.1) * 10) / 10));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(0.6, Math.round((prev - 0.1) * 10) / 10));
  const handleResetZoom = () => setZoomLevel(1);

  // 1. Normalize schema into consistent tables and columns structure
  const normalizedTables = useMemo(() => {
    if (!schema) return [];
    const rawTables =
      schema.tables ||
      (schema.viewSchema && schema.viewSchema.tables) ||
      (Array.isArray(schema) ? schema : []);

    if (!Array.isArray(rawTables)) return [];

    return rawTables.map((t) => {
      const tableName = t.name || t.tableName || 'table';
      const rawCols = t.columns || [];

      // Normalize columns into objects
      const columns = rawCols.map((c, idx) => {
        if (typeof c === 'string') {
          return {
            name: c,
            type: inferDataType(c),
            primaryKey: idx === 0 && (c.toUpperCase().endsWith('_ID') || c.toUpperCase() === 'ID' || c.toUpperCase() === 'TRANSNO' || c.toUpperCase() === `${tableName.toUpperCase()}_ID`)
          };
        }
        return {
          name: c.name || String(c),
          type: c.type || inferDataType(c.name),
          primaryKey: Boolean(c.primaryKey || c.isPk)
        };
      });

      // Ensure at least one primary key is tagged if suitable
      const hasPk = columns.some((col) => col.primaryKey);
      if (!hasPk && columns.length > 0) {
        const pkCandidate = columns.find(
          (col) =>
            col.name.toUpperCase() === `${tableName.toUpperCase()}_ID` ||
            col.name.toUpperCase() === 'ID' ||
            col.name.toUpperCase().endsWith('_ID') ||
            col.name.toUpperCase().endsWith('ID')
        );
        if (pkCandidate) {
          pkCandidate.primaryKey = true;
        } else {
          columns[0].primaryKey = true;
        }
      }

      return {
        name: tableName,
        columns
      };
    });
  }, [schema]);

  // 2. Discover Foreign Keys and Entity-Relationships
  const { relationships, tableDataWithKeys } = useMemo(() => {
    const rels = [];
    const pkMap = new Map(); // colNameUpper -> tableName

    // Register all Primary Keys
    normalizedTables.forEach((t) => {
      t.columns.forEach((col) => {
        if (col.primaryKey) {
          pkMap.set(col.name.toUpperCase(), t.name);
        }
      });
    });

    // Tag foreign keys on tables and construct relationships
    const enrichedTables = normalizedTables.map((t) => {
      const enrichedCols = t.columns.map((col) => {
        const colUpper = col.name.toUpperCase();
        let isFk = false;
        let refTable = null;

        // An FK is a non-PK column that matches another table's PK or follows table_id pattern
        if (!col.primaryKey) {
          if (pkMap.has(colUpper) && pkMap.get(colUpper) !== t.name) {
            isFk = true;
            refTable = pkMap.get(colUpper);
          } else {
            // Check if column name contains another table's name (e.g. driver_id -> driver)
            for (const otherTable of normalizedTables) {
              if (otherTable.name !== t.name) {
                const otherPk = otherTable.columns.find((c) => c.primaryKey);
                if (otherPk && otherPk.name.toUpperCase() === colUpper) {
                  isFk = true;
                  refTable = otherTable.name;
                  break;
                }
              }
            }
          }
        }

        if (isFk && refTable) {
          const targetPkCol = normalizedTables
            .find((ot) => ot.name === refTable)
            ?.columns.find((c) => c.name.toUpperCase() === colUpper || c.primaryKey);

          rels.push({
            id: `${t.name}.${col.name}->${refTable}.${targetPkCol?.name || col.name}`,
            fromTable: t.name,
            fromColumn: col.name,
            toTable: refTable,
            toColumn: targetPkCol?.name || col.name
          });
        }

        return {
          ...col,
          foreignKey: isFk,
          referencedTable: refTable
        };
      });

      return {
        ...t,
        columns: enrichedCols
      };
    });

    return {
      relationships: rels,
      tableDataWithKeys: enrichedTables
    };
  }, [normalizedTables]);

  // 3. Hub-and-Spoke 3-Column Layout Partitioning (Left Spoke, Center Hub, Right Spoke)
  const { leftTables, centerTables, rightTables } = useMemo(() => {
    const count = tableDataWithKeys.length;
    if (count === 0) return { leftTables: [], centerTables: [], rightTables: [] };
    if (count === 1) return { leftTables: [], centerTables: tableDataWithKeys, rightTables: [] };
    if (count === 2) {
      return {
        leftTables: [tableDataWithKeys[0]],
        centerTables: [],
        rightTables: [tableDataWithKeys[1]]
      };
    }

    // Calculate connectivity score for each table
    const scores = new Map();
    tableDataWithKeys.forEach((t) => scores.set(t.name, { degree: 0, outgoing: 0 }));

    relationships.forEach((rel) => {
      if (scores.has(rel.fromTable)) {
        const s = scores.get(rel.fromTable);
        s.degree += 1;
        s.outgoing += 1;
      }
      if (scores.has(rel.toTable)) {
        const s = scores.get(rel.toTable);
        s.degree += 1;
      }
    });

    // Sort tables to find primary hub table (most relationships / joins)
    const sorted = [...tableDataWithKeys].sort((a, b) => {
      const sa = scores.get(a.name) || { degree: 0, outgoing: 0 };
      const sb = scores.get(b.name) || { degree: 0, outgoing: 0 };
      if (sb.degree !== sa.degree) return sb.degree - sa.degree;
      return sb.outgoing - sa.outgoing;
    });

    const hubTable = sorted[0];
    const spokes = sorted.slice(1);

    // Distribute spokes evenly into left and right wings
    const half = Math.ceil(spokes.length / 2);
    const left = spokes.slice(0, half);
    const right = spokes.slice(half);

    return {
      leftTables: left,
      centerTables: [hubTable],
      rightTables: right
    };
  }, [tableDataWithKeys, relationships]);

  // 4. Calculate accurate SVG Bézier connection coordinates (scaled for zoom)
  const calculateConnections = useCallback(() => {
    if (!canvasRef.current || relationships.length === 0) {
      setConnections([]);
      return;
    }

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const scale = zoomLevel || 1;
    const newConns = [];

    relationships.forEach((rel, idx) => {
      const fromEl = canvasRef.current.querySelector(`[data-col-key="${rel.fromTable}.${rel.fromColumn}"]`);
      const toEl = canvasRef.current.querySelector(`[data-col-key="${rel.toTable}.${rel.toColumn}"]`);
      const fromCard = canvasRef.current.querySelector(`[data-table-card="${rel.fromTable}"]`);
      const toCard = canvasRef.current.querySelector(`[data-table-card="${rel.toTable}"]`);

      if (!fromEl || !toEl || !fromCard || !toCard) return;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      const fromCardRect = fromCard.getBoundingClientRect();
      const toCardRect = toCard.getBoundingClientRect();

      // Relative coordinates inside canvas, divided by scale factor so SVG coordinates match local space
      const fromCenterY = (fromRect.top + fromRect.height / 2 - canvasRect.top) / scale;
      const toCenterY = (toRect.top + toRect.height / 2 - canvasRect.top) / scale;

      let x1, x2;
      let isExitRight, isEnterRight;

      // Determine exit and entry sides based on relative card positions
      const fromCardLeft = (fromCardRect.left - canvasRect.left) / scale;
      const fromCardRight = (fromCardRect.right - canvasRect.left) / scale;
      const toCardLeft = (toCardRect.left - canvasRect.left) / scale;
      const toCardRight = (toCardRect.right - canvasRect.left) / scale;

      const isSameColumn = Math.abs(fromCardLeft - toCardLeft) < 35;

      if (isSameColumn) {
        // Stacked in the same column: loop around the right side with a generous arc
        x1 = fromCardRight;
        x2 = toCardRight;
        isExitRight = true;
        isEnterRight = true;
      } else if (fromCardLeft < toCardLeft) {
        // Source is to the left of Target: exit right -> enter left
        x1 = fromCardRight;
        x2 = toCardLeft;
        isExitRight = true;
        isEnterRight = false;
      } else {
        // Source is to the right of Target: exit left -> enter right
        x1 = fromCardLeft;
        x2 = toCardRight;
        isExitRight = false;
        isEnterRight = true;
      }

      const y1 = fromCenterY;
      const y2 = toCenterY;

      // Calculate cubic Bézier control points in the open channels between columns
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      
      let curvature;
      if (isSameColumn) {
        curvature = Math.max(40, Math.min(dy * 0.35, 80));
      } else {
        curvature = Math.max(dx * 0.45, Math.min(dy * 0.25, 70), 50);
      }

      const cx1 = isExitRight ? x1 + curvature : x1 - curvature;
      const cx2 = isEnterRight ? x2 + curvature : x2 - curvature;

      const pathData = `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
      const colorIndex = idx % RELATIONSHIP_PALETTES.length;

      newConns.push({
        id: rel.id,
        rel,
        pathData,
        x1,
        y1,
        x2,
        y2,
        colorIndex,
        palette: RELATIONSHIP_PALETTES[colorIndex]
      });
    });

    setConnections(newConns);
  }, [relationships, zoomLevel]);

  // Recalculate positions on mount, window resize, and layout changes
  useEffect(() => {
    calculateConnections();
    const timer = setTimeout(calculateConnections, 60);

    let resizeObserver = null;
    if (window.ResizeObserver && canvasRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateConnections();
      });
      resizeObserver.observe(canvasRef.current);
    }

    window.addEventListener('resize', calculateConnections);

    return () => {
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', calculateConnections);
    };
  }, [calculateConnections]);

  if (tableDataWithKeys.length === 0) {
    return null;
  }

  // Reusable Table Card Renderer
  const renderTableCard = (table, isCenterHub = false) => {
    const isCardActive =
      activeTable === table.name ||
      (activeRel &&
        (activeRel.startsWith(`${table.name}.`) || activeRel.includes(`->${table.name}.`)));

    return (
      <div
        key={table.name}
        data-table-card={table.name}
        className={`er-table-card ${isCardActive ? 'active-card' : ''} ${isCenterHub ? 'hub-card' : ''}`}
        onMouseEnter={() => setActiveTable(table.name)}
        onMouseLeave={() => setActiveTable(null)}
      >
        {/* Tan/Orange Header with Bold White Name */}
        <div className={`er-table-header ${isCenterHub ? 'hub-header' : ''}`}>
          <div className="er-header-left">
            <Database size={13} className="er-table-icon" />
            <span className="er-table-name" title={table.name}>
              {table.name}
            </span>
          </div>
          <span className="er-col-count-badge">{table.columns.length} cols</span>
        </div>

        {/* Columns List */}
        <div className="er-table-body">
          {table.columns.map((col) => {
            const colKey = `${table.name}.${col.name}`;
            const isColHighlighted =
              activeRel &&
              (activeRel.startsWith(`${colKey}->`) || activeRel.endsWith(`->${colKey}`));

            return (
              <div
                key={col.name}
                data-col-key={colKey}
                className={`er-col-row ${isColHighlighted ? 'highlighted-col' : ''}`}
                onMouseEnter={() => {
                  const matchingRel = relationships.find(
                    (r) =>
                      (r.fromTable === table.name && r.fromColumn === col.name) ||
                      (r.toTable === table.name && r.toColumn === col.name)
                  );
                  if (matchingRel) setActiveRel(matchingRel.id);
                }}
                onMouseLeave={() => setActiveRel(null)}
              >
                <div className="er-col-left">
                  {col.primaryKey && (
                    <span className="er-pk-pill" title="Primary Key">
                      <Key size={10} /> PK
                    </span>
                  )}
                  {col.foreignKey && (
                    <span className="er-fk-pill" title={`Foreign Key -> ${col.referencedTable}`}>
                      <Link2 size={10} /> FK
                    </span>
                  )}
                  <span
                    className={`er-col-name ${col.primaryKey ? 'is-pk' : col.foreignKey ? 'is-fk' : ''}`}
                    title={col.name}
                  >
                    {col.name}
                  </span>
                </div>

                <span className="er-type-pill">{col.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="er-diagram-container">
      {/* Top Header, Stats & Zoom Controls */}
      <div className="er-diagram-header-bar">
        <div className="er-diagram-title-group">
          <div className="er-title-icon-badge">
            <Database size={15} />
          </div>
          <h3 className="er-diagram-title">{title}</h3>
        </div>

        <div className="er-diagram-actions-row">
          {/* Zoom Controls */}
          <div className="er-zoom-controls">
            <button
              type="button"
              className="er-zoom-btn"
              onClick={handleZoomOut}
              title="Zoom Out (-10%)"
              disabled={zoomLevel <= 0.6}
            >
              <ZoomOut size={13} />
            </button>
            <button
              type="button"
              className="er-zoom-btn er-zoom-reset"
              onClick={handleResetZoom}
              title="Reset Zoom (100%)"
            >
              <RotateCcw size={11} className="er-reset-icon" />
              <span>{Math.round(zoomLevel * 100)}%</span>
            </button>
            <button
              type="button"
              className="er-zoom-btn"
              onClick={handleZoomIn}
              title="Zoom In (+10%)"
              disabled={zoomLevel >= 1.5}
            >
              <ZoomIn size={13} />
            </button>
          </div>

          {/* Stats Badges */}
          <div className="er-diagram-stats">
            <span className="er-stat-pill accent">{tableDataWithKeys.length} Tables</span>
            <span className="er-stat-pill">
              {relationships.length} {relationships.length === 1 ? 'Relationship' : 'Relationships'}
            </span>
          </div>
        </div>
      </div>

      {/* Viewport for smooth panning and scaling without clipping */}
      <div className="er-diagram-viewport">
        <div
          className="er-diagram-zoom-stage"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease'
          }}
        >
          {/* Main Canvas containing Hub-and-Spoke Columns and SVG Overlay */}
          <div ref={canvasRef} className="er-diagram-canvas er-hub-canvas">
            {/* SVG Overlay for Connections (elevated at z-index: 10) */}
            <svg className="er-svg-overlay">
              <defs>
                <linearGradient id="erGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>

                {RELATIONSHIP_PALETTES.map((pal, idx) => (
                  <linearGradient key={idx} id={`erGradPalette${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={pal.gradStart} />
                    <stop offset="100%" stopColor={pal.gradEnd} />
                  </linearGradient>
                ))}
              </defs>

              {connections.map((conn) => {
                const isHighlighted =
                  activeRel === conn.id ||
                  activeTable === conn.rel.fromTable ||
                  activeTable === conn.rel.toTable;

                const strokeUrl = isHighlighted
                  ? 'url(#erGradientActive)'
                  : `url(#erGradPalette${conn.colorIndex})`;

                const dotColor = isHighlighted ? '#38bdf8' : conn.palette.dot;

                return (
                  <g
                    key={conn.id}
                    className="er-connection-group"
                    onMouseEnter={() => setActiveRel(conn.id)}
                    onMouseLeave={() => setActiveRel(null)}
                  >
                    {/* Visual curved path */}
                    <path
                      d={conn.pathData}
                      className={`er-rel-path ${isHighlighted ? 'highlighted' : ''}`}
                      stroke={strokeUrl}
                    />

                    {/* Source Dot (FK Column) */}
                    <circle
                      cx={conn.x1}
                      cy={conn.y1}
                      r={isHighlighted ? 4.8 : 3.6}
                      fill={dotColor}
                      className={`er-rel-dot ${isHighlighted ? 'highlighted' : ''}`}
                    />

                    {/* Target Dot (PK Column) */}
                    <circle
                      cx={conn.x2}
                      cy={conn.y2}
                      r={isHighlighted ? 4.8 : 3.6}
                      fill={dotColor}
                      className={`er-rel-dot ${isHighlighted ? 'highlighted' : ''}`}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Hub-and-Spoke 3-Column Layout Container */}
            <div className="er-hub-layout">
              {/* Left Column (Spokes) */}
              {leftTables.length > 0 && (
                <div className="er-hub-column er-column-left">
                  {leftTables.map((t) => renderTableCard(t, false))}
                </div>
              )}

              {/* Center Column (Hub Table) */}
              {centerTables.length > 0 && (
                <div className="er-hub-column er-column-center">
                  {centerTables.map((t) => renderTableCard(t, true))}
                </div>
              )}

              {/* Right Column (Spokes) */}
              {rightTables.length > 0 && (
                <div className="er-hub-column er-column-right">
                  {rightTables.map((t) => renderTableCard(t, false))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Legend */}
      <div className="er-diagram-legend">
        <div className="er-legend-item">
          <span className="er-pk-pill">
            <Key size={10} /> PK
          </span>
          <span>Primary Key</span>
        </div>
        <div className="er-legend-item">
          <span className="er-fk-pill">
            <Link2 size={10} /> FK
          </span>
          <span>Foreign Key</span>
        </div>
        <div className="er-legend-item">
          <span className="er-legend-line-sample" />
          <span>Curved Relationship (FK &rarr; PK)</span>
        </div>
        <div className="er-legend-item" style={{ marginLeft: 'auto', color: '#64748b' }}>
          <Sparkles size={12} className="text-amber-400" />
          <span>Hub-and-Spoke schema view &bull; Hover to highlight</span>
        </div>
      </div>
    </div>
  );
}


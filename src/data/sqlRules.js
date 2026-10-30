// src/data/sqlRules.js
// Accenture Technical Assessment — SQL Rules & Best Practices

export const sqlAssessmentRules = [
  {
    id: "RULE-01",
    category: "Dialect & Execution",
    title: "MySQL 8.0+ Compatibility",
    rule: "All SQL queries must compile and execute under the MySQL 8.0+ engine. Use standard ANSI SQL syntax for joins, predicates, and window functions."
  },
  {
    id: "RULE-02",
    category: "Output Formatting",
    title: "Exact Column Header Aliasing",
    rule: "The query projection must alias every column to match the exact names and case provided in the problem statement (e.g. SELECT p.first_name AS FIRST_NAME, p.contact AS CONTACT)."
  },
  {
    id: "RULE-03",
    category: "Literal Syntax",
    title: "Single-Quoted String Literals",
    rule: "Always enclose string and date literals in single quotes (e.g. 'Hong Kong', 'Vegetarian', '2025', 'Monday', 'Permanent'). Double quotes are reserved for identifiers."
  },
  {
    id: "RULE-04",
    category: "Deduplication",
    title: "DISTINCT for Multi-Table Projections",
    rule: "When the prompt specifies distinct entities (such as distinct passengers, students, or categories), specify SELECT DISTINCT to prevent duplicate rows resulting from 1-to-many joins."
  },
  {
    id: "RULE-05",
    category: "Relational Integrity",
    title: "Explicit Foreign-Key Joins",
    rule: "Join tables explicitly using JOIN / LEFT JOIN ... ON ... following the database schema's foreign key constraints (e.g. section_ibfk_1). Comma joins are discouraged."
  },
  {
    id: "RULE-06",
    category: "Aggregation",
    title: "GROUP BY and HAVING Separation",
    rule: "Every non-aggregated column in the SELECT list must appear in the GROUP BY clause. Filter post-aggregation metrics using HAVING; filter pre-aggregation rows using WHERE."
  },
  {
    id: "RULE-07",
    category: "Sorting",
    title: "Deterministic ORDER BY",
    rule: "When ordering is required, all sorting criteria and direction (ASC / DESC) must be explicitly listed in the ORDER BY clause. For ties, specify secondary sort keys."
  },
  {
    id: "RULE-08",
    category: "Result Windowing",
    title: "LIMIT Row Truncation",
    rule: "When a maximum row count is requested (e.g. 'top 5 categories', 'limit to 10 rows'), append a LIMIT clause as the final clause of the query."
  },
  {
    id: "RULE-09",
    category: "Null Safety",
    title: "COALESCE / IFNULL for Zero Defaults",
    rule: "When invoices or accounts may lack matching records, use COALESCE(SUM(amount), 0) to ensure numeric stability in calculations and comparisons."
  },
  {
    id: "RULE-10",
    category: "UI & Navigation",
    title: "Interactive Schema Viewer",
    rule: "You can view the full database schema by clicking the 'View Schema' tab at the bottom of the query window to inspect table relationships, port rings, and constraint names."
  }
];


// src/data/msOfficeQuestions.js
/**
 * Accenture MS Office Assessment Question Bank & Revision Handbook
 * Source: MS Office — Accenture Complete Notes (Excel • Word • PowerPoint • Practice MCQs)
 *
 * Tier 1: 7 MCQs (Excel Fundamentals: Workbook, Worksheets, Cell References, Operators, SUM & AVERAGE)
 * Tier 2: 7 MCQs (Excel Advanced Functions & Logic: COUNT, COUNTA, COUNTIF, SUMIF, IF, AND, OR, NOT)
 * Tier 3: 7 MCQs (Excel Data Analysis & Lookups: VLOOKUP, XLOOKUP, PivotTable, Sorting, Filtering, Freeze Panes, Data Validation)
 * Tier 4: 7 MCQs (MS Word Mastery: Formatting, Alignments, Page vs Section Break, Mail Merge, Track Changes, Extensions)
 * Tier 5: 7 MCQs (MS PowerPoint & Shortcuts: Themes vs Slide Master, Transitions vs Animations, Views, Slide Show, Shortcuts)
 */

export const MS_OFFICE_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '35 MCQs', description: 'Complete Accenture MS Office Assessment Bank' },
  { id: 1, title: 'Tier 1: Excel Fundamentals & References', badge: '7 MCQs', description: 'Workbooks, Rows/Columns, Relative/Absolute/Mixed References & Basic Formulas' },
  { id: 2, title: 'Tier 2: Excel Logic & Advanced Functions', badge: '7 MCQs', description: 'COUNT vs COUNTA, COUNTIF, SUMIF, IF Logic, Nested IF & Boolean Operators' },
  { id: 3, title: 'Tier 3: Excel Lookups & Data Management', badge: '7 MCQs', description: 'VLOOKUP vs XLOOKUP, PivotTables, Sorting, Filtering, Freeze Panes & Validation' },
  { id: 4, title: 'Tier 4: MS Word & Document Processing', badge: '7 MCQs', description: 'Alignments, Styles, Page vs Section Break, Mail Merge & Track Changes' },
  { id: 5, title: 'Tier 5: MS PowerPoint & Office Shortcuts', badge: '7 MCQs', description: 'Slide Master vs Themes, Transitions vs Animations, Slide Show F5 & Shortcuts' }
];

export const MS_OFFICE_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'Excel Cell References & Formulas', label: 'Excel References & Formulas (Relative, Absolute, Mixed, SUM, AVERAGE)' },
  { id: 'Excel Counting & Conditional Math', label: 'Counting & Conditions (COUNT, COUNTA, COUNTIF, SUMIF)' },
  { id: 'Excel Logical Functions', label: 'Logical Functions (IF, Nested IF, AND, OR, NOT)' },
  { id: 'Excel Lookups & Data Tools', label: 'Lookups & Data Tools (VLOOKUP, XLOOKUP, PivotTable, Sort, Filter, Freeze Panes)' },
  { id: 'MS Word Document Processing', label: 'MS Word Essentials (Alignments, Section Breaks, Mail Merge, Track Changes)' },
  { id: 'MS PowerPoint Presentations', label: 'PowerPoint & Presentations (Slide Master, Transitions, Animations, Views)' },
  { id: 'Office Keyboard Shortcuts', label: 'Essential Shortcuts (Excel, Word, PowerPoint Hotkeys)' }
];

export const msOfficeQuestions = [
  // ==========================================
  // TIER 1: EXCEL FUNDAMENTALS & REFERENCES (7 Qs)
  // ==========================================
  {
    id: 'msoffice-1-01',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'Which of the following represents an absolute cell reference in Microsoft Excel?',
    options: [
      { id: 'A', text: 'A1' },
      { id: 'B', text: '$A$1' },
      { id: 'C', text: '$A1' },
      { id: 'D', text: 'A$1' }
    ],
    correctAnswer: 'B',
    explanation: 'An absolute reference uses dollar signs ($) before both the column letter and the row number ($A$1). When copied to any other cell, both the column and row remain strictly locked.',
    accentureTip: 'Memory Trick: $ = LOCK. $A$1 locks both Column A and Row 1.'
  },
  {
    id: 'msoffice-1-02',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'If the formula =A1+B1 in cell C1 is copied down to cell C2, what will the formula become?',
    options: [
      { id: 'A', text: '=A1+B1' },
      { id: 'B', text: '=A2+B2' },
      { id: 'C', text: '=$A$1+$B$1' },
      { id: 'D', text: '=A1+B2' }
    ],
    correctAnswer: 'B',
    explanation: 'Both A1 and B1 are relative references. When a formula containing relative references is copied down one row (from row 1 to row 2), both row indicators automatically increment by 1, yielding =A2+B2.',
    accentureTip: 'Relative references change relative to the target cell position when copied.'
  },
  {
    id: 'msoffice-1-03',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'In Excel mixed references, what is the exact effect of the reference $A1 when copied horizontally across columns and vertically down rows?',
    options: [
      { id: 'A', text: 'Both column A and row 1 remain locked.' },
      { id: 'B', text: 'Column A remains locked, while the row number changes.' },
      { id: 'C', text: 'Row 1 remains locked, while the column letter changes.' },
      { id: 'D', text: 'Neither column nor row is locked.' }
    ],
    correctAnswer: 'B',
    explanation: 'In $A1, the dollar sign precedes the column letter A, locking Column A in place. The row number 1 has no dollar sign, so it changes dynamically when copied vertically down rows.',
    accentureTip: 'Whichever part has the "$" in front of it is the locked part: $A1 = Column locked; A$1 = Row locked.'
  },
  {
    id: 'msoffice-1-04',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'What is the fundamental architectural distinction between an Excel Workbook and an Excel Worksheet?',
    options: [
      { id: 'A', text: 'A worksheet contains multiple workbooks.' },
      { id: 'B', text: 'A workbook is the complete Excel file (.xlsx), which can contain multiple individual worksheets (tabs).' },
      { id: 'C', text: 'Workbooks and worksheets are identical terms with no functional difference.' },
      { id: 'D', text: 'Workbooks only store macros, while worksheets only store text.' }
    ],
    correctAnswer: 'B',
    explanation: 'A workbook is the entire container file (e.g. Sales.xlsx). Inside that workbook, individual pages/spreadsheets (e.g. January, February, March) are worksheets.',
    accentureTip: 'Exam Trap: Workbook ≠ Worksheet. Workbook = Complete file; Worksheet = Individual sheet tab inside.'
  },
  {
    id: 'msoffice-1-05',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'Which standard Excel function calculates the total sum of a range of numbers?',
    options: [
      { id: 'A', text: 'AVERAGE()' },
      { id: 'B', text: 'COUNT()' },
      { id: 'C', text: 'SUM()' },
      { id: 'D', text: 'TOTAL()' }
    ],
    correctAnswer: 'C',
    explanation: 'The =SUM() function adds all numbers in a specified range (e.g., =SUM(A1:A5)). TOTAL() is not a built-in standard Excel calculation function.',
    accentureTip: 'SUM() adds values; AVERAGE() calculates the mean; COUNT() tallies numbers.'
  },
  {
    id: 'msoffice-1-06',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Excel Cell References & Formulas',
    question: 'What is the computed output of the formula: =AVERAGE(10, 20, 30, 40)',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '25' },
      { id: 'C', text: '30' },
      { id: 'D', text: '100' }
    ],
    correctAnswer: 'B',
    explanation: 'Average = Sum of values / Number of values = (10 + 20 + 30 + 40) / 4 = 100 / 4 = 25.',
    accentureTip: 'Do not confuse the sum (100) with the arithmetic mean (25).'
  },
  {
    id: 'msoffice-1-07',
    tier: 1,
    tierName: 'Tier 1: Excel Fundamentals & References',
    topic: 'Office Keyboard Shortcuts',
    question: 'Which Excel keyboard shortcut automatically inserts the SUM formula for adjacent cells (AutoSum)?',
    options: [
      { id: 'A', text: 'Ctrl + S' },
      { id: 'B', text: 'Alt + =' },
      { id: 'C', text: 'Ctrl + Shift + S' },
      { id: 'D', text: 'F4' }
    ],
    correctAnswer: 'B',
    explanation: 'Pressing Alt + = automatically inserts the =SUM() formula and selects the adjacent contiguous range of numbers above or to the left.',
    accentureTip: 'Alt + = is the high-frequency AutoSum shortcut tested in corporate aptitude tests.'
  },

  // ==========================================
  // TIER 2: EXCEL LOGIC & ADVANCED FUNCTIONS (7 Qs)
  // ==========================================
  {
    id: 'msoffice-2-01',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Counting & Conditional Math',
    question: 'Which Excel function counts ONLY cells containing numeric values, completely ignoring text and blanks?',
    options: [
      { id: 'A', text: 'COUNTA()' },
      { id: 'B', text: 'COUNT()' },
      { id: 'C', text: 'COUNTIF()' },
      { id: 'D', text: 'COUNTBLANK()' }
    ],
    correctAnswer: 'B',
    explanation: '`COUNT()` counts only cells containing numbers, dates, or formulas returning numeric values. `COUNTA()` counts all non-empty cells (numbers, text, symbols, errors).',
    accentureTip: 'High-Yield MCQ Rule: COUNT -> Numbers only; COUNTA -> All non-empty cells.'
  },
  {
    id: 'msoffice-2-02',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Counting & Conditional Math',
    question: 'Consider range A1:A5 with values: A1=10, A2="Hello", A3=20, A4=Blank, A5=30. What will =COUNTA(A1:A5) return?',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '2' }
    ],
    correctAnswer: 'B',
    explanation: 'Four cells contain non-empty content: 10, "Hello", 20, and 30. Only A4 is blank. Therefore COUNTA returns 4. (COUNT would have returned 3).',
    accentureTip: 'COUNTA tallies 4 because text ("Hello") counts as a populated cell.'
  },
  {
    id: 'msoffice-2-03',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Counting & Conditional Math',
    question: 'Which function should be used to count how many employees in column B have the department title "IT"?',
    options: [
      { id: 'A', text: 'SUMIF(B1:B10, "IT")' },
      { id: 'B', text: 'COUNT(B1:B10, "IT")' },
      { id: 'C', text: 'COUNTIF(B1:B10, "IT")' },
      { id: 'D', text: 'VLOOKUP("IT", B1:B10, 1)' }
    ],
    correctAnswer: 'C',
    explanation: '`COUNTIF(range, criteria)` counts the number of cells within a range that meet a single specified condition (e.g. =COUNTIF(B1:B10, "IT")).',
    accentureTip: 'Difference: COUNTIF counts matching occurrences; SUMIF sums numeric values corresponding to matching occurrences.'
  },
  {
    id: 'msoffice-2-04',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Counting & Conditional Math',
    question: 'Given Employee Departments in B2:B5 and Salaries in C2:C5, which formula correctly calculates the total salary of only the IT department?',
    options: [
      { id: 'A', text: '=COUNTIF(B2:B5, "IT")' },
      { id: 'B', text: '=SUM(B2:B5, "IT")' },
      { id: 'C', text: '=SUMIF(B2:B5, "IT", C2:C5)' },
      { id: 'D', text: '=AVERAGEIF(B2:B5, "IT", C2:C5)' }
    ],
    correctAnswer: 'C',
    explanation: 'Syntax: =SUMIF(range, criteria, sum_range). It checks range B2:B5 for "IT" and sums the corresponding values from C2:C5.',
    accentureTip: 'Always verify the 3rd parameter: `sum_range` contains the numbers being added.'
  },
  {
    id: 'msoffice-2-05',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Logical Functions',
    question: 'What is the purpose and syntax of the Excel IF function?',
    options: [
      { id: 'A', text: '=IF(value_if_true, value_if_false, condition)' },
      { id: 'B', text: '=IF(condition, value_if_true, value_if_false)' },
      { id: 'C', text: '=IF(range, criteria)' },
      { id: 'D', text: '=IF(lookup_value, table_array)' }
    ],
    correctAnswer: 'B',
    explanation: 'The syntax of IF is `=IF(condition, value_if_true, value_if_false)`. If the condition evaluates to TRUE, the first value is returned; otherwise, the second is returned.',
    accentureTip: 'Condition first, then True result, then False result.'
  },
  {
    id: 'msoffice-2-06',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Logical Functions',
    question: 'If cell A1 contains 75, what is the output of the formula: =IF(A1>=40, "Pass", "Fail")',
    options: [
      { id: 'A', text: '40' },
      { id: 'B', text: 'TRUE' },
      { id: 'C', text: 'Pass' },
      { id: 'D', text: 'Fail' }
    ],
    correctAnswer: 'C',
    explanation: 'The condition 75 >= 40 evaluates to TRUE. The formula returns the true branch: "Pass".',
    accentureTip: 'Evaluate the condition strictly: 75 >= 40 is TRUE, so it outputs "Pass".'
  },
  {
    id: 'msoffice-2-07',
    tier: 2,
    tierName: 'Tier 2: Excel Logic & Advanced Functions',
    topic: 'Excel Logical Functions',
    question: 'What are the evaluated results of =AND(TRUE, FALSE, TRUE) and =OR(FALSE, FALSE, TRUE) respectively?',
    options: [
      { id: 'A', text: 'TRUE and TRUE' },
      { id: 'B', text: 'FALSE and TRUE' },
      { id: 'C', text: 'TRUE and FALSE' },
      { id: 'D', text: 'FALSE and FALSE' }
    ],
    correctAnswer: 'B',
    explanation: '`AND` returns TRUE only if ALL conditions are TRUE (since one is FALSE, AND returns FALSE). `OR` returns TRUE if AT LEAST ONE condition is TRUE (returns TRUE).',
    accentureTip: 'Memory Trick: AND -> ALL must be true; OR -> ANY one can be true.'
  },

  // ==========================================
  // TIER 3: EXCEL DATA ANALYSIS & LOOKUPS (7 Qs)
  // ==========================================
  {
    id: 'msoffice-3-01',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'In the formula =VLOOKUP(102, A2:C10, 3, FALSE), what does the parameter "3" represent?',
    options: [
      { id: 'A', text: 'The value to search for in the database' },
      { id: 'B', text: 'The number of rows to search across' },
      { id: 'C', text: 'The column index number from which to return data' },
      { id: 'D', text: 'The precision threshold for matching' }
    ],
    correctAnswer: 'C',
    explanation: 'The 3rd argument in VLOOKUP is `col_index_num`. Here, 3 instructs Excel to return the value from the 3rd column of the table range A2:C10 (which is Column C).',
    accentureTip: 'VLOOKUP arguments: (lookup_value, table_array, col_index_num, range_lookup).'
  },
  {
    id: 'msoffice-3-02',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'In VLOOKUP, what does passing FALSE as the range_lookup parameter specify?',
    options: [
      { id: 'A', text: 'An approximate match against sorted data' },
      { id: 'B', text: 'An exact match' },
      { id: 'C', text: 'A reverse right-to-left lookup' },
      { id: 'D', text: 'A case-sensitive match' }
    ],
    correctAnswer: 'B',
    explanation: '`FALSE` (or 0) specifies an EXACT match. If an exact match is not found, VLOOKUP returns the `#N/A` error. `TRUE` specifies an approximate match.',
    accentureTip: 'In placement tests, FALSE is almost always used when querying exact IDs, names, or codes.'
  },
  {
    id: 'msoffice-3-03',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'What key architectural advantage does XLOOKUP have over the traditional VLOOKUP function in modern Excel?',
    options: [
      { id: 'A', text: 'XLOOKUP only works on numbers, not text' },
      { id: 'B', text: 'XLOOKUP defaults to exact match and can look up in any direction (left or right)' },
      { id: 'C', text: 'XLOOKUP requires the lookup column to be sorted in ascending order' },
      { id: 'D', text: 'XLOOKUP requires manual column index counting' }
    ],
    correctAnswer: 'B',
    explanation: 'Unlike VLOOKUP (which requires the lookup column to be on the far left and uses numeric column indexes), XLOOKUP uses return ranges, looks both left and right, and defaults to exact match.',
    accentureTip: 'XLOOKUP eliminates the left-to-right restriction and does not break when columns are inserted.'
  },
  {
    id: 'msoffice-3-04',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'You have a table of 5,000 sales transactions and need to instantly calculate total sales grouped by department without writing complex formulas. Which feature is most appropriate?',
    options: [
      { id: 'A', text: 'WordArt' },
      { id: 'B', text: 'PivotTable' },
      { id: 'C', text: 'Freeze Panes' },
      { id: 'D', text: 'Mail Merge' }
    ],
    correctAnswer: 'B',
    explanation: 'A PivotTable is an interactive tool designed to summarize, analyze, explore, and reorganize large datasets with grouping, summation, counts, and averages.',
    accentureTip: 'Exam Definition: PivotTable is used to summarize, analyze, and reorganize large datasets.'
  },
  {
    id: 'msoffice-3-05',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'Which Excel feature ensures that table headers and column titles remain visible at the top while scrolling down through thousands of rows?',
    options: [
      { id: 'A', text: 'Split' },
      { id: 'B', text: 'Freeze Panes' },
      { id: 'C', text: 'Filter' },
      { id: 'D', text: 'Conditional Formatting' }
    ],
    correctAnswer: 'B',
    explanation: '`Freeze Panes` locks selected rows and columns so that they remain visible in the viewport while navigating or scrolling through large worksheets.',
    accentureTip: 'Scenario Question: Keeping header row visible while scrolling = Freeze Panes.'
  },
  {
    id: 'msoffice-3-06',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'You want to restrict a cell so users can ONLY select "IT", "HR", or "Finance" from an interactive dropdown list. Which feature should you configure?',
    options: [
      { id: 'A', text: 'Conditional Formatting' },
      { id: 'B', text: 'Data Validation' },
      { id: 'C', text: 'Text to Columns' },
      { id: 'D', text: 'Sort & Filter' }
    ],
    correctAnswer: 'B',
    explanation: '`Data Validation` controls what data users are allowed to enter into a cell, including dropdown lists, integer ranges (1-100), dates, and character limits.',
    accentureTip: 'Key Idea: Data Validation = Controls allowed user input.'
  },
  {
    id: 'msoffice-3-07',
    tier: 3,
    tierName: 'Tier 3: Excel Lookups & Data Management',
    topic: 'Excel Lookups & Data Tools',
    question: 'Which feature in Excel automatically highlights cells in soft green if their value exceeds ₹50,000?',
    options: [
      { id: 'A', text: 'Data Validation' },
      { id: 'B', text: 'Conditional Formatting' },
      { id: 'C', text: 'AutoFormat' },
      { id: 'D', text: 'Flash Fill' }
    ],
    correctAnswer: 'B',
    explanation: '`Conditional Formatting` dynamically alters the appearance (fill color, font color, borders, icons) of cells based on specified conditions or rules.',
    accentureTip: 'Formatting dependent on value/condition = Conditional Formatting.'
  },

  // ==========================================
  // TIER 4: MS WORD & DOCUMENT PROCESSING (7 Qs)
  // ==========================================
  {
    id: 'msoffice-4-01',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'Which MS Word feature is specifically designed to generate hundreds of personalized letters or emails from a single template and a database source?',
    options: [
      { id: 'A', text: 'Track Changes' },
      { id: 'B', text: 'Mail Merge' },
      { id: 'C', text: 'WordArt' },
      { id: 'D', text: 'AutoCorrect' }
    ],
    correctAnswer: 'B',
    explanation: 'Mail Merge combines a standard template document with a structured data source (like an Excel sheet or Access table) to produce personalized documents for multiple recipients.',
    accentureTip: 'Formula: Main Document + Data Source = Personalized Documents (Mail Merge).'
  },
  {
    id: 'msoffice-4-02',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'What is the correct keyboard shortcut to Center-align text in Microsoft Word?',
    options: [
      { id: 'A', text: 'Ctrl + C' },
      { id: 'B', text: 'Ctrl + E' },
      { id: 'C', text: 'Ctrl + J' },
      { id: 'D', text: 'Ctrl + M' }
    ],
    correctAnswer: 'B',
    explanation: 'In MS Word, alignments are: Left = `Ctrl + L`, Center = `Ctrl + E`, Right = `Ctrl + R`, and Justify = `Ctrl + J`. (Ctrl + C is reserved for Copy).',
    accentureTip: 'Memory Trick: L -> Left | E -> cEnter | R -> Right | J -> Justify.'
  },
  {
    id: 'msoffice-4-03',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'Accenture Scenario: You have a 20-page document and want page 10 to be Landscape while all other pages remain Portrait. What must you insert?',
    options: [
      { id: 'A', text: 'Page Break' },
      { id: 'B', text: 'Section Break' },
      { id: 'C', text: 'Line Break' },
      { id: 'D', text: 'Paragraph Break' }
    ],
    correctAnswer: 'B',
    explanation: 'A `Page Break` simply starts text on a new page under the same formatting. A `Section Break` partitions the document into independent sections, allowing distinct page orientation, headers, and margins.',
    accentureTip: 'Page Break = New page. Section Break = New section + independent formatting.'
  },
  {
    id: 'msoffice-4-04',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'Which Microsoft Word feature actively records all text insertions, deletions, and formatting changes made by collaborators for subsequent review?',
    options: [
      { id: 'A', text: 'Comments' },
      { id: 'B', text: 'Track Changes' },
      { id: 'C', text: 'Document Inspector' },
      { id: 'D', text: 'AutoRecover' }
    ],
    correctAnswer: 'B',
    explanation: '`Track Changes` logs every modification made to the document (strike-throughs for deletions, underlines for additions) so they can be accepted or rejected.',
    accentureTip: 'Difference: Track Changes records edits; Comments add feedback/notes without modifying document text.'
  },
  {
    id: 'msoffice-4-05',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'Why should technical document authors use predefined "Styles" (e.g. Heading 1, Heading 2) rather than manual font formatting?',
    options: [
      { id: 'A', text: 'Styles reduce file size by 90%' },
      { id: 'B', text: 'Styles ensure visual consistency across the document and enable automatic Table of Contents generation' },
      { id: 'C', text: 'Styles prevent users from editing headings' },
      { id: 'D', text: 'Styles automatically convert the document to PDF' }
    ],
    correctAnswer: 'B',
    explanation: 'Styles enforce universal formatting consistency throughout a document and provide structural metadata that Word uses to automatically generate an interactive Table of Contents.',
    accentureTip: 'Heading Styles = Uniform formatting + Instant automated Table of Contents.'
  },
  {
    id: 'msoffice-4-06',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'Office Keyboard Shortcuts',
    question: 'What is the universal keyboard shortcut in Microsoft Office (Word, PowerPoint, Excel) to insert a Hyperlink?',
    options: [
      { id: 'A', text: 'Ctrl + H' },
      { id: 'B', text: 'Ctrl + K' },
      { id: 'C', text: 'Ctrl + L' },
      { id: 'D', text: 'Ctrl + Shift + H' }
    ],
    correctAnswer: 'B',
    explanation: '`Ctrl + K` is the universal shortcut across Microsoft Office products to open the Insert Hyperlink dialogue box. (`Ctrl + H` opens Replace).',
    accentureTip: 'Ctrl + K = HyperlinK. (Ctrl + H = Replace).'
  },
  {
    id: 'msoffice-4-07',
    tier: 4,
    tierName: 'Tier 4: MS Word & Document Processing',
    topic: 'MS Word Document Processing',
    question: 'What is the modern standard file extension for Microsoft Word documents created in Office 2007 and later?',
    options: [
      { id: 'A', text: '.doc' },
      { id: 'B', text: '.docx' },
      { id: 'C', text: '.dot' },
      { id: 'D', text: '.txt' }
    ],
    correctAnswer: 'B',
    explanation: '`.docx` is the modern XML-based document format introduced in Office 2007. `.doc` is the legacy binary format used prior to 2007.',
    accentureTip: 'Accenture Trio: Word = .docx, Excel = .xlsx, PowerPoint = .pptx.'
  },

  // ==========================================
  // TIER 5: MS POWERPOINT & OFFICE SHORTCUTS (7 Qs)
  // ==========================================
  {
    id: 'msoffice-5-01',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'MS PowerPoint Presentations',
    question: 'You want the company logo and confidentiality disclaimer to appear automatically on every slide of a 50-slide presentation. Which feature should you edit?',
    options: [
      { id: 'A', text: 'Slide Transition' },
      { id: 'B', text: 'Slide Master' },
      { id: 'C', text: 'Animation Pane' },
      { id: 'D', text: 'Slide Sorter' }
    ],
    correctAnswer: 'B',
    explanation: 'The `Slide Master` is the top slide in the hierarchy that controls the theme, layout, background, color, fonts, and universal positioning of elements (like logos) across all slides.',
    accentureTip: 'Distinction: Theme controls overall color/fonts; Slide Master controls slide-level structural layout & universal elements.'
  },
  {
    id: 'msoffice-5-02',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'MS PowerPoint Presentations',
    question: 'Which statement accurately distinguishes a Slide Transition from an Object Animation in PowerPoint?',
    options: [
      { id: 'A', text: 'Transitions apply to text and images; Animations apply to entire slides' },
      { id: 'B', text: 'Transitions occur between slides; Animations apply to individual objects within a slide' },
      { id: 'C', text: 'Transitions and animations are identical terms' },
      { id: 'D', text: 'Transitions only function when printing slides' }
    ],
    correctAnswer: 'B',
    explanation: 'A `Transition` is the visual motion effect that occurs when advancing from one slide to the next. An `Animation` is an effect applied to an object (bullet, graphic, shape) on a single slide.',
    accentureTip: 'Memory Trick: Transition -> Slide to Slide; Animation -> Object on Slide.'
  },
  {
    id: 'msoffice-5-03',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'MS PowerPoint Presentations',
    question: 'Which PowerPoint view displays miniature thumbnails of all slides, making it ideal for reorganizing slide order and setting transitions?',
    options: [
      { id: 'A', text: 'Normal View' },
      { id: 'B', text: 'Slide Sorter View' },
      { id: 'C', text: 'Reading View' },
      { id: 'D', text: 'Notes Page View' }
    ],
    correctAnswer: 'B',
    explanation: '`Slide Sorter View` displays all slides as horizontal thumbnails, allowing presenters to easily drag-and-drop slides to reorder them and apply universal timings/transitions.',
    accentureTip: 'Normal View is for editing individual slides; Slide Sorter is for rearranging the whole deck.'
  },
  {
    id: 'msoffice-5-04',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'Office Keyboard Shortcuts',
    question: 'What is the difference between pressing F5 and pressing Shift + F5 in PowerPoint?',
    options: [
      { id: 'A', text: 'F5 starts from the first slide; Shift + F5 starts from the current active slide' },
      { id: 'B', text: 'F5 starts from the current slide; Shift + F5 starts from the first slide' },
      { id: 'C', text: 'F5 duplicates the slide; Shift + F5 deletes the slide' },
      { id: 'D', text: 'Both shortcuts start the slideshow from slide 1' }
    ],
    correctAnswer: 'A',
    explanation: 'In PowerPoint, `F5` launches the Slide Show presentation mode from the very beginning (Slide 1). `Shift + F5` launches presentation mode starting directly from the currently selected slide.',
    accentureTip: 'F5 = Beginning. Shift + F5 = Current slide.'
  },
  {
    id: 'msoffice-5-05',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'MS PowerPoint Presentations',
    question: 'Which feature in Microsoft Office is specifically designed to convert textual bullet lists into professional graphical diagrams like process flows, organizational hierarchies, and cycles?',
    options: [
      { id: 'A', text: 'WordArt' },
      { id: 'B', text: 'SmartArt' },
      { id: 'C', text: 'ClipArt' },
      { id: 'D', text: 'Chart' }
    ],
    correctAnswer: 'B',
    explanation: '`SmartArt` graphics visually represent information and ideas (e.g., Process flows, Hierarchy org-charts, Cycles, Pyramids, and Venn diagrams).',
    accentureTip: 'Key Idea: SmartArt converts bullet text into structured visual relationship diagrams.'
  },
  {
    id: 'msoffice-5-06',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'Office Keyboard Shortcuts',
    question: 'Which shortcut key in PowerPoint creates a NEW slide, and which shortcut DUPLICATES the currently selected slide?',
    options: [
      { id: 'A', text: 'Ctrl + N for new slide; Ctrl + D for duplicate' },
      { id: 'B', text: 'Ctrl + M for new slide; Ctrl + D for duplicate' },
      { id: 'C', text: 'Ctrl + S for new slide; Ctrl + C for duplicate' },
      { id: 'D', text: 'Ctrl + Shift + N for both' }
    ],
    correctAnswer: 'B',
    explanation: 'In PowerPoint, `Ctrl + M` inserts a New Slide. `Ctrl + D` duplicates the selected slide or object. (`Ctrl + N` creates an entirely new presentation file).',
    accentureTip: 'Common Trap: Ctrl + N = New presentation; Ctrl + M = New slide inside current deck.'
  },
  {
    id: 'msoffice-5-07',
    tier: 5,
    tierName: 'Tier 5: MS PowerPoint & Office Shortcuts',
    topic: 'Office Keyboard Shortcuts',
    question: 'Which Excel shortcut key allows a user to immediately enter cell editing mode without double-clicking the mouse?',
    options: [
      { id: 'A', text: 'F1' },
      { id: 'B', text: 'F2' },
      { id: 'C', text: 'F4' },
      { id: 'D', text: 'F7' }
    ],
    correctAnswer: 'B',
    explanation: 'Pressing `F2` places the cursor directly inside the active cell for in-cell editing. (F4 repeats the last action or toggles $ absolute references; F7 runs spell check).',
    accentureTip: 'F2 = Edit active cell; F4 = Toggle absolute references ($A$1).'
  }
];

// ==========================================
// STUDY NOTES / HANDBOOK FOR MODAL
// ==========================================
export const msOfficeStudyGuides = [
  {
    tier: 1,
    title: 'Tier 1: Excel Fundamentals, Cell References & Basic Formulas',
    summary: 'Workbooks vs Worksheets, Row/Column coordinates, Relative vs Absolute vs Mixed cell referencing, and basic arithmetic formulas.',
    sections: [
      {
        heading: '1. Workbook vs. Worksheet & Coordinates',
        content: 'A **Workbook** is the complete Excel container file (e.g. `Sales.xlsx`). A **Worksheet** is an individual spreadsheet page/tab inside the workbook (e.g. `January`, `February`, `March`).\n\n- **Rows:** Horizontal and identified by numbers (1, 2, 3...).\n- **Columns:** Vertical and identified by letters (A, B, C...).\n- **Cell:** Intersection of a row and column (e.g. `B5` = Column B + Row 5).\n\n⚠️ **Exam Trap:** Workbook ≠ Worksheet. Workbook = Entire file; Worksheet = Individual sheet tab.'
      },
      {
        heading: '2. Cell Reference Types: Relative, Absolute, Mixed',
        content: 'A cell reference tells Excel which cell contains the data.\n\n1. **Relative Reference (`A1`):** Both column and row change relative to destination when copied. (Copying `=A1+B1` down one row becomes `=A2+B2`).\n2. **Absolute Reference (`$A$1`):** Both column and row are locked. Copying `=$A$1` anywhere remains strictly `=$A$1`.\n3. **Mixed Reference (`$A1` or `A$1`):** Locks either column or row:\n   - `$A1`: Column A is locked; Row 1 changes.\n   - `A$1`: Column A changes; Row 1 is locked.\n\n⭐ **Memory Trick:** `$` = LOCK. Whichever component has `$` in front is locked.'
      },
      {
        heading: '3. Excel Arithmetic Operators & AutoSum',
        content: '* `+` Addition (`=A1+B1`)\n* `-` Subtraction (`=A1-B1`)\n* `*` Multiplication (`=A1*B1`)\n* `/` Division (`=A1/B1`)\n* `^` Exponentiation / Power (`=A1^2`)\n* `%` Percentage (`=A1*10%`)\n\n⚡ **AutoSum Shortcut:** Pressing `Alt + =` automatically inserts `=SUM()` over adjacent numerical ranges.'
      },
      {
        heading: '4. SUM and AVERAGE Functions',
        content: '- `=SUM(range)`: Adds all numbers in range (e.g. `=SUM(A1:A5)` for 10, 20, 30, 40, 50 = 150).\n- `=AVERAGE(range)`: Calculates arithmetic mean = Sum / Count (e.g. `=AVERAGE(10, 20, 30, 40)` = 100 / 4 = 25).'
      }
    ]
  },
  {
    tier: 2,
    title: 'Tier 2: Excel Logic, Counting & Conditional Math',
    summary: 'COUNT vs COUNTA, COUNTIF, SUMIF, IF condition logic, Nested IF, AND, OR, and NOT logical operations.',
    sections: [
      {
        heading: '1. COUNT vs. COUNTA (Accenture Classic Trap)',
        content: '- **`COUNT(range)`:** Counts ONLY cells containing numeric numbers, dates, and formulas returning numbers. Ignores text and blanks.\n- **`COUNTA(range)`:** Counts all non-empty cells (numbers, text strings, errors, symbols). Only ignores completely blank cells.\n\n*Example:* Range containing `[10, "Hello", 20, Blank, 30]`:\n- `COUNT` returns **3** (10, 20, 30)\n- `COUNTA` returns **4** (10, "Hello", 20, 30)'
      },
      {
        heading: '2. Conditional Counting & Summation: COUNTIF vs. SUMIF',
        content: '- **`COUNTIF(range, criteria)`:** Counts matching cells. (e.g. `=COUNTIF(A1:A10, ">=50")` or `=COUNTIF(B1:B10, "Pass")`).\n- **`SUMIF(range, criteria, sum_range)`:** Adds values from `sum_range` corresponding to cells meeting `criteria`. (e.g. `=SUMIF(DepartmentRange, "IT", SalaryRange)` totals salaries for IT personnel).'
      },
      {
        heading: '3. IF & Nested IF Logic',
        content: 'Syntax: `=IF(condition, value_if_true, value_if_false)`\n\n*Example:* `=IF(A1>=40, "Pass", "Fail")`. If A1=75, evaluates to "Pass".\n\n**Nested IF:** An IF inside another IF for multi-tier criteria (e.g., Grades: 90+ A, 75+ B, 60+ C, else D).'
      },
      {
        heading: '4. Boolean Logic: AND, OR, NOT',
        content: '- **`AND(cond1, cond2...)`:** Returns TRUE only if **ALL** conditions are TRUE. (e.g. `=AND(TRUE, FALSE, TRUE)` = FALSE).\n- **`OR(cond1, cond2...)`:** Returns TRUE if **AT LEAST ONE** condition is TRUE. (e.g. `=OR(FALSE, FALSE, TRUE)` = TRUE).\n- **`NOT(logical)`:** Inverts the result (`NOT(TRUE)` = FALSE; `NOT(FALSE)` = TRUE).'
      }
    ]
  },
  {
    tier: 3,
    title: 'Tier 3: Excel Lookups & Data Management',
    summary: 'VLOOKUP mechanics, XLOOKUP modern advantages, PivotTable summarization, Sorting, Filtering, Freeze Panes, and Data Validation.',
    sections: [
      {
        heading: '1. VLOOKUP Mechanics & Exact Match (FALSE)',
        content: 'Syntax: `=VLOOKUP(lookup_value, table_array, col_index_num, range_lookup)`\n\n- Searches the first (leftmost) column for `lookup_value`.\n- Returns value from specified column index (`col_index_num`).\n- `range_lookup`: **FALSE** = Exact match (default for code/ID lookup); **TRUE** = Approximate match.'
      },
      {
        heading: '2. VLOOKUP vs. XLOOKUP',
        content: '`=XLOOKUP(lookup_value, lookup_array, return_array)`\n\n*Key XLOOKUP Advantages:*\n- Lookups work in **any direction** (both left-to-right and right-to-left).\n- Defaults to **exact match** (no FALSE needed).\n- Does not break when columns are inserted or deleted.\n- Direct return range instead of column index numbers.'
      },
      {
        heading: '3. PivotTables & Large Dataset Summarization',
        content: 'A **PivotTable** summarizes, analyzes, and reorganizes large amounts of data without writing formulas. Features drag-and-drop aggregation (Sum, Count, Average, Grouping, Filtering by department/region).'
      },
      {
        heading: '4. Freeze Panes, Data Validation & Conditional Formatting',
        content: '- **Freeze Panes:** Keeps top header row or left columns visible while scrolling down large sheets.\n- **Data Validation:** Controls allowed user input (e.g. Dropdown list restricting input to IT, HR, Finance; integer ranges 1-100).\n- **Conditional Formatting:** Automatically changes cell appearance (colors, data bars) based on values (e.g. Sales > ₹50,000).'
      }
    ]
  },
  {
    tier: 4,
    title: 'Tier 4: MS Word Document Processing & Automation',
    summary: 'Paragraph alignment, Styles, Page vs Section Break distinctions, Mail Merge automation, Track Changes, and file extensions.',
    sections: [
      {
        heading: '1. Text Alignments & Word Shortcuts',
        content: '- **Left (`Ctrl + L`):** Text starts from left margin.\n- **Center (`Ctrl + E`):** Text centered on page.\n- **Right (`Ctrl + R`):** Text aligned to right margin.\n- **Justify (`Ctrl + J`):** Aligns text evenly to both left and right margins.'
      },
      {
        heading: '2. Page Break vs. Section Break (Crucial Distinction)',
        content: '- **Page Break:** Starts text on a new page within the same section.\n- **Section Break:** Divides document into separate sections with independent formatting.\n\n*Scenario:* To make page 10 Landscape while pages 1-9 and 11-20 are Portrait, you MUST use a **Section Break** (not a Page Break).'
      },
      {
        heading: '3. Mail Merge Automation',
        content: 'Used to generate multiple personalized documents from a single template and a data source (Excel list/database).\n\n`Main Document + Data Source -> Multiple Personalized Documents`\n\nIdeal for printing 500 personalized offer letters, envelopes, or certificates.'
      },
      {
        heading: '4. Track Changes vs. Comments',
        content: '- **Track Changes:** Actively records insertions, deletions, and formatting modifications for review and acceptance/rejection.\n- **Comments:** Adds marginal notes or feedback questions without modifying document text.'
      }
    ]
  },
  {
    tier: 5,
    title: 'Tier 5: MS PowerPoint & Presentation Mastery',
    summary: 'Slide Master vs Themes, Transitions vs Animations, Slide Show hotkeys (F5 vs Shift+F5), Views, SmartArt, and universal Office shortcuts.',
    sections: [
      {
        heading: '1. Slide Master vs. Themes',
        content: '- **Theme:** Overall visual styling palette (colors, fonts, background effects).\n- **Slide Master:** Controls common slide-level structural layouts. Adding a company logo or confidentiality footer to the Slide Master propagates it automatically to every slide.'
      },
      {
        heading: '2. Slide Transitions vs. Object Animations',
        content: '- **Transition:** Visual motion effect that occurs **between slides** (Slide 1 -> Fade -> Slide 2).\n- **Animation:** Motion effect applied to **individual objects on a slide** (Text fly-in, Image zoom, Shape entrance).'
      },
      {
        heading: '3. Slide Show & View Hotkeys',
        content: '- **`F5`:** Starts slideshow from the very beginning (Slide 1).\n- **`Shift + F5`:** Starts slideshow from current active slide.\n- **`Slide Sorter View`:** Miniature thumbnails for reordering and inspecting transition timing.\n- **`SmartArt`:** Converts bullet lists into structured diagrams (Process, Hierarchy, Cycle).'
      },
      {
        heading: '4. Universal Office Shortcuts Reference',
        content: '* `Ctrl + K`: Universal Insert Hyperlink\n* `Ctrl + F` / `Ctrl + H`: Find / Replace\n* `Ctrl + M`: New slide in PowerPoint\n* `Ctrl + D`: Duplicate selected object/slide\n* `F2`: Edit active cell in Excel\n* `Alt + =`: AutoSum in Excel'
      }
    ]
  }
];

// ==========================================
// DETAILED OPTION-BY-OPTION BREAKDOWN MAP
// ==========================================
export const msOfficeOptionBreakdownMap = {
  'msoffice-1-01': {
    A: "A1 is a Relative reference. Both row and column can change when copied.",
    B: "$A$1 is an Absolute reference. Both column A and row 1 are locked with $.",
    C: "$A1 is a Mixed reference. Column A is fixed ($A), but row 1 can change.",
    D: "A$1 is a Mixed reference. Row 1 is fixed ($1), but column A can change.",
    memoryPill: "$ means locked"
  },
  'msoffice-1-02': {
    A: "Would only happen if the cell references were absolute (=$A$1+$B$1).",
    B: "=A2+B2 is correct: A1 and B1 are relative references, so both row numbers increase by 1.",
    C: "This represents an absolute reference formula.",
    D: "Both references move together because both are relative, not just B1.",
    memoryPill: "Relative references adjust row indices when dragged down"
  },
  'msoffice-1-03': {
    A: "Locking both column and row requires absolute reference syntax ($A$1).",
    B: "Column A is locked ($ prefix), while row 1 changes dynamically when copied vertically.",
    C: "Row locked with column changing corresponds to A$1, not $A1.",
    D: "Neither locked corresponds to relative reference A1.",
    memoryPill: "$A1 = Column locked, Row changes"
  },
  'msoffice-1-04': {
    A: "Inverted hierarchy: workbooks contain worksheets, not the other way around.",
    B: "A workbook is the complete Excel file (.xlsx), containing multiple worksheet tabs.",
    C: "Workbooks and worksheets are distinct: workbook = file, worksheet = sheet tab.",
    D: "Both workbooks and worksheets support formulas, charts, and macros.",
    memoryPill: "Workbook = Entire file | Worksheet = Sheet inside"
  },
  'msoffice-1-05': {
    A: "AVERAGE() calculates arithmetic mean, not total sum.",
    B: "COUNT() tallies the count of numeric cells.",
    C: "SUM() calculates the total of all numeric values across the range.",
    D: "TOTAL() is not a standard built-in Excel function for this purpose.",
    memoryPill: "SUM adds; AVERAGE divides; COUNT tallies"
  },
  'msoffice-1-06': {
    A: "20 is an incorrect average calculation.",
    B: "25 is correct: (10 + 20 + 30 + 40) / 4 = 100 / 4 = 25.",
    C: "30 is not the arithmetic mean.",
    D: "100 is the SUM of the values, not the average.",
    memoryPill: "Average = Sum (100) / Count (4) = 25"
  },
  'msoffice-1-07': {
    A: "Ctrl + S saves the workbook.",
    B: "Alt + = is the official Excel shortcut to insert AutoSum.",
    C: "Ctrl + Shift + S is not the AutoSum shortcut.",
    D: "F4 repeats last action or toggles $ reference types.",
    memoryPill: "Alt + = instantly sums adjacent cells"
  },
  'msoffice-2-01': {
    A: "COUNTA() counts all non-empty cells (numbers, text, symbols, errors).",
    B: "COUNT() counts ONLY cells containing numeric values.",
    C: "COUNTIF() counts cells satisfying a specified condition.",
    D: "COUNTBLANK() counts empty cells in the range.",
    memoryPill: "COUNT = Numbers only | COUNTA = Non-empty cells"
  },
  'msoffice-2-02': {
    A: "3 is the COUNT result (only numeric cells: 10, 20, 30).",
    B: "4 is correct: Four cells contain non-empty data (10, Hello, 20, 30). Blank cell A4 is excluded.",
    C: "5 assumes all cells are counted including the blank cell.",
    D: "2 is an incorrect count.",
    memoryPill: "COUNTA counts 'Hello' as non-empty; only blank A4 is omitted"
  },
  'msoffice-2-03': {
    A: "SUMIF adds values; it does not count matching occurrences.",
    B: "COUNT only counts numbers, not text strings like 'IT'.",
    C: "COUNTIF(range, criteria) counts cells matching a condition (e.g. =COUNTIF(B1:B10, 'IT')).",
    D: "VLOOKUP retrieves values rather than counting matching records.",
    memoryPill: "COUNTIF counts occurrences; SUMIF adds numeric values"
  },
  'msoffice-2-04': {
    A: "COUNTIF counts the number of IT employees, not their total salaries.",
    B: "SUM syntax cannot filter by department criteria.",
    C: "=SUMIF(B2:B5, 'IT', C2:C5) tests department in B and sums corresponding salaries in C.",
    D: "AVERAGEIF calculates mean salary, not total salary sum.",
    memoryPill: "SUMIF(range, criteria, sum_range)"
  },
  'msoffice-2-05': {
    A: "Inverted order: condition must come first before true and false values.",
    B: "=IF(condition, value_if_true, value_if_false) is the correct standard Excel syntax.",
    C: "Syntax for COUNTIF, not logical IF.",
    D: "Syntax structure for VLOOKUP, not IF.",
    memoryPill: "IF: Condition -> True result -> False result"
  },
  'msoffice-2-06': {
    A: "40 is the test threshold, not the return value.",
    B: "TRUE is the condition evaluation, but the formula explicitly specifies return text.",
    C: "'Pass' is returned because 75 >= 40 evaluates to TRUE.",
    D: "'Fail' is only returned if A1 is strictly less than 40.",
    memoryPill: "75 >= 40 is TRUE, so it returns 'Pass'"
  },
  'msoffice-2-07': {
    A: "AND requires all conditions to be TRUE, but one condition is FALSE.",
    B: "FALSE and TRUE: AND returns FALSE because of the false condition; OR returns TRUE because at least one condition is TRUE.",
    C: "Inverted evaluation.",
    D: "OR returns TRUE because one condition is satisfied.",
    memoryPill: "AND -> All must be true; OR -> Any one can be true"
  },
  'msoffice-3-01': {
    A: "102 is the lookup value being searched.",
    B: "VLOOKUP does not take a number of rows parameter.",
    C: "3 is the column index number, instructing Excel to return data from the 3rd column (Column C).",
    D: "FALSE specifies exact matching, not 3.",
    memoryPill: "3rd argument = col_index_num"
  },
  'msoffice-3-02': {
    A: "TRUE (or omitted) is traditionally used for approximate matching.",
    B: "FALSE specifies an exact match lookup.",
    C: "VLOOKUP does not support native reverse lookups.",
    D: "FALSE does not make VLOOKUP case-sensitive.",
    memoryPill: "FALSE = Exact match; TRUE = Approximate match"
  },
  'msoffice-3-03': {
    A: "XLOOKUP supports both numeric and text lookups seamlessly.",
    B: "XLOOKUP defaults to exact match and can return data in any direction (left or right).",
    C: "XLOOKUP does not require sorting.",
    D: "XLOOKUP eliminates column index numbers by using direct return ranges.",
    memoryPill: "XLOOKUP looks left/right and defaults to exact match"
  },
  'msoffice-3-04': {
    A: "WordArt is a decorative text formatting feature.",
    B: "PivotTables are designed specifically to summarize, analyze, and aggregate large datasets.",
    C: "Freeze Panes only locks row/column visibility during scrolling.",
    D: "Mail Merge is a Word feature for personalized document generation.",
    memoryPill: "PivotTable = Summarize, analyze and reorganize large datasets"
  },
  'msoffice-3-05': {
    A: "Split divides the worksheet window into multiple scrollable panes.",
    B: "Freeze Panes keeps selected rows/columns locked in view while scrolling.",
    C: "Filter hides non-matching rows but does not lock scrolling position.",
    D: "Conditional Formatting applies styles based on cell values.",
    memoryPill: "Freeze Panes keeps header row visible while scrolling"
  },
  'msoffice-3-06': {
    A: "Conditional Formatting alters visual styles, not user input permissions.",
    B: "Data Validation controls allowed user input and enables dropdown selection lists.",
    C: "Text to Columns splits delimited text across adjacent columns.",
    D: "Sort & Filter reorders or displays matching records.",
    memoryPill: "Data Validation = Controls allowed input & dropdowns"
  },
  'msoffice-3-07': {
    A: "Data Validation restricts user input values.",
    B: "Conditional Formatting dynamically highlights cells when conditions/rules are met.",
    C: "AutoFormat applies static table styles.",
    D: "Flash Fill automatically predicts and fills data patterns.",
    memoryPill: "Conditional Formatting = Appearance depends on value"
  },
  'msoffice-4-01': {
    A: "Track Changes logs edits made to document text.",
    B: "Mail Merge combines a template with a data source to generate personalized letters.",
    C: "WordArt generates decorative graphical text.",
    D: "AutoCorrect fixes common spelling and typing mistakes.",
    memoryPill: "Mail Merge = Main Document + Data Source -> Personalized Letters"
  },
  'msoffice-4-02': {
    A: "Ctrl + C is reserved for Copy.",
    B: "Ctrl + E centers text horizontally between page margins.",
    C: "Ctrl + J justifies text evenly across both margins.",
    D: "Ctrl + M increases paragraph indent.",
    memoryPill: "L -> Left | E -> cEnter | R -> Right | J -> Justify"
  },
  'msoffice-4-03': {
    A: "Page Break starts a new page but retains identical section orientation (Portrait).",
    B: "Section Break divides the document into independent sections with unique orientations and margins.",
    C: "Line Break (Shift + Enter) moves to the next line within the same paragraph.",
    D: "Paragraph Break (Enter) creates a new paragraph.",
    memoryPill: "Page Break = New page | Section Break = New section + independent layout"
  },
  'msoffice-4-04': {
    A: "Comments provide feedback notes without modifying or tracking document text.",
    B: "Track Changes actively logs insertions, deletions, and formatting revisions.",
    C: "Document Inspector checks for hidden metadata and personal information.",
    D: "AutoRecover saves backup copies in case of unexpected crashes.",
    memoryPill: "Track Changes -> Records edits | Comments -> Adds feedback"
  },
  'msoffice-4-05': {
    A: "Styles do not affect document compression or file size.",
    B: "Styles ensure visual consistency across headings and enable automated Table of Contents creation.",
    C: "Styles do not prevent text editing.",
    D: "Styles have no relationship to PDF conversion.",
    memoryPill: "Heading Styles = Consistency + Automatic Table of Contents"
  },
  'msoffice-4-06': {
    A: "Ctrl + H opens the Find and Replace dialog.",
    B: "Ctrl + K is the universal shortcut to insert a Hyperlink across Word, Excel, and PowerPoint.",
    C: "Ctrl + L aligns text to the left in Word.",
    D: "Ctrl + Shift + H is not a standard Office shortcut.",
    memoryPill: "Ctrl + K = Hyperlink | Ctrl + H = Replace"
  },
  'msoffice-4-07': {
    A: ".doc is the legacy pre-2007 Word binary format.",
    B: ".docx is the modern OpenXML format used from Office 2007 onwards.",
    C: ".dot is a Word document template format.",
    D: ".txt is unformatted plain text.",
    memoryPill: ".docx -> Word | .xlsx -> Excel | .pptx -> PowerPoint"
  },
  'msoffice-5-01': {
    A: "Slide Transition controls visual motion when switching slides.",
    B: "Slide Master controls universal background, layout, and common elements (logos) across all slides.",
    C: "Animation Pane controls object-level timing on a single slide.",
    D: "Slide Sorter arranges thumbnails of slides.",
    memoryPill: "Logo on all slides = Slide Master"
  },
  'msoffice-5-02': {
    A: "Inverted definition.",
    B: "Transitions occur between slides; Animations apply to individual objects on a slide.",
    C: "Transitions and animations serve distinct purposes.",
    D: "Transitions display in presentation mode, not during printing.",
    memoryPill: "Transition -> Between slides | Animation -> Objects on slide"
  },
  'msoffice-5-03': {
    A: "Normal View is for editing individual slides.",
    B: "Slide Sorter View displays thumbnails for reordering and inspecting transition timing.",
    C: "Reading View displays presentation in an app window.",
    D: "Notes Page View shows slide with speaker notes.",
    memoryPill: "Slide Sorter = Thumbnail view for reorganizing slides"
  },
  'msoffice-5-04': {
    A: "F5 starts the presentation from Slide 1; Shift + F5 starts from the current active slide.",
    B: "Inverted shortcut roles.",
    C: "Ctrl + D duplicates slides, not F5.",
    D: "Shift + F5 starts from current slide, not beginning.",
    memoryPill: "F5 = From beginning | Shift + F5 = From current slide"
  },
  'msoffice-5-05': {
    A: "WordArt creates decorative text.",
    B: "SmartArt converts bulleted text into visual diagrams (Process, Hierarchy, Cycle).",
    C: "ClipArt is a collection of pre-made raster illustrations.",
    D: "Charts represent numerical data graphs.",
    memoryPill: "SmartArt converts text into structured visual diagrams"
  },
  'msoffice-5-06': {
    A: "Ctrl + N creates an entirely new presentation file.",
    B: "Ctrl + M inserts a New Slide; Ctrl + D duplicates the selected slide.",
    C: "Ctrl + S saves the presentation; Ctrl + C copies.",
    D: "Ctrl + Shift + N is not the slide shortcut.",
    memoryPill: "Ctrl + M = New slide | Ctrl + D = Duplicate slide"
  },
  'msoffice-5-07': {
    A: "F1 opens Excel Help documentation.",
    B: "F2 activates in-cell editing mode without mouse clicks.",
    C: "F4 repeats last action or toggles $ absolute references.",
    D: "F7 runs spelling check.",
    memoryPill: "F2 = Edit active cell | F4 = Toggle $ absolute references"
  }
};

// Option Breakdown Generator for each question
export function getMsOfficeOptionBreakdown(questionId) {
  return msOfficeOptionBreakdownMap[questionId] || null;
}

// Filter questions by tier and topic
export function filterMsOfficeQuestions({ tier = 'all', topic = 'all' }) {
  return msOfficeQuestions.filter((q) => {
    const matchesTier = tier === 'all' || q.tier === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    return matchesTier && matchesTopic;
  });
}

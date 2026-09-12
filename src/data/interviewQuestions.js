// src/data/interviewQuestions.js
// Interactive Accenture interview questions with "Think Yourself", "Show Answer", and "Key Points"

export const interviewQuestions = [
  {
    id: 'int-01',
    category: 'Java Interview',
    role: 'Associate Software Engineer (ASE)',
    question: 'Why is String immutable in Java, and what are the benefits?',
    thinkPrompt: 'Consider memory management (String Pool), security (network/database credentials), multithreading, and hash code caching.',
    answer: `Strings are immutable in Java for four primary architectural reasons:
1. **String Constant Pool (Memory Efficiency)**: Since Strings represent a massive percentage of heap memory, the String Pool allows identical literals to share memory addresses. If strings were mutable, changing one would inadvertently corrupt references in other variables.
2. **Security**: Strings are ubiquitously passed as database URLs, usernames, passwords, file paths, and network socket addresses. Immutability guarantees malicious code cannot alter connection targets after authorization checks.
3. **Thread Safety**: Immutable objects are inherently thread-safe without any synchronized locks, allowing concurrent access across worker threads safely.
4. **HashCode Caching**: The hash code of a String is computed once upon initialization and cached. This makes HashMap lookups exceptionally fast.`,
    keyPoints: [
      'Mention String Pool and heap memory optimization',
      'Explain security implications (passwords, socket connections)',
      'Explain thread safety without synchronization overhead',
      'Mention hash code caching in HashMaps'
    ]
  },
  {
    id: 'int-02',
    category: 'Java Interview',
    role: 'ASE / FSE',
    question: 'What is the difference between Comparable and Comparator in Java?',
    thinkPrompt: 'Think about where the sorting logic is defined (inside the class vs separate class) and how many sorting criteria can be supported.',
    answer: `**Comparable** provides a single *natural ordering* for an object:
- Defined in the same class implementing \`Comparable<T>\`.
- Overrides \`compareTo(T o)\`.
- Modifies the original class code.
- Found in \`java.lang\`.

**Comparator** provides *custom or multiple sorting sequences*:
- Implemented as a separate class or inline lambda \`Comparator<T>\`.
- Overrides \`compare(T o1, T o2)\`.
- Does not modify the underlying domain model.
- Found in \`java.util\`.
- Supports convenient chaining like \`Comparator.comparing(...).thenComparing(...)\`.`,
    keyPoints: [
      'Comparable = natural ordering (compareTo in same class)',
      'Comparator = multiple custom orderings (compare in separate class or lambda)',
      'java.lang vs java.util packages',
      'Collections.sort(list) vs Collections.sort(list, comparator)'
    ]
  },
  {
    id: 'int-03',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is the fundamental difference between WHERE and HAVING in SQL?',
    thinkPrompt: 'Recall SQL query execution order: which clause executes before aggregation, and which clause filters aggregated groups?',
    answer: `The core distinctions between WHERE and HAVING are:
1. **Execution Timing**: \`WHERE\` executes **before** the \`GROUP BY\` clause during initial table row filtering. \`HAVING\` executes **after** \`GROUP BY\` on the aggregated result buckets.
2. **Aggregate Functions**: Aggregate functions (\`SUM()\`, \`AVG()\`, \`COUNT()\`, \`MAX()\`) cannot be placed inside a \`WHERE\` clause because rows have not yet been grouped. They are fully valid inside \`HAVING\`.
3. **Performance**: It is best practice to filter individual row outliers in \`WHERE\` first to reduce the volume of data entering the grouping engine, before using \`HAVING\` for group-level conditions.`,
    keyPoints: [
      'WHERE filters rows before grouping; HAVING filters groups after grouping',
      'Aggregates (COUNT, SUM) are allowed in HAVING, forbidden in WHERE',
      'WHERE works with SELECT, UPDATE, DELETE; HAVING only with SELECT',
      'Best practice: combine both to optimize execution performance'
    ]
  },
  {
    id: 'int-04',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'Explain the difference between Primary Key, Unique Key, and Foreign Key.',
    thinkPrompt: 'Focus on NULL tolerance, number of keys allowed per table, and referential integrity.',
    answer: `1. **Primary Key**: Uniquely identifies each record in a table. Only **one** primary key exists per table, and it **cannot contain NULL values**. It automatically creates a clustered index in most RDBMS.
2. **Unique Key**: Ensures all values in a column are distinct. A table can have **multiple** unique keys, and it **allows NULL values** (one or more depending on database engine standard).
3. **Foreign Key**: A column or combination of columns that references the Primary Key (or Unique Key) of another table, enforcing **referential integrity** between related entities.`,
    keyPoints: [
      'Primary Key: 1 per table, strictly NO NULLs',
      'Unique Key: Multiple allowed, NULLs permitted',
      'Foreign Key: Establishes parent-child relationships and referential integrity'
    ]
  },
  {
    id: 'int-05',
    category: 'DSA Interview',
    role: 'ASE / FSE',
    question: 'How does a HashMap work internally in Java?',
    thinkPrompt: 'Think about buckets, hash functions, index calculation, collisions, LinkedList, and TreeNode (Red-Black Tree in Java 8).',
    answer: `A Java HashMap works on the principle of **hashing**:
1. **Underlying Structure**: It uses an array of \`Node<K,V>\` (buckets), with default initial capacity 16 and load factor 0.75.
2. **Put Operation**:
   - Calculates \`hash = key.hashCode()\` and applies internal bit-mixing.
   - Calculates bucket index via \`index = (n - 1) & hash\`.
   - If bucket is empty, a new node is inserted.
   - If collision occurs, it checks if the key matches via \`.equals()\`. If matching, it overwrites the value; if different, it appends to a linked list.
3. **Java 8 Treeification**: When the number of colliding elements in a single bucket reaches **8** and array capacity >= 64, the linked list converts into a **Red-Black Tree**, improving worst-case search time from **O(N)** to **O(log N)**.
4. **Resizing**: When size exceeds \`capacity * loadFactor\` (12 for default 16), capacity doubles to 32 and elements are rehashed.`,
    keyPoints: [
      'Array of buckets with index = (n - 1) & hash',
      'HashCode for bucket index, equals() for exact key match',
      'Collision handling: LinkedList converts to Red-Black Tree at threshold 8 (Java 8+)',
      'Load factor 0.75 triggers 2x capacity resize'
    ]
  },
  {
    id: 'int-06',
    category: 'Technical Interview',
    role: 'ASE',
    question: 'Explain the 4 Pillars of Object-Oriented Programming (OOP) with real-world examples.',
    thinkPrompt: 'Encapsulation, Abstraction, Inheritance, Polymorphism. How would you explain them to a client or team lead?',
    answer: `1. **Encapsulation**: Bundling data (variables) and methods operating on that data into a single unit (class), restricting direct access via private modifiers and public getters/setters. *Example: A Bank Account where balance is private and only modified through deposit() with verification.*
2. **Abstraction**: Hiding internal implementation complexity and exposing only necessary functionality to the user. *Example: Driving a car using the accelerator and steering wheel without needing to know fuel-injection mechanics.*
3. **Inheritance**: Mechanism where a child class acquires properties and behaviors of a parent class, promoting code reuse. *Example: ElectricCar extends Car.*
4. **Polymorphism**: Ability for an entity to take multiple forms:
   - Compile-time (Method Overloading): Same method name, different signatures.
   - Run-time (Method Overriding): Child class provides specific implementation of parent method invoked dynamically.`,
    keyPoints: [
      'Encapsulation: Data hiding + getters/setters',
      'Abstraction: Abstract classes & interfaces hiding implementation details',
      'Inheritance: Code reusability ("is-a" relationship)',
      'Polymorphism: Overloading (compile-time) vs Overriding (runtime)'
    ]
  },
  {
    id: 'int-07',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '1. Tell me about yourself.',
    thinkPrompt: 'Keep it under 90 seconds. Structure: Education -> Technical Skills -> Major Project -> Hobbies/Soft Skills -> Why you are excited to join.',
    answer: `*"Hello sir/ma'am, thank you for giving me this opportunity.*

*My name is Abhishek, and I am currently completing my B.Tech in Computer Science from [Your College/University] with a CGPA of [Your CGPA].*

*During my engineering journey, I developed a strong interest in software development and problem-solving. My core technical skills include Java, JavaScript, Data Structures, and SQL. I have built practical projects like an E-Commerce Platform and a Student Portal, where I worked on both frontend design and database integration.*

*Apart from academics, I actively participate in coding hackathons and enjoy collaborating in teams. I am a quick learner, highly adaptable, and very excited to start my professional career with a global leader like Accenture."*`,
    keyPoints: [
      'Start with a polite greeting and your academic background',
      'Highlight 2-3 core skills and 1 major project',
      'Mention team spirit and adaptability',
      'Keep your introduction natural, confident, and under 90 seconds'
    ]
  },
  {
    id: 'int-08',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '2. Tell me about your project.',
    thinkPrompt: 'Use a simple 4-step structure: What the project does -> Technologies used -> Your exact role -> The final outcome and learning.',
    answer: `*"Sure! During my final year, I built an Online Appointment and Service Management System.*

- **Problem & Purpose**: The goal was to eliminate manual paperwork and allow users to book verified appointments in real-time.
- **Tech Stack Used**: I used React and CSS for the responsive frontend, Node.js for backend REST APIs, and MySQL for database storage.
- **My Individual Role**: I was responsible for designing the database schema, user authentication, and the real-time slot booking validation.
- **Key Challenge & Solution**: One challenge was preventing duplicate bookings when two users clicked the same time slot simultaneously. I resolved this by applying database transaction locks and status checks.
- **Outcome**: The final web app was successfully demonstrated in our department, and it taught me how full-stack applications function in production."*`,
    keyPoints: [
      'State the problem and solution in simple words',
      'Clearly explain YOUR individual contribution',
      'Mention one challenge and how you solved it',
      'Demonstrate practical software engineering understanding'
    ]
  },
  {
    id: 'int-09',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '3. What is your least favourite subject and why?',
    thinkPrompt: 'Never pick core programming subjects. Pick a heavily theoretical or non-IT subject (like Chemistry or Drawing), and show how you still worked hard to pass it with good grades.',
    answer: `*"To be honest, my least favourite subject in engineering was Engineering Chemistry [or Engineering Drawing].*

*Because I have always loved logic, programming, and building software where you see immediate outputs, memorizing chemical equations and theoretical reaction mechanisms was challenging for me.*

*However, I understood that every subject in engineering teaches discipline and problem-solving. So instead of ignoring it, I formed a study group with my classmates, prepared summary formula sheets, and practiced previous exam papers regularly. Because of that consistent effort, I scored an 'A' grade in that subject as well. It taught me that I can deliver good results even in tasks that are outside my comfort zone."*`,
    keyPoints: [
      'Never criticize core computer science subjects (like Java, DSA, or DBMS)',
      'Pick a non-software or theoretical subject',
      'Always conclude with how you worked hard and achieved good grades regardless',
      'Shows discipline and a positive work ethic'
    ]
  },
  {
    id: 'int-10',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '4. What is your biggest failure?',
    thinkPrompt: 'Pick a genuine learning experience. Take responsibility without blaming others, and focus 70% of your answer on the lessons learned and how you improved.',
    answer: `*"During my second year of college, my team and I entered our first 24-hour hackathon. We were so excited that we planned too many complex features for our web application.*

*Because we did not manage our time properly or create a clear milestone schedule, our final code had integration bugs and we could not complete the demo on time. We were not selected in the top round.*

*It was disappointing, but it taught me two big lessons: the importance of strict time management and building a working Minimum Viable Product (MVP) before adding extra features.*

*In our next college project, we prioritized the core features first, completed our work three hours before the deadline, and earned top marks. That failure made me a much better planner."*`,
    keyPoints: [
      'Never say "I have never failed" (it sounds unrealistic)',
      'Take personal responsibility rather than blaming teammates',
      'Focus heavily on the positive takeaway and how you improved',
      'Emphasize planning and time management'
    ]
  },
  {
    id: 'int-11',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '5. Tell me about a time where you worked in a team?',
    thinkPrompt: 'Accenture values collaboration. Highlight how you communicated, handled differences of opinion respectfully, and achieved a common goal.',
    answer: `*"During our third-year academic project, four of us worked together to build an inventory tracking app. At the beginning, we had a disagreement regarding which database to choose—two team members preferred MongoDB, while two favored MySQL.*

*Instead of arguing, I suggested that we list down our project requirements on paper. Since our data had clear table relationships and fixed schemas, we all mutually agreed that MySQL was the better technical choice.*

*We then divided the tasks based on individual strengths: two focused on the UI components, and two of us worked on backend APIs and database queries. We held quick 10-minute catch-ups every day to test integrations. Because of clear communication and mutual support, we completed the project a week before the deadline with top grades."*`,
    keyPoints: [
      'Mention how conflict was resolved constructively and calmly',
      'Show that you respect other viewpoints and focus on data/requirements',
      'Highlight fair task delegation and regular communication',
      'End with on-time team delivery'
    ]
  },
  {
    id: 'int-12',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '6. Do you have any certifications?',
    thinkPrompt: 'Mention certifications in Java, Cloud/AWS, SQL, Web Dev, or coding badges (HackerRank/LeetCode). Explain what skills you gained.',
    answer: `*"Yes! I have completed a certification in [e.g., Core Java Programming / AWS Cloud Practitioner / Full-Stack Web Development] through [e.g., Coursera / Udemy / Oracle Academy].*

*Through this course, I gained hands-on practical knowledge of object-oriented design, exception handling, and writing clean, maintainable code.*

*In addition to course certifications, I actively practice problem-solving on platforms like HackerRank and LeetCode, where I have earned [e.g., a 5-Star Badge in Java / Problem Solving]. Continuous certification helps me stay disciplined and up-to-date with current industry standards."*`,
    keyPoints: [
      'Name the certification and platform clearly',
      'Highlight 2-3 specific technical skills you learned',
      'Mention coding badges or problem-solving milestones if applicable',
      'Shows enthusiasm for self-learning and growth'
    ]
  },
  {
    id: 'int-13',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '7. How do you handle stress and pressure?',
    thinkPrompt: 'Show emotional maturity: Staying calm -> Prioritizing tasks -> Taking structured action -> Recharging through healthy habits.',
    answer: `*"I handle stress by staying calm and breaking down big problems into smaller, actionable steps.*

*Whenever I face high pressure—such as during semester exams or tight project deadlines—I avoid panicking. Instead, I write down a priority checklist: what is critical and urgent, and what can be done next. Focusing on one task at a time helps me regain focus and momentum.*

*For example, during our college project submission, our server crashed just one day before the final presentation. Instead of getting stressed, I took a deep breath, sat down with my teammate, checked our git commit logs, and restored the database within two hours.*

*Outside of work, playing badminton, going for a walk, and listening to music help me disconnect and return with a fresh perspective."*`,
    keyPoints: [
      'Explain that you stay calm and prioritize with checklists',
      'Share a real instance where you resolved an issue under pressure',
      'Mention positive, healthy ways you recharge outside work'
    ]
  },
  {
    id: 'int-14',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '8. Why Accenture?',
    thinkPrompt: 'Connect Accenture’s strengths with your personal career goals. Mention global client impact, learning culture, and focus on innovation.',
    answer: `*"I want to start my professional journey with Accenture for three clear reasons:*

*1. **Global Scale and Impact**: Accenture is a world leader in digital transformation, working with more than three-quarters of the Fortune Global 500 companies. Starting my career here gives me the opportunity to work on large-scale enterprise solutions that impact millions of users.*

*2. **Exceptional Learning Culture**: Accenture is renowned for investing heavily in fresher training and continuous upskilling through specialized learning platforms and certifications. As someone eager to learn, this is the ideal environment to grow.*

*3. **Values and Culture**: Accenture strongly promotes diversity, ethical technology practices, and collaborative teamwork. I believe my technical foundation, curiosity, and adaptability make me a great cultural fit for the company."*`,
    keyPoints: [
      'Mention Fortune Global 500 client exposure',
      'Highlight Accenture’s renowned training and career development culture',
      'Demonstrate cultural alignment and eagerness to contribute'
    ]
  },
  {
    id: 'int-15',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '9. Where do you see yourself in five years?',
    thinkPrompt: 'The interviewer wants to see career stability and realistic ambition. Phase 1 (Years 1-2: Technical mastery) -> Phase 2 (Years 3-5: Module ownership, mentoring, client confidence).',
    answer: `*"In five years, I see myself growing into a dependable Senior Software Engineer or Technical Lead at Accenture.*

*In the first two to three years, my primary goal is to gain deep technical mastery in my project's technology stack, earn relevant enterprise certifications, and deliver high-quality code consistently with minimal supervision.*

*By year five, as I gain domain experience, I want to take end-to-end ownership of key application modules, collaborate with client teams to understand business requirements, and mentor fresh campus graduates joining our team.*

*Ultimately, I want to be known as a reliable technical problem-solver who contributes meaningfully to the organization's growth."*`,
    keyPoints: [
      'Break into realistic phases: technical foundation -> leadership/mentoring',
      'Express desire to stay and grow within Accenture',
      'Shows commitment, clear vision, and loyalty'
    ]
  },
  {
    id: 'int-16',
    category: 'HR Interview',
    role: 'All Accenture Candidates',
    question: '10. Do you have any questions for me?',
    thinkPrompt: 'Never say "No". Asking questions shows enthusiasm, curiosity, and that you are serious about joining Accenture.',
    answer: `*"Yes, thank you for giving me the opportunity to ask! I have two quick questions:*

*1. What does the initial training and onboarding roadmap look like for campus hires joining as Associate Software Engineers at Accenture?*

*2. Based on your own experience at Accenture, what qualities help a fresher succeed and stand out from day one?*

*Thank you so much for your time and insights today!"*`,
    keyPoints: [
      'Always ask 1-2 thoughtful questions',
      'Focus on learning, onboarding, and success qualities',
      'Never ask about salary, vacation days, or work hours in this round',
      'Leaves a lasting positive impression of curiosity and eagerness'
    ]
  },
  {
    id: 'int-17',
    category: 'SQL Interview',
    role: 'ASE / Data Engineer',
    question: 'What is a UNIQUE constraint in SQL?',
    thinkPrompt: 'Recall how UNIQUE differs from a PRIMARY KEY (NULL handling) and its SQL ALTER TABLE syntax.',
    answer: `**Definition**: A constraint that ensures all values in a column or a set of columns are distinct across all rows.

**Purpose**: Prevents duplicate entries in the specified column(s) while still allowing \`NULL\` values (unlike \`PRIMARY KEY\`).

**Example**:
\`\`\`sql
ALTER TABLE table_name ADD CONSTRAINT unique_constraint UNIQUE (column_name);
\`\`\`

**Key Distinctions**:
- A table can have **multiple** \`UNIQUE\` constraints, but only **one** \`PRIMARY KEY\`.
- In most relational databases, a \`UNIQUE\` constraint allows one (or more) \`NULL\` values.`,
    keyPoints: [
      'Ensures all values in column(s) are distinct and non-duplicated',
      'Allows NULL values (unlike PRIMARY KEY which strictly forbids NULL)',
      'Multiple UNIQUE constraints can exist per table',
      'Can be applied via CREATE TABLE or ALTER TABLE ADD CONSTRAINT'
    ]
  },
  {
    id: 'int-18',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Query in SQL, and what are its main types?',
    thinkPrompt: 'A query is a request for data or actions. Think about the 4 core CRUD operations (SELECT, INSERT, UPDATE, DELETE).',
    answer: `**Definition**: A SQL Query is a formal command or request sent to a database management system to retrieve, manipulate, or manage stored data.

**Types of SQL Queries**:
1. **SELECT**: Retrieves data from one or more tables (Data Query Language - DQL).
2. **INSERT**: Adds new records/rows into a table (Data Manipulation Language - DML).
3. **UPDATE**: Modifies existing data values in specified columns (DML).
4. **DELETE**: Removes existing rows based on a condition (DML).`,
    keyPoints: [
      'A formal request sent to the database to fetch or alter data',
      'DQL: SELECT retrieves data',
      'DML: INSERT, UPDATE, DELETE manipulate records',
      'Maps to standard CRUD (Create, Read, Update, Delete) operations'
    ]
  },
  {
    id: 'int-19',
    category: 'SQL Interview',
    role: 'ASE / Data Engineer',
    question: 'What is Data Integrity in SQL, and what are its types?',
    thinkPrompt: 'Data integrity ensures accuracy, consistency, and reliability. Think about row-level, table-relationship level, and column-value level.',
    answer: `**Definition**: Data Integrity refers to the overall accuracy, completeness, consistency, and reliability of data stored in a database throughout its lifecycle.

**Types of Data Integrity**:
1. **Entity Integrity**: Ensures that every row in a table is uniquely identifiable and non-redundant. Enforced through **Primary Keys** and unique identifiers (no NULL primary keys permitted).
2. **Referential Integrity**: Ensures that relationships between related tables remain valid and consistent. Enforced through **Foreign Keys**; child rows cannot reference nonexistent parent records, and parent records cannot be deleted if referenced (unless cascading rules are configured).
3. **Domain Integrity**: Ensures that all values entered in a column are valid according to predefined rules, data types, and formats. Enforced through **Data Types**, **NOT NULL**, **CHECK** constraints, and **DEFAULT** values.`,
    keyPoints: [
      'Ensures data accuracy, consistency, and reliability over time',
      'Entity Integrity: Unique row identification via Primary Key',
      'Referential Integrity: Consistent cross-table relationships via Foreign Key',
      'Domain Integrity: Valid column values, data types, and CHECK ranges'
    ]
  },
  {
    id: 'int-20',
    category: 'SQL Interview',
    role: 'ASE / FSE',
    question: 'What is the difference between a Clustered and a Non-clustered Index?',
    thinkPrompt: 'Think about physical storage of rows on disk vs separate B-Tree pointer structures, and how many of each are allowed per table.',
    answer: `**Clustered Index**:
- **Definition**: Sorts and physically stores the actual table data rows on disk in order based on the indexed key.
- **Characteristics**: Only **one** clustered index can exist per table because rows can only be physically arranged in one physical order. Automatically created when defining a \`PRIMARY KEY\`.
- **Performance**: Extremely fast for range scans and sequential reads (\`BETWEEN\`, \`>\`, \`<\`).

**Non-clustered Index**:
- **Definition**: Creates a separate lookup structure (B-Tree) independent of data rows, containing sorted index keys and pointers (row locators / RID) pointing to the physical data rows.
- **Characteristics**: **Multiple** non-clustered indexes can exist per table. Does not alter the physical storage order of rows.
- **Performance**: Faster for point queries and specific column lookups (\`WHERE email = ?\`).`,
    keyPoints: [
      'Clustered Index: Physically sorts table rows on disk; max 1 per table',
      'Non-clustered Index: Separate index structure with pointers; multiple allowed',
      'Primary Key automatically creates a Clustered Index in most RDBMS',
      'Clustered is ideal for range queries; Non-clustered is ideal for point lookups'
    ]
  },
  {
    id: 'int-21',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is an Index in SQL? Explain its different types.',
    thinkPrompt: 'An index is like a book index at the end of a textbook that lets you jump directly to a page without reading every page.',
    answer: `**Definition**: An Index is a database performance optimization structure (typically implemented as a balanced B-Tree) that accelerates query data retrieval speed without needing a costly full-table sequential scan.

**Types of Indexes**:
1. **Clustered Index**: Dictates the physical storage order of data rows on disk. Exactly one per table.
2. **Non-clustered Index**: A separate logical structure containing sorted keys and pointers back to physical rows. Multiple allowed per table.
3. **Unique Index**: Enforces uniqueness of values in the indexed column(s) while optimizing search speeds.
4. **Composite Index**: An index built on two or more columns together (e.g., \`(department_id, salary)\`), optimizing queries filtering on those combined columns.`,
    keyPoints: [
      'B-Tree structure to avoid costly full table scans',
      'Clustered: Physical order on disk (1 per table)',
      'Non-clustered: Logical order with row pointers (multiple allowed)',
      'Unique Index: Guarantees unique values',
      'Composite Index: Multi-column indexing'
    ]
  },
  {
    id: 'int-22',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Cross-Join in SQL?',
    thinkPrompt: 'Cross-Join is the Cartesian product. If Table A has M rows and Table B has N rows, how many rows are returned?',
    answer: `**Definition**: A Cross-Join returns the **Cartesian product** of two tables, pairing every single row from the first table with every single row from the second table.

**Characteristics**:
- Combines every row from the first table with every row from the second table.
- Does not require an \`ON\` join condition.
- Total rows produced = \`Total Rows in Table 1 × Total Rows in Table 2\`.
- Useful for generating all possible permutations or combinations (e.g., matching all product colors with all product sizes).

**Example**:
\`\`\`sql
SELECT * FROM table1 CROSS JOIN table2;
\`\`\``,
    keyPoints: [
      'Returns Cartesian product of two tables',
      'Produces M x N rows (no ON condition needed)',
      'Pairs every row of Table A with every row of Table B',
      'Used for generating all possible permutations'
    ]
  },
  {
    id: 'int-23',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Self-Join in SQL, and when is it used?',
    thinkPrompt: 'A table joined with itself. Classic interview example: finding an employee and their manager from the same employees table.',
    answer: `**Definition**: A Self-Join is a join operation where a table is joined with itself.

**Purpose**: Useful for querying hierarchical or comparative data where parent and child records reside in the exact same table.

**Implementation**: Requires using two distinct table aliases (e.g., \`A\` and \`B\`) so the database engine can treat them as two separate virtual instances.

**Example**:
\`\`\`sql
SELECT A.employee_name AS Employee, B.employee_name AS Manager
FROM employees A
JOIN employees B ON A.manager_id = B.employee_id;
\`\`\``,
    keyPoints: [
      'Unary join of a table with itself',
      'Requires different table aliases (e.g., A and B)',
      'Used for hierarchical data (employees and their managers)',
      'Compares rows within the exact same table'
    ]
  },
  {
    id: 'int-24',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Join in SQL? List its different types.',
    thinkPrompt: 'Think of Venn diagrams combining tables based on matching keys: intersection (INNER), left (LEFT), right (RIGHT), union (FULL).',
    answer: `**Definition**: A SQL Join is an operation used to combine rows from two or more tables based on a related column (foreign/primary key) between them.

**Types of Joins**:
1. **INNER JOIN**: Returns only rows that have matching values in both tables.
2. **LEFT JOIN (LEFT OUTER JOIN)**: Returns all rows from the left table, plus matched rows from the right table. Unmatched right columns contain \`NULL\`.
3. **RIGHT JOIN (RIGHT OUTER JOIN)**: Returns all rows from the right table, plus matched rows from the left table. Unmatched left columns contain \`NULL\`.
4. **FULL JOIN (FULL OUTER JOIN)**: Returns all records when there is a match in either the left or right table. Fills missing sides with \`NULL\`.`,
    keyPoints: [
      'Combines records across tables via matching columns',
      'INNER JOIN: Only matching records',
      'LEFT JOIN: All left records + matched right records',
      'RIGHT JOIN: All right records + matched left records',
      'FULL JOIN: All records from both tables'
    ]
  },
  {
    id: 'int-25',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is Pattern Matching in SQL, and what are its key operators?',
    thinkPrompt: 'Pattern matching searches for strings matching wildcard rules rather than exact equality. Remember LIKE, %, and _.',
    answer: `**Definition**: Pattern matching is used to search for specific character patterns or substrings within column data using wildcard operators instead of exact equality (\`=\`).

**Key Operators & Wildcards**:
1. **LIKE**: Tests whether a column string matches a specified pattern.
2. **% (Percent Wildcard)**: Represents **zero, one, or multiple characters**.
   - \`WHERE name LIKE 'A%'\` -> Starts with 'A'.
   - \`WHERE email LIKE '%@gmail.com'\` -> Ends with '@gmail.com'.
   - \`WHERE title LIKE '%SQL%'\` -> Contains 'SQL' anywhere.
3. **_ (Underscore Wildcard)**: Represents **exactly one single character**.
   - \`WHERE code LIKE 'A_C'\` -> Matches 'ABC', 'A1C', 'A-C'.
   - \`WHERE name LIKE '_a%'\` -> Names where the 2nd letter is 'a'.
4. **NOT LIKE**: Excludes rows that match the pattern.`,
    keyPoints: [
      'Searches text using wildcards instead of exact match',
      'LIKE / NOT LIKE operator in WHERE clause',
      '% matches zero or multiple characters',
      '_ matches exactly one single character'
    ]
  },
  {
    id: 'int-26',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'How do you create an empty table with the same structure as an existing table?',
    thinkPrompt: 'Think of two ways: CREATE TABLE AS SELECT with a false WHERE condition, and CREATE TABLE LIKE.',
    answer: `There are two standard ways depending on the database system:

1. **Using CREATE TABLE AS SELECT with a false condition (ANSI Standard)**:
\`\`\`sql
CREATE TABLE new_table AS SELECT * FROM existing_table WHERE 1=0;
\`\`\`
*Explanation*: The condition \`WHERE 1=0\` evaluates to false for all rows. Consequently, the database copies all column names and datatypes but copies **zero** data rows.

2. **Using CREATE TABLE with LIKE (MySQL / PostgreSQL)**:
\`\`\`sql
CREATE TABLE new_table LIKE existing_table;
\`\`\`
*Explanation*: This copies the complete table structure, column definitions, default values, and indexes of the existing table without transferring any data rows.`,
    keyPoints: [
      'Method 1: CREATE TABLE new AS SELECT * FROM old WHERE 1=0;',
      'WHERE 1=0 returns empty result set, copying schema only',
      'Method 2: CREATE TABLE new LIKE old; (copies indexes in MySQL)',
      'Fast way to create staging or backup tables'
    ]
  },
  {
    id: 'int-27',
    category: 'SQL Interview',
    role: 'ASE / FSE',
    question: 'What is a Stored Procedure in SQL, and what are its benefits?',
    thinkPrompt: 'A stored procedure is a precompiled batch of SQL statements stored on the database server. Why is it better than sending raw queries?',
    answer: `**Definition**: A Stored Procedure is a precompiled set of one or more SQL statements saved directly in the database server catalog that can be executed repeatedly with input and output parameters.

**Benefits**:
1. **Performance**: It is parsed, compiled, and optimized once; subsequent executions use the cached execution plan.
2. **Network Traffic Reduction**: A client sends a single procedure call (\`EXEC procedure_name\`) instead of sending dozens of individual SQL statements across the network.
3. **Security**: Users can be given permission to execute the procedure without granting direct read/write access to underlying tables. It also prevents SQL injection when using parameterized inputs.
4. **Code Reusability & Modularity**: Complex business logic is centralized in the database; updating the procedure immediately updates all client applications.`,
    keyPoints: [
      'Precompiled SQL routines stored on the server',
      'Improves performance via cached execution plans',
      'Reduces network roundtrips',
      'Enhances security and safeguards against SQL injection'
    ]
  },
  {
    id: 'int-28',
    category: 'SQL Interview',
    role: 'ASE / FSE',
    question: 'What is a Recursive Stored Procedure?',
    thinkPrompt: 'Just like recursive functions in Java or C++, a stored procedure that calls itself until reaching a termination base case.',
    answer: `**Definition**: A Recursive Stored Procedure is a stored procedure that calls itself repeatedly to perform iterative or hierarchical tasks until a specific base condition is satisfied.

**Usage**:
- Useful for traversing hierarchical data (e.g., organizational charts, reporting structures, manager-to-employee trees).
- Navigating nested categories, bill-of-materials, or graph networks.
- Calculating mathematical recursive series (e.g., factorials).

**Important Safety Rule**:
Must always define a terminating base condition and recursion depth limit (e.g., \`MAXRECURSION\`) to prevent infinite recursion and server memory exhaustion.`,
    keyPoints: [
      'A stored procedure that calls itself',
      'Ideal for hierarchical tree structures (org charts, nested categories)',
      'Must define a terminating base condition',
      'Database engines enforce max recursion depth limits'
    ]
  },
  {
    id: 'int-29',
    category: 'SQL Interview',
    role: 'ASE / Data Engineer',
    question: 'What is Collation in SQL, and what are the different types of Collation Sensitivity?',
    thinkPrompt: 'Collation defines rules for sorting and comparing characters (e.g., is "A" == "a"?). Think about case, accent, kana, and width sensitivity.',
    answer: `**Definition**: Collation is a configuration set that determines how character data is sorted, compared, and stored based on linguistic rules and character sets.

**Types of Collation Sensitivity**:
1. **Case Sensitivity (CS vs CI)**: Differentiates between uppercase and lowercase letters.
   - \`CI\` (Case-Insensitive): \`'apple' = 'Apple'\` (Evaluates to True)
   - \`CS\` (Case-Sensitive): \`'apple' = 'Apple'\` (Evaluates to False)
2. **Accent Sensitivity (AS vs AI)**: Differentiates between accented and unaccented characters.
   - \`AI\` (Accent-Insensitive): \`'resume' = 'résumé'\` (Evaluates to True)
   - \`AS\` (Accent-Sensitive): \`'resume' = 'résumé'\` (Evaluates to False)
3. **Kana Sensitivity (KS)**: Differentiates between Japanese Hiragana and Katakana phonetic characters.
4. **Width Sensitivity (WS)**: Differentiates between single-byte (half-width) and double-byte (full-width) character representations.`,
    keyPoints: [
      'Governs sorting and character comparison rules',
      'Case Sensitivity (CS vs CI): uppercase vs lowercase',
      'Accent Sensitivity (AS vs AI): accented characters',
      'Kana (KS) and Width (WS) sensitivities for international sets'
    ]
  },
  {
    id: 'int-30',
    category: 'SQL Interview',
    role: 'ASE / Data Engineer',
    question: 'What are the differences between OLTP and OLAP?',
    thinkPrompt: 'Compare an ATM transaction (atomic, fast, OLTP) vs a quarterly revenue analysis dashboard across 500 stores (OLAP).',
    answer: `**OLTP (Online Transaction Processing)**:
- **Purpose**: Handles day-to-day real-time operational transactions (e.g., banking transactions, retail checkout, e-commerce orders).
- **Characteristics**: Fast query processing, high transaction volume, normalized data (3NF) to eliminate redundancy and write anomalies.
- **Operations**: Frequent \`INSERT\`, \`UPDATE\`, and \`DELETE\` queries with small data footprints.
- **Users**: Clerks, customers, frontline staff.

**OLAP (Online Analytical Processing)**:
- **Purpose**: Designed for complex queries, historical data analysis, and business intelligence (e.g., annual sales forecasting, executive dashboards).
- **Characteristics**: Optimized for read-heavy operations, multidimensional data analysis, denormalized schemas (Star/Snowflake).
- **Operations**: Heavy, aggregated \`SELECT\` queries spanning millions of rows.
- **Users**: Data analysts, business managers, data scientists.`,
    keyPoints: [
      'OLTP = Day-to-day real-time transactions, highly normalized',
      'OLAP = Historical data analytics and BI, denormalized',
      'OLTP is write-heavy with small payloads; OLAP is read-heavy with bulk scans',
      'OLTP uses 3NF; OLAP uses Star or Snowflake schemas'
    ]
  },
  {
    id: 'int-31',
    category: 'SQL Interview',
    role: 'ASE / FSE',
    question: 'What is a User-defined Function (UDF) in SQL, and what are its types?',
    thinkPrompt: 'A custom function created by users. Contrast scalar functions (single value) with table-valued functions (table output).',
    answer: `**Definition**: A User-defined Function (UDF) is a routine created by users to perform operations, calculations, or string manipulations and return values. Unlike Stored Procedures, UDFs can be used directly inside \`SELECT\`, \`WHERE\`, and \`JOIN\` clauses.

**Types of User-defined Functions**:
1. **Scalar Functions**: Accepts zero or more parameters and returns exactly **a single value** (e.g., \`RETURN @result\`). Useful for mathematical formulas or string conversions.
2. **Table-Valued Functions (TVF)**: Returns an entire **table (result set)** (e.g., \`RETURN TABLE\`). Can be queried in the \`FROM\` clause like a view or table.
3. **Inline Table-Valued Functions**: A TVF whose body consists of a single \`SELECT\` statement without a \`BEGIN...END\` block, allowing the query optimizer to inline execution efficiently.`,
    keyPoints: [
      'Custom reusable function returning a value or table',
      'Can be invoked directly inside SELECT statements',
      'Scalar Function: Returns a single atomic value',
      'Table-Valued Function (TVF): Returns a complete table'
    ]
  },
  {
    id: 'int-32',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Subquery in SQL, and what are its types?',
    thinkPrompt: 'A query nested inside another query. Think about what the inner query returns: single value, single column, single row, or a table.',
    answer: `**Definition**: A Subquery is a query nested inside another query (such as \`SELECT\`, \`INSERT\`, \`UPDATE\`, or \`DELETE\`) used to perform operations that require intermediate data from other queries.

**Types of Subqueries**:
1. **Scalar Subquery**: Returns exactly **a single value** (1 row, 1 column). Used in \`SELECT\`, \`WHERE\`, or \`HAVING\` clauses (e.g., \`WHERE salary > (SELECT AVG(salary) FROM emp)\`).
2. **Column Subquery**: Returns a **single column of multiple values**. Commonly used with operators like \`IN\`, \`ANY\`, or \`ALL\`.
3. **Row Subquery**: Returns a **single row of multiple values**, compared with a row tuple \`(col1, col2) = (SELECT ...)\`.
4. **Table Subquery**: Returns a **set of rows and columns (a table)**. Placed in the \`FROM\` clause as a derived table or inline view.
5. **Correlated Subquery**: A subquery that references columns from the outer query, executing once for every row processed by the outer query.`,
    keyPoints: [
      'Nested query inside an outer SQL statement',
      'Scalar Subquery: 1 value (1 row, 1 column)',
      'Column Subquery: Multiple rows of 1 column (used with IN)',
      'Table Subquery: Multi-row, multi-column in FROM clause',
      'Correlated Subquery: Depends on outer query row'
    ]
  },
  {
    id: 'int-33',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What are Constraints in SQL, and what are the main types?',
    thinkPrompt: 'Constraints enforce data integrity rules on columns. The 6 core constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.',
    answer: `**Definition**: Constraints are rules applied to columns in a table to ensure data accuracy, validity, and integrity, preventing invalid data entry.

**Core Types of Constraints**:
1. **NOT NULL**: Ensures that a column cannot have \`NULL\` (empty) values.
2. **UNIQUE**: Ensures that all values in a column are distinct from one another.
3. **PRIMARY KEY**: Uniquely identifies each record in a table. Combination of \`NOT NULL\` and \`UNIQUE\`.
4. **FOREIGN KEY**: Ensures referential integrity by linking related data across tables to another table's Primary Key.
5. **CHECK**: Ensures that all values in a column satisfy a specific condition (e.g., \`CHECK (salary > 0)\`).
6. **DEFAULT**: Provides a default fallback value for a column when none is specified during an \`INSERT\`.`,
    keyPoints: [
      'Rules applied to columns to maintain data integrity',
      'NOT NULL: Prevents empty values',
      'UNIQUE: No duplicates allowed',
      'PRIMARY KEY: Unique identifier (NOT NULL + UNIQUE)',
      'FOREIGN KEY: Enforces referential link',
      'CHECK: Validates custom condition; DEFAULT: Fallback value'
    ]
  },
  {
    id: 'int-34',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What are Tables and Fields in a Database?',
    thinkPrompt: 'Think of an Excel spreadsheet: the whole sheet is a Table, columns are Fields, rows are Records.',
    answer: `**Tables**:
- Structures in a database that store data organized in horizontal **rows (records)** and vertical **columns (fields)**.
- Each table represents an entity type (e.g., \`Employees\`, \`Orders\`, \`Departments\`).

**Fields (Columns)**:
- Columns within a table that store specific pieces of data or attributes of the entity.
- Each field is defined with a specific data type (e.g., \`VARCHAR\`, \`INT\`, \`DATE\`) and optional constraints.
- *Example*: In an \`Employees\` table, the fields are \`emp_id\`, \`emp_name\`, and \`salary\`.

**Records (Rows)**:
- Individual horizontal rows containing the actual data values for one entity instance.`,
    keyPoints: [
      'Table: 2D entity container representing an entity with rows and columns',
      'Field: Column storing a specific attribute with a fixed datatype',
      'Record: Individual row of data values'
    ]
  },
  {
    id: 'int-35',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is the difference between SQL and MySQL?',
    thinkPrompt: 'SQL is the language specification; MySQL is the database management software that implements SQL.',
    answer: `**SQL (Structured Query Language)**:
- **Definition**: A standardized computer query language used to query, manage, and manipulate relational databases.
- **Nature**: A language specification defined by ANSI/ISO standards; it cannot store or host data by itself.
- **Updates**: Language standards are updated periodically (e.g., SQL:1999, SQL:2016).

**MySQL**:
- **Definition**: An open-source Relational Database Management System (RDBMS) software server developed by Oracle that uses SQL to interact with the database.
- **Nature**: A concrete software product installed on servers that physically stores, indexes, and manages database files on disk.
- **Features**: Provides multi-user server processes, security authentication, replication, and storage engines like InnoDB.`,
    keyPoints: [
      'SQL is a query language; MySQL is a database management software application',
      'SQL is standardized; MySQL implements and extends SQL',
      'SQL has no GUI/server; MySQL is a client-server database platform'
    ]
  },
  {
    id: 'int-36',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is SQL, and what are its 5 main sub-languages?',
    thinkPrompt: 'SQL stands for Structured Query Language. Mention DDL, DML, DQL, DCL, and TCL with their commands.',
    answer: `**Definition**: **SQL (Structured Query Language)** is the standardized computer programming language used for storing, querying, and managing relational databases.

**Purpose**: Allows users and applications to create database schemas, read, insert, update, and delete data, manage transactions, and configure user permissions.

**Five Sub-languages of SQL**:
1. **DDL (Data Definition Language)**: Defines and modifies database structure (\`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`).
2. **DML (Data Manipulation Language)**: Modifies data records (\`INSERT\`, \`UPDATE\`, \`DELETE\`).
3. **DQL (Data Query Language)**: Retrieves data (\`SELECT\`).
4. **DCL (Data Control Language)**: Manages access permissions (\`GRANT\`, \`REVOKE\`).
5. **TCL (Transaction Control Language)**: Manages transactions (\`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\`).`,
    keyPoints: [
      'Standard language for relational database management',
      'DDL: CREATE, ALTER, DROP, TRUNCATE',
      'DML: INSERT, UPDATE, DELETE',
      'DQL: SELECT',
      'DCL: GRANT, REVOKE; TCL: COMMIT, ROLLBACK'
    ]
  },
  {
    id: 'int-37',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is an RDBMS, and how is it different from a DBMS?',
    thinkPrompt: 'Relational vs non-relational: Tabular storage with foreign key relationships and ACID compliance vs flat/hierarchical file storage.',
    answer: `**RDBMS (Relational Database Management System)**:
- **Definition**: A specialized type of DBMS that stores data in structured tables consisting of rows and columns, with explicit relationships defined between tables using Primary and Foreign Keys.
- **Features**: Enforces ACID (Atomicity, Consistency, Isolation, Durability) properties, normalization, and relational integrity.
- **Examples**: MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

**DBMS (Database Management System)**:
- **Definition**: A general software system used to store, manage, and interact with data files, which can be relational or non-relational.
- **Features**: Data can be stored as flat files, hierarchical trees, or key-value structures without relational links. Does not enforce relational constraints.
- **Examples**: File systems, XML databases, SQLite in lightweight mode.`,
    keyPoints: [
      'RDBMS stores tabular data with key relationships and ACID properties',
      'DBMS is a general file/data management system without relational links',
      'RDBMS supports multi-table JOINs and normalization',
      'Examples: MySQL, PostgreSQL (RDBMS) vs File systems (DBMS)'
    ]
  },
  {
    id: 'int-38',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is a Database, and why is it used?',
    thinkPrompt: 'An organized electronic data store. Why use a database instead of Excel spreadsheets or flat text files for enterprise systems?',
    answer: `**Definition**: A Database is an organized, structured collection of digital data stored and accessed electronically from a computer system or server.

**Purpose**: Organizes data to allow efficient access, high-speed querying, secure management, and persistent storage of information.

**Why Databases Are Essential for Enterprise Applications**:
1. **Concurrent Access**: Allows thousands of users to read and write data simultaneously without file corruption.
2. **ACID Transaction Guarantees**: Protects against partial updates during system crashes (e.g., banking fund transfers).
3. **Fast Indexing & Retrieval**: B-Tree indexes retrieve records in milliseconds among millions of entries.
4. **Security & Access Control**: Protects sensitive information with user authentication, encryption, and row-level permissions.
5. **Data Backup & Recovery**: Supports automated point-in-time recovery and replication.`,
    keyPoints: [
      'Organized electronic collection of structured data',
      'Enables concurrent multi-user access without corruption',
      'Enforces ACID transaction guarantees',
      'Provides high-speed indexing, security, and scalability'
    ]
  },
  {
    id: 'int-39',
    category: 'SQL Interview',
    role: 'ASE',
    question: 'What is the SELECT statement in SQL, and what is its syntax?',
    thinkPrompt: 'The most frequently used SQL statement. Know its syntax and the difference between written order and logical execution order.',
    answer: `**Definition**: The \`SELECT\` statement is the fundamental SQL command used to query and retrieve data from one or more tables in a database.

**Basic Syntax**:
\`\`\`sql
SELECT column1, column2
FROM table_name
WHERE condition;
\`\`\`

**Standard Clauses**:
- \`FROM\`: Specifies the table(s) to fetch data from.
- \`WHERE\`: Filters rows matching specific conditions before aggregation.
- \`GROUP BY\`: Groups rows having the same values into summary rows.
- \`HAVING\`: Filters aggregated groups based on summary conditions.
- \`ORDER BY\`: Sorts the result set ascending (\`ASC\`) or descending (\`DESC\`).
- \`LIMIT\` / \`TOP\`: Restricts the total number of rows returned.

**Logical Execution Order**:
\`FROM\` -> \`WHERE\` -> \`GROUP BY\` -> \`HAVING\` -> \`SELECT\` -> \`ORDER BY\` -> \`LIMIT\`.`,
    keyPoints: [
      'Core command to retrieve and query data',
      'Basic syntax: SELECT cols FROM table WHERE condition;',
      'Accepts FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT',
      'Logical execution starts at FROM and evaluates SELECT near the end'
    ]
  }
];


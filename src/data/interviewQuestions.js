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
  }
];


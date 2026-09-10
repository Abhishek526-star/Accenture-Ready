// src/data/oopQuestions.js
/**
 * Accenture OOP Preparation Question Bank (35 High-Yield Solved MCQs) & Study Notes
 * Source: Accenture OOP Preparation Guide (Tier 1 & Tier 2)
 *
 * Tier 1: 15 MCQs (Section A: Four Pillars, Encapsulation, Abstraction, Inheritance, Overloading, Overriding, Constructors/Destructors, Access Modifiers)
 * Tier 2: 10 MCQs (Section B: Pure Virtual Functions, Abstract Classes, Static vs Dynamic Binding, this Pointer, Static Members, Multiple Inheritance & Diamond Problem)
 * Tier 3: 10 MCQs (Section C: Scenario-Based Banking, Payment Systems, Employee Hierarchy, Vehicle Overload, Virtual Dispatch, Abstract Contracts)
 */

export const OOP_TIERS = [
  { id: 'all', title: 'All Tiers', badge: '35 MCQs', description: 'Complete Object-Oriented Programming Question Bank' },
  { id: 1, title: 'Tier 1: Core Pillars & Basics', badge: '15 MCQs', description: '4 Pillars, Overloading vs Overriding, Lifetime & Access Specifiers' },
  { id: 2, title: 'Tier 2: Virtual Dispatch & Architecture', badge: '10 MCQs', description: 'Virtual Functions, Abstract Classes, Binding, Static & Diamond Problem' },
  { id: 3, title: 'Tier 3: Scenario-Based Design', badge: '10 MCQs', description: 'Real-world System Designs: Banking, Gateways, Inheritance & Contracts' }
];

export const OOP_TOPICS = [
  { id: 'all', label: 'All Topics' },
  { id: 'Four Pillars of OOP', label: 'Four Pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism)' },
  { id: 'Polymorphism & Overloading', label: 'Polymorphism: Overloading vs Overriding & Return Type Rules' },
  { id: 'Constructors, Destructors & Lifetime', label: 'Constructors, Destructors & Lifetime Management' },
  { id: 'Access Specifiers & Protection', label: 'Access Modifiers (public, private, protected)' },
  { id: 'Virtual Functions & Abstract Classes', label: 'Virtual & Pure Virtual Functions, Abstract Classes & Interfaces' },
  { id: 'Binding & Static Members', label: 'Static vs Dynamic Binding & Static Members' },
  { id: 'Diamond Problem & Multiple Inheritance', label: 'Multiple Inheritance & Virtual Inheritance Solution' },
  { id: 'Real-World System Scenarios', label: 'Accenture Real-World Scenario Questions' }
];

export const oopQuestions = [
  // ==========================================
  // SECTION A: TIER 1 - CONCEPTUAL MCQS (15 Qs)
  // ==========================================
  {
    id: 'oop-1-01',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Four Pillars of OOP',
    question: 'Which of the following is NOT one of the four fundamental pillars of OOP?',
    options: [
      { id: 'A', text: 'Encapsulation' },
      { id: 'B', text: 'Abstraction' },
      { id: 'C', text: 'Inheritance' },
      { id: 'D', text: 'Compilation' }
    ],
    correctAnswer: 'D',
    explanation: 'Compilation is a language-processing/build step performed by a compiler to convert source code into machine code or bytecode, not an object-oriented programming pillar.',
    accentureTip: 'Four Pillars = Encapsulation, Abstraction, Inheritance, Polymorphism (EAIP)'
  },
  {
    id: 'oop-1-02',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Four Pillars of OOP',
    question: 'A programmer declares a class variable balance as private and provides deposit() and getBalance() methods to access it. Which OOP principle is primarily demonstrated?',
    options: [
      { id: 'A', text: 'Inheritance' },
      { id: 'B', text: 'Encapsulation' },
      { id: 'C', text: 'Polymorphism' },
      { id: 'D', text: 'Compilation' }
    ],
    correctAnswer: 'B',
    explanation: 'Encapsulation bundles data (balance) and the methods that operate on it (deposit, getBalance) into a single unit (class) while restricting direct outside access via private access specifiers.',
    accentureTip: 'Private data + public getters/setters = Encapsulation (Data Protection)'
  },
  {
    id: 'oop-1-03',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Four Pillars of OOP',
    question: 'A user presses the start() button on a car without knowing how fuel injection, ignition, and engine control internally work. Which principle is illustrated?',
    options: [
      { id: 'A', text: 'Encapsulation' },
      { id: 'B', text: 'Abstraction' },
      { id: 'C', text: 'Inheritance' },
      { id: 'D', text: 'Overloading' }
    ],
    correctAnswer: 'B',
    explanation: 'Abstraction exposes only the essential interface/functionality (start()) while completely hiding complex, unnecessary underlying implementation details (fuel injection, ignition spark).',
    accentureTip: 'Hiding internal complexity, showing only essential interface = Abstraction'
  },
  {
    id: 'oop-1-04',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Four Pillars of OOP',
    question: 'Which OOP feature primarily promotes code reuse through a parent-child relationship?',
    options: [
      { id: 'A', text: 'Encapsulation' },
      { id: 'B', text: 'Abstraction' },
      { id: 'C', text: 'Inheritance' },
      { id: 'D', text: 'Constructor' }
    ],
    correctAnswer: 'C',
    explanation: 'Inheritance allows a derived (child) class to inherit properties and behaviors from a base (parent) class, eliminating duplicate code and fostering hierarchical reusability.',
    accentureTip: 'Code reuse via Parent-Child (Base-Derived) relationship = Inheritance'
  },
  {
    id: 'oop-1-05',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Polymorphism & Overloading',
    question: 'What does polymorphism literally represent in OOP?',
    options: [
      { id: 'A', text: 'One class, one object' },
      { id: 'B', text: 'One interface/name with multiple forms or behaviors' },
      { id: 'C', text: 'Hiding all data' },
      { id: 'D', text: 'Reusing only variables' }
    ],
    correctAnswer: 'B',
    explanation: 'Derived from Greek ("poly" = many, "morph" = forms), polymorphism allows a single interface, function name, or operator to exhibit different behaviors depending on context or object type.',
    accentureTip: 'Poly = Many, Morph = Forms → Same interface, multiple implementations'
  },
  {
    id: 'oop-1-06',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Polymorphism & Overloading',
    question: 'Which example represents function overloading?\nA. void add(int a, int b); void add(int a, int b, int c);\nB. class Dog : public Animal {};\nC. class Dog { void bark(); };\nD. private: int age;',
    options: [
      { id: 'A', text: 'void add(int a, int b); and void add(int a, int b, int c);' },
      { id: 'B', text: 'class Dog : public Animal {};' },
      { id: 'C', text: 'class Dog { void bark(); };' },
      { id: 'D', text: 'private: int age;' }
    ],
    correctAnswer: 'A',
    explanation: 'Function overloading allows multiple functions in the same scope to share the exact same name with differing parameter counts, types, or orders.',
    accentureTip: 'Same function name + different parameter list = Function Overloading'
  },
  {
    id: 'oop-1-07',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Polymorphism & Overloading',
    question: 'Can two functions be overloaded by changing only their return type (e.g., int add(int, int) vs double add(int, int))?',
    options: [
      { id: 'A', text: 'Yes' },
      { id: 'B', text: 'No' },
      { id: 'C', text: 'Only in C++' },
      { id: 'D', text: 'Only when functions are private' }
    ],
    correctAnswer: 'B',
    explanation: 'Function overloading cannot be achieved by changing only the return type because the call site (e.g. add(10, 20);) lacks sufficient information for the compiler to disambiguate which function to execute.',
    accentureTip: 'Accenture Trap: Overloading REQUIRES different parameters; return type alone is INVALID'
  },
  {
    id: 'oop-1-08',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Polymorphism & Overloading',
    question: 'A child class provides its own implementation of a method inherited from its parent class. What is this called?',
    options: [
      { id: 'A', text: 'Overloading' },
      { id: 'B', text: 'Overriding' },
      { id: 'C', text: 'Encapsulation' },
      { id: 'D', text: 'Abstraction' }
    ],
    correctAnswer: 'B',
    explanation: 'Method overriding occurs when a derived class redefines a method inherited from its base class with the same signature to provide child-specific runtime behavior.',
    accentureTip: 'Redefining an inherited method in a child class = Overriding (Runtime Polymorphism)'
  },
  {
    id: 'oop-1-09',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Polymorphism & Overloading',
    question: 'Which is the most common example of compile-time polymorphism?',
    options: [
      { id: 'A', text: 'Function overloading' },
      { id: 'B', text: 'Virtual function overriding' },
      { id: 'C', text: 'Dynamic binding' },
      { id: 'D', text: 'Abstract class' }
    ],
    correctAnswer: 'A',
    explanation: 'Function overloading and operator overloading are compile-time (static) polymorphism because the compiler binds the function call to the exact implementation during compilation.',
    accentureTip: 'Compile-time = Overloading / Static Binding. Runtime = Virtual Overriding / Dynamic Binding.'
  },
  {
    id: 'oop-1-10',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Virtual Functions & Abstract Classes',
    question: 'Which combination is most directly associated with runtime polymorphism in C++?',
    options: [
      { id: 'A', text: 'Overloading + static binding' },
      { id: 'B', text: 'Overriding + virtual function' },
      { id: 'C', text: 'Constructor + destructor' },
      { id: 'D', text: 'Encapsulation + inheritance' }
    ],
    correctAnswer: 'B',
    explanation: 'In C++, runtime polymorphism is achieved through method overriding in conjunction with virtual functions called via base class pointers or references.',
    accentureTip: 'Runtime Polymorphism in C++ = Virtual functions + Derived override + Base pointer/reference'
  },
  {
    id: 'oop-1-11',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Constructors, Destructors & Lifetime',
    question: 'Which statement about a C++ constructor is correct?',
    options: [
      { id: 'A', text: 'It must return void' },
      { id: 'B', text: 'It has the same name as the class' },
      { id: 'C', text: 'It must be declared static' },
      { id: 'D', text: 'It is called manually before every object access' }
    ],
    correctAnswer: 'B',
    explanation: 'A constructor always shares the exact name of the class, has NO return type (not even void), and executes automatically whenever an object instance is instantiated.',
    accentureTip: 'Constructor = Same name as class + No return type + Automatic invocation'
  },
  {
    id: 'oop-1-12',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Constructors, Destructors & Lifetime',
    question: 'Which syntax represents a destructor for class Student in C++?',
    options: [
      { id: 'A', text: 'Student()' },
      { id: 'B', text: 'delete Student()' },
      { id: 'C', text: '~Student()' },
      { id: 'D', text: 'destructor Student()' }
    ],
    correctAnswer: 'C',
    explanation: 'In C++, a destructor is designated by a tilde (~) prefix preceding the class name (~Student()). It accepts no arguments and cannot be overloaded.',
    accentureTip: 'Destructor = ~ClassName() (No parameters, no return type, cannot be overloaded)'
  },
  {
    id: 'oop-1-13',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Access Specifiers & Protection',
    question: 'Which access modifier allows access from anywhere the object/member is accessible?',
    options: [
      { id: 'A', text: 'private' },
      { id: 'B', text: 'protected' },
      { id: 'C', text: 'public' },
      { id: 'D', text: 'internal' }
    ],
    correctAnswer: 'C',
    explanation: 'Public members are accessible from anywhere in the program where the enclosing class instance is visible. Private members are restricted to the defining class, and protected to derived classes.',
    accentureTip: 'public = Accessible everywhere; private = Same class only; protected = Same class + Derived'
  },
  {
    id: 'oop-1-14',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Access Specifiers & Protection',
    question: 'Which statement about a protected member in C++ is correct?',
    options: [
      { id: 'A', text: 'It can be accessed by unrelated external code through an object' },
      { id: 'B', text: 'It can be accessed by derived classes' },
      { id: 'C', text: 'It can never be accessed by a child class' },
      { id: 'D', text: 'It is exactly the same as private' }
    ],
    correctAnswer: 'B',
    explanation: 'Protected members cannot be accessed directly from outside code, but they are fully accessible within derived (child) classes, distinguishing them from private members.',
    accentureTip: 'Protected = Hidden from outside world, but open to derived child classes'
  },
  {
    id: 'oop-1-15',
    tier: 1,
    tierName: 'Tier 1: Core Pillars & Basics',
    topic: 'Virtual Functions & Abstract Classes',
    question: 'What is the primary purpose of a virtual function in C++?',
    options: [
      { id: 'A', text: 'Compile-time function overloading' },
      { id: 'B', text: 'Runtime polymorphism' },
      { id: 'C', text: 'Memory allocation' },
      { id: 'D', text: 'Data encryption' }
    ],
    correctAnswer: 'B',
    explanation: 'Virtual functions instruct the C++ compiler to use dynamic dispatch (via vptr and vtable), ensuring that calls resolved at runtime execute the derived class implementation.',
    accentureTip: 'Virtual keyword in C++ = Enables runtime dynamic dispatch (Late Binding)'
  },

  // ==========================================
  // SECTION B: TIER 2 - ADVANCED MCQS (10 Qs)
  // ==========================================
  {
    id: 'oop-2-01',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Virtual Functions & Abstract Classes',
    question: 'Which declaration represents a pure virtual function in C++?',
    options: [
      { id: 'A', text: 'void display();' },
      { id: 'B', text: 'virtual void display();' },
      { id: 'C', text: 'virtual void display() = 0;' },
      { id: 'D', text: 'pure virtual display();' }
    ],
    correctAnswer: 'C',
    explanation: 'A pure virtual function is declared with virtual prefix and assigned = 0 at the end (virtual void func() = 0;). It has no base implementation and forces derived classes to override it.',
    accentureTip: 'virtual void func() = 0; → "= 0" denotes Pure Virtual Function'
  },
  {
    id: 'oop-2-02',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Virtual Functions & Abstract Classes',
    question: 'Consider:\nclass Animal {\npublic:\n  virtual void sound() = 0;\n};\nWhat is Animal?',
    options: [
      { id: 'A', text: 'Concrete class' },
      { id: 'B', text: 'Abstract class' },
      { id: 'C', text: 'Static class' },
      { id: 'D', text: 'Friend class' }
    ],
    correctAnswer: 'B',
    explanation: 'In C++, any class containing at least one pure virtual function (= 0) is automatically an abstract class. Abstract classes cannot be directly instantiated.',
    accentureTip: 'At least 1 pure virtual function = Abstract Class (cannot instantiate objects directly)'
  },
  {
    id: 'oop-2-03',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Constructors, Destructors & Lifetime',
    question: 'Can an abstract class have a constructor in C++?',
    options: [
      { id: 'A', text: 'No' },
      { id: 'B', text: 'Yes' },
      { id: 'C', text: 'Only if it has no virtual functions' },
      { id: 'D', text: 'Only in Java' }
    ],
    correctAnswer: 'B',
    explanation: 'Yes! An abstract class can have constructors. Although you cannot instantiate the abstract class on its own, its constructor is called to initialize the base class portion when a derived object is created.',
    accentureTip: 'Accenture Classic: Abstract classes CAN have constructors (invoked by derived child classes)'
  },
  {
    id: 'oop-2-04',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Binding & Static Members',
    question: 'Static binding occurs at:',
    options: [
      { id: 'A', text: 'Runtime' },
      { id: 'B', text: 'Compile time' },
      { id: 'C', text: 'Linker shutdown' },
      { id: 'D', text: 'Object destruction' }
    ],
    correctAnswer: 'B',
    explanation: 'Static (early) binding resolves function calls at compile time. Overloaded methods and non-virtual functions are statically bound by the compiler.',
    accentureTip: 'Static Binding = Early Binding = Compile Time'
  },
  {
    id: 'oop-2-05',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Binding & Static Members',
    question: 'Dynamic binding is also called:',
    options: [
      { id: 'A', text: 'Early binding' },
      { id: 'B', text: 'Compile-time binding' },
      { id: 'C', text: 'Late binding' },
      { id: 'D', text: 'Static binding' }
    ],
    correctAnswer: 'C',
    explanation: 'Dynamic binding, also known as late binding, defers connecting the function call to the actual method implementation until runtime based on the actual runtime object type.',
    accentureTip: 'Dynamic Binding = Late Binding = Runtime Binding'
  },
  {
    id: 'oop-2-06',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Constructors, Destructors & Lifetime',
    question: 'In C++, what does the this pointer refer to?',
    options: [
      { id: 'A', text: 'Parent class' },
      { id: 'B', text: 'Current object' },
      { id: 'C', text: 'Current class definition itself' },
      { id: 'D', text: 'Previous object' }
    ],
    correctAnswer: 'B',
    explanation: 'The "this" pointer is an implicit pointer passed to all non-static member functions, holding the memory address of the invoking current object.',
    accentureTip: 'this pointer = Holds the address of the current object instance'
  },
  {
    id: 'oop-2-07',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Binding & Static Members',
    question: 'Which statement is correct about a static member function?',
    options: [
      { id: 'A', text: 'It always requires an object to call it' },
      { id: 'B', text: 'It has a this pointer' },
      { id: 'C', text: 'It can be called using the class name' },
      { id: 'D', text: 'It can directly access every non-static member' }
    ],
    correctAnswer: 'C',
    explanation: 'Static member functions belong to the class as a whole, can be invoked directly using the class name (ClassName::func()), and lack a "this" pointer so cannot access non-static members directly.',
    accentureTip: 'Static function: Call with ClassName::func(), NO this pointer, accesses static members only'
  },
  {
    id: 'oop-2-08',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Diamond Problem & Multiple Inheritance',
    question: 'Which programming language directly supports multiple inheritance of classes?',
    options: [
      { id: 'A', text: 'C++' },
      { id: 'B', text: 'Java classes' },
      { id: 'C', text: 'C# classes' },
      { id: 'D', text: 'HTML' }
    ],
    correctAnswer: 'A',
    explanation: 'C++ directly supports multiple class inheritance (class C : public A, public B). Java and C# disallow multiple inheritance of classes to prevent the diamond problem, permitting multiple interfaces instead.',
    accentureTip: 'C++ supports multiple class inheritance directly; Java/C# support multiple interfaces only'
  },
  {
    id: 'oop-2-09',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Diamond Problem & Multiple Inheritance',
    question: 'The diamond problem in object-oriented programming primarily occurs because:',
    options: [
      { id: 'A', text: 'A class has no constructor' },
      { id: 'B', text: 'Multiple inheritance creates multiple paths to the same base class' },
      { id: 'C', text: 'Functions are overloaded' },
      { id: 'D', text: 'A class contains private variables' }
    ],
    correctAnswer: 'B',
    explanation: 'The diamond problem arises when a class inherits from two intermediate classes that both inherit from a single common grandparent class, causing duplicate subobjects and member ambiguity.',
    accentureTip: 'Diamond Problem = Multiple inheritance paths to the same common base class'
  },
  {
    id: 'oop-2-10',
    tier: 2,
    tierName: 'Tier 2: Virtual Dispatch & Architecture',
    topic: 'Diamond Problem & Multiple Inheritance',
    question: 'Which C++ mechanism can solve the classic diamond inheritance problem?',
    options: [
      { id: 'A', text: 'Function overloading' },
      { id: 'B', text: 'Encapsulation' },
      { id: 'C', text: 'Virtual inheritance' },
      { id: 'D', text: 'Constructor overloading' }
    ],
    correctAnswer: 'C',
    explanation: 'Virtual inheritance (class B : virtual public A) ensures that only one shared instance of the common base class subobject exists in the most derived class, eliminating ambiguity.',
    accentureTip: 'Diamond Problem Solution in C++ = Virtual Base Class / Virtual Inheritance'
  },

  // ==========================================
  // SECTION C: TIER 3 - SCENARIO MCQS (10 Qs)
  // ==========================================
  {
    id: 'oop-3-01',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A banking application does not allow users to directly modify balance. Instead, users must use deposit() and withdraw() methods that validate transactions. Which OOP principle is primarily being used?',
    options: [
      { id: 'A', text: 'Inheritance' },
      { id: 'B', text: 'Encapsulation' },
      { id: 'C', text: 'Polymorphism' },
      { id: 'D', text: 'Multiple inheritance' }
    ],
    correctAnswer: 'B',
    explanation: 'Validating balance updates through deposit() and withdraw() methods while making balance private is the textbook definition of Encapsulation (data protection and controlled state mutation).',
    accentureTip: 'Bank Account Balance + Validation Methods = Encapsulation'
  },
  {
    id: 'oop-3-02',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A payment application has a pay() operation. The same operation works differently for CreditCard, UPI, and PayPal. Which OOP concept best describes this design?',
    options: [
      { id: 'A', text: 'Polymorphism' },
      { id: 'B', text: 'Encapsulation only' },
      { id: 'C', text: 'Constructor chaining' },
      { id: 'D', text: 'Data hiding only' }
    ],
    correctAnswer: 'A',
    explanation: 'A uniform method signature (pay()) invoking diverse processing logic across different payment channel objects at runtime is Polymorphism.',
    accentureTip: 'Common pay() operation executing differently across payment types = Polymorphism'
  },
  {
    id: 'oop-3-03',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A company has an Employee class and a derived Manager class. The Manager automatically gets common employee functionality such as calculateSalary(). Which concept is being used?',
    options: [
      { id: 'A', text: 'Abstraction' },
      { id: 'B', text: 'Inheritance' },
      { id: 'C', text: 'Overloading' },
      { id: 'D', text: 'Dynamic binding' }
    ],
    correctAnswer: 'B',
    explanation: 'Manager reusing calculateSalary() directly from the base Employee class exemplifies Inheritance ("IS-A" hierarchy allowing automatic feature reusability).',
    accentureTip: 'Manager acquiring common Employee functionality = Inheritance'
  },
  {
    id: 'oop-3-04',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A vehicle software program defines:\nvoid start(int key);\nvoid start(string fingerprint);\nWhich concept is demonstrated?',
    options: [
      { id: 'A', text: 'Method overriding' },
      { id: 'B', text: 'Function overloading' },
      { id: 'C', text: 'Dynamic binding' },
      { id: 'D', text: 'Inheritance' }
    ],
    correctAnswer: 'B',
    explanation: 'Both methods have the identical name "start" in the same scope, differentiated only by their parameter types (int key vs string fingerprint), which is function overloading.',
    accentureTip: 'start(int key) vs start(string fingerprint) = Function Overloading'
  },
  {
    id: 'oop-3-05',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'Consider:\nclass Animal { public: virtual void sound() { cout << "Animal"; } };\nclass Dog : public Animal { public: void sound() override { cout << "Bark"; } };\nThen:\nAnimal* a = new Dog();\na->sound();\nWhat is printed?',
    options: [
      { id: 'A', text: 'Animal' },
      { id: 'B', text: 'Dog' },
      { id: 'C', text: 'Bark' },
      { id: 'D', text: 'Compilation error' }
    ],
    correctAnswer: 'C',
    explanation: 'Because Animal::sound() is marked virtual, the call a->sound() is dispatched dynamically at runtime via the virtual table to Dog\'s overridden method, outputting "Bark".',
    accentureTip: 'Virtual base method + Dog instance = Prints "Bark" (Dynamic Dispatch)'
  },
  {
    id: 'oop-3-06',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A company wants every payment method to implement pay(), but does not want anyone to instantiate the generic Payment class directly. What is the best design?',
    options: [
      { id: 'A', text: 'Concrete class with no methods' },
      { id: 'B', text: 'Abstract class with a pure virtual pay()' },
      { id: 'C', text: 'Private constructor only' },
      { id: 'D', text: 'Function overloading' }
    ],
    correctAnswer: 'B',
    explanation: 'Making Payment an abstract class with a pure virtual function (virtual void pay() = 0;) forces every derived payment method to provide an implementation while preventing direct instantiation of Payment.',
    accentureTip: 'Enforce contract + prevent instantiation = Abstract Class with Pure Virtual Function'
  },
  {
    id: 'oop-3-07',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'Consider:\nclass Student {\n  int age;\npublic:\n  Student(int age) {\n    this->age = age;\n  }\n};\nWhy is this->age used?',
    options: [
      { id: 'A', text: 'To access the parent class\'s age' },
      { id: 'B', text: 'To access the current object\'s member age' },
      { id: 'C', text: 'To create a new object' },
      { id: 'D', text: 'To make age static' }
    ],
    correctAnswer: 'B',
    explanation: 'The parameter "age" shadows the member variable "age". Using this->age explicitly identifies the member variable belonging to the invoking instance, disambiguating it from the constructor argument.',
    accentureTip: 'this->member = Disambiguate instance variable from method parameter'
  },
  {
    id: 'oop-3-08',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'Suppose a university wants to maintain one counter representing the total number of Student objects created, shared across all objects. Which should be used?',
    options: [
      { id: 'A', text: 'Instance variable' },
      { id: 'B', text: 'Static data member' },
      { id: 'C', text: 'Local variable' },
      { id: 'D', text: 'Pure virtual function' }
    ],
    correctAnswer: 'B',
    explanation: 'A static data member exists as a single shared variable across all instances of the class rather than being duplicated for each object, making it ideal for tracking object counts.',
    accentureTip: 'Single shared value across all instances (e.g. object count) = Static Data Member'
  },
  {
    id: 'oop-3-09',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A developer creates:\nPerson\n/    \\\nStudent Employee\n\\    /\nIntern\nBoth Student and Employee inherit from Person. Intern therefore gets two paths to Person. What problem may occur?',
    options: [
      { id: 'A', text: 'Encapsulation problem' },
      { id: 'B', text: 'Diamond problem' },
      { id: 'C', text: 'Constructor overloading' },
      { id: 'D', text: 'Function overloading' }
    ],
    correctAnswer: 'B',
    explanation: 'Inheriting from Student and Employee (which both inherit from Person) causes the classic Diamond Problem, resulting in two separate copies of Person subobjects and ambiguous member access in Intern.',
    accentureTip: 'Person → Student, Employee → Intern = Classic Diamond Problem'
  },
  {
    id: 'oop-3-10',
    tier: 3,
    tierName: 'Tier 3: Scenario-Based Design',
    topic: 'Real-World System Scenarios',
    question: 'A software system requires every notification service to implement send(). There are EmailNotification, SMSNotification, and PushNotification. Which design best represents this requirement?',
    options: [
      { id: 'A', text: 'Interface/abstract contract' },
      { id: 'B', text: 'Only function overloading' },
      { id: 'C', text: 'Only encapsulation' },
      { id: 'D', text: 'Destructor' }
    ],
    correctAnswer: 'A',
    explanation: 'An interface or abstract class defining a pure virtual send() method creates a uniform contract that each notification provider must fulfill, decoupling the sender from notification delivery logic.',
    accentureTip: 'Common send() contract for Email, SMS, Push = Interface / Abstract Contract'
  }
];

// =========================================================================
// 4-OPTION BREAKDOWN MAP (All 35 Questions with Explanations for A, B, C, D)
// =========================================================================
export const oopOptionExplanationsMap = {
  'oop-1-01': {
    correctOption: 'D',
    memoryPill: 'Four Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation', why: 'Encapsulation is one of the four foundational pillars of OOP that combines state and behavior into a single class unit while controlling access.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Abstraction', why: 'Abstraction is one of the four core pillars of OOP that presents essential features while hiding internal technical complexity.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Inheritance', why: 'Inheritance is one of the four core pillars of OOP that facilitates hierarchical code reusability from parent to child classes.' },
    D: { isCorrect: true, status: 'Correct Answer', text: 'Compilation', why: 'Compilation is a build-time language translation process (converting code to machine code), NOT an object-oriented paradigm pillar.' }
  },
  'oop-1-02': {
    correctOption: 'B',
    memoryPill: 'Private fields + Public getters/setters = Encapsulation',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Inheritance', why: 'Inheritance involves deriving a child class from a parent class; here there is no class hierarchy.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Encapsulation', why: 'Keeping balance private and guarding modifications with deposit() and getBalance() methods encapsulates data and enforces business rules.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Polymorphism', why: 'Polymorphism entails identical interfaces taking on different runtime behaviors, which is not present in single-variable encapsulation.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Compilation', why: 'Compilation is a build-stage procedure completely unrelated to software architecture principles.' }
  },
  'oop-1-03': {
    correctOption: 'B',
    memoryPill: 'Hiding internal mechanics, showing clean interface = Abstraction',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation', why: 'Encapsulation focuses on data-bundling and access control, whereas hiding engineering complexity from user view is abstraction.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Abstraction', why: 'The driver presses start() without needing to understand or manage internal combustion, spark ignition, or fuel injection pipelines.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Inheritance', why: 'No base/derived relationship or class reuse is described in this vehicle ignition scenario.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Overloading', why: 'Overloading involves defining multiple methods with the same name and differing signatures in the same scope.' }
  },
  'oop-1-04': {
    correctOption: 'C',
    memoryPill: 'Code reuse across parent-child classes = Inheritance',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation', why: 'Encapsulation protects data integrity within a class, but does not establish parent-child relationships.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Abstraction', why: 'Abstraction hides unnecessary complexity; it does not model subclass inheritance hierarchies.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Inheritance', why: 'Inheritance enables a child class to acquire and reuse fields and methods from a parent class, avoiding code duplication.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Constructor', why: 'A constructor initializes an individual object instance during creation; it is not an inheritance mechanism.' }
  },
  'oop-1-05': {
    correctOption: 'B',
    memoryPill: 'Poly (Many) + Morph (Forms) = Multiple Behaviors for One Name',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'One class, one object', why: 'This refers to class instantiation or singleton-like usage, not polymorphic behavior.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'One interface/name with multiple forms or behaviors', why: 'From Greek "poly" (many) and "morph" (forms), polymorphism allows one function name or interface to express multiple distinct behaviors.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Hiding all data', why: 'Data hiding is an aspect of encapsulation and information hiding.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Reusing only variables', why: 'Variable reuse is a general programming practice, not the definition of polymorphism.' }
  },
  'oop-1-06': {
    correctOption: 'A',
    memoryPill: 'Same name + Different parameter list = Overloading',
    A: { isCorrect: true, status: 'Correct Answer', text: 'void add(int a, int b); and void add(int a, int b, int c);', why: 'Two methods share the exact same name "add" within the same scope with different parameter counts (2 vs 3 integers).' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'class Dog : public Animal {};', why: 'This is the C++ syntax for class inheritance, not function overloading.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'class Dog { void bark(); };', why: 'This is a standard member function declaration inside a class.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'private: int age;', why: 'This is an access specifier declaring a private member variable.' }
  },
  'oop-1-07': {
    correctOption: 'B',
    memoryPill: 'Return type alone cannot disambiguate an overload',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Yes', why: 'Incorrect. If callers write add(5, 10); without assigning the result, the compiler cannot know which function to call.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'No', why: 'Function overloading requires distinct parameter counts, types, or sequences. Changing solely the return type results in a compiler error.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Only in C++', why: 'C++ strictly rejects overloading differing only by return type just like Java and C#.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Only when functions are private', why: 'Access specifiers have zero bearing on overload resolution rules.' }
  },
  'oop-1-08': {
    correctOption: 'B',
    memoryPill: 'Child re-implementing base method with same signature = Overriding',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Overloading', why: 'Overloading happens in the same class/scope with differing parameter signatures.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Overriding', why: 'Method overriding happens across an inheritance boundary when a child class provides a custom implementation of an inherited base method.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation', why: 'Encapsulation packages state and operations into a single unit.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Abstraction', why: 'Abstraction conceals implementation complexity.' }
  },
  'oop-1-09': {
    correctOption: 'A',
    memoryPill: 'Compile-time polymorphism = Function / Operator Overloading',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Function overloading', why: 'Function overloading is resolved statically at compile time by analyzing call arguments (early binding).' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Virtual function overriding', why: 'Virtual function overriding is resolved dynamically at runtime through the vtable (runtime polymorphism).' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Dynamic binding', why: 'Dynamic binding occurs at runtime, not compile time.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Abstract class', why: 'Abstract classes provide structural design contracts, not compile-time polymorphism.' }
  },
  'oop-1-10': {
    correctOption: 'B',
    memoryPill: 'Virtual functions + Base pointer = Runtime Polymorphism',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Overloading + static binding', why: 'Overloading with static binding is compile-time polymorphism.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Overriding + virtual function', why: 'In C++, virtual functions enable dynamic dispatch, allowing base pointers/references to call the derived class override at runtime.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Constructor + destructor', why: 'Constructors and destructors manage object creation and destruction lifecycles.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation + inheritance', why: 'These are structural OOP concepts, but do not provide runtime polymorphic dispatch by themselves.' }
  },
  'oop-1-11': {
    correctOption: 'B',
    memoryPill: 'Constructor: Same name as class, no return type, automatic call',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'It must return void', why: 'Constructors have NO return type at all—not even void.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'It has the same name as the class', why: 'A constructor always shares the identical identifier as the enclosing class (e.g. Student::Student()).' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'It must be declared static', why: 'Constructors cannot be static because they operate on an uninitialized instance.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'It is called manually before every object access', why: 'Constructors are invoked automatically by the runtime upon object instantiation.' }
  },
  'oop-1-12': {
    correctOption: 'C',
    memoryPill: 'Destructor = ~ClassName() (Tilde prefix)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Student()', why: 'This is the default constructor syntax.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'delete Student()', why: 'delete is an operator used for deallocating dynamic memory on heap pointers.' },
    C: { isCorrect: true, status: 'Correct Answer', text: '~Student()', why: 'In C++, the destructor method is defined with a tilde (~) immediately preceding the class name.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'destructor Student()', why: 'destructor is not a valid C++ keyword.' }
  },
  'oop-1-13': {
    correctOption: 'C',
    memoryPill: 'public = Globally accessible wherever the object is available',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'private', why: 'Private members can only be accessed from within member functions of the declaring class.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'protected', why: 'Protected members are accessible only within the class and its derived sub-classes.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'public', why: 'Public members are unrestricted and accessible from any external code with access to the object.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'internal', why: 'internal is used in C# (.NET assembly level), not standard C++.' }
  },
  'oop-1-14': {
    correctOption: 'B',
    memoryPill: 'Protected = Class itself + Derived classes only',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'It can be accessed by unrelated external code through an object', why: 'Unrelated code outside the hierarchy cannot access protected members.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'It can be accessed by derived classes', why: 'Protected members are inherited and directly accessible within member functions of derived (child) classes.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'It can never be accessed by a child class', why: 'This contradicts the fundamental purpose of the protected access specifier.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'It is exactly the same as private', why: 'Private members are never directly accessible by derived classes; protected members are.' }
  },
  'oop-1-15': {
    correctOption: 'B',
    memoryPill: 'Virtual function = Dynamic dispatch / Runtime Polymorphism',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Compile-time function overloading', why: 'Function overloading uses static compile-time binding and does not use virtual functions.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Runtime polymorphism', why: 'Virtual functions establish vtables so calls via pointers/references resolve to the correct derived implementation at runtime.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Memory allocation', why: 'Operators new and malloc handle memory allocation, not virtual functions.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Data encryption', why: 'Virtual functions have nothing to do with cryptography or encryption.' }
  },

  // ==========================================
  // SECTION B: TIER 2 - ADVANCED MCQS (10 Qs)
  // ==========================================
  'oop-2-01': {
    correctOption: 'C',
    memoryPill: 'Pure Virtual = virtual + "= 0"',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'void display();', why: 'This is a regular non-virtual member function.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'virtual void display();', why: 'This is a standard virtual function requiring a function body.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'virtual void display() = 0;', why: 'Assigning "= 0" to a virtual declaration signifies a pure virtual function, making the class abstract.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'pure virtual display();', why: 'This is invalid C++ syntax.' }
  },
  'oop-2-02': {
    correctOption: 'B',
    memoryPill: 'At least 1 pure virtual function = Abstract Class',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Concrete class', why: 'Concrete classes provide complete implementations and can be instantiated directly.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Abstract class', why: 'Because Animal defines "virtual void sound() = 0;", it is an abstract class and cannot be instantiated.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Static class', why: 'C++ has no static class concept (unlike C#).' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Friend class', why: 'Friend classes involve the friend keyword granting access to private members.' }
  },
  'oop-2-03': {
    correctOption: 'B',
    memoryPill: 'Abstract classes CAN have constructors (to initialize base fields)',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'No', why: 'Common misconception! Abstract classes can and frequently do have constructors.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Yes', why: 'Derived class constructors invoke the abstract base class constructor to initialize base member variables.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Only if it has no virtual functions', why: 'An abstract class by definition has at least one pure virtual function, and can still have constructors.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Only in Java', why: 'Both C++ and Java allow constructors in abstract classes.' }
  },
  'oop-2-04': {
    correctOption: 'B',
    memoryPill: 'Static Binding = Early Binding = Compile Time',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Runtime', why: 'Runtime binding is dynamic/late binding.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Compile time', why: 'Static binding connects the function call to its address during compilation.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Linker shutdown', why: 'Linker shutdown is not an execution binding phase.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Object destruction', why: 'Destruction cleans up object instances; binding occurs when calls are resolved.' }
  },
  'oop-2-05': {
    correctOption: 'C',
    memoryPill: 'Dynamic Binding = Late Binding',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Early binding', why: 'Early binding is another term for static (compile-time) binding.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Compile-time binding', why: 'Compile-time binding is static binding.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Late binding', why: 'Dynamic binding is widely referred to as late binding because the call target is determined late (at runtime).' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Static binding', why: 'Static binding is the exact opposite of dynamic binding.' }
  },
  'oop-2-06': {
    correctOption: 'B',
    memoryPill: 'this = Implicit pointer to the current invoking object',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Parent class', why: 'Java uses super and C++ uses BaseClass:: to refer to parent class members.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Current object', why: 'The "this" pointer holds the memory address of the current invoking instance in non-static member functions.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Current class definition itself', why: 'this refers to the specific memory instance, not the type/class metadata.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Previous object', why: 'OOP does not maintain pointers to arbitrary previous objects.' }
  },
  'oop-2-07': {
    correctOption: 'C',
    memoryPill: 'Static member function: Call via ClassName::func(), NO this pointer',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'It always requires an object to call it', why: 'Static functions can be invoked directly on the class without creating any object.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'It has a this pointer', why: 'Static functions have NO "this" pointer because they are not bound to any instance.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'It can be called using the class name', why: 'Static functions belong to the class namespace and are typically called as ClassName::functionName().' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'It can directly access every non-static member', why: 'Without a "this" pointer, static methods cannot access non-static instance fields directly.' }
  },
  'oop-2-08': {
    correctOption: 'A',
    memoryPill: 'C++ allows multiple class inheritance; Java/C# allow multiple interfaces only',
    A: { isCorrect: true, status: 'Correct Answer', text: 'C++', why: 'C++ natively allows a class to inherit from multiple parent classes (class C : public A, public B).' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Java classes', why: 'Java bans multiple class inheritance (extends A, B is invalid), permitting multiple interface implementation instead.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'C# classes', why: 'C# forbids multiple class inheritance, allowing multiple interfaces only.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'HTML', why: 'HTML is a hypertext markup language, not an object-oriented programming language.' }
  },
  'oop-2-09': {
    correctOption: 'B',
    memoryPill: 'Diamond Problem = Duplicate common base paths via multiple inheritance',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'A class has no constructor', why: 'Constructors are automatically generated by the compiler if absent.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Multiple inheritance creates multiple paths to the same base class', why: 'When D inherits from B and C (which both inherit from A), D gets two ambiguous copies of A.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Functions are overloaded', why: 'Overloading does not cause inheritance graph ambiguity.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'A class contains private variables', why: 'Data access level does not create the multiple inheritance path issue.' }
  },
  'oop-2-10': {
    correctOption: 'C',
    memoryPill: 'Virtual Inheritance solves the Diamond Problem in C++',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Function overloading', why: 'Overloading cannot prevent multiple base subobjects from existing.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation', why: 'Encapsulation is data protection and does not resolve hierarchy duplication.' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Virtual inheritance', why: 'Declaring "virtual public A" in classes B and C ensures D contains only ONE shared copy of A.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Constructor overloading', why: 'Constructor overloading does not alter the inheritance memory layout.' }
  },

  // ==========================================
  // SECTION C: TIER 3 - SCENARIO MCQS (10 Qs)
  // ==========================================
  'oop-3-01': {
    correctOption: 'B',
    memoryPill: 'Bank Balance + Validation Methods = Encapsulation',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Inheritance', why: 'No base/derived relationship exists in this account balance protection example.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Encapsulation', why: 'Keeping balance private and requiring modifications to pass through deposit() and withdraw() protects internal data state.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Polymorphism', why: 'No multiple method forms or polymorphic types are involved.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Multiple inheritance', why: 'No multiple base classes are involved.' }
  },
  'oop-3-02': {
    correctOption: 'A',
    memoryPill: 'Uniform pay() call executing differently per method = Polymorphism',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Polymorphism', why: 'CreditCard, UPI, and PayPal share the same pay() interface but execute customized algorithms at runtime.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation only', why: 'Encapsulation binds data and code, but does not describe the polymorphic multi-form behavior.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Constructor chaining', why: 'Constructor chaining relates to constructor calls across inheritance levels.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Data hiding only', why: 'Data hiding hides attributes, whereas this scenario emphasizes behavior variation.' }
  },
  'oop-3-03': {
    correctOption: 'B',
    memoryPill: 'Manager IS-A Employee reusing salary calculation = Inheritance',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Abstraction', why: 'Abstraction hides complexity, but here the focus is acquiring features from Employee.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Inheritance', why: 'Manager acquires calculateSalary() automatically because it derives from Employee.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Overloading', why: 'No multiple functions with the same name and differing parameter lists exist.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Dynamic binding', why: 'calculateSalary() is being directly reused, not dynamically dispatched across overrides.' }
  },
  'oop-3-04': {
    correctOption: 'B',
    memoryPill: 'start(int key) vs start(string fingerprint) = Function Overloading',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Method overriding', why: 'Overriding requires inheritance and identical parameter types.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Function overloading', why: 'Same method name "start" in the same class differentiated by argument types (int vs string).' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Dynamic binding', why: 'Overloaded functions are resolved statically at compile time.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Inheritance', why: 'Both methods are in the same vehicle system scope without class derivation.' }
  },
  'oop-3-05': {
    correctOption: 'C',
    memoryPill: 'Base pointer to Dog object + virtual sound() = Prints "Bark"',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Animal', why: 'Non-virtual calls would print Animal, but sound() is virtual so runtime dynamic dispatch occurs.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Dog', why: 'Dog is the class type; Dog::sound() outputs "Bark".' },
    C: { isCorrect: true, status: 'Correct Answer', text: 'Bark', why: 'Because sound() is virtual in Animal, calling a->sound() on an Animal* pointing to a Dog invokes Dog::sound().' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Compilation error', why: 'The code is valid standard C++ runtime polymorphism.' }
  },
  'oop-3-06': {
    correctOption: 'B',
    memoryPill: 'virtual void pay() = 0; forces implementation & blocks base instantiation',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Concrete class with no methods', why: 'Does not enforce derived implementations and can still be instantiated.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Abstract class with a pure virtual pay()', why: 'Declaring virtual void pay() = 0; prevents Payment from being instantiated and forces derived payment classes to implement it.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Private constructor only', why: 'A private constructor would also block derived classes from being instantiated normally.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Function overloading', why: 'Overloading does not enforce derived class contracts.' }
  },
  'oop-3-07': {
    correctOption: 'B',
    memoryPill: 'this->age refers to member variable, age refers to parameter',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'To access the parent class\'s age', why: 'this refers to the current class instance, not the parent class.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'To access the current object\'s member age', why: 'The parameter "age" shadows the member variable "age". this->age clarifies that the member is being assigned.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'To create a new object', why: 'Object allocation is done by new or stack definition, not this->.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'To make age static', why: 'static keyword declares static variables; this-> is exclusively for non-static instances.' }
  },
  'oop-3-08': {
    correctOption: 'B',
    memoryPill: 'Single counter shared among all class objects = Static Data Member',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Instance variable', why: 'Instance variables are duplicated for each object, preventing a unified shared count.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Static data member', why: 'Static data members are allocated once per class in static memory and shared across all instances.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Local variable', why: 'Local variables exist only within a single function invocation and are destroyed when it returns.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Pure virtual function', why: 'Pure virtual functions declare abstract behavior contracts, not shared state counters.' }
  },
  'oop-3-09': {
    correctOption: 'B',
    memoryPill: 'Person inherited via Student & Employee to Intern = Diamond Problem',
    A: { isCorrect: false, status: 'Incorrect Option', text: 'Encapsulation problem', why: 'The ambiguity is architectural due to multiple inheritance paths, not encapsulation.' },
    B: { isCorrect: true, status: 'Correct Answer', text: 'Diamond problem', why: 'Intern inherits two distinct copies of Person through Student and Employee, leading to member ambiguity.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Constructor overloading', why: 'Constructor signatures do not cause the diamond inheritance problem.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Function overloading', why: 'Function overloading involves same-scope signatures, not inheritance graph duplication.' }
  },
  'oop-3-10': {
    correctOption: 'A',
    memoryPill: 'Mandating send() across Email, SMS, Push = Interface / Abstract Contract',
    A: { isCorrect: true, status: 'Correct Answer', text: 'Interface/abstract contract', why: 'An interface or abstract class declaring pure virtual send() guarantees every notification provider delivers its own implementation.' },
    B: { isCorrect: false, status: 'Incorrect Option', text: 'Only function overloading', why: 'Overloading only changes signatures in a single class without enforcing a common design contract.' },
    C: { isCorrect: false, status: 'Incorrect Option', text: 'Only encapsulation', why: 'Encapsulation bundles state, but does not provide polymorphic interface substitution.' },
    D: { isCorrect: false, status: 'Incorrect Option', text: 'Destructor', why: 'Destructors handle object destruction and cleanup.' }
  }
};

export function getOopOptionBreakdown(questionId) {
  return oopOptionExplanationsMap[questionId] || null;
}

export function filterOopQuestions({ tier = 'all', topic = 'all', search = '' }) {
  return oopQuestions.filter((q) => {
    const matchesTier = tier === 'all' || Number(q.tier) === Number(tier);
    const matchesTopic = topic === 'all' || q.topic === topic;
    const matchesSearch = !search ||
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.explanation.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase()) ||
      (q.accentureTip && q.accentureTip.toLowerCase().includes(search.toLowerCase()));

    return matchesTier && matchesTopic && matchesSearch;
  });
}

// =========================================================================
// STUDY NOTES & REVISION HANDBOOK (From PDF Pages 1 to 17)
// =========================================================================
export const oopStudyGuides = [
  {
    tier: 1,
    title: 'Tier 1: Core OOP Pillars & Foundational Mechanics',
    summary: 'The fundamental building blocks of Object-Oriented Programming: Class vs Object, Encapsulation, Abstraction, Inheritance types, Overloading vs Overriding, and Object Lifetimes.',
    sections: [
      {
        heading: '1. What is OOP & Why OOP?',
        content: `**OOP (Object-Oriented Programming)** is a programming paradigm where programs are architected around **objects** that bundle data (attributes) and methods (functions).\n\n**Key Advantages for Scalable Software:**\n- **Code Reusability:** Inherit and extend existing functionality without rewriting from scratch.\n- **Data Security & Integrity:** Sensitive fields are shielded from direct outside tampering.\n- **Modularity & Maintainability:** Autonomous, decoupled classes make debugging and refactoring seamless.\n- **Real-World Entity Mapping:** Seamlessly represents tangible systems (e.g. BankAccount, User, Vehicle).`
      },
      {
        heading: '2. Class vs Object',
        content: `**Class:** A blueprint, template, or prototype defining properties (state) and behaviors (functions).\n**Object:** A tangible, instantiated concrete instance of a class allocated in memory.\n\n\`\`\`cpp\nclass Student {\npublic:\n    string name;\n    int age;\n    void study() { cout << "Studying"; }\n};\n\nStudent s1; // Object 1\nStudent s2; // Object 2\ns1.name = "Rahul";\ns2.name = "Amit";\n\`\`\`\n\n⭐ **Interview Question:** A class is an abstract blueprint; an object is a living instance in RAM that holds state.`
      },
      {
        heading: '3. Encapsulation (Data Protection)',
        content: `**Encapsulation** is the bundling of data and the methods that operate on it into a single unit (class) while restricting direct outside access to internal data.\n\n\`\`\`cpp\nclass BankAccount {\nprivate:\n    double balance; // Private internal state\npublic:\n    void deposit(double amount) {\n        if (amount > 0) balance += amount; // Controlled validation\n    }\n    double getBalance() { return balance; }\n};\n\`\`\`\n\n⚠️ **Accenture Trap Warning:** Do not simply say "Encapsulation means making variables private." Private members help achieve it, but encapsulation is the broader architectural discipline of bundling state with operations and strictly controlling mutation via methods.`
      },
      {
        heading: '4. Abstraction (Hiding Complexity)',
        content: `**Abstraction** means presenting only essential functionality to the outside consumer while concealing internal complexity.\n\n**Real-World Example (ATM):**\n- **What you see:** Insert card, enter PIN, select cash amount.\n- **What is hidden:** Database SQL queries, inter-bank cryptographic handshakes, ledger rollbacks.\n\n| Feature | Encapsulation | Abstraction |\n| :--- | :--- | :--- |\n| **Focus** | How data is protected and bundled | What functionality is exposed |\n| **Mechanism** | Access modifiers (\`private\`, \`public\`) | Abstract classes & pure interfaces |\n| **Core Goal** | Data hiding & access control | Complexity hiding & contractual design |`
      },
      {
        heading: '5. Inheritance & Its 5 Varieties',
        content: `Inheritance allows a derived (child) class to acquire properties and behaviors from a base (parent) class to maximize **code reusability**.\n\n**The 5 Inheritance Architectures:**\n1. **Single:** One Parent → One Child (\`A → B\`)\n2. **Multilevel:** Chain of derivation (\`A → B → C\`)\n3. **Hierarchical:** One Parent → Multiple Children (\`A → B\` and \`A → C\`)\n4. **Multiple:** Multiple Parents → One Child (\`A, B → C\`) *(Supported in C++, forbidden for classes in Java/C#)*\n5. **Hybrid:** Combination of multiple and hierarchical inheritance patterns.`
      },
      {
        heading: '6. Function Overloading vs Method Overriding',
        content: `**Function Overloading (Compile-Time Polymorphism):**\n- Same function name, differing parameter list (count, types, order).\n- Resolved at compile time.\n- ⚠️ **Accenture Trap:** Overloading **CANNOT** be achieved by altering solely the return type! \`int add(int, int)\` and \`double add(int, int)\` produce a compilation error.\n\n**Method Overriding (Runtime Polymorphism):**\n- Derived class provides its own implementation of an inherited base method with the same signature.\n- Requires \`virtual\` in C++ for runtime dynamic dispatch.\n\n| Feature | Overloading | Overriding |\n| :--- | :--- | :--- |\n| **Polymorphism** | Compile-Time (Static) | Runtime (Dynamic) |\n| **Scope** | Same Class | Parent-Child Hierarchy |\n| **Signature** | Must have different parameters | Must have identical signature |\n| **\`virtual\`** | Not required | Essential in C++ for base pointer dispatch |`
      },
      {
        heading: '7. Constructors, Destructors & Access Modifiers',
        content: `**Constructor:** Special member function that initializes an object. Same name as class, NO return type, invoked automatically.\n- Types: Default, Parameterized, Copy Constructor (\`Student(const Student &s)\`).\n\n**Destructor (\`~ClassName()\`):** Executes cleanup upon object destruction. Cannot take parameters, cannot be overloaded.\n\n**Access Specifiers:**\n- \`public\`: Accessible everywhere.\n- \`protected\`: Accessible within same class and derived child classes.\n- \`private\`: Accessible only within the declaring class.`
      }
    ]
  },
  {
    tier: 2,
    title: 'Tier 2: Virtual Dispatch & Architecture',
    summary: 'Advanced OOP mechanics that distinguish candidates who truly understand OOP from those who just memorized definitions: Virtual Functions, Abstract Classes, Binding, static members, and the Diamond Problem.',
    sections: [
      {
        heading: '1. Virtual Functions & Dynamic Dispatch',
        content: `A **virtual function** enables C++ to achieve **runtime polymorphism** through dynamic dispatch via a hidden virtual table (\`vtable\`) and virtual pointer (\`vptr\`).\n\n\`\`\`cpp\nclass Animal {\npublic:\n    virtual void sound() { cout << "Animal"; }\n};\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "Bark"; }\n};\n\nAnimal* ptr = new Dog();\nptr->sound(); // Output: "Bark" because sound() is virtual!\n\`\`\`\n\n⚠️ **Accenture Trap:** Without the \`virtual\` keyword on the base method, \`ptr->sound()\` resolves to the static pointer type at compile-time and outputs \`Animal\`!`
      },
      {
        heading: '2. Static vs Dynamic Binding',
        content: `**Binding** is the act of connecting a function call to the concrete function body that will execute.\n\n- **Static (Early) Binding:** Resolved at compile time. Used for regular non-virtual functions and overloaded methods. Faster execution.\n- **Dynamic (Late) Binding:** Resolved at runtime based on the actual type of object pointed to. Enabled by \`virtual\` functions.\n\n| Attribute | Static Binding | Dynamic Binding |\n| :--- | :--- | :--- |\n| **Resolution Time** | Compile Time | Runtime |\n| **Mechanism** | Function Overloading, non-virtual calls | Virtual function overriding |\n| **Performance** | Zero runtime overhead | Minor vtable lookup indirection |`
      },
      {
        heading: '3. Pure Virtual Functions & Abstract Classes',
        content: `A **pure virtual function** has no implementation in the base class and is designated by \`= 0\`.\n\n\`\`\`cpp\nclass Shape {\npublic:\n    virtual void draw() = 0; // Pure Virtual Function\n};\n\`\`\`\n\n**Abstract Class Rules:**\n- Any class with at least one pure virtual function is **Abstract**.\n- You **CANNOT** create an object of an abstract class (\`Shape s;\` ❌).\n- You **CAN** create pointers/references to it (\`Shape* ptr;\` ✅).\n- ⭐ **Accenture Classic:** Abstract classes **CAN have constructors**! They initialize base members when derived objects are instantiated.`
      },
      {
        heading: '4. The this Pointer & Static Members',
        content: `**\`this\` Pointer:**\n- An implicit pointer passed to all non-static member functions pointing to the current invoking instance.\n- Frequently used when parameter names shadow class member names: \`this->age = age;\`.\n\n**Static Members:**\n- **Static Data Member:** Allocated once in global/static memory, shared across ALL instances of the class (ideal for object counters).\n- **Static Member Function:** Callable directly via \`ClassName::func()\` without instantiating an object.\n- ⚠️ **Key Rule:** Static member functions have **NO \`this\` pointer** and therefore cannot directly access non-static instance members!`
      },
      {
        heading: '5. The Diamond Problem & Virtual Inheritance',
        content: `The **Diamond Problem** occurs in multiple inheritance when a class inherits from two intermediate classes that share a common grandparent base class.\n\n\`\`\`\n       Person (A)\n       /        \\\n  Student (B)  Employee (C)\n       \\        /\n       Intern (D)\n\`\`\`\n\nWithout virtual inheritance, \`Intern\` receives **two separate, duplicate copies of Person**, leading to compiler ambiguity when accessing \`Person\` members (\`d.name\` is ambiguous!).\n\n**The C++ Solution: Virtual Inheritance**\n\`\`\`cpp\nclass Student : virtual public Person {};\nclass Employee : virtual public Person {};\nclass Intern : public Student, public Employee {};\n\`\`\`\nNow only a single shared \`Person\` subobject is allocated within \`Intern\`!`
      }
    ]
  },
  {
    tier: 3,
    title: 'Tier 3: Scenario-Based Design & System Architecture',
    summary: 'Accenture real-world case study scenarios testing your ability to apply OOP principles to concrete software engineering challenges.',
    sections: [
      {
        heading: '1. Banking System Scenario (Encapsulation)',
        content: `**Scenario:** A financial application requires that account balances cannot be directly overwritten from outside scripts. All balance modifications must pass through \`deposit()\` and \`withdraw()\` routines that perform validation.\n\n**Applied Principle:** **Encapsulation**\n- Keeps \`balance\` strictly \`private\`.\n- Enforces transaction integrity and invariants via public member functions.`
      },
      {
        heading: '2. Multi-Channel Payment Gateway (Polymorphism & Interfaces)',
        content: `**Scenario:** An e-commerce checkout invokes a uniform \`pay()\` command, but the payment processing algorithm varies dramatically for \`CreditCard\`, \`UPI\`, and \`PayPal\`.\n\n**Applied Principle:** **Polymorphism & Abstract Interfaces**\n- Base class/interface defines \`virtual void pay() = 0;\`.\n- The checkout orchestrator operates against a \`Payment*\` pointer without coupling to concrete payment gateway APIs.`
      },
      {
        heading: '3. Shared Instance Counter (Static Data Members)',
        content: `**Scenario:** A campus portal needs to track the total number of student profiles created across all faculties without using global variables.\n\n**Applied Principle:** **Static Class Members**\n- Declare \`static int totalStudents;\` within \`Student\` class.\n- Increment in the constructor, decrement in the destructor.\n- Access via \`Student::getTotalStudents()\` without needing an individual student instance.`
      },
      {
        heading: '4. Notification Dispatcher Contract (Abstraction)',
        content: `**Scenario:** An enterprise microservice sends alerts via Email, SMS, and Push Notifications. New notification channels should be pluggable without rewriting the alert core.\n\n**Applied Principle:** **Interface / Contract Abstraction**\n- Define an abstract notification base class with pure virtual \`send()\`. Each channel implements its own delivery logic, adhering to the Open/Closed Principle (OCP).`
      }
    ]
  }
];

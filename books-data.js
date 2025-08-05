// Comprehensive book database for the AI Career Path platform
// This file contains metadata for all available books in the repository

const BOOKS_DATABASE = [
    // AI & Machine Learning
    {
        filename: "Artificial Intelligence - A Modern Approach 2nd ed.pdf",
        title: "Artificial Intelligence - A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        year: "2020",
        edition: "2nd Edition",
        category: "ai",
        level: "advanced",
        description: "The most comprehensive AI textbook covering all major AI topics including search, logic, planning, learning, and more.",
        skills: ["AI", "Machine Learning", "Algorithms", "Search", "Logic"]
    },

    // Programming Languages & Best Practices
    {
        filename: "Clean Code.pdf",
        title: "Clean Code",
        author: "Robert C. Martin",
        year: "2008",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn how to write clean, maintainable, and professional code with practical examples and best practices.",
        skills: ["Clean Code", "Best Practices", "Software Design", "Refactoring"]
    },
    {
        filename: "Effective Java (3rd Edition).pdf",
        title: "Effective Java",
        author: "Joshua Bloch",
        year: "2017",
        edition: "3rd Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn best practices for Java programming and design with real-world examples.",
        skills: ["Java", "Best Practices", "Programming", "Object-Oriented Design"]
    },
    {
        filename: "Effective Modern C++ 11 and 14.pdf",
        title: "Effective Modern C++",
        author: "Scott Meyers",
        year: "2014",
        edition: "1st Edition",
        category: "programming",
        level: "advanced",
        description: "Master modern C++11 and C++14 features and best practices for effective programming.",
        skills: ["C++", "Modern C++", "Best Practices", "Performance"]
    },
    {
        filename: "Effective C++ 3rd ed.pdf",
        title: "Effective C++",
        author: "Scott Meyers",
        year: "2005",
        edition: "3rd Edition",
        category: "programming",
        level: "intermediate",
        description: "Essential best practices for C++ programming and object-oriented design.",
        skills: ["C++", "Best Practices", "Object-Oriented Programming", "Performance"]
    },
    {
        filename: "Go In Action.pdf",
        title: "Go In Action",
        author: "William Kennedy",
        year: "2015",
        edition: "1st Edition",
        category: "programming",
        level: "beginner",
        description: "Learn Go programming language with practical examples and real-world applications.",
        skills: ["Go", "Programming", "Web Development", "Concurrency"]
    },
    {
        filename: "Go Web Programming.pdf",
        title: "Go Web Programming",
        author: "Sau Sheong Chang",
        year: "2016",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn web development with Go programming language and modern web frameworks.",
        skills: ["Go", "Web Development", "HTTP", "Templates"]
    },
    {
        filename: "Java 8 In Action.pdf",
        title: "Java 8 In Action",
        author: "Raoul-Gabriel Urma",
        year: "2014",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn Java 8 features including lambda expressions, streams, and functional programming.",
        skills: ["Java 8", "Lambda", "Streams", "Functional Programming"]
    },
    {
        filename: "Kotlin In Action.pdf",
        title: "Kotlin In Action",
        author: "Dmitry Jemerov & Svetlana Isakova",
        year: "2017",
        edition: "1st Edition",
        category: "programming",
        level: "beginner",
        description: "Learn Kotlin programming language for modern application development.",
        skills: ["Kotlin", "Android", "JVM", "Modern Programming"]
    },
    {
        filename: "C++ Today.pdf",
        title: "C++ Today",
        author: "Various Authors",
        year: "2015",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn modern C++ programming with the latest features and best practices.",
        skills: ["C++", "Modern C++", "Programming", "STL"]
    },
    {
        filename: "A Tour of C++.pdf",
        title: "A Tour of C++",
        author: "Bjarne Stroustrup",
        year: "2018",
        edition: "2nd Edition",
        category: "programming",
        level: "intermediate",
        description: "A concise overview of C++ by the language's creator, covering modern C++ features.",
        skills: ["C++", "Language Overview", "Modern Features", "STL"]
    },
    {
        filename: "Beginning Visual C++ 2013.pdf",
        title: "Beginning Visual C++ 2013",
        author: "Ivor Horton",
        year: "2013",
        edition: "1st Edition",
        category: "programming",
        level: "beginner",
        description: "Comprehensive introduction to Visual C++ programming and Windows development.",
        skills: ["Visual C++", "Windows Programming", "IDE", "Beginner Programming"]
    },

    // Software Architecture & Design
    {
        filename: "Clean Architecture A Craftsman Guide to Software Structure and Design.pdf",
        title: "Clean Architecture",
        author: "Robert C. Martin",
        year: "2017",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn how to design clean, maintainable software architecture and structure.",
        skills: ["Architecture", "Design", "Software Engineering", "SOLID Principles"]
    },
    {
        filename: "Building Microservices.pdf",
        title: "Building Microservices",
        author: "Sam Newman",
        year: "2015",
        edition: "1st Edition",
        category: "architecture",
        level: "intermediate",
        description: "Learn how to design and build microservices architecture for scalable applications.",
        skills: ["Microservices", "Architecture", "Distributed Systems", "Scalability"]
    },
    {
        filename: "Domain Driven Design.pdf",
        title: "Domain Driven Design",
        author: "Eric Evans",
        year: "2003",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn how to design software that reflects the domain model and business logic.",
        skills: ["DDD", "Architecture", "Design", "Domain Modeling"]
    },
    {
        filename: "Software Architecture Patterns.pdf",
        title: "Software Architecture Patterns",
        author: "Mark Richards",
        year: "2015",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn about different software architecture patterns and when to use them.",
        skills: ["Architecture", "Patterns", "Design", "Software Engineering"]
    },
    {
        filename: "Microservices Reference Architecture.pdf",
        title: "Microservices Reference Architecture",
        author: "Various Authors",
        year: "2016",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn about reference architectures for microservices design and implementation.",
        skills: ["Microservices", "Architecture", "Reference Patterns", "Best Practices"]
    },
    {
        filename: "Microservices From Design to Deploy.pdf",
        title: "Microservices: From Design to Deploy",
        author: "Chris Richardson",
        year: "2016",
        edition: "1st Edition",
        category: "architecture",
        level: "intermediate",
        description: "Complete guide to microservices from design principles to deployment strategies.",
        skills: ["Microservices", "Design", "Deployment", "DevOps"]
    },
    {
        filename: "Production Ready Microservices.pdf",
        title: "Production Ready Microservices",
        author: "Susan J. Fowler",
        year: "2016",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn how to build and deploy production-ready microservices at scale.",
        skills: ["Microservices", "Production", "Scalability", "Operations"]
    },
    {
        filename: "Modern Java EE Patterns.pdf",
        title: "Modern Java EE Patterns",
        author: "Markus Eisele",
        year: "2015",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn modern patterns for Java Enterprise Edition development and architecture.",
        skills: ["Java EE", "Enterprise", "Patterns", "Architecture"]
    },
    {
        filename: "Patterns of Enterprise Application Architecture.pdf",
        title: "Patterns of Enterprise Application Architecture",
        author: "Martin Fowler",
        year: "2002",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Essential architectural patterns for building enterprise applications.",
        skills: ["Architecture", "Enterprise", "Patterns", "Design"]
    },
    {
        filename: "Enterprise Integration Patterns - Designing, Building And Deploying Messaging.pdf",
        title: "Enterprise Integration Patterns",
        author: "Gregor Hohpe & Bobby Woolf",
        year: "2003",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn patterns for integrating enterprise applications and messaging systems.",
        skills: ["Integration", "Enterprise", "Messaging", "Patterns"]
    },
    {
        filename: "REST in Practice Hypermedia and Systems Architecture Kindle Edition by Ian Robinson.pdf",
        title: "REST in Practice",
        author: "Ian Robinson, Jim Webber & Savas Parastatidis",
        year: "2010",
        edition: "1st Edition",
        category: "architecture",
        level: "intermediate",
        description: "Learn RESTful web services design and hypermedia-driven architecture.",
        skills: ["REST", "API", "Web Services", "Hypermedia"]
    },

    // Design Patterns
    {
        filename: "Design Patterns Elements of Reusable Object-Oriented Software.pdf",
        title: "Design Patterns",
        author: "Gang of Four",
        year: "1994",
        edition: "1st Edition",
        category: "design",
        level: "advanced",
        description: "The definitive guide to object-oriented design patterns and software architecture.",
        skills: ["Design Patterns", "OOP", "Software Architecture", "Reusability"]
    },
    {
        filename: "Head First Design Patterns.pdf",
        title: "Head First Design Patterns",
        author: "Eric Freeman & Elisabeth Robson",
        year: "2004",
        edition: "1st Edition",
        category: "design",
        level: "beginner",
        description: "Learn design patterns with visual learning approach and practical examples.",
        skills: ["Design Patterns", "OOP", "Java", "Visual Learning"]
    },
    {
        filename: "Implementation Patterns.pdf",
        title: "Implementation Patterns",
        author: "Kent Beck",
        year: "2007",
        edition: "1st Edition",
        category: "design",
        level: "intermediate",
        description: "Learn patterns for implementing clean, maintainable code and design.",
        skills: ["Patterns", "Implementation", "Best Practices", "Code Quality"]
    },

    // Algorithms & Data Structures
    {
        filename: "Introduction to Algorithms 3rd ed.pdf",
        title: "Introduction to Algorithms",
        author: "CLRS",
        year: "2009",
        edition: "3rd Edition",
        category: "algorithms",
        level: "advanced",
        description: "The comprehensive guide to algorithms and data structures used in computer science.",
        skills: ["Algorithms", "Data Structures", "Complexity Analysis", "Problem Solving"]
    },
    {
        filename: "Data Structure and Algorithm Analysis in C++ 4th ed.pdf",
        title: "Data Structure and Algorithm Analysis in C++",
        author: "Mark Allen Weiss",
        year: "2013",
        edition: "4th Edition",
        category: "algorithms",
        level: "intermediate",
        description: "Comprehensive analysis of data structures and algorithms with C++ implementations.",
        skills: ["Data Structures", "Algorithms", "C++", "Analysis"]
    },
    {
        filename: "Data Structure and Algorithm Analysis 3.2 ed C++.pdf",
        title: "Data Structure and Algorithm Analysis",
        author: "Mark Allen Weiss",
        year: "2011",
        edition: "3.2 Edition",
        category: "algorithms",
        level: "intermediate",
        description: "Analysis of fundamental data structures and algorithms with practical examples.",
        skills: ["Data Structures", "Algorithms", "Analysis", "Implementation"]
    },

    // Testing & Quality Assurance
    {
        filename: "TDD By Example.pdf",
        title: "TDD By Example",
        author: "Kent Beck",
        year: "2002",
        edition: "1st Edition",
        category: "testing",
        level: "intermediate",
        description: "Learn Test-Driven Development with practical examples and methodologies.",
        skills: ["TDD", "Testing", "Agile", "Software Development"]
    },
    {
        filename: "Effective Unit Testing.pdf",
        title: "Effective Unit Testing",
        author: "Lasse Koskela",
        year: "2013",
        edition: "1st Edition",
        category: "testing",
        level: "intermediate",
        description: "Learn how to write effective unit tests that improve code quality and maintainability.",
        skills: ["Unit Testing", "Testing", "Quality", "Best Practices"]
    },
    {
        filename: "Pragmatic Unit Testing in Java 8 with JUnit.pdf",
        title: "Pragmatic Unit Testing in Java 8",
        author: "Jeff Langr",
        year: "2015",
        edition: "1st Edition",
        category: "testing",
        level: "intermediate",
        description: "Practical guide to unit testing in Java 8 using JUnit and modern testing practices.",
        skills: ["Java", "JUnit", "Testing", "Unit Testing"]
    },
    {
        filename: "Growing Object Oriented Software Guided by Tests.pdf",
        title: "Growing Object-Oriented Software, Guided by Tests",
        author: "Steve Freeman & Nat Pryce",
        year: "2009",
        edition: "1st Edition",
        category: "testing",
        level: "intermediate",
        description: "Learn how to grow software guided by tests using TDD and object-oriented design.",
        skills: ["TDD", "OOP", "Testing", "Software Design"]
    },
    {
        filename: "Agile Testing.pdf",
        title: "Agile Testing",
        author: "Lisa Crispin & Janet Gregory",
        year: "2008",
        edition: "1st Edition",
        category: "testing",
        level: "beginner",
        description: "Learn how to implement testing practices in Agile development environments.",
        skills: ["Testing", "Agile", "QA", "Test Strategy"]
    },

    // Databases
    {
        filename: "SQL And Relational Theory 3rd ed.pdf",
        title: "SQL And Relational Theory",
        author: "C.J. Date",
        year: "2015",
        edition: "3rd Edition",
        category: "databases",
        level: "intermediate",
        description: "Learn the theoretical foundations of SQL and relational database systems.",
        skills: ["SQL", "Database", "Relational Theory", "Data Management"]
    },
    {
        filename: "NoSQL Distilled.pdf",
        title: "NoSQL Distilled",
        author: "Martin Fowler & Pramod J. Sadalage",
        year: "2012",
        edition: "1st Edition",
        category: "databases",
        level: "intermediate",
        description: "A brief guide to NoSQL databases and their applications in modern development.",
        skills: ["NoSQL", "Database", "Big Data", "Scalability"]
    },

    // DevOps & Operations
    {
        filename: "Site Reliability Engineering.pdf",
        title: "Site Reliability Engineering",
        author: "Google",
        year: "2016",
        edition: "1st Edition",
        category: "devops",
        level: "advanced",
        description: "Learn how Google builds, deploys, monitors, and maintains their large-scale systems.",
        skills: ["DevOps", "SRE", "Operations", "Scalability"]
    },
    {
        filename: "Continuous Delivery Reliable Software Releases Through Build, Test And Deployment Automation.pdf",
        title: "Continuous Delivery",
        author: "Jez Humble & David Farley",
        year: "2010",
        edition: "1st Edition",
        category: "devops",
        level: "intermediate",
        description: "Learn how to build, test, and deploy software reliably through automation.",
        skills: ["CI/CD", "DevOps", "Automation", "Deployment"]
    },
    {
        filename: "Pro Git 2nd ed.pdf",
        title: "Pro Git",
        author: "Scott Chacon & Ben Straub",
        year: "2014",
        edition: "2nd Edition",
        category: "devops",
        level: "beginner",
        description: "The definitive guide to Git version control system and collaborative development.",
        skills: ["Git", "Version Control", "Collaboration", "DevOps"]
    },
    {
        filename: "Release It! Design and Deploy Production-Ready Software.pdf",
        title: "Release It!",
        author: "Michael T. Nygard",
        year: "2007",
        edition: "1st Edition",
        category: "devops",
        level: "advanced",
        description: "Learn how to design and deploy production-ready software systems.",
        skills: ["Production", "Deployment", "Operations", "Reliability"]
    },
    {
        filename: "NGINX HTTP2.pdf",
        title: "NGINX HTTP/2",
        author: "NGINX Team",
        year: "2015",
        edition: "1st Edition",
        category: "devops",
        level: "intermediate",
        description: "Learn about NGINX web server and HTTP/2 protocol implementation and optimization.",
        skills: ["NGINX", "HTTP/2", "Web Server", "Performance"]
    },

    // Software Engineering & Methodologies
    {
        filename: "Refactoring Improving The Design Of Existing Code.pdf",
        title: "Refactoring",
        author: "Martin Fowler",
        year: "1999",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn how to improve the design of existing code through systematic refactoring.",
        skills: ["Refactoring", "Code Quality", "Best Practices", "Software Design"]
    },
    {
        filename: "Agile Software Development.pdf",
        title: "Agile Software Development",
        author: "Robert C. Martin",
        year: "2002",
        edition: "1st Edition",
        category: "methodology",
        level: "intermediate",
        description: "Learn Agile principles, practices, and patterns for effective software development.",
        skills: ["Agile", "Scrum", "Project Management", "Software Development"]
    },
    {
        filename: "Real World Maintainable Software.pdf",
        title: "Building Maintainable Software",
        author: "Joost Visser",
        year: "2016",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Learn how to build software that is maintainable in real-world environments.",
        skills: ["Maintainability", "Software Quality", "Best Practices", "Code Analysis"]
    },
    {
        filename: "Object Oriented Analysis and Design with Applications 3rd ed.pdf",
        title: "Object-Oriented Analysis and Design",
        author: "Grady Booch",
        year: "2007",
        edition: "3rd Edition",
        category: "design",
        level: "advanced",
        description: "Comprehensive guide to object-oriented analysis and design with practical applications.",
        skills: ["OOAD", "Analysis", "Design", "Object-Oriented Programming"]
    },
    {
        filename: "The Object Oriented Thought Process 3rd Edition.pdf",
        title: "The Object-Oriented Thought Process",
        author: "Matt Weisfeld",
        year: "2008",
        edition: "3rd Edition",
        category: "design",
        level: "intermediate",
        description: "Learn how to think in object-oriented terms and design better software systems.",
        skills: ["OOP", "Design", "Thinking", "Software Architecture"]
    },
    {
        filename: "Object Oriented vs Functional Programming.pdf",
        title: "Object-Oriented vs Functional Programming",
        author: "Richard Warburton",
        year: "2015",
        edition: "1st Edition",
        category: "programming",
        level: "intermediate",
        description: "Compare and contrast object-oriented and functional programming paradigms.",
        skills: ["OOP", "Functional Programming", "Programming Paradigms", "Design"]
    },
    {
        filename: "Head First Object Oriented Design and Analysis.pdf",
        title: "Head First Object-Oriented Analysis & Design",
        author: "Brett McLaughlin",
        year: "2006",
        edition: "1st Edition",
        category: "design",
        level: "beginner",
        description: "Learn OOAD with the engaging Head First visual learning style.",
        skills: ["OOAD", "UML", "Design", "Object-Oriented Programming"]
    },

    // UX/UI Design
    {
        filename: "Designing Interfaces 2nd ed.pdf",
        title: "Designing Interfaces",
        author: "Jenifer Tidwell",
        year: "2010",
        edition: "2nd Edition",
        category: "design",
        level: "intermediate",
        description: "Learn patterns for designing effective user interfaces and user experiences.",
        skills: ["UI Design", "UX", "Patterns", "Interface Design"]
    },
    {
        filename: "Web Form Design Filling in the Blanks.pdf",
        title: "Web Form Design",
        author: "Luke Wroblewski",
        year: "2008",
        edition: "1st Edition",
        category: "design",
        level: "intermediate",
        description: "Learn how to design effective and user-friendly web forms and interfaces.",
        skills: ["UX", "Web Design", "Forms", "Usability"]
    },
    {
        filename: "Principles of Mobile Site Design.pdf",
        title: "Principles of Mobile Site Design",
        author: "Google",
        year: "2015",
        edition: "1st Edition",
        category: "design",
        level: "intermediate",
        description: "Learn the principles of designing effective mobile websites and applications.",
        skills: ["Mobile", "UX", "Design", "Responsive Design"]
    },
    {
        filename: "Designing Great Web APIS.pdf",
        title: "Designing Great Web APIs",
        author: "James Higginbotham",
        year: "2021",
        edition: "1st Edition",
        category: "design",
        level: "intermediate",
        description: "Learn how to design effective and user-friendly web APIs and services.",
        skills: ["API Design", "Web Services", "REST", "Developer Experience"]
    },
    {
        filename: "Design Of Everyday Things.pdf",
        title: "The Design of Everyday Things",
        author: "Don Norman",
        year: "2013",
        edition: "Revised Edition",
        category: "design",
        level: "beginner",
        description: "Fundamental principles of good design applied to everyday objects and digital interfaces.",
        skills: ["Design Principles", "Usability", "User Psychology", "Product Design"]
    },

    // Requirements & Analysis
    {
        filename: "Writing Effective Use Cases.pdf",
        title: "Writing Effective Use Cases",
        author: "Alistair Cockburn",
        year: "2000",
        edition: "1st Edition",
        category: "analysis",
        level: "intermediate",
        description: "Learn how to write effective use cases for software requirements and analysis.",
        skills: ["Use Cases", "Requirements", "Analysis", "Documentation"]
    },
    {
        filename: "Use-Case 2.0.pdf",
        title: "Use-Case 2.0",
        author: "Ivar Jacobson",
        year: "2011",
        edition: "1st Edition",
        category: "analysis",
        level: "intermediate",
        description: "Updated approach to use case modeling for modern software development.",
        skills: ["Use Cases", "Requirements", "Analysis", "Modern Practices"]
    },
    {
        filename: "UML Distilled 2nd ed.pdf",
        title: "UML Distilled",
        author: "Martin Fowler",
        year: "2003",
        edition: "2nd Edition",
        category: "design",
        level: "beginner",
        description: "A brief guide to the standard object modeling language and its applications.",
        skills: ["UML", "Modeling", "Design", "Documentation"]
    },

    // Advanced Topics
    {
        filename: "Why Reactive.pdf",
        title: "Why Reactive?",
        author: "Konrad Malawski",
        year: "2015",
        edition: "1st Edition",
        category: "architecture",
        level: "advanced",
        description: "Learn about reactive programming principles and why they matter for modern applications.",
        skills: ["Reactive", "Programming", "Asynchronous", "Scalability"]
    },
    {
        filename: "Reversing Secrets of Reverse Engineering.pdf",
        title: "Reversing: Secrets of Reverse Engineering",
        author: "Eldad Eilam",
        year: "2005",
        edition: "1st Edition",
        category: "security",
        level: "advanced",
        description: "Learn the art and science of reverse engineering software systems.",
        skills: ["Reverse Engineering", "Security", "Analysis", "Debugging"]
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BOOKS_DATABASE;
}

// Global variable for browser use
if (typeof window !== 'undefined') {
    window.BOOKS_DATABASE = BOOKS_DATABASE;
}
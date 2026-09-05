/**
 * PORTFOLIO CONFIGURATION DATA - ANANTHI A
 * 
 * Central data source for all content across the portfolio website.
 * Easy to update: modify values, add new projects, achievements, or skills here.
 * 
 * IMPORTANT FOR USER:
 * - Replace placeholder email 'your-email@example.com' with your actual email address.
 * - Replace placeholder GitHub 'https://github.com' with your actual GitHub profile link.
 * - Add new milestones, hackathons, or certificates in the corresponding arrays below when acquired.
 */

export const portfolioData = {
  personal: {
    name: "ANANTHI A",
    shortName: "Ananthi",
    monogram: "AA.",
    role: "Aspiring Software Developer",
    degree: "B.E., Computer Science and Engineering — 2nd Year",
    college: "EGS Pillay Engineering College, Nagapattinam",
    department: "Computer Science and Engineering",
    location: "Nagapattinam, Tamil Nadu, India",
    tagline: "Aspiring Software Developer | Building Ideas into Digital Experiences",
    shortBio:
      "I'm a Computer Science and Engineering student passionate about programming, problem solving, and creating meaningful digital experiences. I enjoy turning ideas into practical projects while continuously exploring new technologies.",
    statusBadge: "Open to Learning & Collaborations",
  },

  socials: {
    // Official LinkedIn profile provided
    linkedIn: "https://www.linkedin.com/in/ananthi-ananth-a7b203401",
    // NOTE: Replace this placeholder with your real email address
    email: "your-email@example.com",
    // NOTE: Replace this placeholder with your real GitHub profile link
    github: "https://github.com",
    githubLabel: "Add GitHub profile",
  },

  about: {
    heading: "A little about me.",
    badge: "About Me",
    paragraph1:
      "I'm Ananthi A, a second-year Computer Science and Engineering student at EGS Pillay Engineering College, Nagapattinam. I’m interested in software development, programming, and building practical digital solutions. I believe that every project is an opportunity to learn something new, improve my problem-solving skills, and turn an idea into something useful.",
    paragraph2:
      "My current focus is strengthening my programming fundamentals while exploring modern technologies and developing projects that combine creativity with technology. I’m continuously learning, experimenting, and preparing myself for the opportunities ahead in the software industry.",
    highlights: [
      {
        number: "01",
        title: "Curious Learner",
        description: "Constantly exploring computer science paradigms, system concepts, and emerging technologies.",
        icon: "Sparkles",
      },
      {
        number: "02",
        title: "Problem Solver",
        description: "Approaching challenges systematically through algorithms, data structures, and logical reasoning.",
        icon: "Cpu",
      },
      {
        number: "03",
        title: "Creative Builder",
        description: "Translating theoretical concepts into intuitive, functional user interfaces and practical applications.",
        icon: "Layers",
      },
      {
        number: "04",
        title: "Future Software Developer",
        description: "Cultivating clean code practices, engineering discipline, and ready-to-scale software architecture mindsets.",
        icon: "Terminal",
      },
    ],
  },

  skills: {
    heading: "What I work with.",
    badge: "Technical Stack",
    description: "Honest representation of current technical competencies, core programming languages, and web technologies actively being explored.",
    categories: [
      {
        id: "programming",
        name: "Programming",
        description: "Core languages used for foundational computing, logic, and problem solving",
        items: [
          {
            name: "C",
            focus: "Programming Fundamentals",
            level: "Comfortable",
            statusColor: "emerald",
            tag: "Core Foundations",
            details: "Data types, control structures, pointers, memory allocation, and procedural architecture.",
          },
          {
            name: "C++",
            focus: "Object-Oriented Programming",
            level: "Developing",
            statusColor: "violet",
            tag: "OOP & Abstractions",
            details: "Classes, objects, inheritance, polymorphism, encapsulation, and standard template library basics.",
          },
          {
            name: "Python",
            focus: "Programming & Problem Solving",
            level: "Developing",
            statusColor: "cyan",
            tag: "Scripting & Logic",
            details: "Clean syntax scripting, algorithmic problem solving, list comprehensions, and functional modules.",
          },
        ],
      },
      {
        id: "web",
        name: "Web (Exploring)",
        description: "Foundational front-end technologies currently being explored and developed",
        items: [
          {
            name: "HTML5",
            focus: "Semantic Web Structure",
            level: "Exploring",
            statusColor: "amber",
            tag: "Markup & Layout",
            details: "Semantic elements, document outline, accessibility attributes, and SEO foundation.",
          },
          {
            name: "CSS3",
            focus: "Modern Responsive Styling",
            level: "Exploring",
            statusColor: "amber",
            tag: "Design & Flexbox/Grid",
            details: "Responsive design, Flexbox, CSS Grid, animations, and dark mode theming.",
          },
          {
            name: "JavaScript",
            focus: "Dynamic Web Interactivity",
            level: "Exploring",
            statusColor: "amber",
            tag: "DOM & Logic",
            details: "DOM manipulation, event handling, ES6+ features, and interactive interface components.",
          },
        ],
      },
    ],
  },

  projects: [
    {
      id: "01",
      name: "Postify",
      tagline: "Social Media Platform",
      description:
        "A social media platform concept focused on creating, sharing, and discovering content through a simple and engaging digital experience.",
      tags: ["Web Development", "UI/UX", "Social Platform"],
      featured: true,
      color: "from-purple-500/20 to-indigo-500/10",
      accent: "#8b5cf6",
      previewType: "social",
      demoUrl: "#",
      githubUrl: "#",
      note: "Concept & Interface Architecture",
    },
    {
      id: "02",
      name: "E-Commerce Page",
      tagline: "Modern Shopping Interface",
      description:
        "A modern e-commerce interface designed to present products through a clean, user-friendly shopping experience.",
      tags: ["E-Commerce", "UI Design", "Web Development"],
      featured: true,
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "#06b6d4",
      previewType: "ecommerce",
      demoUrl: "#",
      githubUrl: "#",
      note: "Responsive Product Experience",
    },
    {
      id: "03",
      name: "Student Data Management System",
      tagline: "Academic Information System",
      description:
        "A student-focused data management project designed to organize and manage student information efficiently.",
      tags: ["Data Management", "Programming", "Student System"],
      featured: true,
      color: "from-violet-500/20 to-fuchsia-500/10",
      accent: "#a855f7",
      previewType: "management",
      demoUrl: "#",
      githubUrl: "#",
      note: "Structured Data Organization",
    },
  ],

  journey: {
    heading: "My Developer Journey",
    badge: "Interactive Roadmap",
    description: "An intentional progression from initial curiosity to disciplined software craftsmanship.",
    stages: [
      {
        id: "curiosity",
        step: "01",
        label: "Curiosity",
        title: "The Initial Spark",
        summary: "Discovering how software powers the digital world and questioning how lines of code translate into interactive realities.",
        points: [
          "Fascinated by computer architecture & digital systems",
          "Explored how apps communicate behind the scenes",
          "Decided to pursue Computer Science & Engineering",
        ],
        badge: "Inception",
      },
      {
        id: "learning",
        step: "02",
        label: "Learning",
        title: "Strengthening Fundamentals",
        summary: "Diving deep into foundational languages (C, C++, Python) to cultivate solid computational thinking and rigorous data structures.",
        points: [
          "Mastering procedural logic with C",
          "Understanding OOP paradigms & memory handling in C++",
          "Solving algorithmic puzzles with Python",
        ],
        badge: "Current Focus",
      },
      {
        id: "building",
        step: "03",
        label: "Building",
        title: "Translating Knowledge to Projects",
        summary: "Transforming theoretical lessons into functional student software projects, from Postify concepts to data management systems.",
        points: [
          "Drafting interface concepts with modern aesthetics",
          "Building practical student management solutions",
          "Writing clean, readable, modular code",
        ],
        badge: "Active",
      },
      {
        id: "experimenting",
        step: "04",
        label: "Experimenting",
        title: "Exploring Modern Technologies",
        summary: "Stepping beyond classroom curriculum to experiment with web technologies, interactive front-end tools, and collaborative version control.",
        points: [
          "Exploring HTML5, CSS3, and JavaScript ecosystems",
          "Experimenting with responsive design and glassmorphism",
          "Learning version control best practices",
        ],
        badge: "Exploring",
      },
      {
        id: "growing",
        step: "05",
        label: "Growing",
        title: "Preparing for the Future",
        summary: "Aiming toward professional software engineering standards, continuous learning routines, and real-world impact.",
        points: [
          "Aiming for technical problem-solving mastery",
          "Preparing for internships & hackathon opportunities",
          "Committing to lifelong engineering curiosity",
        ],
        badge: "Vision",
      },
    ],
  },

  milestones: {
    heading: "Milestones & Achievements",
    badge: "Recognition & Participation",
    description: "Structured for continuous updates as new competitions, hackathons, and academic achievements are unlocked.",
    categories: [
      {
        id: "competitions",
        title: "Competitions",
        icon: "Trophy",
        items: [
          {
            title: "Technical Symposiums & Coding Events",
            status: "Upcoming / Add Achievement",
            placeholder: true,
            note: "Ready to record college & inter-college coding contests and project presentations.",
          },
        ],
      },
      {
        id: "hackathons",
        title: "Hackathons",
        icon: "Code2",
        items: [
          {
            title: "Hackathon Participation",
            status: "Upcoming / Add Achievement",
            placeholder: true,
            note: "Slot reserved for upcoming sprint challenges, prototype hackathons, and team projects.",
          },
        ],
      },
      {
        id: "workshops",
        title: "Workshops",
        icon: "Laptop",
        items: [
          {
            title: "Hands-on Technical Workshops",
            status: "In Progress / Add Workshop",
            placeholder: true,
            note: "Slot reserved for specialized campus workshops, developer conferences, and coding bootcamps.",
          },
        ],
      },
      {
        id: "academics",
        title: "Academic Achievements",
        icon: "GraduationCap",
        items: [
          {
            title: "Computer Science Excellence",
            status: "2nd Year CSE — Active",
            placeholder: true,
            note: "Ongoing coursework excellence in Data Structures, OOPs, and Computer Architecture.",
          },
        ],
      },
    ],
  },

  education: {
    heading: "Educational Background",
    badge: "Academic Journey",
    description: "Building strong foundational roots in computer science, software design, and engineering methodologies.",
    timeline: [
      {
        period: "2024 – Present (2nd Year)",
        degree: "B.E. in Computer Science and Engineering",
        institution: "EGS Pillay Engineering College",
        location: "Nagapattinam, Tamil Nadu",
        description: "Focusing on core computer science subjects including Data Structures, Object-Oriented Programming (C++), Operating Systems principles, and Python problem solving.",
        highlights: [
          "Active 2nd-year CSE student",
          "Core programming in C, C++, and Python",
          "Continuous hands-on software lab practice",
        ],
        current: true,
      },
    ],
  },

  certifications: {
    heading: "Learning & Certifications",
    badge: "Skill Development",
    description: "Structured modular cards for verified course certifications, technical learning tracks, and upcoming qualifications.",
    items: [
      {
        title: "Programming Fundamentals Track",
        issuer: "Self-Paced & Academic Labs",
        category: "Courses",
        status: "Active Learning",
        placeholder: false,
        topics: ["Procedural Logic", "Pointers & Arrays", "Control Structures"],
      },
      {
        title: "Object-Oriented Design & Paradigms",
        issuer: "Department Curriculum & Practice",
        category: "Technical Learning",
        status: "In Progress",
        placeholder: false,
        topics: ["C++ Classes & Objects", "Inheritance", "Polymorphism"],
      },
      {
        title: "Add Certification / Course",
        issuer: "Online Learning (NPTEL / Coursera / etc.)",
        category: "Certifications",
        status: "Add Certificate",
        placeholder: true,
        topics: ["Slot ready for official certificates"],
      },
      {
        title: "Add Workshop Certificate",
        issuer: "Technical Symposium / Workshop",
        category: "Workshops",
        status: "Add Workshop",
        placeholder: true,
        topics: ["Slot ready for participation credentials"],
      },
    ],
  },

  futureGoals: {
    heading: "Currently learning. Constantly building.",
    badge: "Looking Forward",
    statement:
      "My goal is to continuously improve my technical skills, build meaningful projects, explore emerging technologies, and prepare myself for a successful career in the software industry.",
    roadmap: [
      { step: "01", name: "Learn", desc: "Solidify core algorithms & system concepts" },
      { step: "02", name: "Build", desc: "Turn logic into working digital solutions" },
      { step: "03", name: "Experiment", desc: "Test modern frameworks & creative UI/UX" },
      { step: "04", name: "Improve", desc: "Refactor, optimize, and iterate with feedback" },
      { step: "05", name: "Grow", desc: "Step into industry-grade software engineering" },
    ],
  },

  contact: {
    heading: "Let's build something together.",
    badge: "Get In Touch",
    description:
      "Whether it's a project idea, collaboration, learning opportunity, or simply a conversation about technology, I'd love to connect.",
    ctaPrompt: "Available for student collaborations, open-source explorations, and engineering discussions.",
  },
};

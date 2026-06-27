// ============================================================
//  DATA.JS — Edit this file to update your portfolio
//  Add/remove projects, update links, change personal info
// ============================================================

const portfolioData = {

  // ── Personal Info
  personal: {
    name: "Rania Junaid",
    title: "Computer Science Student",
    subtitle: "ITU Lahore · 4th Semester BSCS",
    tagline: "Building at the intersection of systems, AI, and the web.",
    email: "rania25leo@gmail.com",         // ← replace
    github: "https://github.com/RaniaJunaid", // ← replace
    linkedin: "https://www.linkedin.com/in/rania-junaid-75598336a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // ← replace
    leetcode: "https://leetcode.com/u/UaBeIRgmBL/", // ← replace
    cvLink: "https://drive.google.com/file/d/1vHR8Tub0EoC2s_5_zVJdLND0a27yt1it/view?usp=drivesdk", // ← replace with your CV PDF link or path
  },

  // ── Skills
  skills: [
    { name: "C++",         category: "Systems"  },
    { name: "Python",      category: "AI/ML"    },
    { name: "React",       category: "Web"      },
    { name: "TensorFlow",  category: "AI/ML"    },
    { name: "JavaScript",  category: "Web"      },
    { name: "Tailwind CSS",category: "Web"      },
    { name: "NASM x86",   category: "Systems"  },
    { name: "FastAPI",     category: "Web"      },
    { name: "MongoDB",     category: "Database" },
    { name: "PostgreSQL",  category: "Database" },
    { name: "scikit-learn",category: "AI/ML"    },
    { name: "Node.js",     category: "Web"      },
    { name: "SQL",         category: "Database" },
    { name: "Git",         category: "Tools"    },
  ],

  // ── Projects ──────────────────────────────────────────────
  // To add a project: copy one block, paste at top, fill in details
  // To remove: delete the whole { ... } block
  // Categories: "AI/ML" | "Systems" | "Web" | "Assembly" | "Database"
  projects: [
    {
      title: "CNN Vehicle Classifier",
      description: "Custom 5-block CNN trained on 6 Pakistani road vehicle classes (~600 images/class). Achieves >85% accuracy with Grad-CAM visualisations to explain predictions.",
      tech: ["Python", "TensorFlow", "Keras", "Grad-CAM"],
      category: "AI/ML",
      github: "https://github.com/RaniaJunaid/Car-Classification", // ← replace with real link
    },
    {
      title: "SafeHer AI",
      description: "Android women's safety app built in Kotlin using Android Studio, integrating AI models for real-time threat detection and emergency response.",
      tech: ["Kotlin", "Android Studio", "AI/ML"],
      category: "AI/ML",
      github: "https://github.com/RaniaJunaid/SafeHerAI",
    },
    {
      title: "PCA Face Recognition",
      description: "Face recognition system built from scratch using Principal Component Analysis (Eigenfaces). Implements dimensionality reduction and nearest-neighbour classification.",
      tech: ["Python", "NumPy", "scikit-learn", "PCA"],
      category: "AI/ML",
      github: "https://github.com/RaniaJunaid/pca",
    },
    {
      title: "OLAP Storage Engine",
      description: "Columnar storage engine in C++ with CSV loading, query execution, dictionary/RLE encoding, GROUP BY aggregation, and a row-store benchmarking harness.",
      tech: ["C++", "OLAP", "Database", "Columnar Storage"],
      category: "Systems",
      github: "https://github.com/RaniaJunaid/OLAP-Project-2",
    },
    {
      title: "OmniFS — Custom File System",
      description: "Custom file system with a built-in TCP server and browser UI for navigation. Supports file operations over the network from any browser tab.",
      tech: ["C++", "TCP", "File Systems", "Browser UI"],
      category: "Systems",
      github: "https://github.com/RaniaJunaid/file-system",
    },
    {
      title: "MiniExcel",
      description: "Terminal-based spreadsheet application written in C++. Supports cell references, arithmetic formulas, and navigable grid rendering entirely in the terminal.",
      tech: ["C++", "Terminal UI", "Data Structures"],
      category: "Systems",
      github: "https://github.com/RaniaJunaid/miniExcel",
    },
    {
      title: "8086 Tic-Tac-Toe",
      description: "Fully playable Tic-Tac-Toe game written in 8086 NASM assembly and run in DOSBox. Implements game logic, win detection, and board rendering in raw assembly.",
      tech: ["NASM", "x86 Assembly", "DOSBox", "8086"],
      category: "Assembly",
      github: "https://github.com/RaniaJunaid/Tic-Tac-Toe",
    },
    {
      title: "Huge Integer / Fraction",
      description: "A C++ library implementing arbitrary-precision integers and fractions with full operator overloading. Numbers of any size — far beyond the 64-bit integer limit — are handled entirely from scratch using digit vectors, with no external libraries.",
      tech: ["C++","OOP"],
      category: "Systems",
      github: "https://github.com/RaniaJunaid/Huge-Integer-Fraction",
    },
    {
      title: "Regression and Classification",
      description: "From-scratch implementations of linear regression (gradient descent) and logistic regression (gradient descent) in NumPy, benchmarked against scikit-learn on two real datasets.",
      tech: ["Python","Numpy","scikit-learn"],
      category: "AI/ML",
      github: "https://github.com/RaniaJunaid/Regression-and-Classification",
    },
    {
      title: "Hotel Management and Booking System",
      description: "A RESTful backend API for hotel operations built with Node.js, Express, and PostgreSQL, supporting room management, guest reservations, and invoice generation. Implements JWT authentication with role-based access control (RBAC) across four roles — Admin, Manager, Receptionist, and Housekeeping.",
      tech: ["Node.js","PostgreSQL","Express"],
      category: "Database",
      github: "https://github.com/RaniaJunaid/Hotel-Management-System-Project_01",
    },

  ],
};

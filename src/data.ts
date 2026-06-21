import { Skill, Project, ExperienceItem, Certification } from "./types";

export const DEV_INFO = {
  name: "Jahnavi B",
  title: "Computer Science Undergraduate",
  tagline: "Engineering Concurrent Systems, Computer Vision Streams, and High-Performance Web Architectures",
  description: "I am a Computer Science undergraduate with a CGPA of 9.0/10 and expertise in Python, C, and Java. I have practical experience in developing distributed systems, focusing on concurrency and multi-threading, through high-impact builds like VigilDrive, which enhanced driver monitoring efficiency with real-time fatigue alerts. I am highly adept at employing robust data structures and algorithms to design scalable applications.",
  philosophy: "I design reliable software with mathematical integrity and rigid execution standards. I believe that professional developer solutions should combine high-performance backends, thread-safe asynchronous operations, and clean responsive interfaces.",
  education: "B.E. in Computer Science & Engineering",
  careerGoal: "Building robust low-latency backends, reliable cloud synchronization layers, and edge computer vision platforms as a Software Engineering Intern.",
  location: "jayanagar tumkuru india(Open to Internships / Remote)",
  email: "jahnavib437@gmail.com",
  github: "https://github.com/jahnavib437-alt",
  linkedin: "https://linkedin.com/in/jahnavi-b-03b611353",
};

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Python", category: "languages", level: 95, iconName: "Code" },
  { name: "C Language", category: "languages", level: 90, iconName: "Code" },
  { name: "Java", category: "languages", level: 85, iconName: "Cpu" },
  { name: "JavaScript", category: "languages", level: 82, iconName: "FileJson" },
  { name: "SQL", category: "languages", level: 88, iconName: "Database" },
  { name: "C++", category: "languages", level: 80, iconName: "Code" },
  { name: "HTML/CSS", category: "languages", level: 90, iconName: "Layout" },

  // Web Frameworks
  { name: "Django", category: "web-tech", level: 90, iconName: "Server" },
  { name: "Flask", category: "web-tech", level: 85, iconName: "Terminal" },
  { name: "React", category: "web-tech", level: 80, iconName: "Atom" },
  { name: "Node.js", category: "web-tech", level: 78, iconName: "Server" },
  { name: "REST API Dev", category: "web-tech", level: 88, iconName: "Shield" },

  // AI & Systems
  { name: "Computer Vision", category: "ai-ml", level: 92, iconName: "Eye" },
  { name: "OpenCV Filters", category: "ai-ml", level: 90, iconName: "Camera" },
  { name: "Multi-threading", category: "ai-ml", level: 91, iconName: "Workflow" },
  { name: "Predictive Analytics", category: "ai-ml", level: 85, iconName: "Brain" },
  { name: "IoT Device Integration", category: "ai-ml", level: 88, iconName: "GitMerge" },

  // Developer Tools
  { name: "SQLite", category: "tools", level: 85, iconName: "Database" },
  { name: "MySQL", category: "tools", level: 88, iconName: "Database" },
  { name: "MongoDB", category: "tools", level: 80, iconName: "Database" },
  { name: "Git & GitHub", category: "tools", level: 90, iconName: "GitBranch" },
  { name: "VS Code", category: "tools", level: 95, iconName: "Laptop" }
];

export const PROJECTS: Project[] = [
  {
    id: "vigildrive",
    title: "VigilDrive AI-Powered Driver Monitoring",
    description: "An AI-based driver monitoring system using Python, OpenCV, and Machine Learning models to track driver vigilance, blink state rates, and distraction metrics in real-time.",
    category: "ai-ml",
    tags: ["Python", "OpenCV", "Django", "Machine Learning", "Multi-threading"],
    features: [
      "Real-time fatigue alert triggers based on computed Eye Aspect Ratio (EAR) frames",
      "Optimized multi-threaded frame acquisition pipeline achieving low latency streaming",
      "Automated analysis dashboards with persistent logging for fleet tracking telemetry",
      "High-accuracy visual landmark models engineered for varying ambient lighting"
    ],
    github: "https://github.com/jahnavib437-alt",
    demo: undefined
  },
  {
    id: "medico",
    title: "medico website",
    description: "A secure, robust full-stack medical scheduling application utilizing Django backend capabilities combined with PostgreSQL to coordinate medicine schedules.",
    category: "full-stack",
    tags: ["Django", "PostgreSQL", "SQLite", "React", "Node.js", "REST APIs"],
    features: [
      "Django backend services providing unified REST API endpoints and schema managers",
      "Automated transactional security verifying critical schedule windows and conflict rules",
      "Integrated search engine querying indexes in PostgreSQL and SQLite formats",
      "Responsive interactive user dashboard allowing users to visualize current treatments"
    ],
    github: "https://github.com/jahnavib437-alt",
    demo: undefined
  },
  {
    id: "recipe-site",
    title: "Recipe Sharing Hub",
    description: "An interactive, elegant Django recipe sharing application loaded with authentication safeguards, search algorithms, and responsive UI/UX features.",
    category: "full-stack",
    tags: ["Django", "Python", "SQL", "UI/UX Design", "Authentication"],
    features: [
      "Custom authentication filters allowing unique user profile locks and secure uploads",
      "Dynamic index-based search engine returning matching items by keyword and tag lists",
      "Optimized database indexing algorithms reducing retrieval times for faster page rendering",
      "Clean visual lists styling recipe metadata with seamless responsive layouts"
    ],
    github: "https://github.com/jahnavib437-alt",
    demo: undefined
  },
  {
    id: "autopilot-iot",
    title: "Driverless Auto Pilot Car IoT Mode",
    description: "An innovative, fail-safe automobile simulation integrating smart IoT sensors and predictive analytics to achieve real-time vehicle monitoring and low latency operations.",
    category: "ai-ml",
    tags: ["IoT Sensors", "Predictive Analytics", "Python", "Vehicle Monitoring", "Cloud Integration"],
    features: [
      "Real-time vehicle health telematics using predictive time-series sensor analyses",
      "Fail-safe emergency stop architectures preventing high-amplitude mechanical crashes",
      "Low-latency vehicle-to-cloud communication socket pools for continuous location logging",
      "Simulated obstacle avoidance meshes calculated through edge coordinate arrays"
    ],
    github: "https://github.com/jahnavib437-alt",
    demo: undefined
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Shri Siddhartha Institute of Technology",
    role: "B.E. Computer Science Undergraduate (Academic Journey)",
    duration: "2023 - 2027",
    responsibilities: [
      "Maintained a stellar CGPA of 9.0/10.0 demonstrating persistent excellence across computer system architecture curricula.",
      "Conducted extensive academic project research on concurrency and multi-threading models, implementing high-accuracy Python pipelines.",
      "Collaborated with peer groups to construct resilient relational database schemas using SQLite, PostgreSQL, and MySQL structures."
    ],
    achievements: [
      "Maintained B.E. Grade Point Average of 9.0 / 10.0 through hard structural training.",
      "Engineered multiple modular software systems including VigilDrive and Medico platforms."
    ],
    current: true
  },
  {
    id: "exp-2",
    company: "Academic Projects & Engineering Labs",
    role: "Software & System Developer",
    duration: "2024 - Present",
    responsibilities: [
      "Designed and tested embedded fail-safe communication models mapping low-latency vehicle telemetry back to primary server logs.",
      "Programmed advanced search indexing utilities, authentication controllers, and responsive layouts across React and Django applications.",
      "Debugged heavy concurrent processes to verify optimal memory allocation and eliminate memory leak issues in Java and C applications."
    ],
    achievements: [
      "Successfully integrated IoT sensor telemetry pipelines with zero critical transmission lag.",
      "Built clean, highly modular codebases utilizing Git/GitHub tools for distributed tracking."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    name: "NPTEL Professional Certificate",
    organization: "Nptel Academic Board",
    year: "2024",
    certificateLink: "https://drive.google.com/drive/folders/1Fin7BY1SqqBtv4QJHtBCEUO_6cEroXLr?usp=drive_link",
    credentialId: "NPTEL-VERIFIED-712"
  },
  {
    id: "cert-2",
    name: "Infosys Springboard Certification",
    organization: "Infosys Academy",
    year: "2025",
    certificateLink: "https://drive.google.com/drive/folders/1Fin7BY1SqqBtv4QJHtBCEUO_6cEroXLr?usp=drive_link",
    credentialId: "INFOSYS-SPRINGBOARD-99B"
  }
];

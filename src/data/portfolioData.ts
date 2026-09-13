import { ProjectItem, EducationItem, SkillCategory, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Madumida D.",
  title: "MCA Student | Software Developer | AI-Based Product Builder",
  subTitleRole: "Aspiring IT Professional & Beauty Tech Enthusiast",
  institution: "Dr. G.R. Damodaran College of Science, Coimbatore",
  location: "Tamil Nadu, India",
  email: "25mca029@grd.edu.in",
  github: "https://github.com/madumida7",
  tagline: "Designing meaningful digital solutions by blending technology, creativity, and real-world understanding.",
  heroIntro: "I am currently pursuing my Master of Computer Applications at Dr. G.R. Damodaran College of Science, Coimbatore. With a strong academic foundation in computer science and a growing interest in AI-driven applications, I focus on building practical, user-centered solutions that connect technology with everyday life.",
  aboutStory: [
    "From a curious student to a focused developer, my journey in technology has been shaped by consistency, learning, and real-world exposure.",
    "I completed my Bachelor of Computer Applications at St. Joseph’s College of Arts and Science (Autonomous), Cuddalore, with an overall percentage of 84.82%. My academic journey reflects steady improvement and dedication, with strong performance across semesters.",
    "Currently, I am pursuing MCA, where I am expanding my knowledge in modern web technologies, backend systems, and applied AI concepts.",
    "I am continuously strengthening my programming foundation by working with languages like Java, Python, and C#, while also developing modern web applications using React and FastAPI.",
    "Beyond academics, I continuously explore self-learning through certifications, practical projects, and language learning. I have maintained a long-term commitment to learning Japanese through Duolingo, reflecting my discipline and curiosity toward global opportunities.",
    "I am particularly interested in building applications that combine user experience with intelligent systems, especially in areas like beauty-tech, personalization, and real-world problem solving."
  ],
  problemSolvingApproach: "I approach every project by first understanding the real-world problem, then breaking it down into smaller logical components. I focus on building solutions that are not only functional but also user-friendly and meaningful. My goal is to create systems that provide real value rather than just technical implementation. This practical experience helps me bridge the gap between backend architecture and UI.",
  careerGoals: {
    shortTerm: "To secure a software development role in reputed companies like TCS, Infosys, Zoho, or Wipro while continuing MCA.",
    longTerm: "To build impactful, intelligent software solutions and grow into a skilled developer specializing in AI-integrated applications."
  },
  quotes: {
    primary: "Built with patience, growing with purpose.",
    secondary: "Growing through challenges, building with purpose."
  }
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "c-tone-pro",
    title: "C-Tone Pro",
    subtitle: "AI-Based Personalized Beauty Intelligence System",
    type: "Major MCA Project",
    category: "AI & Web",
    role: "Full Stack Developer (Student Project)",
    description: "A smart beauty recommendation system that analyzes skin tone and provides personalized suggestions for makeup, fashion, and styling.",
    problem: "Many users struggle to choose beauty products suitable for their skin tone, leading to poor purchasing decisions and low confidence.",
    solution: "Developed an intelligent web-based system that analyzes skin tone using computer vision and provides personalized recommendations across multiple beauty categories.",
    features: [
      "Skin tone detection supporting 25+ diverse tones and undertones",
      "Personalized recommendations: Foundation shades, lipstick palettes, dress colors, hair color & matching accessories",
      "Self-Confidence Score module with an interactive questionnaire",
      "Integrated beauty service booking system (makeup artists, hairstyling)",
      "Secure user authentication and comprehensive admin management panel",
      "Real-time UI preview with user image analysis and color swatch comparison"
    ],
    techStack: ["React.js", "FastAPI (Python)", "MongoDB", "OpenCV", "NumPy"],
    liveLink: "https://c-tone-pro-562617068063.asia-southeast1.run.app",
    githubLink: "https://github.com/madumida7",
    outcomeOrImpact: "Improves user confidence and simplifies beauty decision-making through personalized, accessible computer vision.",
    keyLearning: "Learned how to integrate frontend and backend systems, handle real-time user image input using OpenCV, and design empathetic, user-centric features.",
    badge: "Featured AI Project",
    accentColor: "from-rose-400 to-pink-500"
  },
  {
    id: "roots-industries",
    title: "Roots Industries Workflow Optimizer",
    subtitle: "Industrial Workflow & Workforce Scheduling System",
    type: "Internship Project",
    category: "Industry & Systems",
    role: "Full Stack Developer (Internship)",
    description: "Developed a centralized digital management system for industrial workflow, customer order lifecycles, and shop-floor workforce scheduling.",
    problem: "Manual tracking of heavy machinery, multi-shift factory personnel, and customer orders caused operational bottlenecks and scheduling conflicts.",
    solution: "Built a responsive digital system to streamline machine maintenance tracking, schedule dual labour shifts, and forecast demand.",
    features: [
      "Machine tracking module monitoring 5 critical production units",
      "Labour shift management for 120 factory workers across 2 rotational shifts",
      "Customer order queue management with administrative status approvals",
      "Predictive demand forecasting dashboard powered by the Holt-Winters statistical model",
      "Intuitive operational visualization dashboard for plant supervisors"
    ],
    techStack: ["React.js", "Python (Flask)", "MySQL", "Chart Data Visualization"],
    outcomeOrImpact: "Improved operational visibility and significantly reduced manual dependency across factory operations.",
    keyLearning: "Gained hands-on experience handling real-world industrial constraints, relational database transactions, and time-series operational forecasting.",
    badge: "Industrial Internship",
    accentColor: "from-amber-400 to-rose-400"
  },
  {
    id: "teaching-experience",
    title: "Computer Science Mentorship & Teaching",
    subtitle: "Darshan Zwislang Gurukulam School",
    type: "Teaching Experience",
    category: "Education & Mentoring",
    role: "Computer Science Teacher & Mentor",
    description: "Taught programming basics and computational fundamentals to school students, nurturing early digital literacy and analytical curiosity.",
    problem: "Students lacked foundational understanding of computing concepts and interactive programming logic.",
    solution: "Formulated practical lesson plans combining hands-on coding exercises, logical puzzles, and supportive individual mentoring.",
    features: [
      "Instructed fundamentals of algorithms, flowcharts, and basic programming syntax",
      "Conducted interactive lab sessions demystifying computer hardware and software",
      "Fostered analytical curiosity and step-by-step problem-solving discipline",
      "Evaluated student progress and tailored learning pacing to individual needs"
    ],
    techStack: ["Computer Science Fundamentals", "Basic Programming", "Curriculum Mentoring", "Pedagogical Communication"],
    outcomeOrImpact: "Empowered young learners with core computer literacy and nurtured their confidence in technology.",
    keyLearning: "Developed clear communication, active empathy, patience, and the ability to explain complex technical concepts in simple terms.",
    badge: "Community & Leadership",
    accentColor: "from-purple-400 to-pink-400"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. G.R. Damodaran College of Science, Coimbatore",
    period: "2025 – Present",
    score: "Pursuing",
    details: "Specializing in advanced software engineering, modern web architectures, and applied intelligent systems.",
    highlight: "Current Academic Pursuit"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Joseph’s College of Arts and Science (Autonomous), Cuddalore",
    period: "2021 – 2024",
    score: "84.82% Overall",
    details: "Graduated with distinction. Demonstrated consistent academic ascent across all semesters.",
    semesterScores: [
      { semester: "Sem 1", score: "71.0%" },
      { semester: "Sem 2", score: "79.0%" },
      { semester: "Sem 3", score: "79.0%" },
      { semester: "Sem 4", score: "80.5%" }
    ],
    highlight: "Graduated with 84.82% Distinction"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "St. Anne’s Girls Higher Secondary School",
    period: "Completed",
    score: "77.0%",
    details: "Higher secondary education focusing on mathematics and science stream foundation."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Schooling Foundation",
    period: "Completed",
    score: "93.0%",
    details: "Outstanding academic performance with exceptional scores in mathematics and sciences.",
    highlight: "93.0% Academic Excellence"
  }
];

export const ROBOTICS_QUALIFICATION = {
  title: "Postgraduate Diploma in Robotics (PGDR)",
  status: "Pursuing alongside MCA",
  description: "Alongside my MCA, I am also pursuing a Postgraduate Diploma in Robotics, where I am gaining interdisciplinary exposure to automation, logical systems, and real-time problem solving. This enhances my analytical thinking and strengthens my ability to understand intelligent systems beyond software alone."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Solid foundational syntax and object-oriented architectures",
    skills: [
      { name: "Java", level: "Intermediate", note: "Core Java, OOP concepts" },
      { name: "Python", level: "Intermediate", note: "FastAPI, script automation" },
      { name: "JavaScript", level: "Proficient", note: "ES6+, async/await, DOM" },
      { name: "C#", level: "Familiar", note: "Basics, application logic understanding" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Modern, responsive, user-centered web interfaces",
    skills: [
      { name: "React.js", level: "Proficient", note: "Component architecture, hooks, state" },
      { name: "HTML5", level: "Advanced", note: "Semantic structure, accessibility" },
      { name: "CSS3 / Tailwind", level: "Proficient", note: "Flexbox, Grid, responsive layouts" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    description: "RESTful endpoints and backend services",
    skills: [
      { name: "FastAPI", level: "Intermediate", note: "Python REST APIs, Pydantic schemas" },
      { name: "Backend Architecture", level: "Developing", note: "Routing, request handling, auth flow" }
    ]
  },
  {
    category: "Database Management",
    icon: "Database",
    description: "Structured relational and flexible document databases",
    skills: [
      { name: "MongoDB", level: "Intermediate", note: "NoSQL, collections, document structure" },
      { name: "MySQL", level: "Intermediate", note: "Relational schema, queries, joins" }
    ]
  },
  {
    category: "Libraries & Machine Learning",
    icon: "Cpu",
    description: "Image processing, array manipulation, and computer vision",
    skills: [
      { name: "OpenCV", level: "Practical", note: "Image processing basics, color filtering" },
      { name: "NumPy", level: "Practical", note: "Data manipulation, matrix operations" },
      { name: "Applied AI Concepts", level: "Enthusiast", note: "Skin tone classification, tone mapping" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    description: "Version control, API testing, and modern developer environments",
    skills: [
      { name: "Git & GitHub", level: "Proficient", note: "Repository management, commits, workflow" },
      { name: "Postman", level: "Proficient", note: "API endpoint testing, payload inspection" },
      { name: "VS Code", level: "Primary IDE", note: "Extensions, debugging, fast development" }
    ]
  },
  {
    category: "Core Concepts",
    icon: "Sparkles",
    description: "Algorithmic thinking and software craftsmanship",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Core", note: "Encapsulation, inheritance, polymorphism" },
      { name: "Data Structures", level: "Foundational", note: "Arrays, lists, basic algorithmic complexity" },
      { name: "API Integration", level: "Practical", note: "Connecting client UI with server endpoints" },
      { name: "UI/UX Design Fundamentals", level: "Creative", note: "Visual balance, user journey, aesthetics" },
      { name: "Problem Solving & Logical Thinking", level: "Core", note: "Analytical breakdown of real-world tasks" }
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Cisco Certification",
    issuer: "Cisco Networking Academy",
    category: "Networking & Infrastructure",
    badgeColor: "bg-rose-100 text-rose-800"
  },
  {
    title: "IBM SkillsBuild – AI Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Artificial Intelligence",
    badgeColor: "bg-pink-100 text-pink-800"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Data Science Specialization",
    category: "Data Analysis & Statistics",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800"
  },
  {
    title: "Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    category: "Network Simulation & Protocols",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export const PROBLEM_SOLVING_STEPS = [
  {
    step: "01",
    title: "Deconstruct Real-World Need",
    description: "I begin by observing real friction points — whether it's a customer matching makeup shades or a factory balancing shift workers. I listen to the user's intent before typing a single line of code."
  },
  {
    step: "02",
    title: "Logical Architecture & Data Modeling",
    description: "Next, I architect the clean data flows: defining MongoDB collections or MySQL schemas, structuring FastAPI endpoints, and establishing clean separations of concern."
  },
  {
    step: "03",
    title: "Empathetic, Graceful Interface Design",
    description: "A system is only as powerful as its accessibility. I craft intuitive, graceful interfaces with responsive feedback, thoughtful spacing, and accessible visual hierarchies."
  },
  {
    step: "04",
    title: "Iterative Refinement & Real Value Delivery",
    description: "I test rigorously with real input samples (e.g., diverse skin tone photography or machine workload queues) to ensure the delivered solution generates genuine everyday value."
  }
];

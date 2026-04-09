// VC LMS - Course Data with full structure
// All courses are FREE

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string; // YouTube embed URL
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorAvatar: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  thumbnail: string;
  duration: string;
  totalLessons: number;
  rating: number;
  reviews: number;
  students: number;
  modules: Module[];
  tags: string[];
  reels: { id: string; title: string; videoUrl: string; duration: string }[];
}

export const CATEGORIES = [
  "App Development",
  "AI & Machine Learning",
  "Data Science & Analytics",
  "Cybersecurity & Networking",
  "Digital Marketing & Business",
  "Creative & Design",
];

export const COURSES: Course[] = [
  // === APP DEVELOPMENT ===
  {
    id: "course_1",
    title: "Full-Stack Web Development – MERN Stack Mastery",
    category: "App Development",
    instructor: "Dr. Sarah Educator",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    difficulty: "Intermediate",
    description: "Master the complete MERN stack (MongoDB, Express.js, React, Node.js). Build production-ready full-stack web applications from scratch with modern best practices.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    duration: "40 hours",
    totalLessons: 24,
    rating: 4.8,
    reviews: 1240,
    students: 8500,
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    modules: [
      {
        id: "mod_1_1",
        title: "Introduction to MERN Stack",
        lessons: [
          { id: "les_1_1_1", title: "What is MERN Stack?", duration: "15 min", videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M", description: "Overview of the MERN stack architecture" },
          { id: "les_1_1_2", title: "Setting Up Development Environment", duration: "20 min", videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M", description: "Install Node.js, MongoDB, and VS Code" },
          { id: "les_1_1_3", title: "Project Structure Best Practices", duration: "18 min", videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M", description: "Organizing your MERN project" },
        ],
        quiz: [
          { id: "q_1_1_1", question: "What does MERN stand for?", options: ["MongoDB, Express, React, Node", "MySQL, Express, React, Nginx", "MongoDB, Ember, React, Node", "MongoDB, Express, Redux, Node"], correctAnswer: 0 },
          { id: "q_1_1_2", question: "Which is the backend runtime in MERN?", options: ["React", "Express", "Node.js", "MongoDB"], correctAnswer: 2 },
        ],
      },
      {
        id: "mod_1_2",
        title: "Backend with Node.js & Express",
        lessons: [
          { id: "les_1_2_1", title: "Building REST APIs", duration: "25 min", videoUrl: "https://www.youtube.com/embed/fgTGADljAeg", description: "Create RESTful endpoints with Express" },
          { id: "les_1_2_2", title: "MongoDB & Mongoose", duration: "30 min", videoUrl: "https://www.youtube.com/embed/fgTGADljAeg", description: "Database modeling and queries" },
          { id: "les_1_2_3", title: "Authentication with JWT", duration: "25 min", videoUrl: "https://www.youtube.com/embed/fgTGADljAeg", description: "Secure your APIs with JWT" },
        ],
        quiz: [
          { id: "q_1_2_1", question: "What is middleware in Express?", options: ["A database", "A function with access to req/res", "A frontend library", "A CSS framework"], correctAnswer: 1 },
        ],
      },
      {
        id: "mod_1_3",
        title: "Frontend with React",
        lessons: [
          { id: "les_1_3_1", title: "React Components & Hooks", duration: "30 min", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", description: "Modern React patterns" },
          { id: "les_1_3_2", title: "State Management", duration: "25 min", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", description: "Context API and Redux" },
        ],
        quiz: [
          { id: "q_1_3_1", question: "What hook manages state in React?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [
      { id: "reel_1_1", title: "REST API in 60 seconds", videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M", duration: "60s" },
      { id: "reel_1_2", title: "React Hooks Quick Tips", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", duration: "45s" },
    ],
  },
  {
    id: "course_2",
    title: "Mobile App Development – Flutter & React Native",
    category: "App Development",
    instructor: "James Wilson",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    difficulty: "Intermediate",
    description: "Build beautiful cross-platform mobile apps using Flutter and React Native. Learn both frameworks and choose the best for your projects.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    duration: "35 hours",
    totalLessons: 20,
    rating: 4.7,
    reviews: 890,
    students: 6200,
    tags: ["Flutter", "React Native", "Dart", "Mobile"],
    modules: [
      {
        id: "mod_2_1",
        title: "Flutter Fundamentals",
        lessons: [
          { id: "les_2_1_1", title: "Dart Language Basics", duration: "20 min", videoUrl: "https://www.youtube.com/embed/1ukSR1GRtMU", description: "Learn Dart programming" },
          { id: "les_2_1_2", title: "Flutter Widgets", duration: "25 min", videoUrl: "https://www.youtube.com/embed/1ukSR1GRtMU", description: "Building UI with widgets" },
        ],
        quiz: [
          { id: "q_2_1_1", question: "What language does Flutter use?", options: ["JavaScript", "Kotlin", "Dart", "Swift"], correctAnswer: 2 },
        ],
      },
      {
        id: "mod_2_2",
        title: "React Native Essentials",
        lessons: [
          { id: "les_2_2_1", title: "React Native Setup", duration: "15 min", videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc", description: "Setting up React Native" },
          { id: "les_2_2_2", title: "Navigation & Routing", duration: "20 min", videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc", description: "App navigation patterns" },
        ],
        quiz: [
          { id: "q_2_2_1", question: "React Native uses which language?", options: ["Dart", "JavaScript", "Python", "Java"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [
      { id: "reel_2_1", title: "Flutter vs React Native", videoUrl: "https://www.youtube.com/embed/1ukSR1GRtMU", duration: "50s" },
    ],
  },
  {
    id: "course_3",
    title: "Frontend Mastery – React, Tailwind, Animations",
    category: "App Development",
    instructor: "Emily Chen",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    difficulty: "Beginner",
    description: "Master modern frontend development with React, Tailwind CSS, and Framer Motion animations. Build stunning, responsive UIs.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    duration: "28 hours",
    totalLessons: 18,
    rating: 4.9,
    reviews: 1560,
    students: 11000,
    tags: ["React", "Tailwind", "CSS", "Animations", "Frontend"],
    modules: [
      {
        id: "mod_3_1",
        title: "React Deep Dive",
        lessons: [
          { id: "les_3_1_1", title: "Advanced Hooks", duration: "30 min", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", description: "Custom hooks and patterns" },
          { id: "les_3_1_2", title: "Performance Optimization", duration: "25 min", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", description: "Memoization and lazy loading" },
        ],
        quiz: [
          { id: "q_3_1_1", question: "What does useMemo do?", options: ["Creates refs", "Memoizes values", "Handles effects", "Manages state"], correctAnswer: 1 },
        ],
      },
      {
        id: "mod_3_2",
        title: "Tailwind CSS Mastery",
        lessons: [
          { id: "les_3_2_1", title: "Utility-First CSS", duration: "20 min", videoUrl: "https://www.youtube.com/embed/UBOj6rqRUME", description: "Tailwind fundamentals" },
        ],
        quiz: [
          { id: "q_3_2_1", question: "Tailwind CSS is a ___ framework", options: ["Component", "Utility-first", "BEM", "Grid"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [
      { id: "reel_3_1", title: "Tailwind Tips", videoUrl: "https://www.youtube.com/embed/UBOj6rqRUME", duration: "40s" },
    ],
  },
  {
    id: "course_4",
    title: "Backend Essentials – Node.js & Express.js",
    category: "App Development",
    instructor: "Dr. Sarah Educator",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    difficulty: "Beginner",
    description: "Learn server-side development with Node.js and Express.js. Build robust APIs, handle authentication, and deploy applications.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    duration: "25 hours",
    totalLessons: 16,
    rating: 4.6,
    reviews: 720,
    students: 5100,
    tags: ["Node.js", "Express", "API", "Backend"],
    modules: [
      {
        id: "mod_4_1",
        title: "Node.js Fundamentals",
        lessons: [
          { id: "les_4_1_1", title: "Node.js Architecture", duration: "20 min", videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4", description: "Event loop and async" },
        ],
        quiz: [
          { id: "q_4_1_1", question: "Node.js uses which engine?", options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_5",
    title: "DevOps for Developers – CI/CD & Deployment",
    category: "App Development",
    instructor: "Mike Johnson",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    difficulty: "Advanced",
    description: "Master DevOps practices including CI/CD pipelines, Docker, Kubernetes, and cloud deployment strategies.",
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    duration: "30 hours",
    totalLessons: 18,
    rating: 4.5,
    reviews: 450,
    students: 3200,
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
    modules: [
      {
        id: "mod_5_1",
        title: "Docker & Containers",
        lessons: [
          { id: "les_5_1_1", title: "Docker Basics", duration: "25 min", videoUrl: "https://www.youtube.com/embed/fqMOX6JJhGo", description: "Containerization concepts" },
        ],
        quiz: [
          { id: "q_5_1_1", question: "Docker containers are based on?", options: ["VMs", "Images", "Servers", "Clusters"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  // === AI & MACHINE LEARNING ===
  {
    id: "course_6",
    title: "AI Engineer – Python, ML, Deep Learning, NLP & LLMs",
    category: "AI & Machine Learning",
    instructor: "Prof. Alan Turing Jr.",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alan",
    difficulty: "Advanced",
    description: "Comprehensive AI engineering course covering Python, ML, Deep Learning, NLP, Computer Vision, Generative AI, LLMs, MLOps, Ethics, and a Capstone project.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    duration: "60 hours",
    totalLessons: 36,
    rating: 4.9,
    reviews: 2100,
    students: 15000,
    tags: ["AI", "Python", "ML", "Deep Learning", "NLP", "LLMs"],
    modules: [
      {
        id: "mod_6_1",
        title: "Python for AI",
        lessons: [
          { id: "les_6_1_1", title: "Python Fundamentals for AI", duration: "30 min", videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s", description: "Python essentials" },
          { id: "les_6_1_2", title: "NumPy & Pandas", duration: "35 min", videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s", description: "Data manipulation" },
        ],
        quiz: [
          { id: "q_6_1_1", question: "Which library is used for numerical computing in Python?", options: ["Django", "Flask", "NumPy", "Requests"], correctAnswer: 2 },
        ],
      },
      {
        id: "mod_6_2",
        title: "Machine Learning Fundamentals",
        lessons: [
          { id: "les_6_2_1", title: "Supervised Learning", duration: "40 min", videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg", description: "Classification & regression" },
        ],
        quiz: [
          { id: "q_6_2_1", question: "Which is a supervised learning algorithm?", options: ["K-Means", "Linear Regression", "PCA", "DBSCAN"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [
      { id: "reel_6_1", title: "What is Machine Learning?", videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg", duration: "55s" },
    ],
  },
  {
    id: "course_7",
    title: "AI Tools & Applications – Free Course",
    category: "AI & Machine Learning",
    instructor: "Lisa AI",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    difficulty: "Beginner",
    description: "Learn to use popular AI tools like ChatGPT, Midjourney, GitHub Copilot, and more. Boost your productivity with AI.",
    thumbnail: "https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?w=600&q=80",
    duration: "12 hours",
    totalLessons: 10,
    rating: 4.7,
    reviews: 3200,
    students: 22000,
    tags: ["AI Tools", "ChatGPT", "Productivity"],
    modules: [
      {
        id: "mod_7_1",
        title: "Getting Started with AI Tools",
        lessons: [
          { id: "les_7_1_1", title: "Introduction to AI Tools", duration: "15 min", videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao", description: "Overview of AI tools landscape" },
        ],
        quiz: [
          { id: "q_7_1_1", question: "ChatGPT is developed by?", options: ["Google", "Meta", "OpenAI", "Microsoft"], correctAnswer: 2 },
        ],
      },
    ],
    reels: [
      { id: "reel_7_1", title: "Top 5 AI Tools", videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao", duration: "50s" },
    ],
  },
  {
    id: "course_8",
    title: "Machine Learning Fundamentals",
    category: "AI & Machine Learning",
    instructor: "Prof. Alan Turing Jr.",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alan",
    difficulty: "Intermediate",
    description: "Master regression, classification, and clustering algorithms. Build ML models from scratch using scikit-learn.",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    duration: "30 hours",
    totalLessons: 20,
    rating: 4.6,
    reviews: 980,
    students: 7500,
    tags: ["ML", "Scikit-learn", "Python", "Algorithms"],
    modules: [
      {
        id: "mod_8_1",
        title: "Regression & Classification",
        lessons: [
          { id: "les_8_1_1", title: "Linear & Logistic Regression", duration: "35 min", videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg", description: "Core ML algorithms" },
        ],
        quiz: [
          { id: "q_8_1_1", question: "Logistic regression is used for?", options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_9",
    title: "Deep Learning with TensorFlow & PyTorch",
    category: "AI & Machine Learning",
    instructor: "Dr. Neural Net",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neural",
    difficulty: "Advanced",
    description: "Build neural networks, CNNs, and RNNs using TensorFlow and PyTorch. Master deep learning architectures.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    duration: "45 hours",
    totalLessons: 28,
    rating: 4.8,
    reviews: 760,
    students: 5400,
    tags: ["Deep Learning", "TensorFlow", "PyTorch", "Neural Networks"],
    modules: [
      {
        id: "mod_9_1",
        title: "Neural Network Basics",
        lessons: [
          { id: "les_9_1_1", title: "Perceptrons & Backpropagation", duration: "40 min", videoUrl: "https://www.youtube.com/embed/aircAruvnKk", description: "How neural networks learn" },
        ],
        quiz: [
          { id: "q_9_1_1", question: "What is the basic unit of a neural network?", options: ["Layer", "Neuron", "Weight", "Bias"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_10",
    title: "NLP & Chatbot Development",
    category: "AI & Machine Learning",
    instructor: "Lisa AI",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    difficulty: "Advanced",
    description: "Master Natural Language Processing with Transformers. Build chatbots and integrate LLMs into applications.",
    thumbnail: "https://images.unsplash.com/photo-1531746790095-e5e1e0b18535?w=600&q=80",
    duration: "35 hours",
    totalLessons: 22,
    rating: 4.7,
    reviews: 540,
    students: 4100,
    tags: ["NLP", "Transformers", "Chatbots", "LLMs"],
    modules: [
      {
        id: "mod_10_1",
        title: "NLP Fundamentals",
        lessons: [
          { id: "les_10_1_1", title: "Text Processing & Tokenization", duration: "25 min", videoUrl: "https://www.youtube.com/embed/fOvTtapxa9c", description: "NLP basics" },
        ],
        quiz: [
          { id: "q_10_1_1", question: "What is tokenization?", options: ["Encryption", "Splitting text into tokens", "Translating text", "Compressing text"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  // === DATA SCIENCE ===
  {
    id: "course_11",
    title: "Data Science Foundations – Python, Pandas, NumPy",
    category: "Data Science & Analytics",
    instructor: "Anna Data",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    difficulty: "Beginner",
    description: "Learn data science fundamentals with Python, Pandas, NumPy, and Matplotlib. Analyze and visualize real-world datasets.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    duration: "25 hours",
    totalLessons: 16,
    rating: 4.6,
    reviews: 1100,
    students: 8900,
    tags: ["Data Science", "Python", "Pandas", "NumPy"],
    modules: [
      {
        id: "mod_11_1",
        title: "Data Analysis with Pandas",
        lessons: [
          { id: "les_11_1_1", title: "DataFrames & Series", duration: "30 min", videoUrl: "https://www.youtube.com/embed/vmEHCJofslg", description: "Core Pandas concepts" },
        ],
        quiz: [
          { id: "q_11_1_1", question: "Pandas DataFrame is?", options: ["1D array", "2D labeled data structure", "Graph", "Tree"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_12",
    title: "Advanced Data Analytics",
    category: "Data Science & Analytics",
    instructor: "Anna Data",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    difficulty: "Intermediate",
    description: "Advanced data cleaning, visualization, and reporting techniques for professional data analysts.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    duration: "20 hours",
    totalLessons: 14,
    rating: 4.5,
    reviews: 620,
    students: 4800,
    tags: ["Analytics", "Visualization", "Reporting"],
    modules: [
      {
        id: "mod_12_1",
        title: "Data Visualization",
        lessons: [
          { id: "les_12_1_1", title: "Charts & Graphs Best Practices", duration: "25 min", videoUrl: "https://www.youtube.com/embed/vmEHCJofslg", description: "Effective visualization" },
        ],
        quiz: [
          { id: "q_12_1_1", question: "Best chart for showing trends over time?", options: ["Pie", "Bar", "Line", "Scatter"], correctAnswer: 2 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_13",
    title: "Big Data & Spark",
    category: "Data Science & Analytics",
    instructor: "David Spark",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    difficulty: "Advanced",
    description: "Distributed computing with Apache Spark. Build data pipelines for processing massive datasets.",
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
    duration: "35 hours",
    totalLessons: 20,
    rating: 4.4,
    reviews: 380,
    students: 2900,
    tags: ["Big Data", "Spark", "Hadoop", "Data Pipelines"],
    modules: [
      {
        id: "mod_13_1",
        title: "Spark Fundamentals",
        lessons: [
          { id: "les_13_1_1", title: "Introduction to Apache Spark", duration: "30 min", videoUrl: "https://www.youtube.com/embed/vmEHCJofslg", description: "Distributed computing basics" },
        ],
        quiz: [
          { id: "q_13_1_1", question: "Spark processes data in?", options: ["Disk", "Memory", "Cloud only", "GPU only"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  // === CYBERSECURITY ===
  {
    id: "course_14",
    title: "Ethical Hacking & Penetration Testing",
    category: "Cybersecurity & Networking",
    instructor: "HackMaster Zero",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hack",
    difficulty: "Intermediate",
    description: "Learn ethical hacking, penetration testing, and vulnerability assessment. Become a certified ethical hacker.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    duration: "40 hours",
    totalLessons: 24,
    rating: 4.8,
    reviews: 1500,
    students: 12000,
    tags: ["Ethical Hacking", "Cybersecurity", "Pentesting"],
    modules: [
      {
        id: "mod_14_1",
        title: "Introduction to Ethical Hacking",
        lessons: [
          { id: "les_14_1_1", title: "Hacking Methodology", duration: "20 min", videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE", description: "Legal and ethical frameworks" },
        ],
        quiz: [
          { id: "q_14_1_1", question: "Ethical hacking is also called?", options: ["Black hat", "White hat", "Gray hat", "Red hat"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_15",
    title: "Networking Essentials – TCP/IP & Cloud",
    category: "Cybersecurity & Networking",
    instructor: "NetPro Alex",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NetPro",
    difficulty: "Beginner",
    description: "Master networking fundamentals: TCP/IP, protocols, cloud networking, and network security basics.",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    duration: "20 hours",
    totalLessons: 14,
    rating: 4.5,
    reviews: 680,
    students: 5200,
    tags: ["Networking", "TCP/IP", "Cloud", "Protocols"],
    modules: [
      {
        id: "mod_15_1",
        title: "TCP/IP Model",
        lessons: [
          { id: "les_15_1_1", title: "OSI vs TCP/IP", duration: "20 min", videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE", description: "Network models" },
        ],
        quiz: [
          { id: "q_15_1_1", question: "How many layers does OSI model have?", options: ["4", "5", "6", "7"], correctAnswer: 3 },
        ],
      },
    ],
    reels: [],
  },
  // === DIGITAL MARKETING ===
  {
    id: "course_16",
    title: "Digital Marketing Masterclass",
    category: "Digital Marketing & Business",
    instructor: "Mark Digital",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    difficulty: "Beginner",
    description: "Complete digital marketing course covering SEO, SEM, Social Media Marketing, Content Marketing, and Analytics.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
    duration: "22 hours",
    totalLessons: 16,
    rating: 4.6,
    reviews: 920,
    students: 7800,
    tags: ["SEO", "SEM", "Social Media", "Marketing"],
    modules: [
      {
        id: "mod_16_1",
        title: "SEO Mastery",
        lessons: [
          { id: "les_16_1_1", title: "On-Page & Off-Page SEO", duration: "25 min", videoUrl: "https://www.youtube.com/embed/DvwS7cV9GmQ", description: "Search engine optimization" },
        ],
        quiz: [
          { id: "q_16_1_1", question: "SEO stands for?", options: ["Social Engine Optimization", "Search Engine Optimization", "Search Email Outreach", "Site Engine Output"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  {
    id: "course_17",
    title: "E-Commerce & Entrepreneurship",
    category: "Digital Marketing & Business",
    instructor: "Mark Digital",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    difficulty: "Beginner",
    description: "Build and scale an online business. Learn e-commerce platforms, marketing strategies, and business fundamentals.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    duration: "18 hours",
    totalLessons: 12,
    rating: 4.4,
    reviews: 520,
    students: 4100,
    tags: ["E-Commerce", "Business", "Entrepreneurship"],
    modules: [
      {
        id: "mod_17_1",
        title: "Starting Your Online Store",
        lessons: [
          { id: "les_17_1_1", title: "Choosing a Platform", duration: "20 min", videoUrl: "https://www.youtube.com/embed/DvwS7cV9GmQ", description: "Shopify vs WooCommerce" },
        ],
        quiz: [
          { id: "q_17_1_1", question: "Shopify is a?", options: ["CMS", "E-commerce platform", "Social media", "Search engine"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
  // === CREATIVE & DESIGN ===
  {
    id: "course_18",
    title: "UI/UX Design – Figma, Prototyping, User Testing",
    category: "Creative & Design",
    instructor: "Design Maya",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    difficulty: "Beginner",
    description: "Learn UI/UX design principles, Figma tools, prototyping, wireframing, and user testing methodologies.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    duration: "24 hours",
    totalLessons: 16,
    rating: 4.7,
    reviews: 1080,
    students: 8400,
    tags: ["UI/UX", "Figma", "Design", "Prototyping"],
    modules: [
      {
        id: "mod_18_1",
        title: "Figma Fundamentals",
        lessons: [
          { id: "les_18_1_1", title: "Figma Interface & Tools", duration: "25 min", videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8", description: "Getting started with Figma" },
        ],
        quiz: [
          { id: "q_18_1_1", question: "Figma is primarily used for?", options: ["Coding", "UI/UX Design", "Video editing", "Data analysis"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [
      { id: "reel_18_1", title: "Figma Tips in 60s", videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8", duration: "60s" },
    ],
  },
  {
    id: "course_19",
    title: "3D & Motion Graphics – Three.js & Blender",
    category: "Creative & Design",
    instructor: "3D Master Ray",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ray",
    difficulty: "Intermediate",
    description: "Create stunning 3D graphics and animations using Three.js and Blender. From basics to advanced motion design.",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80",
    duration: "32 hours",
    totalLessons: 20,
    rating: 4.5,
    reviews: 420,
    students: 3100,
    tags: ["3D", "Three.js", "Blender", "Animation"],
    modules: [
      {
        id: "mod_19_1",
        title: "Three.js Basics",
        lessons: [
          { id: "les_19_1_1", title: "Setting Up Three.js", duration: "20 min", videoUrl: "https://www.youtube.com/embed/Q7AOvWpIVHU", description: "3D in the browser" },
        ],
        quiz: [
          { id: "q_19_1_1", question: "Three.js runs in?", options: ["Python", "Browser/JavaScript", "Unity", "Unreal"], correctAnswer: 1 },
        ],
      },
    ],
    reels: [],
  },
];

// Helper functions
export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

export function getCoursesByCategory(category: string): Course[] {
  return COURSES.filter((c) => c.category === category);
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase();
  return COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q)) ||
      c.instructor.toLowerCase().includes(q)
  );
}

export function getRecommendedCourses(enrolledIds: string[], limit = 6): Course[] {
  // AI-like recommendation: find courses in same categories as enrolled, then by rating
  const enrolledCourses = enrolledIds.map(getCourseById).filter(Boolean) as Course[];
  const enrolledCategories = [...new Set(enrolledCourses.map((c) => c.category))];
  
  const recommended = COURSES
    .filter((c) => !enrolledIds.includes(c.id))
    .sort((a, b) => {
      const aInCategory = enrolledCategories.includes(a.category) ? 1 : 0;
      const bInCategory = enrolledCategories.includes(b.category) ? 1 : 0;
      if (aInCategory !== bInCategory) return bInCategory - aInCategory;
      return b.rating - a.rating;
    });
  
  return recommended.slice(0, limit);
}

export function getCourseProgress(courseId: string, completedModuleIds: string[]): number {
  const course = getCourseById(courseId);
  if (!course || course.modules.length === 0) return 0;
  const completed = course.modules.filter((m) => completedModuleIds.includes(m.id)).length;
  return Math.round((completed / course.modules.length) * 100);
}

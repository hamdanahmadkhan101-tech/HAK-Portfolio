// Mock data for portfolio - will be replaced with backend integration

export const profileData = {
  name: "Hamdan Ahmad Khan",
  username: "hamdanahmadkhan101-tech",
  title: "Full Stack Developer",
  bio: "24-year-old Computer Science student from University of Swat, passionate about building modern, scalable web applications. Experienced in MERN stack development with a focus on creating intuitive user experiences and real-world solutions.",
  location: "Odigram Swat, KPK, Pakistan",
  email: "hamdanahmadkhan101@gmail.com",
  phone: "03447230306",
  github: "https://github.com/hamdanahmadkhan101-tech",
  linkedin: "https://www.linkedin.com/in/hamdan-ahmad-khan-a48407384",
  avatar: "https://avatars.githubusercontent.com/u/222951084?v=4",
  age: 24,
  totalRepos: 12,
  followers: 0,
  following: 1,
  contributions: 44,
  education: {
    institution: "University of Swat",
    degree: "Bachelor of Computer Science",
    startYear: 2022,
    status: "In Progress"
  }
};

export const projects = [
  {
    id: 1,
    title: "Task Manager Application",
    slug: "Projects",
    description: "A full-featured task management system built with Node.js and EJS. Features include task creation, editing, updating, and real-time status tracking.",
    longDescription: "Comprehensive task management solution with intuitive UI/UX. Allows users to create, edit, update, and delete tasks efficiently. Built with Express.js backend and EJS templating for server-side rendering.",
    tech: ["Node.js", "Express", "EJS", "JavaScript", "CSS"],
    category: "Full Stack",
    github: "https://github.com/hamdanahmadkhan101-tech/Projects",
    featured: true,
    accentColor: "#00D9FF",
    image: null,
    status: "Active",
    year: 2025,
    highlights: [
      "CRUD operations for task management",
      "Server-side rendering with EJS",
      "RESTful API architecture",
      "Responsive design"
    ]
  },
  {
    id: 2,
    title: "Todo App with Next.js",
    slug: "todo-nextjs",
    description: "Modern todo application built with Next.js 15 and TypeScript. Features type-safe code, server components, and optimized performance.",
    longDescription: "Next-generation todo app leveraging the latest Next.js features including App Router, Server Components, and TypeScript for type safety. Implements modern React patterns and best practices.",
    tech: ["Next.js", "TypeScript", "React", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/hamdanahmadkhan101-tech/todo-nextjs",
    featured: true,
    accentColor: "#00FF88",
    image: null,
    status: "Active",
    year: 2025,
    highlights: [
      "Built with Next.js 15 App Router",
      "Type-safe with TypeScript",
      "Server Components for optimal performance",
      "Modern React patterns"
    ]
  },
  {
    id: 3,
    title: "Currency Exchange App",
    slug: "Currency-Exchange-App",
    description: "Real-time currency converter using live exchange rates. Clean vanilla JavaScript implementation with API integration.",
    longDescription: "Currency conversion application that fetches real-time exchange rates from external APIs. Features currency selection, conversion calculations, and a clean, user-friendly interface built with vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    category: "Frontend",
    github: "https://github.com/hamdanahmadkhan101-tech/Currency-Exchange-App",
    featured: true,
    accentColor: "#FF6B6B",
    image: null,
    status: "Complete",
    year: 2025,
    highlights: [
      "Real-time currency conversion",
      "API integration for live rates",
      "Vanilla JavaScript implementation",
      "Responsive UI design"
    ]
  }
];

export const skills = {
  frontend: [
    { name: "JavaScript", level: 90, category: "Language" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "React", level: 85, category: "Framework" },
    { name: "Next.js", level: 80, category: "Framework" },
    { name: "HTML/CSS", level: 90, category: "Core" },
    { name: "Tailwind CSS", level: 75, category: "Styling" }
  ],
  backend: [
    { name: "Node.js", level: 85, category: "Runtime" },
    { name: "Express.js", level: 80, category: "Framework" },
    { name: "RESTful APIs", level: 80, category: "Architecture" },
    { name: "MongoDB", level: 70, category: "Database" }
  ],
  tools: [
    { name: "Git", level: 85, category: "Version Control" },
    { name: "GitHub", level: 85, category: "Platform" },
    { name: "VS Code", level: 90, category: "Editor" },
    { name: "npm/yarn", level: 80, category: "Package Manager" }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Building modern web applications with focus on user experience and performance",
    period: "2024 - Present",
    highlights: [
      "Developed multiple full-stack applications",
      "Implemented RESTful APIs and database solutions",
      "Focus on modern frameworks and best practices"
    ]
  },
  {
    id: 2,
    title: "CS Student",
    description: "Pursuing Computer Science education with hands-on project experience",
    period: "2023 - Present",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Active GitHub contributor",
      "Continuous learning of new technologies"
    ]
  }
];

export const stats = [
  { label: "Projects Completed", value: "12+", icon: "code" },
  { label: "GitHub Contributions", value: "44", icon: "git-commit" },
  { label: "Technologies", value: "15+", icon: "layers" },
  { label: "Coffee Consumed", value: "∞", icon: "coffee" }
];
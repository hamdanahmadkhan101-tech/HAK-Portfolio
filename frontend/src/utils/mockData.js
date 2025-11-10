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
    title: "Khan Familia Travels Platform",
    slug: "kft-travel-platform",
    description: "Modern, scalable travel booking platform for Khan Familia Travels (KFT) featuring AI-powered tour planning, hotel/restaurant bookings, and comprehensive transportation services.",
    longDescription: "Enterprise-grade travel application built for Khan Familia Travels, combining multiple booking services into a unified platform. Features include hotel and restaurant reservations, car and taxi booking, interactive map routes with real-time destinations, and an AI-integrated tour planner that creates personalized itineraries for tourists. Built with the MERN stack to ensure scalability and performance.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "AI Integration", "Maps API"],
    category: "Full Stack",
    github: null,
    liveUrl: null,
    featured: true,
    accentColor: "#00D9FF",
    image: null,
    status: "In Production",
    year: 2024,
    highlights: [
      "Hotel & restaurant booking system",
      "Car and taxi reservation platform",
      "Interactive map routes and destinations",
      "AI-powered tour planner for personalized itineraries",
      "Built with MERN stack for scalability",
      "Real-time availability tracking"
    ]
  },
  {
    id: 2,
    title: "Task Manager Application",
    slug: "task-manager",
    description: "A full-featured task management system built with Node.js and EJS. Features include task creation, editing, updating, and real-time status tracking.",
    longDescription: "Comprehensive task management solution with intuitive UI/UX. Allows users to create, edit, update, and delete tasks efficiently. Built with Express.js backend and EJS templating for server-side rendering.",
    tech: ["Node.js", "Express", "EJS", "JavaScript", "CSS"],
    category: "Full Stack",
    github: "https://github.com/hamdanahmadkhan101-tech/Projects",
    featured: true,
    accentColor: "#00FF88",
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
    id: 3,
    title: "Todo App with Next.js",
    slug: "todo-nextjs",
    description: "Modern todo application built with Next.js 15 and TypeScript. Features type-safe code, server components, and optimized performance.",
    longDescription: "Next-generation todo app leveraging the latest Next.js features including App Router, Server Components, and TypeScript for type safety. Implements modern React patterns and best practices.",
    tech: ["Next.js", "TypeScript", "React", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/hamdanahmadkhan101-tech/todo-nextjs",
    featured: true,
    accentColor: "#FF6B6B",
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
    id: 4,
    title: "Currency Exchange App",
    slug: "currency-exchange-app",
    description: "Real-time currency converter using live exchange rates. Clean vanilla JavaScript implementation with API integration.",
    longDescription: "Currency conversion application that fetches real-time exchange rates from external APIs. Features currency selection, conversion calculations, and a clean, user-friendly interface built with vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    category: "Frontend",
    github: "https://github.com/hamdanahmadkhan101-tech/Currency-Exchange-App",
    featured: false,
    accentColor: "#FFB800",
    image: null,
    status: "Complete",
    year: 2024,
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
    title: "Full Stack Developer - Khan Familia Travels",
    description: "Developed and deployed a comprehensive travel booking platform with AI-powered features",
    period: "2024 - Present",
    highlights: [
      "Built scalable MERN stack application for travel bookings",
      "Integrated AI tour planner for personalized itineraries",
      "Implemented hotel, restaurant, and transportation booking systems",
      "Designed interactive map routes with real-time destinations",
      "Delivered production-ready application serving real customers"
    ]
  },
  {
    id: 2,
    title: "Computer Science Student - University of Swat",
    description: "Pursuing Bachelor's degree in Computer Science with focus on web development",
    period: "2022 - Present",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Active GitHub contributor with multiple projects",
      "Specialized in modern web technologies and frameworks",
      "Hands-on experience with real-world applications"
    ]
  }
];

export const stats = [
  { label: "Projects Completed", value: "12+", icon: "code" },
  { label: "GitHub Contributions", value: "44", icon: "git-commit" },
  { label: "Technologies", value: "15+", icon: "layers" },
  { label: "Coffee Consumed", value: "∞", icon: "coffee" }
];
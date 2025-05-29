// Identity interface (already present)
interface Identity {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  occupation: string;
  summary: string;
  email: string;
  hobbies: string[];
}

// Skill (simple string array, no interface needed for 'skills')

// Summary item interface
interface SummaryItem {
  title: string;
  description: string;
}

// SkillData interface for detailed skills
interface SkillData {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "soft";
}

// Experience interface
interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

// Data exports with types
export const identity: Identity = {
  firstName: "Jamal Mohamed",
  lastName: "Ameer",
  country: "Saudi Arabia",
  city: "Riyadh",
  occupation: "Senior Frontend Developer",
  summary:
    "Experienced frontend developer with a passion for building accessible, performant, and user-friendly web applications. Skilled in modern JavaScript frameworks and tools, with a focus on React and Astro. Committed to continuous learning and improving development practices.",
  email: "jamalbe2004@gmail.com",
  hobbies: ["music", "traveling", "movies"],
};

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Astro",
  "Writing Docs",
];

export const summaryItems: SummaryItem[] = [
  {
    title: "Background",
    description:
      "I hold a Bachelor's degree in Computer Science and started my career as a frontend developer in 2016. Since then, I've worked with startups, agencies, and enterprise companies across a variety of industries.",
  },
  {
    title: "Philosophy",
    description:
      "I believe in a user-first approach to development, where accessibility, performance, and intuitive design work together to create exceptional experiences. Good code is readable, maintainable, and inclusive.",
  },
  {
    title: "Current Focus",
    description:
      "I'm currently exploring the intersection of AI and frontend development, building accessible component systems, and deepening my knowledge of performance optimization techniques.",
  },
];

export const skillsData: SkillData[] = [
  { name: "Redux", level: 4, category: "frontend" },
  { name: "Testing Library", level: 4, category: "tools" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Mentoring", level: 4, category: "soft" },
  { name: "Web Accessibility", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "SCSS/Sass", level: 4, category: "frontend" },
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Vue.js", level: 3, category: "frontend" },
  { name: "MongoDB", level: 3, category: "backend" },
  { name: "Time Management", level: 4, category: "soft" },
  { name: "PostgreSQL", level: 3, category: "backend" },
  { name: "Git/GitHub", level: 5, category: "tools" },
  { name: "Communication", level: 5, category: "soft" },
  { name: "Express", level: 4, category: "backend" },
  { name: "Responsive Design", level: 5, category: "frontend" },
  { name: "Jest", level: 4, category: "tools" },
  { name: "Vite", level: 4, category: "tools" },
  { name: "Leadership", level: 4, category: "soft" },
  { name: "Figma", level: 4, category: "tools" },
  { name: "REST APIs", level: 5, category: "backend" },
  { name: "User Empathy", level: 5, category: "soft" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "Cypress", level: 3, category: "tools" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Adobe XD", level: 3, category: "tools" },
  { name: "GraphQL", level: 3, category: "backend" },
  { name: "Teamwork", level: 5, category: "soft" },
  { name: "Firebase", level: 4, category: "backend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "CI/CD", level: 3, category: "tools" },
  { name: "CSS-in-JS", level: 4, category: "frontend" },
  { name: "Tailwind CSS", level: 5, category: "frontend" },
  { name: "Adaptability", level: 4, category: "soft" },
  { name: "Webpack", level: 4, category: "tools" },
  { name: "React", level: 5, category: "frontend" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Lead Frontend Developer",
    company: "TechCorp Inc.",
    logo: "https://via.placeholder.com/100",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Leading a team of frontend developers, architecting scalable web applications, implementing best practices, and mentoring junior developers.",
    achievements: [
      "Redesigned the company's flagship product, resulting in a 35% increase in user engagement",
      "Implemented a component library that reduced development time by 40%",
      "Set up automated testing and CI/CD pipelines that improved release reliability by 80%",
    ],
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    company: "InnoTech Solutions",
    logo: "https://via.placeholder.com/100",
    location: "Austin, TX",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications using React, TypeScript, and modern frontend tools. Collaborated with UX/UI designers to implement pixel-perfect interfaces.",
    achievements: [
      "Rebuilt the core application using React, improving performance by 60%",
      "Implemented accessibility standards (WCAG 2.1) across all company products",
      "Reduced bundle sizes by 45% through code splitting and optimization techniques",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebSolutions LLC",
    logo: "https://via.placeholder.com/100",
    location: "Chicago, IL",
    period: "2016 - 2018",
    description:
      "Built responsive websites and web applications for clients across various industries. Worked in an agile team environment.",
    achievements: [
      "Developed 20+ client websites with modern JavaScript frameworks",
      "Created a custom CMS solution that improved content management workflows",
      "Integrated third-party APIs for payment processing, maps, and social media",
    ],
  },
];

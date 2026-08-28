export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "bairesdev-fullstack",
    company: "BairesDev",
    role: "Full Stack Engineer",
    duration: "February 2023 – January 2026",
    location: "San Francisco, CA",
    description:
      "Architected and delivered scalable full-stack applications and cloud-native systems for high-traffic production environments.",
    achievements: [
      "Architected and delivered scalable full-stack applications using React, Next.js, Node.js, and PostgreSQL, improving system performance by 35% under high production traffic.",
      "Designed and implemented backend services using Node.js, Spring Boot, and FastAPI, supporting 800K+ monthly requests with strong reliability.",
      "Engineered microservices-based architecture and RESTful APIs, enabling horizontal scaling and reducing service downtime.",
      "Optimized database performance using Redis caching, indexing strategies, and query tuning, reducing API response latency by 45% during peak traffic.",
      "Led cloud infrastructure deployment using AWS, Docker, Kubernetes, and CI/CD pipelines, improving deployment frequency and system stability.",
      "Integrated external services including Stripe and Twilio APIs for secure payments and real-time communication.",
      "Collaborated with cross-functional engineering teams to deliver scalable features, improving release timelines by 20%.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Stripe",
      "Twilio",
    ],
    type: "full-time",
  },
  {
    id: "keyhole-software-engineer",
    company: "Keyhole Software",
    role: "Software Engineer",
    duration: "March 2020 – December 2022",
    location: "Lenexa, Kansas",
    description:
      "Built full-stack features and backend services across React, TypeScript, Node.js, Java, and Python for production applications.",
    achievements: [
      "Developed full-stack features using React, TypeScript, Node.js, and Express.js, improving frontend responsiveness and backend performance.",
      "Built backend services using Java Spring Boot and Python, supporting scalable data processing pipelines and increasing system throughput by 30%.",
      "Designed and maintained secure RESTful APIs for efficient data exchange between frontend and backend services.",
      "Optimized database performance using PostgreSQL and MongoDB tuning, reducing query execution time by 40% on large datasets.",
      "Containerized applications using Docker, improving deployment consistency across development and production.",
      "Implemented authentication and authorization using JWT and RBAC, strengthening application security and access control.",
      "Participated in Agile development cycles across planning, development, testing, and release phases.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "JWT",
      "RBAC",
    ],
    type: "full-time",
  },
  {
    id: "dialexa-frontend",
    company: "Dialexa",
    role: "Frontend Developer",
    duration: "November 2018 – January 2020",
    location: "Dallas, TX",
    description:
      "Built responsive user interfaces and optimized frontend performance for modern web applications.",
    achievements: [
      "Built responsive user interfaces using React, JavaScript, HTML5, and CSS3, improving cross-device compatibility and user experience.",
      "Integrated frontend systems with backend APIs for dynamic data rendering and improved application responsiveness.",
      "Optimized frontend performance using code splitting, lazy loading, and bundle optimization, reducing page load time by 30%.",
      "Resolved UI bugs and improved design consistency, reducing user-reported issues across platforms.",
      "Collaborated with designers and backend engineers to deliver feature-rich applications aligned with product requirements.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    type: "full-time",
  },
];

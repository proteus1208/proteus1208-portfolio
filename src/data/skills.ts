export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "React / Next.js", level: 92 },
      { name: "Redux / Zustand", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express / NestJS", level: 90 },
      { name: "Java / Spring Boot", level: 88 },
      { name: "Python / FastAPI / Django", level: 88 },
    ],
  },
  {
    title: "Data & Cloud",
    icon: "☁️",
    skills: [
      { name: "PostgreSQL / MongoDB / Redis", level: 90 },
      { name: "AWS / Docker / Kubernetes", level: 88 },
      { name: "Kafka / RabbitMQ / CI/CD", level: 85 },
    ],
  },
];

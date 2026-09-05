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
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 86 },
    ],
  },
  {
    title: "Data & Cloud",
    icon: "☁️",
    skills: [
      { name: "PostgreSQL / MongoDB / Redis", level: 90 },
      { name: "AWS / Docker / Kubernetes", level: 88 },
      { name: "CI/CD", level: 88 },
    ],
  },
];

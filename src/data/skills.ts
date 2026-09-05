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
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      { name: "LangChain / RAG / LLMs", level: 90 },
      { name: "PyTorch / Scikit-learn", level: 88 },
      { name: "MLflow / MLOps", level: 85 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "Vue.js / Angular", level: 85 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: "☁️",
    skills: [
      { name: "Node.js / Python / Java", level: 90 },
      { name: "PostgreSQL / MongoDB / Redis", level: 90 },
      { name: "AWS / Docker / Kubernetes", level: 88 },
    ],
  },
];

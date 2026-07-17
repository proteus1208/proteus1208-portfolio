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
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "python", level: 88 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Three.js", level: 75 },
      { name: "Nest.js", level: 80 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 89 },
      { name: "Express", level: 88 },
      { name: "SupaBase", level: 74 },
      { name: "MYSQL", level: 85 },
      { name: "POSTGRESQL", level: 80 },
      { name: "MongoDB", level: 90 },
      { name: "MYSQL", level: 85 },
      { name: "Firebase", level: 90 }
    ]
  },
];
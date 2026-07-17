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
    id: "nextsprinttech-fullstack",
    company: "NextSprintTech",
    role: "Senior Full-Stack Developer",
    duration: "February 2023 - February 2026",
    location: "San Francisco, California, United States · Remote",
    description:
      "",
    achievements: [],
    technologies: [
      "Web application",
      "Mobile application",
      "AI automation", 
      "AI integration",
      "Healthcare",
      "Fintech",
      "Leadership",
      "Mentorship",
    ],
    type: "full-time"
  },
  {
    id: "coins-senior-fullstack",
    company: "Coins.ph",
    role: "Full-Stack Developer",
    duration: "September 2021 - September 2022",
    location: "Taguig City, Metro Manila, Philippines · Remote",
    description:
      "",
    achievements: [],
    technologies: [
      "End-to-end Development",
      "Blockchain Features",
      "API Development",
      "Security & Compliance",
    ],
    type: "full-time"
  },
  {
    id: "esl-web-developer",
    company: "Exist Software Labs",
    role: "Web Developer",
    duration: "August 2020 - August 2021",
    location: "Pasig City, Metro Manila, Philippines · Remote",
    description:
      "",
    achievements: [],
    technologies: ["React.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI"],
    type: "full-time"
  },
  {
    id: "IOL-junior-web-developer",
    company: "IOL Inc.",
    role: "Junior Web Developer",
    duration: "June 2018 - June 2020",
    location: "Baguio City, Benguet, Philippines",
    description:
      "",
    achievements: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "AJAX", "Jira/Trello", "basic CI/CD"],
    type: "full-time"
  },
  {
    id: "linkage-frontend-developer-intern",
    company: "Linkage",
    role: "Software Developer Intern",
    duration: "July 20, 2017 - February 20, 2018",
    location: "Baguio City, Benguet, Philippines",
    description:
      "",
    achievements: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git/GitHub", "dApps", "NFTs", "DeFi concepts"],
    type: "internship"
  }
];

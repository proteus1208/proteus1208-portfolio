export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "coders-circle",
    title: "Co-Founder",
    organization: "Coders Circle",
    description: "Built and scaled a growing tech community focused on coding culture, collaboration, and peer learning.",
    impact: [
      "Created a tech community of 1500+ students and developers",
      "Organized tech sessions, networking events, and collaborative coding spaces",
      "Encouraged open-source contributions and project-based learning",
      "Built leadership and community engagement initiatives"
    ],
  }
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export const educationData: Education[] = [
  {
    id: "slu",
    institution: "Saint Louis University (PN)",
    degree: "BS Information Technology Engineering",
    duration: "2013 - 2018",
    location: "Baguio, Philippines",
  },
  {
    id: "slc",
    institution: "Saint Louis Collage of San Fernando",
    degree: "High School Diploma",
    duration: "2009 - 2013",
    location: "San Fernando City, Philippines",
  },
];

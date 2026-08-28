export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "high-traffic-systems",
    title: "High-Traffic Systems Delivery",
    organization: "BairesDev",
    description:
      "Delivered scalable full-stack platforms supporting 800K+ monthly requests with strong reliability and efficient resource utilization.",
    impact: [
      "Improved system performance by 35% under high production traffic",
      "Reduced API response latency by 45% with Redis caching and query tuning",
      "Improved release timelines by 20% through cross-functional collaboration",
    ],
  },
  {
    id: "backend-throughput",
    title: "Backend Throughput Optimization",
    organization: "Keyhole Software",
    description:
      "Built scalable data processing pipelines and secure APIs that improved system throughput and database performance.",
    impact: [
      "Increased system throughput by 30% with Spring Boot and Python services",
      "Reduced query execution time by 40% on large PostgreSQL and MongoDB datasets",
      "Strengthened security with JWT authentication and RBAC",
    ],
  },
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
    id: "utsa",
    institution: "University of Texas at San Antonio",
    degree: "Bachelor of Science in Computer Science",
    duration: "May 2018",
    location: "San Antonio, TX, United States",
  },
];

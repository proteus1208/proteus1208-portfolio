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
    id: "cit-senior-fullstack",
    company: "CI&T",
    role: "Senior Full Stack Developer",
    duration: "July 2023 – August 2026",
    location: "Remote, Sao Luis de Montes Belos, Goias, Brazil",
    description:
      "Delivered scalable full-stack features for digital platforms, balancing frontend performance, API design, and maintainable architecture.",
    achievements: [
      "Led delivery of 8 customer-facing modules in React and Next.js with TypeScript, improving Lighthouse performance scores by 28 percent.",
      "Designed versioned REST APIs and GraphQL contracts in Node.js used by 4 client applications, cutting integration defects by 22 percent.",
      "Shipped SSR and ISR flows in Next.js for 6 high-traffic pages, reducing median TTFB by 35 percent for 50,000 monthly users.",
      "Hardened data access with PostgreSQL and Redis caching across 5 services, lowering p95 read latency from 210ms to 95ms.",
      "Owned CI/CD pipelines with Docker on AWS, shortening release cycle time from 4 days to 1 day across 3 squads.",
      "Mentored 5 engineers on code reviews and frontend standards, raising pull-request first-pass approval rate by 30 percent.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    type: "full-time",
  },
  {
    id: "zup-fullstack",
    company: "Zup Innovation",
    role: "Full Stack Developer",
    duration: "June 2019 – July 2023",
    location: "Sao Paulo, Sao Paulo, Brazil",
    description:
      "Built product features and enterprise client programs across React, TypeScript, and Node.js services.",
    achievements: [
      "Built 12 product features in React and TypeScript with Node.js services, supporting 3 enterprise client programs over 48 months.",
      "Migrated 5 legacy screens to Next.js, cutting bundle size by 40 percent and improving time-to-interactive by 1.2 seconds.",
      "Implemented REST APIs and GraphQL endpoints backed by PostgreSQL and MongoDB, serving 80,000 daily authenticated requests.",
      "Containerized 7 workloads with Docker and deployed to Kubernetes on AWS, improving horizontal scale during 2 seasonal traffic peaks.",
      "Automated CI/CD with GitHub Actions for 9 repositories, reducing failed production hotfixes by 25 percent.",
      "Partnered with 4 product teams on API contracts and component libraries, cutting average feature lead time by 3 weeks.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
    ],
    type: "full-time",
  },
  {
    id: "labcodes-junior",
    company: "Labcodes",
    role: "Junior Web Developer",
    duration: "March 2016 – May 2019",
    location: "Recife, Pernambuco, Brazil",
    description:
      "Delivered web features for client projects using JavaScript, React, and Node.js.",
    achievements: [
      "Delivered 15 web features using JavaScript, React, and Node.js, contributing to 6 client projects over 38 months.",
      "Wrote 100+ unit and integration tests and early CI/CD scripts that blocked failed builds before staging on 4 repos.",
      "Supported PostgreSQL migrations and query tuning as one product grew past 20,000 active accounts.",
      "Containerized 3 services with Docker, cutting local environment setup from 2 hours to 25 minutes for a team of 6.",
      "Documented frontend patterns and REST API usage for 8 onboarding guides, reducing new-hire ramp time by 2 weeks.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "CI/CD",
    ],
    type: "full-time",
  },
];

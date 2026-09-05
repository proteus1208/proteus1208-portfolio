export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "wellness-marketplace",
    title: "Wellness Marketplace",
    description:
      "Marketplace platform connecting users with wellness providers, subscriptions, and personalized programs — built with Next.js, TypeScript, and Node.js.",
    longDescription:
      "Full-stack marketplace with provider profiles, appointment booking, and PostgreSQL data modeling. Focused on frontend performance, REST APIs, and maintainable Next.js architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "REST APIs",
    ],
    features: [
      "Service marketplace",
      "Provider profiles",
      "Appointment booking",
      "Subscription management",
      "Search and filtering",
      "Analytics dashboard",
    ],
    image: "/images/projects/wellness-marketplace.png",
    category: "web",
  },
  {
    id: "clinical-trial-data-platform",
    title: "Clinical Trial Data Platform",
    description:
      "Centralized platform for trial management with GraphQL APIs, AWS delivery, and Dockerized services.",
    longDescription:
      "Built GraphQL contracts and operational dashboards for participant tracking, compliance reporting, and research analytics. Deployed with Docker on AWS.",
    technologies: [
      "GraphQL",
      "AWS",
      "Docker",
      "Node.js",
      "TypeScript",
    ],
    features: [
      "Trial management dashboard",
      "Participant enrollment tracking",
      "Compliance reporting",
      "Audit logging",
      "Analytics and KPI dashboards",
    ],
    image: "/images/projects/clinical-trial.png",
    category: "web",
  },
  {
    id: "unique-id",
    title: "Clinic Networking Platform",
    description:
      "Healthcare collaboration platform connecting clinics and referral networks with React, Next.js, and Node.js APIs.",
    longDescription:
      "React/Next.js frontend with Node.js APIs, PostgreSQL, Redis caching, GraphQL, and Docker on AWS for referral management and provider networking.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "GraphQL",
    ],
    features: [
      "Clinic directory",
      "Provider networking",
      "Referral management",
      "Secure messaging",
      "Appointment coordination",
      "Analytics dashboards",
    ],
    image: "/images/projects/clinic-networking.jpg",
    category: "web",
  },
  {
    id: "banking-mobile-app",
    title: "Digital Banking Platform",
    description:
      "Customer-facing banking portal with React, TypeScript, and Node.js APIs for account workflows and operational dashboards.",
    longDescription:
      "Full-stack banking experience with React frontend, REST APIs, and real-time updates. Supported customer banking workflows and admin tooling.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
    ],
    features: [
      "Customer banking portal",
      "Fund transfers and payments",
      "Admin dashboard",
      "Real-time notifications",
    ],
    image: "/images/projects/banking_platform.jpg",
    category: "web",
  },
  {
    id: "project-management-portal",
    title: "Project Management Portal",
    description:
      "Internal project tracking and team collaboration system for tasks, milestones, and reporting.",
    longDescription:
      "Web application for assigning tasks, monitoring project status, and generating activity reports with authenticated user workflows.",
    technologies: [
      "JavaScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
    ],
    features: [
      "User authentication",
      "Project dashboard",
      "Task assignment",
      "Status monitoring",
      "Activity logs",
      "Report generation",
    ],
    image: "/images/projects/pm_portal.png",
    category: "web",
  },

  /*
  Hidden — does not match Walker CV stack (crypto/AI/PHP/Android/blockchain)
  ai-neuroscanning, qrph-crypto, trading-Platform, market-intel-platform,
  medical-mobile-web, logistics-web-portal, shoptoli,
  corporate-website-customer-portal, cooperative-management-portal,
  school-learning-management-system, customer-inquiry-classification,
  field-employee-attendance, asset-verification
  */
];

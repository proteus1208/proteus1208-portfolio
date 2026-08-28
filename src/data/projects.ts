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
      "Marketplace platform connecting users with wellness providers, health services, subscriptions, and personalized programs — with Stripe payment integration.",
    longDescription:
      "Built a full-stack marketplace with provider profiles, appointment booking, subscription management, and secure online payments using Stripe. Focused on scalable APIs, PostgreSQL data modeling, and a responsive Next.js frontend.",
    technologies: [
      "Next.js",
      "Stripe",
      "TypeScript",
      "Prisma",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
    ],
    features: [
      "Service marketplace",
      "Provider profiles",
      "Appointment booking",
      "Subscription management",
      "Stripe payment processing",
      "User reviews and ratings",
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
      "Centralized platform for clinical trial management with participant tracking, compliance reporting, and research analytics.",
    longDescription:
      "Built a NestJS and GraphQL backend on AWS with Dockerized services for managing trials, enrollment workflows, and regulatory documentation. Included AI-assisted screening and KPI dashboards.",
    technologies: [
      "NestJS",
      "GraphQL",
      "AWS",
      "Docker",
      "Elasticsearch",
      "Sentry",
    ],
    features: [
      "Trial management dashboard",
      "Participant enrollment tracking",
      "Research workflow automation",
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
      "Healthcare collaboration platform connecting clinics, physicians, and referral networks into a unified ecosystem.",
    longDescription:
      "Developed a React/Next.js frontend with Node.js APIs, PostgreSQL, Redis caching, and real-time messaging for referral management and provider networking.",
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
      "Socket.IO",
    ],
    features: [
      "Clinic directory",
      "Provider networking",
      "Referral management",
      "Secure messaging",
      "Appointment coordination",
      "Analytics dashboards",
      "Role-based access control",
    ],
    image: "/images/projects/clinic-networking.jpg",
    category: "web",
  },
  {
    id: "banking-mobile-app",
    title: "Digital Banking Platform",
    description:
      "Modern digital banking experience with secure account management, transfers, payments, and admin tooling.",
    longDescription:
      "Full-stack banking portal with React frontend, Express APIs, and real-time WebSocket updates. Supported customer banking workflows and operational dashboards.",
    technologies: [
      "React.js",
      "Express.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "WebSocket",
    ],
    features: [
      "Customer banking portal",
      "Fund transfers and bill payments",
      "Payment integrations",
      "Admin dashboard",
      "Real-time notifications",
    ],
    image: "/images/projects/banking_platform.jpg",
    category: "mobile",
  },
  {
    id: "medical-mobile-web",
    title: "Telemedicine & EMR Platform",
    description:
      "Cloud-based telemedicine and electronic medical records platform for remote care workflows.",
    longDescription:
      "Enabled secure video consultations, patient record management, appointment scheduling, and prescriptions with a responsive Angular frontend.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Patient portal",
      "Doctor dashboard",
      "Appointment scheduling",
      "Medical records access",
      "Notifications",
    ],
    image: "/images/projects/healthcare.jpg",
    category: "mobile",
  },
  {
    id: "logistics-web-portal",
    title: "Logistics Management Portal",
    description:
      "Web portal for fleet management, delivery tracking, route optimization, and operational reporting.",
    longDescription:
      "Built real-time shipment tracking, fleet modules, and exportable reports with role-based admin access for enterprise logistics operations.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "jQuery",
      "Bootstrap",
    ],
    features: [
      "Real-time shipment tracking",
      "Fleet management",
      "Route optimization visualization",
      "Delivery status notifications",
      "Exportable reports",
      "Role-based permissions",
    ],
    image: "/images/projects/logistics.jpg",
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
      "PHP",
      "MySQL",
      "HTML5",
      "Bootstrap",
      "Git",
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
  {
    id: "customer-inquiry-classification",
    title: "Customer Inquiry Classification",
    description:
      "Machine-learning system that classifies incoming customer inquiries into predefined categories.",
    longDescription:
      "Python-based NLP pipeline for text preprocessing, keyword extraction, and category prediction with evaluation reporting.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
    ],
    features: [
      "Text preprocessing",
      "Keyword extraction",
      "Category prediction",
      "Training evaluation",
      "Reporting dashboard",
    ],
    image: "/images/projects/customer_inquiry_classification.png",
    category: "ai",
  },

  /*
  Hidden — Philippines/crypto/community-focused portfolio items
  {
    id: "ai-neuroscanning",
    ...
  },
  {
    id: "qrph-crypto",
    ...
  },
  {
    id: "trading-Platform",
    ...
  },
  {
    id: "market-intel-platform",
    ...
  },
  {
    id: "shoptoli",
    ...
  },
  {
    id: "corporate-website-customer-portal",
    ...
  },
  {
    id: "cooperative-management-portal",
    ...
  },
  {
    id: "school-learning-management-system",
    ...
  },
  {
    id: "field-employee-attendance",
    ...
  },
  {
    id: "asset-verification",
    ...
  },
  */
];

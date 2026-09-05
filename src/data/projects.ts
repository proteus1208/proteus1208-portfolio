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

/** Projects aligned with Pablo CV: AI/ML, healthcare, fintech, logistics, full-stack. */
export const projects: Project[] = [
  {
    id: "ai-neuroscanning",
    title: "AI-Driven Neuroscanning System",
    description:
      "AI-powered neuroscience platform for brain signal acquisition, processing, and real-time pattern analysis.",
    longDescription:
      "Developed an AI-powered platform used for brain signal acquisition, processing, visualization, and analysis. Enabled clinicians and researchers to analyze neurological patterns in near real-time through AI-assisted workflows.",
    technologies: [
      "Python",
      "React",
      "TypeScript",
      "Node.js",
      "Redis",
      "Docker",
      "WebSockets",
    ],
    features: [
      "Real-time brain signal monitoring",
      "AI-assisted neural pattern analysis",
      "EEG data visualization",
      "Clinical reporting dashboard",
      "Alert and anomaly detection",
      "Role-based access control",
    ],
    image: "/images/projects/neuroscanning.jpg",
    category: "ai",
  },
  {
    id: "clinical-trial-data-platform",
    title: "Clinical Trial Data Platform",
    description:
      "Centralized clinical trial platform with AI-assisted screening, compliance reporting, and research analytics.",
    longDescription:
      "Built a platform for managing clinical trials, participant enrollment, study workflows, and regulatory compliance — aligned with healthcare AI delivery experience.",
    technologies: [
      "NestJS",
      "GraphQL",
      "AWS",
      "Docker",
      "TypeScript",
      "Python",
    ],
    features: [
      "Trial management dashboard",
      "AI-assisted participant screening",
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
      "Healthcare collaboration platform connecting clinics, physicians, and referral networks.",
    longDescription:
      "React/Next.js frontend with Node.js APIs, PostgreSQL, Redis, GraphQL, and Docker on AWS for referral management and provider networking.",
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
      "Referral management",
      "Secure messaging",
      "Appointment coordination",
      "Analytics dashboards",
    ],
    image: "/images/projects/clinic-networking.jpg",
    category: "web",
  },
  {
    id: "medical-mobile-web",
    title: "Telemedicine & EMR Platform",
    description:
      "Cloud-based telemedicine and electronic medical records platform for remote care workflows.",
    longDescription:
      "Patient and doctor portals with appointment scheduling, medical records access, and operational tooling — matching healthcare platform experience.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "REST APIs",
    ],
    features: [
      "Patient portal",
      "Doctor dashboard",
      "Appointment scheduling",
      "Medical records access",
      "Notifications",
    ],
    image: "/images/projects/healthcare.jpg",
    category: "web",
  },
  {
    id: "banking-mobile-app",
    title: "Digital Banking Platform",
    description:
      "Fintech banking portal with secure account workflows, payments, and operational dashboards.",
    longDescription:
      "Full-stack banking experience with React frontend and Node.js APIs — aligned with fintech platform work at Kueski.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Redis",
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
    id: "logistics-web-portal",
    title: "Logistics Management Portal",
    description:
      "Fleet, delivery tracking, and route optimization portal for logistics operations.",
    longDescription:
      "Real-time shipment tracking, fleet modules, and operational dashboards — matching logistics domain experience.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Real-time shipment tracking",
      "Fleet management",
      "Route optimization visualization",
      "Delivery status notifications",
      "Exportable reports",
    ],
    image: "/images/projects/logistics.jpg",
    category: "web",
  },
  {
    id: "customer-inquiry-classification",
    title: "Customer Inquiry Classification",
    description:
      "Machine-learning system that classifies customer inquiries using NLP and Scikit-learn.",
    longDescription:
      "Python NLP pipeline for text preprocessing, keyword extraction, and category prediction — aligned with ML and NLP skills on the CV.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
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
  {
    id: "asset-verification",
    title: "Supply Chain Asset Verification",
    description:
      "Product authentication and ownership verification prototype using APIs and cryptographic hashing.",
    longDescription:
      "Proof-of-concept aligned with AI-driven product authentication and supply chain API work at Shping.",
    technologies: [
      "JavaScript",
      "Node.js",
      "GraphQL",
      "Python",
    ],
    features: [
      "Document fingerprint generation",
      "Ownership verification",
      "Immutable audit trail",
      "Transaction history visualization",
    ],
    image: "/images/projects/asset_verification.png",
    category: "web",
  },

  /*
  Hidden — do not match Pablo CV focus:
  qrph-crypto, trading-Platform, market-intel-platform (Philippine crypto),
  wellness-marketplace, shoptoli (WooCommerce),
  corporate-website-customer-portal, cooperative-management-portal,
  school-learning-management-system, project-management-portal (PHP),
  field-employee-attendance (Android)
  */
];

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
    id: "freelancer-senior-ai",
    company: "Freelancer",
    role: "Senior Full Stack & AI Engineer",
    duration: "March 2025 – Present",
    location: "Remote",
    description:
      "Architecting full-stack applications with Next.js and TypeScript, integrating AI-powered features from RAG pipelines to production LLM services.",
    achievements: [
      "Architecting and building full-stack applications with Next.js and TypeScript, integrating AI-powered features to enhance user interactivity and decision-making.",
      "Developing scalable backend microservices in Node.js and Python to serve LLMs via REST and GraphQL APIs for document processing and conversational interfaces.",
      "Implementing a RAG pipeline using LangChain, PostgreSQL (pgvector), and Redis, enabling 40% faster and more accurate support ticket resolution.",
      "Containerizing AI services with Docker and building CI/CD pipelines for automated deployment and model versioning.",
      "Designing real-time data visualization dashboards with React that display predictive analytics from custom ML models.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "LangChain",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "GraphQL",
      "React",
    ],
    type: "contract",
  },
  {
    id: "reachlink-senior",
    company: "ReachLink",
    role: "Senior Software Engineer",
    duration: "November 2024 – February 2025",
    location: "Boca Raton, Florida, USA",
    description:
      "Led full-stack development and AI integration for a healthcare platform improving clinical workflows and patient engagement.",
    achievements: [
      "Led full-stack development and integrated AI capabilities into a healthcare platform to improve clinical workflows and patient engagement.",
      "Developed an AI-Powered Clinical Assistant using Python (FastAPI) to analyze patient data and generate preliminary triage recommendations, reducing manual assessment time by 20%.",
      "Engineered and deployed a predictive churn model using Scikit-learn and XGBoost, orchestrating the ML pipeline with MLflow and serving predictions via REST API.",
      "Optimized patient-facing Next.js interfaces with SSR and integrated AI-driven chatbots using OpenAI APIs, improving patient satisfaction scores by 15%.",
      "Deployed services on AWS (ECS, Lambda, S3) and established scalable data pipelines with AWS Glue for feature store updates and model retraining.",
    ],
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
      "OpenAI",
      "AWS",
      "Docker",
    ],
    type: "full-time",
  },
  {
    id: "shping-fullstack",
    company: "Shping",
    role: "Full-Stack Developer",
    duration: "September 2023 – October 2024",
    location: "Remote",
    description:
      "Spearheaded an AI-driven product authentication platform with React, Next.js, Node.js, and Python.",
    achievements: [
      "Spearheaded development of an AI-driven product authentication platform using React, Next.js, Node.js, and Python.",
      "Integrated ML models via FastAPI and Django to analyze supply chain data for real-time risk scoring and automated fraud detection.",
      "Led migration of legacy systems to TypeScript and implemented ETL pipelines for anomaly detection algorithms.",
      "Containerized the full application stack with Docker and implemented CI/CD pipelines for automated deployments.",
      "Integrated third-party blockchain and supply chain APIs using GraphQL, enhancing AI models' predictive power by 30%.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
      "TypeScript",
      "Docker",
      "GraphQL",
    ],
    type: "contract",
  },
  {
    id: "kueski-fullstack",
    company: "Kueski",
    role: "Full-Stack Developer",
    duration: "November 2018 – January 2023",
    location: "Guadalajara, Jalisco, Mexico",
    description:
      "Led development of fintech platforms and production AI features for credit scoring and risk assessment.",
    achievements: [
      "Led development of fintech platforms using React, Vue.js, Angular, Node.js, Python, and Java.",
      "Developed a credit scoring microservice using Python and Scikit-learn for real-time risk assessments on high-volume financial data.",
      "Designed and optimized PostgreSQL and MongoDB databases to support a feature store for training and serving ML models.",
      "Implemented Redis caching for model predictions, reducing API response times by 60% during peak usage.",
      "Collaborated with data scientists to ship production-grade AI features, driving 10% improvement in loan approval accuracy.",
    ],
    technologies: [
      "React",
      "Vue.js",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Scikit-learn",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    type: "full-time",
  },
  {
    id: "tektonlabs-developer",
    company: "TektonLabs",
    role: "Software Developer",
    duration: "June 2015 – October 2018",
    location: "Tepic, Nayarit, Mexico",
    description:
      "Built enterprise web applications and backend services across React, Vue, Angular, Node.js, Python, and Java.",
    achievements: [
      "Built enterprise web applications using React, Vue.js, and Angular for dynamic frontend experiences.",
      "Developed backend services with Node.js, Python, and Java, implementing RESTful APIs with Express and Spring Boot.",
      "Managed PostgreSQL and MySQL databases, designing schemas and optimizing queries for business intelligence applications.",
      "Containerized applications with Docker and implemented CI/CD pipelines to automate testing and deployment.",
      "Collaborated with senior engineers to refactor legacy codebases and modernize applications with TypeScript and Next.js.",
    ],
    technologies: [
      "React",
      "Vue.js",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "TypeScript",
      "Next.js",
    ],
    type: "full-time",
  },
];

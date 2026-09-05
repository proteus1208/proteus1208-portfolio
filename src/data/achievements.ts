export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "rag-pipeline",
    title: "RAG Pipeline Delivery",
    organization: "Freelance",
    description:
      "Built a Retrieval-Augmented Generation pipeline with LangChain, pgvector, and Redis for production support workflows.",
    impact: [
      "40% faster and more accurate support ticket resolution",
      "LLM services served via REST and GraphQL APIs",
      "Dockerized AI services with CI/CD for model versioning",
    ],
  },
  {
    id: "healthcare-ai",
    title: "Clinical AI Assistant",
    organization: "ReachLink",
    description:
      "Shipped AI-powered clinical and patient-facing features on a healthcare platform.",
    impact: [
      "Reduced manual triage assessment time by 20%",
      "Improved patient satisfaction scores by 15% with OpenAI chatbots",
      "Deployed ML pipelines on AWS with MLflow tracking",
    ],
  },
  {
    id: "fintech-ml",
    title: "Credit Scoring Microservice",
    organization: "Kueski",
    description:
      "Delivered production ML for fintech risk assessment and loan approval workflows.",
    impact: [
      "Real-time credit scoring with Scikit-learn on high-volume financial data",
      "60% reduction in API response times with Redis caching",
      "10% improvement in loan approval accuracy",
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
    id: "hku",
    institution: "The University of Hong Kong",
    degree: "Bachelor's Degree, Computer Science",
    duration: "August 2011 – May 2015",
    location: "Hong Kong",
  },
];

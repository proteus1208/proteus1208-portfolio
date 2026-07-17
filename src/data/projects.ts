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
    id: "ai-neuroscanning",
    title: "AI-Driven Neuroscanning System",
    description:
      "Increased data processing speed by 23% and improved accuracy of neural pattern detection by 15%.",
    longDescription:
      "Developed an AI-powered neuroscience platform used for brain signal acquisition, processing, visualization, and analysis. The platform enabled clinicians and researchers to analyze neurological patterns in near real-time through advanced AI-assisted workflows.",
    technologies: [
      "AI Analytics",
      "Python",
      "React",
      "TypeScript",
      "Node.js",
      "TensorFlow",
      "WebSockets",
      "Chart.js",
      "Redis",
      "Docker"
    ],
    features: [
      "Real-time brain signal monitoring",
      "AI-assisted neural pattern analysis",
      "EEG data visualization",
      "Patient session management",
      "Clinical reporting dashboard",
      "Research data export",
      "Historical trend analysis",
      "Alert and anomaly detection",
      "Multi-user collaboration",
      "Role-based access control"
    ],
    image: "/images/projects/neuroscanning.jpg",
    category: "ai"
  },
  {
    id: "qrph-crypto",
    title: "QRPh Crypto Payment Platform",
    description:
      "Nationwide crypto payment platform enabling users to pay merchants through the Philippine QRPh infrastructure using USDT, USDC, BTC, and ETH.",
    longDescription:
      "SyncVerse is an edtech platform designed to help students and developers map out their goals. It allows users to input their current status and generates learning roadmaps, resources, and plans. Built with React and TypeScript and using AI models under the hood, SyncVerse focuses on a clean UI and practical guidance for each person's needs.",
    technologies: [
      "Next.js",
      "Ethereum",
      "2FA",
      "Bitcoin APIs",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "JWT",
      "OAuth2,",
    ],
    features: [
      "QR code crypto payments",
      "Blockchain transaction monitoring",
      "Real-time PHP conversion",
      "Wallet balance synchronization",
      "Merchant transaction tracking",
      "Multi-currency support",
      "Fraud detection system",
      "Payment confirmation notifications",
    ],
    image: "/images/projects/qrph.jpg",
    // demoUrl: "https://www.coins.ph/en-ph?utm_source",
    // githubUrl: "https://github.com/tshingen01/crypto-qrpn", // ###
    category: "blockchain"
  },
  {
    id: "wellness-marketplace",
    title: "Wellness Marketplace",
    description:
      "Developed a marketplace platform connecting users with wellness providers, health services, subscriptions, and personalized wellness programs.",
    longDescription:
      "",
    technologies: [
      "Next.js",
      "Stripe",
      "TypeScript",
      "Prisma",
      "Node.js",
      "CloudFront",
      "PostgreSQL",
      "Vercel",
      "Tailwind CSS"
    ],
    features: [
      "Service marketplace",
      "Provider profiles",
      "Appointment booking",
      "Subscription management",
      "Online payment processing",
      "User reviews and ratings",
      "Recommendation engine",
      "Personalized wellness plans",
      "Search and filtering",
      "Analytics dashboard",
      "CMS management",
      "Referral program"
    ],
    image: "/images/projects/wellness-marketplace.png",
    category: "web"
  },
  {
    id: "clinical-trial-data-platform",
    title: "Clinical Trial Data Platform",
    description:
      "Modern clinical trial platforms commonly include participant tracking, AI-assisted screening, compliance reporting, and research analytics capabilities.",
    longDescription:
      "Built a centralized platform for managing clinical trials, participant enrollment, study workflows, and regulatory compliance documentation.",
    technologies: [
      "Sentry",
      "NestJS",
      "AWS",
      "Docker",
      "GraphQL",
      "Elasticsearch"
    ],
    features: [
      "Trial management dashboard",
      "Participant enrollment tracking",
      "Research workflow automation",
      "AI-assisted participant screening",
      "Compliance reporting",
      "Electronic document management",
      "Audit logging",
      "Analytics and KPI dashboards",
      "Multi-study management",
      "Collaboration workspace",
      "Notification center",
      "Export and reporting tools"
    ],
    image: "/images/projects/clinical-trial.png",
    category: "web"
  },
  {
    id: "unique-id",
    title: "Clinic Networking Platform",
    description:
      "Developed a healthcare collaboration platform that connected clinics, physicians, specialists, and referral networks into a unified ecosystem.",
    longDescription:
      "",
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
      "Prisma",
      "Elasticsearch"
    ],
    features: [
      "Clinic directory",
      "Provider networking",
      "Referral management",
      "Secure messaging",
      "Appointment coordination",
      "Provider profiles",
      "Healthcare collaboration tools",
      "Analytics dashboards",
      "Activity tracking",
      "Notification center",
      "Search and discovery",
      "Administrative reporting"
    ],
    image: "/images/projects/clinic-networking.jpg",
    category: "web"
  },
  {
    id: "trading-Platform",
    title: "Coins Pro Advanced Trading Platform",
    description:
      "Developed a high-performance trading platform similar to Binance Pro and Coinbase Advanced Trade for Philippine crypto users.",
    longDescription:
      "Professional-grade trading system for active crypto traders. The platform featured real-time market data, advanced charting tools, and a robust order management system. It supported spot trading with various order types, live order books, and portfolio management features. The architecture was designed for scalability and low latency to handle high trading volumes while ensuring security and reliability.",
    technologies: [
      "Next.js",
      "Zustand",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Redis cache",
      "Font Awesome",
      "Elasticsearch",
      "GoLang services",
      "WebSocket streaming",
      "Kafka event streaming",
      "TradingView Charting Library",
    ],
    features: [
      "Spot trading engine",
      "Candlestick charts",
      "Live order books",
      "Market/limit orders",
      "Portfolio management",
      "TradingView integration",
      "WebSocket live feeds",
      "Liquidity aggregation",
      "Risk monitoring",
      "Trade history export",
    ],
    image: "/images/projects/trading.jpg",
    // demoUrl: "https://stocksharp.com/",
    // githubUrl: "https://github.com/tshingen01/market_intel_platform",
    category: "blockchain"
  },
  {
    id: "market-intel-platform",
    title: "AI-Powered Crypto Trading Hub with a UI",
    description:
      "This application is your centralized hub for all things crypto. With Sibyl, you can connect multiple crypto exchange accounts, deploy smart trading strategies, and access a wide range of AI-powered tools, all within a secure, locally deployed environment.",
    longDescription:
      "Built intelligent financial insight systems leveraging AI and machine learning for personalized recommendations, market intelligence, risk detection, behavioral analytics, Coins.ph introduced enhanced in-app news and market intelligence integrations during this period.",
    technologies: [
      "Streamlit",
      "FastAPI",
      "Sqlite",
      "LLM",
      "MCP",
      "llama.cpp"
    ],
    features: [
      "Interactive Dashboard UI",
      "AI Agents & LLMs that power each Sibyl functionality",
      "Connected Crypto Exchange Overview",
      "Strategy Planning",
      "SPOT Trading",
      "Price Movement Prediction using ML",
      "Data Analysis & Visualization - Analyst Module",
      "Crypto News & Market Sentiment",
      "Connect with Popular Exchanges",
      "Crypto Wiki Chatbot"
    ],
    image: "/images/projects/market_intel.jpg",
    // demoUrl: "https://nmaroulis.github.io/sibyl/index.html",
    // githubUrl: "https://github.com/tshingen01/market_intel_platform",
    category: "ai"
  },
  {
    id: "banking-mobile-app",
    title: "Digital Banking & Mobile Internet Banking Platform",
    description:
      "A modern digital banking platform developed for Philippine banks transitioning from legacy systems into cloud-ready online banking ecosystems.",
    longDescription:
      "The platform supported both desktop and mobile banking experiences with secure financial workflows and enterprise-grade scalability. It featured account management, fund transfers, bill payments, loan applications, and customer support tools. The architecture was designed to integrate with core banking systems while providing a seamless user experience across devices.",
    technologies: [
      "React.js",
      "Express.js",
      "Material UI",
      "Zoom API",
      "TypeScript",
      "Redux",
      "SCSS",
      "WebSocket",
      "Axios"
    ],
    features: [
      "Customer Banking Portal",
      "Mobile Internet Banking",
      "Payment Integrations",
      "Admin Dashboard",
    ],
    image: "/images/projects/banking_platform.jpg",
    // demoUrl: "https://exist.com/digital-banking-and-fintech",
    // githubUrl: "https://github.com/tshingen01/digital-banking-and-fintech",
    category: "mobile"
  },
  {
    id: "medical-mobile-web",
    title: "Telemedicine & Electronic Medical Records Platform",
    description:
      "A cloud-based telemedicine and EMR platform developed for hospitals and clinics in the Philippines during the rapid digital healthcare adoption period caused by the pandemic.",
    longDescription:
      "The project focused on enabling remote healthcare workflows and centralized medical record access.The platform provided secure video consultations, patient record management, appointment scheduling, and prescription services. It was designed to integrate with existing healthcare systems while ensuring compliance with data privacy regulations and delivering a seamless user experience for both patients and healthcare providers.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "CSS3",
      "Bootstrap",
      "HTML5"
    ],
    features: [
      "Patient Portal",
      "Doctor Dashboard",
      "Hospital Operations",
      "Notifications",
    ],
    image: "/images/projects/healthcare.jpg",
    // demoUrl: "https://exist.com/healthcare",
    // githubUrl: "https://github.com/tshingen01/emr-healthcare",
    category: "mobile"
  },
  {
    id: "logistics-web-portal",
    title: "Logistics Management Web Portal",
    description:
      "A web portal designed for a logistics company to manage fleets, deliveries, and route optimization. Developed this platform for enterprise clients needing real-time shipment tracking, reporting, and operational dashboards.",
    longDescription:
      "As a Junior Web Developer, I typically handled front-end integration, minor backend scripting, and database query support. The portal featured real-time shipment tracking, route optimization tools, and operational dashboards. It was designed to integrate with GPS tracking systems and provide a seamless user experience for logistics managers and drivers.",
    technologies: [
      "HTML5",
      "JavaScript",
      "PHP",
      "MySQL",
      "CSS3",
      "jQuery",
      "Bootstrap",
      "Git/GitHub",
      "Postman",
    ],
    features: [
      "Shipment tracking dashboard (real-time updates)",
      "Fleet management module",
      "Route optimization visualization",
      "Delivery status notifications",
      "Exportable reports",
      "Admin access with role-based permissions",
    ],
    image: "/images/projects/logistics.jpg",
    category: "web"
  },
  {
    id: "shoptoli",
    title: "Shoptoli WooCommerce Multivendor Store",
    description:
      "Shoptoli is a modern multivendor e-commerce marketplace rebuilt and optimized on WordPress + WooCommerce in 2026.",
    longDescription:
      "The project focused on improving performance, navigation, conversion optimization, and marketplace scalability.The development team redesigned the WooCommerce architecture using a custom WordPress theme implementation and multiple advanced WooCommerce extensions. The goal was to transform Shoptoli into a faster and more conversion-focused WooCommerce marketplace with Better product filtering, Improved mobile UX, Faster product browsing, Vendor marketplace functionality, and Optimized checkout flow. The project also addressed common WooCommerce issues such as plugin overload, navigation complexity, and slow product search.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Shop Mania",
      "PHP",
      "HTML5",
      "JavaScript",
      "Custom CSS",
      "WCFM Multivendor",
    ],
    features: [
      "WooCommerce multivendor marketplace",
      "Advanced AJAX product search",
      "Product comparison system",
      "Wishlist functionality",
      "Product variation swatches",
      "Optimized cart experience",
      "Mobile-first responsive design",
      "Vendor management",
      "Conversion-focused UI",
      "Performance optimization",
      "Modern WooCommerce theme customization",
    ],
    image: "/images/projects/shoptoli.jpg",
    // demoUrl: "https://shoptoli.in/",
    category: "web"
  },

  /*
  {
      id: "unique-id",
      title: "",
      description:
        "",
      longDescription:
        "",
      technologies: [
        "",
      ],
      features: [
        "",
      ],
      image: "",
      category: "web"
    },
    */
  {
    id: "corporate-website-customer-portal",
    title: "Corporate Website & Customer Portal",
    description:
      "A responsive website with customer self-service capabilities, inquiry management, and content administration.",
    longDescription:
      "Corporate Website / Customer Portal",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
    ],
    features: [
      "Responsive design",
      "Customer accounts",
      "Contact management",
      "News publishing",
      "Content management",
      "SEO optimization",
    ],
    image: "/images/projects/corporate_website_cp.jpg",
    // demoUrl: "https://logoipsum.com/",
    category: "web"
  },
  {
    id: "cooperative-management-portal",
    title: "Cooperative Management Portal",
    description:
      "A web-based system used to manage cooperative membership records, payments, reports, and operational workflows.",
    longDescription:
      "Business Management",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "AJAX"
    ],
    features: [
      "Member registration",
      "Payment tracking",
      "Loan management",
      "Report generation",
      "Role-based access control",
      "Audit logs"
    ],
    image: "/images/projects/cooperative_mp.jpg",
    // demoUrl: "https://coopsolve.com/",
    category: "web"
  },
  {
    id: "school-learning-management-system",
    title: "School Learning Management System",
    description:
      "A browser-based learning platform allowing students and instructors to manage courses, assignments, quizzes, and learning materials.",
    longDescription:
      "Education Technology",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Apache"
    ],
    features: [
      "Student registration",
      "Course management",
      "Assignment submission",
      "Quiz system",
      "Progress tracking",
      "Admin dashboard",
      "Reporting tools"
    ],
    image: "/images/projects/school_lms.jpg",
    // demoUrl: "https://www.edtech.com/",
    category: "web"
  },
  {
    id: "customer-inquiry-classification",
    title: "Customer Inquiry Classification System",
    description:
      "Experimental machine-learning project used to classify incoming customer inquiries into predefined categories.",
    longDescription:
      "",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter Notebook"
    ],
    features: [
      "Text preprocessing",
      "Keyword extraction",
      "Category prediction",
      "Reporting dashboard",
      "Training dataset evaluation"
    ],
    image: "/images/projects/customer_inquiry_classification.png",
    category: "ai"
  },
  {
    id: "project-management-portal",
    title: "Project Management Portal",
    description:
      "Internal project tracking and team collaboration system used to manage tasks, project milestones, and employee reporting.",
    longDescription:
      "",
    technologies: [
      "PHP",
      "MySQL",
      "HTML5",
      "JavaScript",
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
    category: "web"
  },
  {
    id: "field-employee-attendance",
    title: "Field Employee Attendance Mobile App",
    description:
      "Android-based application designed for attendance tracking and field workforce monitoring.",
    longDescription:
      "",
    technologies: [
      "Java",
      "Android Studio",
      "SQLite",
      "REST API",
      "Google Maps API",
    ],
    features: [
      "Login system",
      "GPS location capture",
      "Attendance check-in/check-out",
      "Offline data storage",
      "Synchronization with server",
    ],
    image: "/images/projects/field_employee_attendance.png",
    category: "mobile"
  },
  {
    id: "asset-verification",
    title: "Blockchain Asset Verification Prototype",
    description:
      "Proof-of-concept application exploring blockchain technology for document verification and ownership tracking.",
    longDescription:
      "Research-oriented prototype rather than production deployment.",
    technologies: [
      "Ethereum fundamentals",
      "JavaScript",
      "Node.js",
      "JSON-RPC",
      "Cryptographic Hashing",
    ],
    features: [
      "Document fingerprint generation",
      "Ownership verification",
      "Immutable audit trail",
      "Transaction history visualization",
    ],
    image: "/images/projects/asset_verification.png",
    category: "blockchain"
  },
];


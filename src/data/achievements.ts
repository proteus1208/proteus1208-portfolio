export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "cit-performance",
    title: "Frontend Performance Delivery",
    organization: "CI&T",
    description:
      "Led customer-facing React and Next.js modules with measurable Lighthouse and TTFB gains for high-traffic pages.",
    impact: [
      "Improved Lighthouse performance scores by 28 percent across 8 modules",
      "Reduced median TTFB by 35 percent for 50,000 monthly users",
      "Raised pull-request first-pass approval rate by 30 percent through mentoring",
    ],
  },
  {
    id: "zup-scale",
    title: "API and Platform Scale",
    organization: "Zup Innovation",
    description:
      "Shipped full-stack features and data APIs that supported enterprise programs and seasonal traffic peaks.",
    impact: [
      "Served 80,000 daily authenticated requests with REST and GraphQL APIs",
      "Cut Next.js bundle size by 40 percent and improved TTI by 1.2 seconds",
      "Reduced failed production hotfixes by 25 percent with GitHub Actions CI/CD",
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
    id: "ufrn",
    institution: "Federal University of Rio Grande do Norte",
    degree: "Bachelor's Degree",
    duration: "September 2014 – June 2018",
    location: "Natal, Rio Grande do Norte, Brazil",
  },
];

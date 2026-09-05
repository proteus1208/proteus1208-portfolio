import { SITE_CONFIG } from "@/lib/constants";
import { educationData, achievementsData } from "@/data/achievements";
import { experienceData } from "@/data/experience";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.links.email,
    telephone: SITE_CONFIG.phone,
    jobTitle: "Full Stack & AI Engineer",
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahuacatlán",
      addressRegion: "Nayarit",
      addressCountry: "MX",
    },
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
    alumniOf: educationData.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    worksFor: experienceData.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
    })),
    knowsAbout: [
      "Full Stack Development",
      "Machine Learning",
      "LangChain",
      "RAG",
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "AWS",
      "MLOps",
      "TypeScript",
    ],
    award: achievementsData.map((a) => a.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

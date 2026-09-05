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
    jobTitle: "Senior Full Stack Developer",
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sao Luis de Montes Belos",
      addressRegion: "Goias",
      addressCountry: "BR",
    },
    sameAs: [
      SITE_CONFIG.links.github,
    ],
    alumniOf: educationData.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Natal",
        addressRegion: "Rio Grande do Norte",
        addressCountry: "BR",
      },
    })),
    worksFor: experienceData.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      address: {
        "@type": "PostalAddress",
        addressLocality: exp.location,
      },
    })),
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
    award: achievementsData.map(achievement => achievement.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

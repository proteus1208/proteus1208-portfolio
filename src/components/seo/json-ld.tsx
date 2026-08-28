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
    jobTitle: "Senior Full Stack Engineer",
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harker Heights",
      addressRegion: "TX",
      addressCountry: "US",
    },
    sameAs: [
      SITE_CONFIG.links.github,
    ],
    alumniOf: educationData.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: edu.location.split(", ")[0],
        addressRegion: edu.location.split(", ")[1],
        addressCountry: edu.location.split(", ")[2] || "US",
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
      "Distributed Systems",
      "React",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "TypeScript",
      "Python",
      "Java",
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

import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const generateMetadata = (): Metadata => {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: `${SITE_CONFIG.name} - Portfolio`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
      "Walker Martins de Oliveira",
      "Full-Stack Engineer",
      "Senior Full Stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    authors: [
      {
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    ],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_CONFIG.url,
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    icons: {
      icon: [
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },

    manifest: "/site.webmanifest",
  };
};

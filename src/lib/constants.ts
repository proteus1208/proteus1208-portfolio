// App constants

export const SITE_CONFIG = {
  name: "Walker Martins de Oliveira",
  description:
    "Full-Stack Engineer with 10 years of experience building production web products in React, Next.js, and TypeScript.",
  url: "https://proteus1208-portfolio.vercel.app",
  ogImage: "/me/me.png",
  location: "Sao Luis de Montes Belos, Goias, Brazil",
  phone: "+55 (64) 9 8432-2301",
  links: {
    email: "walker1996top@outlook.com",
    github: "https://github.com/proteus1208",
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  },
  fadeIn: {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { opacity: 1, filter: "blur(0px)" }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" }
  },
  rotateIn: {
    hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
    visible: { opacity: 1, rotateY: 0, scale: 1 }
  },
  clipReveal: {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  }
};

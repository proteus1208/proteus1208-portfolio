// App constants

export const SITE_CONFIG = {
  name: "Pablo Alejandro Sanchez Moncada",
  description:
    "Full Stack & AI Engineer with 9+ years building scalable web apps and production AI systems across React, Next.js, Node.js, Python, and cloud platforms.",
  url: "https://proteus1208-portfolio.vercel.app",
  ogImage: "/me/me.png",
  location: "Ahuacatlán, Nayarit, México",
  phone: "+52 324 114 2692",
  links: {
    email: "sanchez45Pa@gmail.com",
    github: "https://github.com/proteus1208",
    linkedin: "https://linkedin.com/in/pablo-alejandro-s-77b620419",
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

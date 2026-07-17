// App constants

export const SITE_CONFIG = {
  name: "Mark Kinsley Rimando",
  description:
    "Tech Stack Hybrid Intelligent Next-Gen Engineer & Technology | Full-stack Developer | Community Builder | AI & Web Enthusiast",
  url: "https://proteus1208.github.io",
  ogImage: "/me/me.png",
  links: {
    email: "proteus1208@gmail.com",
    github: "https://github.com/proteus1208",
    telegram: "https://t.me/proteus1208",
    // leetcode: "https://leetcode.com/tshingen01",
    // linkedin: "https://www.linkedin.com/in/mark-kinsley-rimando-9b1a4b1b2/",
    // hackerrank: "https://www.hackerrank.com/profile/tshingen821",
    // devTo: "https://dev.to/tshingen01",
    // stackOverflow: "https://stackoverflow.com/users/32788228/tshingen01",
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Join Me", href: "/join-me" }
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

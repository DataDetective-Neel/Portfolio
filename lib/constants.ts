// ─── Site-wide constants & configuration ───

export const SITE_CONFIG = {
  name: "Indraneel Chatterjee",
  title: "Indraneel Chatterjee — ML Engineer & AI Systems Builder",
  description:
    "Machine Learning Engineer building production-grade AI systems across NLP, LLM applications, and data-driven infrastructure. Portfolio featuring real-world ML projects, published research, and engineering case studies.",
  url: "https://indraneelchatterjee.me",
  ogImage: "/images/og-image.png",
  locale: "en_US",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/DataDetective-Neel",
  linkedin: "https://linkedin.com/in/indraneel-chatterjee007",
  email: "datadetectiveneel@gmail.com",
  resume: "/resume.pdf",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
] as const;

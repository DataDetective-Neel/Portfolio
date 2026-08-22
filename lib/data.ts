// ─── Central data source for ALL portfolio content ───
// Change content here — not in components.

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  architectureSteps: { label: string; detail?: string }[];
  context?: string;
}

export interface Publication {
  title: string;
  shortTitle: string;
  authors: string;
  publisher: string;
  bookTitle: string;
  date: string;
  doi: string;
  isbn: string;
  googleScholar?: string;
  description: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  link?: string;
  skills: string[];
}

// ─── PROJECTS ───

export const projects: Project[] = [
  {
    id: "pipelineiq",
    title: "PipelineIQ",
    subtitle: "Autonomous CI/CD Failure Resolution System",
    description:
      "Distributed, event-driven system that intercepts failed CI/CD pipelines, performs LLM-based root cause analysis, classifies risk, generates deterministic fixes, and submits pull requests autonomously.",
    problem:
      "CI/CD pipeline failures require manual debugging, consuming significant developer time and slowing deployment velocity.",
    solution:
      "Kafka-based streaming architecture that ingests GitHub Actions workflow events, routes failures through an LLM analysis engine, and generates automated fix PRs with risk classification.",
    impact: "90%+ reduction in mean debugging time",
    techStack: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "Redis",
      "Celery",
      "Docker",
      "LLM APIs",
      "HuggingFace Transformers",
      "GitHub Actions",
    ],
    github: "https://github.com/DataDetective-Neel/PipelineIQ",
    featured: true,
    architectureSteps: [
      { label: "GitHub Actions", detail: "Webhook events" },
      { label: "Kafka", detail: "Event streaming" },
      { label: "Failure Analysis", detail: "Log parsing" },
      { label: "LLM Root Cause", detail: "Detection" },
      { label: "Risk Classification", detail: "Scoring" },
      { label: "Fix Generation", detail: "Automated PR" },
    ],
  },
  {
    id: "documentor",
    title: "DocuMentor",
    subtitle: "AI-Powered Document Assistant",
    description:
      "Fully offline, browser-native AI assistant using WebAssembly and WebGPU for on-device model inference — zero data leaves the user's device, enforcing strict privacy by design.",
    problem:
      "Document analysis tools require uploading sensitive data to external servers, creating privacy and compliance risks.",
    solution:
      "Client-side AI inference using WebAssembly/WebGPU with three intelligence modes: Smart Highlights, Student Mode, and Research Mode. Includes a Privacy Scanner for sensitive artifact detection.",
    impact: "Zero-data-leakage document intelligence",
    techStack: [
      "TypeScript",
      "WebAssembly",
      "WebGPU",
      "HuggingFace Transformers",
      "Next.js",
      "React",
      "Web Workers",
    ],
    github: "https://github.com/DataDetective-Neel/DocuMentor",
    architectureSteps: [
      { label: "Document", detail: "Upload" },
      { label: "Privacy Scanner", detail: "PII detection" },
      { label: "WebAssembly/WebGPU", detail: "On-device runtime" },
      { label: "AI Inference", detail: "Local processing" },
      { label: "Intelligence Modes", detail: "Highlights / Student / Research" },
    ],
  },
  {
    id: "aerosphinx",
    title: "AeroSphinx",
    subtitle: "PM2.5 Air Quality Prediction",
    description:
      "End-to-end Random Forest regression pipeline integrating satellite AOD data with ground-sensor readings for PM2.5 air quality forecasting across temporal-spatial domains.",
    problem:
      "Air quality monitoring relies on sparse ground sensors, leaving gaps in PM2.5 prediction across large geographic regions.",
    solution:
      "Multi-modal fusion of satellite aerosol optical depth data with terrestrial sensors, time-aware feature engineering, and cross-validation for robust PM2.5 prediction with Power BI dashboards.",
    impact: "Accurate PM2.5 forecasting for environmental monitoring",
    techStack: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Pandas",
      "NumPy",
      "Power BI",
      "Matplotlib",
    ],
    github: "https://github.com/DataDetective-Neel/AeroSphinx",
    context: "ISRO Hackathon 2025",
    architectureSteps: [
      { label: "Satellite AOD", detail: "Remote sensing" },
      { label: "Ground Sensors", detail: "Telemetry data" },
      { label: "Feature Engineering", detail: "Temporal-spatial" },
      { label: "Random Forest", detail: "Regression" },
      { label: "PM2.5 Prediction", detail: "Forecasting" },
      { label: "Power BI", detail: "Dashboard" },
    ],
  },
  {
    id: "sentiment",
    title: "Sentiment Intelligence Dashboard",
    subtitle: "NLP Sentiment Analysis & Summarization",
    description:
      "Cloud-based NLP pipeline using DistilBERT and DistilBART for multi-class sentiment classification and abstractive summarization of large comment datasets.",
    problem:
      "Manually reviewing and categorizing large volumes of feedback text is time-consuming and inconsistent.",
    solution:
      "Dual-model NLP pipeline with DistilBERT for sentiment classification and DistilBART for abstractive summarization, backed by a production-grade async backend with interactive analytics.",
    impact: "Automated NLP-driven categorization replacing manual review",
    techStack: [
      "Python",
      "PyTorch",
      "HuggingFace Transformers",
      "DistilBERT",
      "DistilBART",
      "FastAPI",
      "Celery",
      "Redis",
      "Docker",
    ],
    context: "SIH 2025 — College Level Qualified",
    architectureSteps: [
      { label: "Text Input", detail: "Comment datasets" },
      { label: "DistilBERT", detail: "Sentiment classification" },
      { label: "DistilBART", detail: "Summarization" },
      { label: "FastAPI + Celery", detail: "Async processing" },
      { label: "Analytics", detail: "Interactive dashboard" },
    ],
  },
];

// ─── PUBLICATION ───

export const publication: Publication = {
  title:
    "Relative Aging Comparisons of Two Coherent Systems under Dependent Identically Distributed Components and System Signatures",
  shortTitle: "Relative Aging Comparisons of Coherent Systems",
  authors: "Raju Bhakta & Indraneel Chatterjee",
  publisher: "Cogniverse Press",
  bookTitle:
    "Foundations and Emerging Trends in Contemporary Multidisciplinary Science",
  date: "April 2026",
  doi: "https://doi.org/10.5281/zenodo.19692035",
  isbn: "978-93-47652-64-6",
  description: [
    "Developed theoretical results using stochastic ordering, distortion function representations, and cumulative hazard rate analysis to compare aging behavior of coherent reliability systems.",
    "Established sufficient conditions for relative aging comparisons with applications to k-out-of-n, series, and parallel system configurations.",
    "Applied probabilistic modelling and system signature frameworks for reliability engineering analysis.",
  ],
};

// ─── EXPERIENCE ───

export const experiences: Experience[] = [
  {
    role: "Sponsorship Core Member",
    organization: "Entente 2026 — International Conference, NIIT University",
    period: "Dec 2025 — Apr 2026",
    highlights: [
      "Managed corporate partnership strategy and stakeholder relationships for a university-level international conference, coordinating cross-functional outreach and sponsorship pipelines.",
      "Drove end-to-end sponsorship initiatives from prospecting to closure across multiple concurrent leads.",
    ],
  },
  {
    role: "Sponsorship Lead",
    organization: "siNUsoid — NIIT University Tech Fest",
    period: "Apr 2025 — Dec 2025",
    highlights: [
      "Led partnerships and funding outreach for the university's flagship annual tech event; coordinated cross-team execution across design, logistics, and PR verticals.",
      "Secured the highest sponsor count in siNUsoid's recorded history through data-driven outreach targeting.",
    ],
  },
  {
    role: "Learning Assistant — Research & Planning Desk",
    organization: "CoEET, NIIT University",
    period: "Jan 2025 — Mar 2025",
    highlights: [
      "Assisted research initiatives at the Centre of Excellence in Educational Technology, supporting data collection and analysis workflows.",
      "Applied structured data interpretation and reporting to assist institutional decision-making.",
    ],
  },
];

// ─── SKILLS ───

export const skillGroups: SkillGroup[] = [
  {
    category: "Machine Learning",
    skills: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Keras", "TensorFlow"],
  },
  {
    category: "NLP & AI",
    skills: [
      "HuggingFace Transformers",
      "DistilBERT",
      "DistilBART",
      "LLM Applications",
      "RAG",
      "Model Evaluation",
    ],
  },
  {
    category: "Backend & Infrastructure",
    skills: ["FastAPI", "Docker", "Apache Kafka", "Redis", "Celery", "GitHub Actions"],
  },
  {
    category: "Data & Visualization",
    skills: ["Pandas", "NumPy", "SQL", "Power BI", "Matplotlib", "Seaborn"],
  },
  {
    category: "Web & Runtime",
    skills: ["Next.js", "TypeScript", "React", "WebAssembly", "WebGPU", "Git"],
  },
];

// ─── METRICS ───

export const metrics: Metric[] = [
  { value: "4+", label: "Major ML/AI Projects" },
  { value: "90%+", label: "Debugging Time Reduction", sublabel: "PipelineIQ" },
  { value: "1", label: "Published Research", sublabel: "Cogniverse Press" },
  { value: "9.01", label: "CGPA", sublabel: "NIIT University" },
  { value: "2+", label: "Hackathons", sublabel: "ISRO · SIH" },
];

// ─── CREDIBILITY STRIP ───

export const credibilityItems: { value: string; label: string; sublabel?: string }[] = [
  { value: "9.01 / 10", label: "CGPA", sublabel: "NIIT University" },
  { value: "Published", label: "Research", sublabel: "Cogniverse Press" },
  { value: "ISRO", label: "Hackathon", sublabel: "AeroSphinx" },
  { value: "SIH 2025", label: "Qualified", sublabel: "College Level" },
  { value: "90%+", label: "Debug Reduction", sublabel: "PipelineIQ" },
];

// ─── CERTIFICATIONS ───

export const certifications: Certification[] = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "Coursera (IBM)",
    skills: ["Data Science", "Machine Learning", "Python", "SQL", "Data Visualization", "Model Evaluation"],
  },
  {
    title: "Python 3 Programming Specialization",
    issuer: "Coursera (University of Michigan)",
    skills: ["Python", "OOP", "Data Structures", "REST APIs", "Pandas"],
  },
  {
    title: "Snowflake Data Engineering",
    issuer: "Coursera (Snowflake)",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/F6FH94GM6GTJ",
    skills: ["Snowflake", "Data Engineering"],
  },
];

// ─── WORKFLOW ───

export const workflowSteps = [
  "Data",
  "Understand",
  "Model",
  "Evaluate",
  "Deploy",
  "Improve",
] as const;

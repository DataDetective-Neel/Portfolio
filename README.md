# Indraneel Chatterjee — Production ML Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Domain-indraneelchatterjee.me-0A0F1D?style=flat-square)](https://indraneelchatterjee.me)

A premium, recruiter-focused portfolio engineered for **Indraneel Chatterjee**, Machine Learning Engineer specializing in NLP, LLM systems, and distributed data infrastructure.

---

## ⚡ 10-Second Executive Summary

* **Who**: Indraneel Chatterjee — Machine Learning Engineer Intern | AI Systems Builder
* **Education**: B.Tech in Computer Science & Engineering, NIIT University (**9.01 / 10 CGPA**)
* **Publications**: Co-authored research published in *Foundations and Emerging Trends in Contemporary Multidisciplinary Science* (Cogniverse Press, 2026 / [DOI: 10.5281/zenodo.19692035](https://doi.org/10.5281/zenodo.19692035))
* **Major Systems**:
  * **PipelineIQ**: Autonomous CI/CD Failure Resolution System (90%+ debug time reduction)
  * **DocuMentor**: Privacy-preserving Edge AI Document Assistant (WebAssembly / WebGPU)
  * **AeroSphinx**: Satellite + Terrestrial PM2.5 Air Quality Prediction (ISRO Hackathon)
  * **Sentiment Intelligence Dashboard**: DistilBERT + DistilBART NLP Pipeline (SIH 2025 Qualified)

---

## 🛠️ Architecture & Tech Stack

```
Portfolio Architecture
├── app/
│   ├── layout.tsx         # Root layout with SEO metadata, JSON-LD, and fonts
│   ├── page.tsx           # Assemble sections (Hero, Projects, Research, Experience, etc.)
│   ├── globals.css        # Tailwind v4 theme tokens, custom animations, reduced-motion rules
│   ├── robots.ts          # Search engine crawler policies
│   └── sitemap.ts         # Automated sitemap generation
├── components/
│   ├── navigation.tsx     # Responsive desktop/mobile navbar with backdrop blur
│   ├── hero.tsx           # High-impact hero with technical dataflow visualization
│   ├── credibility-strip.tsx # Factual proof points & metrics
│   ├── projects-section.tsx  # Featured deep dives with system architecture diagrams
│   ├── architecture-diagram.tsx # Multi-step dataflow pipeline visualizer
│   ├── research-section.tsx  # Academic publication card with DOI & metadata
│   ├── experience-section.tsx# Leadership and research roles
│   ├── skills-section.tsx    # Categorized engineering stack
│   ├── how-i-build.tsx       # 6-stage engineering lifecycle visualization
│   ├── metrics-section.tsx   # Verified quantitative impact metrics
│   ├── about-section.tsx     # Technical focus, background & certifications
│   ├── contact-section.tsx   # Direct outreach actions (Email, LinkedIn, GitHub, Resume)
│   └── footer.tsx            # Clean minimalist footer
└── lib/
    ├── data.ts            # Single source of truth for all content & systems
    ├── constants.ts       # Global site configurations & social links
    └── hooks.ts           # useInView, useReducedMotion, useAnimatedCounter
```

### Core Technologies
* **Framework**: Next.js 16 (App Router, Static Site Generation)
* **Language**: TypeScript 5
* **Styling**: Tailwind CSS v4 with custom dark design system
* **Fonts**: Geist Sans & Geist Mono
* **Accessibility**: Full WCAG 2.1 AA compliance, semantic HTML5, focus states, and `prefers-reduced-motion` support

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+
* npm, pnpm, or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/DataDetective-Neel/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
# Verify type checking and create optimized static build
npm run build

# Preview production build locally
npm run start
```

---

## 🎨 Design Philosophy

* **High-Signal Credibility**: Designed specifically for engineering hiring managers and technical recruiters. Core proof points (CGPA, publications, hackathons, production metrics) are immediately visible above the fold.
* **Architecture-First Visuals**: Real system flows (`DATA → MODEL → DEPLOY`) replace generic stock illustrations or progress bars.
* **Restrained Motion**: Subtle, purposeful entry animations that automatically deactivate when `prefers-reduced-motion` is enabled.
* **Maintainable Data Layer**: All text, projects, and achievements are centralized in `lib/data.ts` for clean single-point updates.

---

## 📬 Contact & Connect

* **Portfolio**: [indraneelchatterjee.me](https://indraneelchatterjee.me)
* **GitHub**: [@DataDetective-Neel](https://github.com/DataDetective-Neel)
* **LinkedIn**: [in/indraneel-chatterjee007](https://linkedin.com/in/indraneel-chatterjee007)
* **Email**: [datadetectiveneel@gmail.com](mailto:datadetectiveneel@gmail.com)

---
© 2026 Indraneel Chatterjee. All rights reserved.

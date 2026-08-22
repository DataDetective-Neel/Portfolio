"use client";

import { SOCIAL_LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060B18 0%, #0A1628 60%, #0D1B2A 100%)",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Machine Learning Engineer
              </span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Indraneel
              <br />
              Chatterjee
            </h1>

            {/* Headline */}
            <p className="animate-fade-in-up delay-200 mt-6 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
              Building intelligent systems that{" "}
              <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
                learn, reason and scale.
              </span>
            </p>

            {/* Supporting copy */}
            <p className="animate-fade-in-up delay-300 mt-5 text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
              I build data-driven solutions across machine learning, NLP, LLM applications,
              and production systems.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-dim transition-colors"
              >
                Explore My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-secondary hover:text-foreground hover:border-border-hover font-medium text-sm transition-colors"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-500 mt-6 flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="text-border">·</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Portrait Placeholder */}
          <div className="hidden lg:flex animate-fade-in delay-500">
            <div className="relative">
              {/* Technical visualization behind portrait */}
              <div className="absolute -inset-8 opacity-20">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Subtle node network */}
                  <circle cx="50" cy="80" r="3" fill="#3B82F6" opacity="0.6" />
                  <circle cx="150" cy="30" r="3" fill="#3B82F6" opacity="0.4" />
                  <circle cx="250" cy="90" r="3" fill="#7C3AED" opacity="0.6" />
                  <circle cx="80" cy="200" r="3" fill="#3B82F6" opacity="0.5" />
                  <circle cx="220" cy="220" r="3" fill="#7C3AED" opacity="0.5" />
                  <circle cx="150" cy="270" r="3" fill="#3B82F6" opacity="0.4" />
                  <line x1="50" y1="80" x2="150" y2="30" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="150" y1="30" x2="250" y2="90" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="80" y1="200" x2="220" y2="220" stroke="#7C3AED" strokeWidth="0.5" opacity="0.3" />
                  <line x1="150" y1="270" x2="80" y2="200" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                  {/* DATA → MODEL → DEPLOY labels */}
                  <text x="40" y="70" fill="#3B82F6" fontSize="8" fontFamily="monospace" opacity="0.5">DATA</text>
                  <text x="135" y="22" fill="#3B82F6" fontSize="8" fontFamily="monospace" opacity="0.5">MODEL</text>
                  <text x="230" y="80" fill="#7C3AED" fontSize="8" fontFamily="monospace" opacity="0.5">DEPLOY</text>
                </svg>
              </div>

              {/* Portrait frame */}
              <div className="relative w-64 h-80 xl:w-72 xl:h-[22rem] rounded-2xl bg-gradient-to-br from-card to-bg-secondary border border-border overflow-hidden">
                {/* Gradient overlay for placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-violet/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-border/50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <span className="text-xs text-muted/40 font-mono">profile-hero.png</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-muted/40">
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

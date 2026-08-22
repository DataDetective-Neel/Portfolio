"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/lib/hooks";

function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  const { ref, inView } = useInView();

  if (!featured) return null;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-border-hover transition-colors">
        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                  FEATURED
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base text-secondary mt-1">
                {featured.subtitle}
              </p>
            </div>
            <div className="flex gap-3">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-secondary hover:text-foreground hover:border-border-hover transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            {featured.description}
          </p>

          {/* Impact metric */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/10 mb-8">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium text-accent">{featured.impact}</span>
          </div>

          {/* Architecture */}
          <div className="mb-8">
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
              System Architecture
            </p>
            <ArchitectureDiagram steps={featured.architectureSteps} />
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {featured.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-border-hover transition-all duration-300 overflow-hidden ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-5 sm:p-6">
        {/* Context badge */}
        {project.context && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 mb-3">
            {project.context}
          </span>
        )}

        {/* Title */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-1.5 rounded-md text-muted hover:text-foreground hover:bg-card transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>

        <p className="text-sm text-secondary mb-1">{project.subtitle}</p>

        {/* Problem → Solution */}
        <p className="text-sm text-muted leading-relaxed mt-3 mb-4">
          {project.solution}
        </p>

        {/* Impact */}
        <div className="text-xs font-medium text-accent mb-4">
          ↗ {project.impact}
        </div>

        {/* Mini architecture */}
        <div className="mb-4">
          <ArchitectureDiagram steps={project.architectureSteps} />
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 6 && (
            <Badge variant="outline">+{project.techStack.length - 6}</Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="bg-bg-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects that solve real problems"
          subtitle="Production-grade systems built across ML, NLP, LLM applications, and data engineering."
        />

        <FeaturedProject />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

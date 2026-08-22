"use client";

import { publication } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/lib/hooks";

export function ResearchSection() {
  const { ref, inView } = useInView();

  return (
    <section id="research" className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research & Publications"
          subtitle="Peer-reviewed contributions to mathematical reliability theory and stochastic modelling."
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <article className="rounded-2xl border border-border bg-card/30 overflow-hidden hover:border-border-hover transition-colors">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-accent to-violet" />

            <div className="p-6 sm:p-8 md:p-10">
              {/* Publication type badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Book Chapter
                </span>
                <span className="text-xs text-muted font-mono">{publication.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                {publication.title}
              </h3>

              {/* Authors & Publisher */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-secondary mb-6">
                <span>{publication.authors}</span>
                <span className="text-border">·</span>
                <span className="text-muted">{publication.publisher}</span>
              </div>

              {/* Book title */}
              <p className="text-sm text-muted italic mb-6">
                In: {publication.bookTitle}
              </p>

              {/* Description points */}
              <ul className="space-y-3 mb-8">
                {publication.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-sm text-secondary leading-relaxed">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Metadata & Links */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-secondary hover:text-foreground hover:border-border-hover transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  DOI
                </a>
                <span className="text-xs text-muted font-mono">
                  ISBN: {publication.isbn}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

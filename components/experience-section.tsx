'use client';

import { experiences } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { useInView } from '@/lib/hooks';

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="bg-bg-secondary py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience & Leadership" subtitle="Hands-on leadership, partnership strategy, and research support." />
        
        <div className="mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border border-border hover:border-border-hover p-6 md:p-8 shadow-sm transition-all duration-500 ease-out ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-secondary font-medium mt-0.5">{exp.organization}</p>
                </div>
                <div className="text-muted font-mono text-sm shrink-0">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-2.5 text-secondary text-sm md:text-base">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3">
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

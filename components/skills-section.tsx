'use client';

import { skillGroups } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { useInView } from '@/lib/hooks';

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Engineering Stack" 
          subtitle="Core technologies and toolchains verified across deployed systems, ML pipelines, and production infrastructure." 
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillGroups.map((group, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-3 p-5 rounded-xl bg-card/40 border border-border transition-all duration-500 ease-out hover:border-border-hover ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xs uppercase tracking-wider text-accent font-mono font-semibold">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="inline-flex items-center px-2.5 py-1 text-xs bg-card border border-border text-secondary rounded-md hover:border-accent/40 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

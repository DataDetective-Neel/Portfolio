'use client';

import { certifications } from '@/lib/data';
import { SOCIAL_LINKS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { useInView } from '@/lib/hooks';

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bg-bg-secondary py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" subtitle="Engineering philosophy, research focus, and core competencies." />
        
        <div className="mt-12 flex flex-col-reverse lg:flex-row gap-12 items-start">
          <div 
            className={`flex-1 space-y-6 text-secondary leading-relaxed transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p>
              I'm a Computer Science & Engineering student at NIIT University (9.01 CGPA), focused on building production-grade machine learning systems. My work spans the full ML lifecycle — from data engineering and model development to deployment and monitoring.
            </p>
            <p>
              I'm drawn to problems at the intersection of ML, systems engineering, and real-world impact. Whether it's building autonomous CI/CD remediation, privacy-preserving document intelligence, or environmental prediction systems — I care about engineering solutions that actually work in production.
            </p>
            <p>
              Currently exploring LLM evaluation, model interpretability, and deep learning architectures. Looking for opportunities to contribute to teams building intelligent systems at scale.
            </p>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-4 hover:border-border-hover transition-colors">
                    <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((s, si) => (
                        <span key={si} className="text-[10px] font-mono text-muted bg-card px-1.5 py-0.5 rounded border border-border/50">
                          {s}
                        </span>
                      ))}
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline mt-3 inline-flex items-center gap-1">
                        View Credential
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-72 shrink-0 transition-all duration-700 ease-out delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="aspect-square bg-card rounded-2xl border border-border flex flex-col items-center justify-center gap-3 p-6 text-center shadow-lg relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="font-mono text-xs text-muted">
                /public/images/<br />profile-about.png
              </div>
              <span className="text-[11px] text-muted/60">Asset slot ready for photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

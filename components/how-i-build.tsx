'use client';

import { workflowSteps } from '@/lib/data';
import { useInView } from '@/lib/hooks';

export function HowIBuild() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-bg-secondary py-16 md:py-20 border-y border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">
            Engineering Methodology
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
            How I Build AI & ML Systems
          </h3>
        </div>

        <div 
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full bg-card border border-border rounded-xl py-3 px-2 text-center shadow-sm hover:border-accent/40 transition-colors">
                <span className="text-xs font-mono text-muted block mb-0.5">0{index + 1}</span>
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {step.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <p 
          className={`mt-8 text-secondary text-center text-sm md:text-base max-w-xl mx-auto transition-all duration-700 delay-200 ease-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Working at the intersection of Machine Learning, Data, Software Engineering, and AI Systems.
        </p>
      </div>
    </section>
  );
}

export default HowIBuild;

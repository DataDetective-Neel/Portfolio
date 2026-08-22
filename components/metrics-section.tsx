'use client';

import { metrics } from '@/lib/data';
import { useInView } from '@/lib/hooks';

export function MetricsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border border-border p-6 text-center transition-all duration-700 ease-out hover:border-border-hover ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-foreground font-medium">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-xs text-muted mt-1 font-mono">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;

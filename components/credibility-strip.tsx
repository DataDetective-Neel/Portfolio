"use client";

import { credibilityItems } from "@/lib/data";
import { useInView } from "@/lib/hooks";

export function CredibilityStrip() {
  const { ref, inView } = useInView(0.3);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative border-y border-border bg-[#080E1E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {credibilityItems.map((item, i) => (
            <div
              key={item.label}
              className={`text-center ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-foreground mt-1">
                {item.label}
              </div>
              {item.sublabel && (
                <div className="text-[10px] sm:text-xs text-muted mt-0.5">
                  {item.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

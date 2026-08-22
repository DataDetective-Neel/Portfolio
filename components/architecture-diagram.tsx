"use client";

import { useInView } from "@/lib/hooks";

interface ArchitectureDiagramProps {
  steps: { label: string; detail?: string }[];
  accentFrom?: string;
  accentTo?: string;
}

export function ArchitectureDiagram({
  steps,
  accentFrom = "#3B82F6",
  accentTo = "#7C3AED",
}: ArchitectureDiagramProps) {
  const { ref, inView } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {/* Desktop: horizontal flow */}
      <div className="hidden sm:flex items-center gap-1 overflow-x-auto pb-2">
        {steps.map((step, i) => {
          const progress = steps.length > 1 ? i / (steps.length - 1) : 0;
          return (
            <div key={step.label} className="flex items-center shrink-0">
              <div
                className="flex flex-col items-center px-3 py-2 rounded-lg border border-border bg-card/50 min-w-[100px]"
                style={{
                  borderColor: `color-mix(in srgb, ${accentFrom} ${Math.round((1 - progress) * 100)}%, ${accentTo})`,
                  borderWidth: "1px",
                }}
              >
                <span className="text-xs font-mono font-medium text-foreground whitespace-nowrap">
                  {step.label}
                </span>
                {step.detail && (
                  <span className="text-[10px] text-muted mt-0.5 whitespace-nowrap">
                    {step.detail}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <svg className="w-6 h-4 shrink-0 text-muted/40" viewBox="0 0 24 16">
                  <path
                    d="M4 8h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical flow */}
      <div className="sm:hidden flex flex-col gap-1">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 w-full">
              <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-accent">{i + 1}</span>
              </div>
              <div>
                <span className="text-xs font-mono font-medium text-foreground">
                  {step.label}
                </span>
                {step.detail && (
                  <span className="text-[10px] text-muted ml-2">
                    {step.detail}
                  </span>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="w-px h-3 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

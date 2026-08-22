"use client";

import { useInView } from "@/lib/hooks";

interface SectionHeadingProps {
  title?: string;
  children?: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, children, subtitle, align = "left" }: SectionHeadingProps) {
  const { ref, inView } = useInView();
  const headingText = title || children;

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""} ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {headingText}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap";
  const variants = {
    default: "bg-card text-secondary border border-border",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "bg-transparent text-muted border border-border",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}

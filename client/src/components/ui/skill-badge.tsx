import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20",
      "bg-primary/5 backdrop-blur-md text-primary text-sm font-medium tracking-wide",
      "animate-fade-in shadow-[0_0_15px_rgba(var(--primary),0.05)]",
      className
    )}>
      {children}
    </div>
  );
}

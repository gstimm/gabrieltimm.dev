import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillIconCardProps {
  name: string;
  icon?: string; // URL to icon image
  iconComponent?: React.ReactNode;
  className?: string;
}

export function SkillIconCard({ name, icon, iconComponent, className }: SkillIconCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center p-3 sm:p-4 rounded-xl",
        "bg-gradient-to-br from-card to-card/50 hover:from-primary/10 hover:to-primary/5",
        "transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-default shadow-sm h-full min-h-[110px]",
        className
      )}
    >
      <div className="p-3 mb-2 rounded-lg bg-card/80 border border-border/40 group-hover:border-primary/30 transition-all duration-300">
        {iconComponent ? (
          <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 [&>svg]:w-6 [&>svg]:h-6">
            {iconComponent}
          </div>
        ) : icon ? (
          <img src={icon} alt={name} className="w-6 h-6 object-contain" />
        ) : null}
      </div>
      <span className="text-xs font-semibold text-foreground/70 mt-1 text-center leading-tight group-hover:text-primary transition-colors break-words hyphens-auto w-full">
        {name}
      </span>
    </div>
  );
}

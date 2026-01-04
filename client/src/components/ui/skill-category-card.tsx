import { cn } from "@/lib/utils";

interface SkillCategoryCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

export function SkillCategoryCard({ title, children, className, accentColor = "var(--color-primary)" }: SkillCategoryCardProps) {
  return (
    <div className={cn(
      "p-4 sm:p-6 rounded-[2rem] border-2 border-border/50 bg-card/50 backdrop-blur-sm",
      "hover:shadow-2xl transition-all duration-500 hover:border-border/80 group/category h-full",
      className
    )}>
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div 
          className="w-1.5 h-6 sm:h-8 rounded-full" 
          style={{ backgroundColor: accentColor }}
        />
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover/category:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  );
}

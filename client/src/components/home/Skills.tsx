import { SkillCategoryCard } from '@/components/ui/skill-category-card';
import { SkillIconCard } from '@/components/ui/skill-icon-card';
import { SmoothCarousel, SmoothCarouselItem } from "@/components/ui/smooth-carousel";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SiBitbucket,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiSqlite,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export default function Skills() {
  const { t } = useLanguage();

  interface ITechnology {
    name: string;
    icon: any;
    color: string;
  }

  interface ITechnologyCategory {
    title: string;
    icon: string;
    technologies: ITechnology[];
  }

  const technologyCategories: ITechnologyCategory[] = [
    {
      title: t("technologies.frontend.title"),
      icon: "",
      technologies: [
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800 dark:text-white",
        },
        { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
        { name: "Zustand", icon: SiRedux, color: "text-[#EA4335]" },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "text-[#DB7093]",
        },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Figma", icon: SiFigma, color: "text-[#DB7093]" },
        { name: "shadcn/ui", icon: SiShadcnui, color: "text-[#06B6D4]" },
      ],
    },
    {
      title: t("technologies.backend.title"),
      icon: "",
      technologies: [
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        {
          name: "Express",
          icon: SiExpress,
          color: "text-gray-600 dark:text-gray-300",
        },
        { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800 dark:text-white",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "text-[#2D3748] dark:text-white",
        },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "SQLite", icon: SiSqlite, color: "text-[#003B57]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      ],
    },
    {
      title: t("technologies.mobile.title"),
      icon: "",
      technologies: [
        { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Expo", icon: SiExpo, color: "text-gray-800 dark:text-white" },
        { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
        { name: "Zustand", icon: SiRedux, color: "text-[#EA4335]" },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "text-[#DB7093]",
        },
        { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
      ],
    },
    {
      title: t("technologies.others.title"),
      icon: "",
      technologies: [
        { name: "C", icon: SiCplusplus, color: "text-[#00599C]" },
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "Java", icon: SiOpenjdk, color: "text-[#007396]" },
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        {
          name: "GitHub",
          icon: SiGithub,
          color: "text-gray-800 dark:text-white",
        },
        { name: "Bitbucket", icon: SiBitbucket, color: "text-[#0052CC]" },
        { name: "Linux", icon: SiLinux, color: "text-[#000000]" },
        { name: "Jira", icon: SiJira, color: "text-[#0052CC]" },
        { name: "Windows", icon: FaWindows, color: "text-[#0078D6]" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 md:py-48 overflow-hidden bg-card/30">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-4 mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-medium">{t('skills.title')}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center">
            {t('skills.subtitle')}
          </h2>
        </div>

        <SmoothCarousel speed={100} className="w-full max-w-6xl mx-auto" gap="gap-4">
          {technologyCategories.map((category, index) => (
            <SmoothCarouselItem key={index} className="w-[400px] md:w-[450px] py-10 px-2">
              <SkillCategoryCard 
                title={category.title} 
                accentColor="var(--color-primary)"
              >

                  {category.technologies.map((tech, techIndex) => (
                    <SkillIconCard 
                      key={techIndex} 
                      name={tech.name} 
                      iconComponent={
                        <tech.icon 
                          className={`w-6 h-6 ${tech.color}`} 
                        />
                      } 
                    />
                  ))}

              </SkillCategoryCard>
            </SmoothCarouselItem>
          ))}
        </SmoothCarousel>
      </div>
    </section>
  );
}

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SiWhatsapp,
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
  SiLinkedin,
  SiInstagram,
  SiGmail,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SkillCategoryCard } from '@/components/ui/skill-category-card';
import { SkillIconCard } from '@/components/ui/skill-icon-card';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { SmoothCarousel, SmoothCarouselItem } from "@/components/ui/smooth-carousel";

import emailjs from '@emailjs/browser';

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast.success(t('contact.success') || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error(t('contact.error') || 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      type: 'web',
      title: 'Jairo Cândido Advogados Associados',
      description: 'Desenvolvimento de um sistema completo de gestão para escritórios de advocacia associados. A plataforma inclui módulos financeiros avançados, controle de processos, relatórios gerenciais e automações, resultando em uma redução de inadimplência dos clientes. Projeto focado em escalabilidade, segurança de dados e performance.',
      image: '/images/jairo-candido-light.png',
      tags: ['Next.js', 'Nest.js', 'SQL Server', 'AWS'],
    },
    {
      type: 'web',
      title: 'Fundação Assefaz',
      description: 'Liderança na modernização de plataformas nacionais de gestão de saúde e benefícios. O projeto envolveu a implementação de fluxos seguros de dados, controle de acesso por perfis, automações para processos de reembolso e sinistros, além de melhorias significativas de confiabilidade e desempenho em operações internas.',
      image: '/images/assefaz-light.png',
      tags: ['Next.js', 'Nest.js', 'MySQL', 'Azure'],
    },
    {
      type: 'web',
      title: 'Multi Pro',
      description: 'Construção de uma plataforma B2B de atacado voltada para linhas profissionais da Multilaser. O sistema integra-se a ERPs para automatizar pedidos em grande escala, otimizar o processamento de compras, gerenciamento de catálogo e melhorar a eficiência operacional de parceiros comerciais.',
      image: '/images/multi-pro-light.png',
      tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS'],
    },
    {
      type: 'mobile',
      title: 'Bla Bla Campus',
      description: 'Desenvolvimento de um aplicativo colaborativo para estudantes da UFPEL com foco em caronas solidárias entre campus. A plataforma permite que alunos ofereçam e encontrem caronas de forma segura e organizada, facilitando a locomoção entre os diferentes campus da universidade, promovendo economia, integração estudantil e mobilidade sustentável.',
      image: '/images/bla-bla-campus-iphone.png',
      tags: ['React Native', 'Nest.js', 'PostgreSQL', 'Firebase'],
    }
  ];

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

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for building large-scale React applications that are maintainable and performant.',
      date: '2026-01-15',
      readTime: 8,
      image: '/images/gabriel-timm.png'
    },
    {
      title: 'Understanding TypeScript Generics',
      excerpt: 'A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.',
      date: '2026-01-08',
      readTime: 6,
      image: '/images/abstract-tech-1.png'
    },
    {
      title: 'Modern API Design Principles',
      excerpt: 'Exploring RESTful and GraphQL API design patterns, authentication strategies, and best practices.',
      date: '2026-01-01',
      readTime: 10,
      image: '/images/abstract-tech-2.png'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for building large-scale React applications that are maintainable and performant.',
      date: '2026-01-01',
      readTime: 10,
      image: '/images/abstract-tech-2.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        
        <div className="container relative z-10 py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <p className="text-lg text-foreground/70 font-medium">{t('hero.greeting')}</p>
            
            <h1 className="font-display text-7xl md:text-9xl font-bold text-primary leading-tight">
              {t('hero.name')}
            </h1>
            
            <p className="text-2xl md:text-4xl text-foreground/80 font-accent italic">
              {t('hero.title')}
            </p>
            
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a 
                href="https://github.com/gstimm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/20 transition-all duration-400 hover:scale-110"
              >
                <SiGithub className="w-6 h-6" color="var(--color-primary)" />
              </a>
              <a 
                href="https://linkedin.com/in/gabriel-timm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/20 transition-all duration-400 hover:scale-110"
              >
                <SiLinkedin className="w-6 h-6" color="var(--color-primary)" fill="var(--color-primary)" />
              </a>
              <a 
                href="https://instagram.com/gabrieltimm_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/20 transition-all duration-400 hover:scale-110"
              >
                <SiInstagram className="w-6 h-6" color="var(--color-primary)" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.projects')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.contact')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 md:py-48 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <p className="text-sm uppercase tracking-wider text-primary font-medium">{t('journey.subtitle')}</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
                {t('journey.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>{t('journey.intro')}</p>
                <p>{t('journey.experience')}</p>
                <p className="font-accent italic text-primary">{t('journey.philosophy')}</p>
              </div>
              
              <div className="relative h-112 rounded-3xl overflow-hidden">
                <img 
                  src="/images/gabriel-timm.png" 
                  alt="Workspace" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 md:py-48">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-primary font-medium">{t('projects.subtitle')}</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              {t('projects.title')}
            </h2>
          </div>

          <SmoothCarousel speed={100} className="w-full max-w-6xl mx-auto" gap="gap-4">
            {projects.map((project, index) => (
              <SmoothCarouselItem key={index} className="w-[400px] md:w-[450px] py-10 px-2">
                <Card 
                  className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl border-2 flex flex-col group"
                >
                  <div className={`relative h-64 flex items-center justify-center ${
                    project.type === 'mobile' 
                      ? 'bg-accent/5 p-6' 
                      : 'overflow-hidden'
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`h-full transition-transform duration-700 group-hover:scale-105 ${
                        project.type === 'mobile' 
                          ? 'w-auto object-contain drop-shadow-2xl' 
                          : 'w-full object-cover'
                      }`}
                    />
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    <h3 className="font-display text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">{project.description}</p>
                  </div>
                  <div className="p-8 pt-0 flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-4 py-1.5 bg-accent/10 text-accent-foreground rounded-full text-xs font-semibold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </SmoothCarouselItem>
            ))}
          </SmoothCarousel>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 md:py-48 overflow-hidden bg-card/30">
        {/* Decorative background glow elements */}
        {/* <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" /> */}
        {/* <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" /> */}
        
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

      {/* Blog Section */}
      {/* <section id="blog" className="py-32 md:py-48">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-primary font-medium">{t('blog.subtitle')}</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              {t('blog.title')}
            </h2>
          </div>

          <SmoothCarousel speed={100} className="w-full max-w-6xl mx-auto" gap="gap-4">
            {blogPosts.map((post, index) => (
              <SmoothCarouselItem key={index} className="w-[380px] md:w-[420px] py-10 px-2">
                <Card 
                  className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl border-2 flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
                        {t('blog.readMore')}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    <div className="flex items-center gap-3 text-xs text-foreground/50 font-semibold tracking-wider uppercase">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                      <span>{post.readTime} {t('blog.readTime')}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground leading-tight">{post.title}</h3>
                    <p className="text-foreground/70 text-base leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold group">
                      {t('blog.readMore')} <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </SmoothCarouselItem>
            ))}
          </SmoothCarousel>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
        {/* Enhanced decorative background elements */}
        
        <div className="container relative z-10 max-w-6xl mx-auto">
          {/* 1. Header (Centered) */}
          <div className="flex flex-col items-center text-center space-y-8 mb-16 lg:mb-24">
            <p className="text-sm uppercase tracking-wider text-primary font-medium">{t('contact.subtitle')}</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] max-w-4xl">
              {t('contact.title')}
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
             {/* Left: Contact Form */}
             <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl opacity-30" />
              <Card className="relative p-8 md:p-12 rounded-[3rem] border-2 shadow-2xl backdrop-blur-xl bg-card/80">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 transition-colors group-focus-within:text-primary">
                        {t('contact.form.name')}
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-2xl h-14 bg-background/80 border-2 border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-lg hover:border-primary/30 placeholder:text-foreground/50"
                        placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 transition-colors group-focus-within:text-primary">
                        {t('contact.form.email')}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-2xl h-14 bg-background/80 border-2 border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-lg hover:border-primary/30 placeholder:text-foreground/50"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 transition-colors group-focus-within:text-primary">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="rounded-2xl bg-background/80 border-2 border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-lg p-5 resize-none hover:border-primary/30 placeholder:text-foreground/50"
                      placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full rounded-2xl h-16 text-xl font-display font-bold tracking-wide group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('contact.form.sending')}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <SiGmail className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                        <span>{t('contact.form.send')}</span>
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Right: Contact Buttons */}
            <div className="space-y-6 order-1 lg:order-2">
              <a 
                href="mailto:contato.gabrieltimm@gmail.com"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-6 p-6 rounded-3xl bg-card/50 backdrop-blur-sm border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                    <SiGmail className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">Email</p>
                    <span className="text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors block truncate">
                      contato.gabrieltimm@gmail.com
                    </span>
                  </div>
                </div>
              </a>

              <a 
                href="https://wa.me/5553984459432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-6 p-6 rounded-3xl bg-card/50 backdrop-blur-sm border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                    <SiWhatsapp className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">{t('contact.whatsapp')}</p>
                    <span className="text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors">
                      +55 (53) 98445-9432
                    </span>
                  </div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/gabriel-timm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-6 p-6 rounded-3xl bg-card/50 backdrop-blur-sm border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                    <SiLinkedin className="w-7 h-7" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-1">LinkedIn</p>
                    <span className="text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors">
                      in/gabriel-timm
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © 2026 Gabriel Timm. {t('footer.rights')}
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/gstimm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-foreground/60 hover:text-primary transition-all duration-400"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/gabriel-timm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-foreground/60 hover:text-primary transition-all duration-400"
              >
                <SiLinkedin className="w-5 h-5" fill="currentColor" />
              </a>
              <a 
                href="https://instagram.com/gabrieltimm_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-foreground/60 hover:text-primary transition-all duration-400"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

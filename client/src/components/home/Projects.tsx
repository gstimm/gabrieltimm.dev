import { Card } from '@/components/ui/card';
import { SmoothCarousel, SmoothCarouselItem } from "@/components/ui/smooth-carousel";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      type: 'web',
      title: 'Jairo Cândido Advogados Associados',
      description: t('projects.jairo.description'),
      image: '/images/jairo-candido-light.png',
      tags: ['Next.js', 'Nest.js', 'SQL Server', 'AWS'],
    },
    {
      type: 'web',
      title: 'Fundação Assefaz',
      description: t('projects.assefaz.description'),
      image: '/images/assefaz-light.png',
      tags: ['Next.js', 'Nest.js', 'MySQL', 'Azure'],
    },
    {
      type: 'web',
      title: 'Multi Pro',
      description: t('projects.multi-pro.description'),
      image: '/images/multi-pro-light.png',
      tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS'],
    },
    {
      type: 'mobile',
      title: 'Bla Bla Campus',
      description: t('projects.bla-bla-campus.description'),
      image: '/images/bla-bla-campus-iphone.png',
      tags: ['React Native', 'Nest.js', 'PostgreSQL', 'Firebase'],
    }
  ];

  return (
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
  );
}

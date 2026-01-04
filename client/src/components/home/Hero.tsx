import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Hero() {
  const { t } = useLanguage();

  return (
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
  );
}

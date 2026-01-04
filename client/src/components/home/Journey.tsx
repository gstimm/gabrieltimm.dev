import { useLanguage } from '@/contexts/LanguageContext';

export default function Journey() {
  const { t } = useLanguage();

  return (
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
  );
}

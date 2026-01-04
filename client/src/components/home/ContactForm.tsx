import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { toast } from 'sonner';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
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
  );
}

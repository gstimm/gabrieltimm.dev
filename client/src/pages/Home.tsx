import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import { motion, useScroll, useSpring } from 'framer-motion';

// New Components
import Hero from '@/components/home/Hero';
import Journey from '@/components/home/Journey';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <Hero />

      <Journey />

      <Projects />

      <Skills />

      <ContactForm />

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

/* Design Philosophy: Minimalismo Orgânico Japonês
 * - Espaçamento generoso e respiração visual
 * - Bordas arredondadas orgânicas
 * - Transições suaves e naturais
 * - Paleta terrosa com terracota e verde musgo
 */

import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-2xl font-bold text-primary hover:opacity-80 transition-opacity duration-400"
          >
            gabrieltimm.dev
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.journey')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.skills')}
            </button>
            {/* <button
              onClick={() => scrollToSection('blog')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.blog')}
            </button> */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-primary transition-colors duration-400 font-display font-semibold"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-accent/20 transition-all duration-400"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-3xl">
                <DropdownMenuItem 
                  onClick={() => setLanguage('pt')}
                  className={`rounded-2xl ${language === 'pt' ? 'bg-accent/20' : ''}`}
                >
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={`rounded-2xl ${language === 'en' ? 'bg-accent/20' : ''}`}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/20 transition-all duration-400"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full hover:bg-accent/20 transition-all duration-400"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="container py-6 flex flex-col gap-4">
              <button
                onClick={() => {
                  scrollToSection('hero');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('journey');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.journey')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('projects');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('skills');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('blog');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.blog')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground/70 hover:text-primary transition-colors duration-400 font-medium py-2"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

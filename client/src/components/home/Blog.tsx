import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SmoothCarousel, SmoothCarouselItem } from "@/components/ui/smooth-carousel";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const { t } = useLanguage();

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
    <section id="blog" className="py-32 md:py-48">
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
                    {t('blog.readMore')} <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </SmoothCarouselItem>
          ))}
        </SmoothCarousel>
      </div>
    </section>
  );
}

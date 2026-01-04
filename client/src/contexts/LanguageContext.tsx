import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.journey': 'Jornada',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou o',
    'hero.name': 'Gabriel Timm',
    'hero.title': 'Desenvolvedor Full-Stack',
    'hero.description': 'Criando experiências digitais elegantes e funcionais. Especializado em React, Node.js e arquiteturas modernas de software.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Entre em Contato',
    
    // Journey
    'journey.title': 'Minha Jornada',
    'journey.subtitle': 'Do código ao impacto',
    'journey.intro': 'Sou desenvolvedor full-stack com foco em transformar ideias complexas em produtos digitais escaláveis, funcionais e centrados no usuário. Minha trajetória começou movida pela curiosidade e evoluiu para uma atuação sólida na construção de software de alta qualidade, do backend à interface final.',
    'journey.experience': 'Trabalho com Node.js, React, React Native e bancos de dados relacionais e não relacionais, aplicando princípios de arquitetura limpa, boas práticas de engenharia e foco em manutenção a longo prazo. Tenho forte atenção ao design técnico das soluções, sempre buscando entender profundamente o problema antes de definir a abordagem mais adequada.',
    'journey.philosophy': 'Acredito que boa tecnologia nasce da combinação entre excelência técnica e empatia. Por isso, meu objetivo é criar sistemas que não apenas funcionem bem, mas que gerem impacto real, entregando experiências consistentes, intuitivas e confiáveis para quem as utiliza.',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Trabalhos selecionados',
    'projects.demo': 'Ver Demo',
    'projects.repo': 'Repositório',
    'projects.viewAll': 'Ver Todos os Projetos',
    'projects.jairo.description': 'Desenvolvimento de um sistema completo de gestão para escritórios de advocacia associados. A plataforma inclui módulos financeiros avançados, controle de processos, relatórios gerenciais e automações, resultando em uma redução de inadimplência dos clientes. Projeto focado em escalabilidade, segurança de dados e performance.',
    'projects.assefaz.description': 'Liderança na modernização de plataformas nacionais de gestão de saúde e benefícios. O projeto envolveu a implementação de fluxos seguros de dados, controle de acesso por perfis, automações para processos de reembolso e sinistros, além de melhorias significativas de confiabilidade e desempenho em operações internas.',
    'projects.multi-pro.description': 'Construção de uma plataforma B2B de atacado voltada para linhas profissionais da Multilaser. O sistema integra-se a ERPs para automatizar pedidos em grande escala, otimizar o processamento de compras, gerenciamento de catálogo e melhorar a eficiência operacional de parceiros comerciais.',
    'projects.bla-bla-campus.description': 'Desenvolvimento de um aplicativo colaborativo para estudantes da UFPEL com foco em caronas solidárias entre campus. A plataforma permite que alunos ofereçam e encontrem caronas de forma segura e organizada, facilitando a locomoção entre os diferentes campus da universidade, promovendo economia, integração estudantil e mobilidade sustentável.',

    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologias e ferramentas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.others': 'Outros Conhecimentos',
    'skills.tools': 'Ferramentas',
    'technologies.frontend.title': 'Frontend',
    'technologies.backend.title': 'Backend',
    'technologies.mobile.title': 'Mobile',
    'technologies.others.title': 'Outros',
    'skills.proficiency.expert': 'Avançado',
    'skills.proficiency.advanced': 'Intermediário',
    'skills.proficiency.intermediate': 'Básico',
    
    // Blog
    'blog.title': 'Artigos Técnicos',
    'blog.subtitle': 'Compartilhando conhecimento',
    'blog.readMore': 'Ler Mais',
    'blog.readTime': 'min de leitura',
    
    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Entre em contato',
    'contact.description': 'Estou sempre aberto a novos projetos, colaborações ou apenas para trocar ideias sobre tecnologia. Sinta-se à vontade para entrar em contato!',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.whatsapp': 'WhatsApp',
    'contact.resume': 'Baixar Currículo',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.form.name.placeholder': 'Seu nome aqui',
    'contact.form.email.placeholder': 'Seu email aqui',
    'contact.form.message.placeholder': 'Sua mensagem aqui',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built': 'Desenvolvido com',
    'footer.and': 'e',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.journey': 'Journey',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Gabriel Timm',
    'hero.title': 'Full-Stack Developer',
    'hero.description': 'Creating elegant and functional digital experiences. Specialized in React, Node.js and modern software architectures.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    
    // Journey
    'journey.title': 'My Journey',
    'journey.subtitle': 'From code to impact',
    'journey.intro': 'I\’m a full-stack developer focused on turning complex ideas into scalable, user-centered digital products. My journey started with curiosity and evolved into a strong commitment to building high-quality software across the entire stack.',
    'journey.experience': 'I work with Node.js, React, React Native, and both relational and non-relational databases, applying clean architecture principles, solid engineering practices, and long-term maintainability. I prioritize understanding the problem deeply before defining the technical solution.',
    'journey.philosophy': 'I believe great technology is built at the intersection of technical excellence and empathy. My goal is to create systems that not only work reliably, but also deliver meaningful, intuitive experiences for the people who use them.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Selected works',
    'projects.demo': 'View Demo',
    'projects.repo': 'Repository',
    'projects.viewAll': 'View All Projects',
    'projects.jairo.description': 'Development of a complete management system for associated law firms. The platform includes advanced financial modules, case management, managerial reports, and automations, resulting in reduced client delinquency. The project focuses on scalability, data security, and performance.',
    'projects.assefaz.description': 'Leadership in the modernization of national health and benefits management platforms. The project involved implementing secure data flows, role-based access control, automations for reimbursement and claims processes, as well as significant improvements in reliability and performance of internal operations.',
    'projects.multi-pro.description': 'Development of a B2B wholesale platform focused on Multilaser’s professional product lines. The system integrates with ERPs to automate large-scale orders, optimize purchasing workflows, manage catalogs, and improve operational efficiency for business partners.',
    'projects.bla-bla-campus.description': 'Development of a collaborative application for UFPEL students focused on ride-sharing between campuses. The platform allows students to safely and efficiently offer and find rides, facilitating mobility between different university campuses while promoting cost savings, student integration, and sustainable transportation.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.others': 'Other Knowledge',
    'skills.tools': 'Tools',
    'technologies.frontend.title': 'Frontend',
    'technologies.backend.title': 'Backend',
    'technologies.mobile.title': 'Mobile',
    'technologies.others.title': 'Others',
    'skills.proficiency.expert': 'Expert',
    'skills.proficiency.advanced': 'Advanced',
    'skills.proficiency.intermediate': 'Intermediate',
    
    // Blog
    'blog.title': 'Technical Articles',
    'blog.subtitle': 'Sharing knowledge',
    'blog.readMore': 'Read More',
    'blog.readTime': 'min read',
    
    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'I\'m always open to new projects, collaborations or just to exchange ideas about technology. Feel free to reach out!',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.whatsapp': 'WhatsApp',
    'contact.resume': 'Download Resume',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.form.name.placeholder': 'Your name here',
    'contact.form.email.placeholder': 'Your email here',
    'contact.form.message.placeholder': 'Your message here',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
    'footer.and': 'and',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'pt' || saved === 'en') ? saved : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

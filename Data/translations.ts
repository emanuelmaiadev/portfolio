import { BaseInfo } from "@/Data/data";

interface SectionTranslations {
  navbar: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contacts: string;
    hireMe: string;
    toggleLang: string;
  };
  hero: {
    greeting: string;
    position: string;
    description: string;
    downloadButton: string;
  };
  about: {
    title: string;
    heading: string;
    paragraph: string;
    frontEnd: string;
    backEnd: string;
    qa: string;
    hireQuery: string;
    yes: string;
    no: string;
  };
  experience: {
    title: string;
    currentJobTitle: string;
    currentJobDesc: string;
    schoolTitle: string;
    schoolDesc: string;
    degreeTitle: string;
    degreeDesc: string;
    analyticalTitle: string;
    analyticalDesc: string;
    creativeTitle: string;
    creativeDesc: string;
    adaptabilityTitle: string;
    adaptabilityDesc: string;
    detailOrientedTitle: string;
    detailOrientedDesc: string;
  };
  skills: {
    title: string;
  };
  contact: {
    title: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    whatsappLabel: string;
    emailLabel: string;
    addressLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    home: string;
    experience: string;
    skills: string;
    contact: string;
    copyright: string;
  };
}

interface LanguageTranslations {
  en: SectionTranslations;
  pt: SectionTranslations;
}

export const translations: LanguageTranslations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contacts: "Contacts",
      hireMe: "Hire Me",
      toggleLang: "Português",
    },
    hero: {
      greeting: `I am ${BaseInfo.name}`,
      position: BaseInfo.position,
      description: BaseInfo.description,
      downloadButton: "Download Resume",
    },
    about: {
      title: "ABOUT ME",
      heading:
        "Creating websites and Testing funcionalities with sharp precision and creativity",
      paragraph:
        "I don't just write code — I engineer experiences that click, flow, and endure. Whether I'm shaping slick UIs with React and Tailwind or building solid APIs with Node.js, my focus is clear: performance, clarity, and style. On the QA side, I break things before users can, automating test flows with Cypress like a digital vigilante. Creative by nature, precise by practice, I blend frontend finesse with backend brain — always pushing for solutions that aren't just functional, but unforgettable.",
      frontEnd: "Front-End Development",
      backEnd: "Back-End Development",
      qa: "QA Analisys and Automation",
      hireQuery: "Would you hire me?",
      yes: "Yes",
      no: "No",
    },
    experience: {
      title: "EXPERIENCES",
      currentJobTitle: "VeganHive (currently)",
      currentJobDesc:
        "QA Analyst E2E test automation using Cypress, focused on software quality and CI/CD integration.",
      schoolTitle: "Infinity School",
      schoolDesc:
        "1+ year course with hands on experience with JavaScript, NodeJS, React, TypeScript, API Development and more",
      degreeTitle: "Computer Science Bachelor",
      degreeDesc:
        "In Progress! Studying programming fundamentals, data structures, and system architecture.",
      analyticalTitle: "Analytical Thinking",
      analyticalDesc:
        "Problem decomposition & logic. Skilled at breaking complex problems into smaller, manageable parts to find efficient, logical solutions.",
      creativeTitle: "Creative Problem Solving",
      creativeDesc:
        "Thinking outside the box. Enjoy crafting smart, unconventional solutions — especially when challenges require flexible, innovative thinking.",
      adaptabilityTitle: "Adaptability",
      adaptabilityDesc:
        "Thrives in dynamic environments. Quick to learn new tools, embrace change, and adjust workflows to meet evolving project needs.",
      detailOrientedTitle: "Detail Oriented",
      detailOrientedDesc:
        "Committed to writing clean and well-documented code. I catch the subtle bugs ensuring that nothing slips through the cracks",
    },
    skills: {
      title: "MY SKILLS",
    },
    contact: {
      title: "CONTACT ME",
      firstNamePlaceholder: "First name",
      lastNamePlaceholder: "Last name",
      emailPlaceholder: "E-mail address",
      phonePlaceholder: "Phone number",
      messagePlaceholder: "Your message",
      sendButton: "Send Message",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      addressLabel: "Address",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      copyright: `© ${new Date().getFullYear()} All Rights Reserved by Emanuel Maia`,
    },
  },
  pt: {
    navbar: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      contacts: "Contatos",
      hireMe: "Contrate-me",
      toggleLang: "English",
    },
    hero: {
      greeting: `Eu sou ${BaseInfo.name}`,
      position: BaseInfo.position,
      description:
        "Olá, sou Emanuel Maia, um Desenvolvedor Full Stack com foco em Front-End e QA. Trabalho com JavaScript, React, Node.js e ferramentas de teste como Cypress, Insomnia e Postman. Atualmente, sou Analista de QA na Vegan Hive. Seja bem-vindo(a) e aproveite.",
      downloadButton: "Baixar Currículo",
    },
    about: {
      title: "SOBRE MIM",
      heading:
        "Criando websites e Testando funcionalidades com precisão aguçada e criatividade",
      paragraph:
        "Eu não apenas escrevo código — eu desenvolvo experiências que clicam, fluem e perduram. Seja moldando UIs elegantes com React e Tailwind ou construindo APIs sólidas com Node.js, meu foco é claro: performance, clareza e estilo. No lado de QA, eu quebro as coisas antes que os usuários consigam, automatizando fluxos de teste com Cypress como um vigilante digital. Criativo por natureza, preciso por prática, eu misturo a finesse do frontend com o cérebro do backend — sempre buscando soluções que não são apenas funcionais, mas inesquecíveis.",
      frontEnd: "Desenvolvimento Front-End",
      backEnd: "Desenvolvimento Back-End",
      qa: "Análise e Automação de QA",
      hireQuery: "Você me contrataria?",
      yes: "Sim",
      no: "Não",
    },
    experience: {
      title: "EXPERIÊNCIAS",
      currentJobTitle: "VeganHive",
      currentJobDesc:
        "Analista de QA em automação de testes E2E usando Cypress, focado em qualidade de software e integração CI/CD.",
      schoolTitle: "Infinity School",
      schoolDesc:
        "Curso de mais de 1 ano com experiência prática em JavaScript, NodeJS, React, TypeScript, Desenvolvimento de API e mais",
      degreeTitle: "Bacharelado em Ciência da Computação",
      degreeDesc:
        "Em Progresso! Estudando fundamentos de programação, estruturas de dados e arquitetura de sistemas.",
      analyticalTitle: "Pensamento Analítico",
      analyticalDesc:
        "Decomposição de problemas e lógica. Habilidade em dividir problemas complexos em partes menores e gerenciáveis para encontrar soluções eficientes e lógicas.",
      creativeTitle: "Resolução Criativa de Problemas",
      creativeDesc:
        "Pensando fora da caixa. Gosto de criar soluções inteligentes e não convencionais — especialmente quando os desafios exigem pensamento flexível e inovador.",
      adaptabilityTitle: "Adaptabilidade",
      adaptabilityDesc:
        "Prospera em ambientes dinâmicos. Rápido para aprender novas ferramentas, abraçar mudanças e ajustar fluxos de trabalho para atender às necessidades evolutivas do projeto.",
      detailOrientedTitle: "Orientado a Detalhes",
      detailOrientedDesc:
        "Comprometido em escrever código limpo e bem documentado. Posso detectar bugs sutis garantindo que nada passe despercebido.",
    },
    skills: {
      title: "MINHAS HABILIDADES",
    },
    contact: {
      title: "FALE COMIGO",
      firstNamePlaceholder: "Nome",
      lastNamePlaceholder: "Sobrenome",
      emailPlaceholder: "Endereço de e-mail",
      phonePlaceholder: "Número de telefone",
      messagePlaceholder: "Sua mensagem",
      sendButton: "Enviar Mensagem",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      addressLabel: "Endereço",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      home: "Início",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
      copyright: `© ${new Date().getFullYear()} Todos os Direitos Reservados por Emanuel Maia`,
    },
  },
};

export const getTranslations = (language: "en" | "pt"): SectionTranslations => {
  return translations[language];
};

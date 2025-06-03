import { BaseInfo } from "@/Data/data"; // Assuming BaseInfo is imported for dynamic parts

// Define a type for the translation strings
interface Translations {
  greeting: string;
  position: string; // Keep position dynamic from BaseInfo, but include key if needed elsewhere
  description: string;
  downloadButton: string;
}

// Define the translations for each language
interface LanguageTranslations {
  en: Translations;
  pt: Translations;
}

// Translation data
export const translations: LanguageTranslations = {
  en: {
    greeting: `I am ${BaseInfo.name}`,
    position: BaseInfo.position, // Assuming position itself doesn't need translation, just display
    description: BaseInfo.description, // Assuming description from BaseInfo is in English
    downloadButton: "Download Resume",
  },
  pt: {
    greeting: `Eu sou ${BaseInfo.name}`,
    position: BaseInfo.position, // Mantendo a posição dinâmica
    description: "Aqui você colocaria a descrição em português. Adapte conforme necessário.", // Placeholder for Portuguese description
    downloadButton: "Baixar Currículo",
  },
};

// Function to get translations based on language
export const getTranslations = (language: 'en' | 'pt'): Translations => {
  return translations[language];
};


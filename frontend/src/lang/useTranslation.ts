import translations from './en.json';

// Simple translation hook for English only
export const useTranslation = () => {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key itself if translation is not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t };
};

"use client";

import en from "../locales/en.json";
import es from "../locales/es.json";
import eu from "../locales/eu.json";

const translations: Record<string, any> = { en, es, eu };

const lang = "es"; // idioma fijo

export function useTranslation() {
  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (const k of keys) {
      if (!value) return key;
      value = value[k];
    }
    return value || key;
  };

  return { t, lang };
}

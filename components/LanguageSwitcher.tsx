"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../app/context/LanguageContext";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "eu", name: "Euskera", flag: "🇪🇺" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center space-x-1 px-2 py-1.5 rounded-md transition-all duration-300",
          "text-muted-foreground hover:text-foreground hover:bg-muted/30",
          "border border-transparent hover:border-yellow-400/20 group"
        )}
      >
        <Globe className="w-4 h-4 group-hover:text-yellow-400 transition-colors duration-300" />
        <span className="text-sm font-medium hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <svg
          className={cn("w-3 h-3 transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-40 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg z-20 overflow-hidden">
            <div className="py-1">
              {languages
                .filter((lang) => lang.code !== currentLang.code)
                .map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "es" | "en" | "eu");
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full px-3 py-2 text-left text-sm flex items-center space-x-2 transition-colors duration-200",
                      "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    )}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

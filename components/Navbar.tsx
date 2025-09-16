"use client";

import Link from "next/link";
import ReservationModal from "./ReservationModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Phone, X } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext";

type Language = "es" | "en" | "eu";

interface NavbarTexts {
  navHome: string;
  navAbout: string;
  navMenu: string;
  navContact: string;
  reserve: string;
}

const texts: Record<Language, NavbarTexts> = {
  es: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navMenu: "Carta",
    navContact: "Contacto",
    reserve: "Reservar",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navContact: "Contact",
    reserve: "Reserve",
  },
  eu: {
    navHome: "Hasiera",
    navAbout: "Guri buruz",
    navMenu: "Menua",
    navContact: "Harremana",
    reserve: "Erreserbatu",
  },
};

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language } = useLanguage();
  const t = texts[language];

  const navItems = [
    { href: "/", label: t.navHome },
    { href: "/nosotros", label: t.navAbout },
    { href: "/carta", label: t.navMenu },
    { href: "/contacto", label: t.navContact },
  ];

  const getFullPath = (href: string) => href;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-lg sm:text-xl font-bold text-foreground group-hover:text-yellow-400 transition-colors duration-300">
                  Bar Café Siglo XX
                </span>
                <span className="text-[0.65rem] sm:text-xs text-muted-foreground font-light tracking-wider">
                  TRADICIÓN & SABOR
                </span>
              </div>
            </Link>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={getFullPath(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                      isActive ? "text-yellow-400" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}

              <div className="ml-2 mr-2">
                <LanguageSwitcher />
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.reserve}</span>
              </button>
            </div>

            {/* Botones Móvil */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </button>
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={getFullPath(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{t.reserve}</span>
              </button>
            </div>
          </div>
        )}

        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </nav>

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

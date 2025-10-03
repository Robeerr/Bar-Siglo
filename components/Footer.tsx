"use client";

import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../app/context/LanguageContext";

const texts = {
  es: {
    quickLinks: { home: "Inicio", menu: "Carta", about: "Nosotros", contact: "Contacto" },
    followUs: "Síguenos en Instagram",
    company: "Café Bar Siglo XX",
    description: "Disfrute de una experiencia gastronómica única en el corazón de Portugalete. Cocina tradicional, ambiente acogedor y un trato familiar.",
    copyright: "Todos los derechos reservados",
  },
  en: {
    quickLinks: { home: "Home", menu: "Menu", about: "About", contact: "Contact" },
    followUs: "Follow us on Instagram",
    company: "Café Bar Siglo XX",
    description: "Enjoy a unique gastronomic experience in the heart of Portugalete. Traditional cuisine, cozy atmosphere, and family service.",
    copyright: "All rights reserved",
  },
  eu: {
    quickLinks: { home: "Hasiera", menu: "Karta", about: "Guri buruz", contact: "Harremana" },
    followUs: "Jarraitu Instagram-en",
    company: "Café Bar Siglo XX",
    description: "Portugaleteko bihotzean esperientzia gastronomiko paregabea gozatu. Sukalde tradizionala, giro atsegina eta familia giroa.",
    copyright: "Eskubide guztiak erreserbatuta",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <footer className="bg-gradient-to-r from-background to-card border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto">
          {/* INFO */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">{t.company}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span>+34 944 96 10 66</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-2 mt-1" />
                <span>
                  Manuel Calvo Kalea 6 <br /> 48920 Portugalete, Vizcaya
                </span>
              </li>
            </ul>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">{t.quickLinks.home}</Link>
              </li>
              <li>
                <Link href="/carta" className="text-muted-foreground hover:text-primary transition-colors">{t.quickLinks.menu}</Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">{t.quickLinks.about}</Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">{t.quickLinks.contact}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/barsigloxxportugalete/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5 mr-2" />
            {t.followUs}
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {t.company} · {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

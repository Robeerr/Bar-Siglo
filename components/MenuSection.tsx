"use client";

import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../app/context/LanguageContext";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  special?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  index: number;
  image?: string;
  alwaysVisible?: boolean;
}

export default function MenuSection({ title, items, index, image, alwaysVisible = false }: MenuSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();

  const visibleItems = showAll ? items : items.slice(0, 5);

  const showMoreText = {
    es: "Ver más",
    en: "Show more",
    eu: "Ikusi gehiago",
  };

  const showLessText = {
    es: "Ver menos",
    en: "Show less",
    eu: "Ikusi gutxiago",
  };

  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={alwaysVisible ? { opacity: 1, x: 0 } : undefined}
      whileInView={!alwaysVisible ? { opacity: 1, x: 0 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Título */}
      <div className="text-center px-2">
        <h2 className="text-xl sm:text-2xl font-light tracking-widest text-primary mb-3 sm:mb-4">
          {title}
        </h2>
        <div className="w-12 sm:w-16 h-px bg-accent mx-auto"></div>
      </div>

      {/* Tarjeta */}
      <Card className="bg-black text-card-foreground flex flex-col gap-4 sm:gap-6 rounded-xl border shadow-sm mx-auto w-full max-w-3xl shadow-lg hover:shadow-xl transition-all">
        {image && (
          <div className="w-full h-40 sm:h-64 relative">
            <div className="relative w-full h-40 sm:h-64 rounded-t-xl overflow-hidden">
  {/* Fondo extendido y difuminado */}
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover blur-xl scale-110"
  />

  {/* Imagen principal encima */}
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src={image}
      alt={title}
      width={600}   // ajusta según tu caso
      height={400}
      className="object-contain relative z-10"
    />
  </div>
</div>

          </div>
        )}

        <CardContent className="pt-0 px-4 sm:px-8 pb-6 sm:pb-8">
          <div className="space-y-4 sm:space-y-6">
            {visibleItems.map((item, itemIndex) => (
              <div key={itemIndex} className="group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-8">
                  {/* Nombre + descripción */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="font-medium text-base sm:text-lg text-foreground tracking-wide">
                        {item.name}
                      </h3>
                      {item.special && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs font-light tracking-wider border-accent text-accent bg-accent/5"
                        >
                          {language === "es" ? "ESPECIALIDAD" : language === "en" ? "SPECIAL" : "ESPEZIALITATEA"}
                        </Badge>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm font-light">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Precio */}
                  {item.price && (
                    <div className="text-left sm:text-right min-w-0">
                      <span className="text-base sm:text-lg font-medium text-accent tracking-wide">
                        {item.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Separador */}
                {itemIndex < visibleItems.length - 1 && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-b border-accent/20"></div>
                )}
              </div>
            ))}

            {/* Ver más / menos */}
            {items.length > 5 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-accent underline font-medium text-sm sm:text-base"
                >
                  {showAll ? showLessText[language] : showMoreText[language]}
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

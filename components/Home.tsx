"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../app/context/LanguageContext"; // Ajusta la ruta si hace falta
import RestaurantLogo from "../components/RestaurantLogo";
import ReservationModal from "../components/ReservationModal";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/cards";
import { MapPin, Phone, Clock, Star, Utensils, Heart, Award } from "lucide-react";
import Link from "next/link";

const texts = {
  es: {
    heroTitle: "Bienvenido a Bar SigloXX",
    heroSubtitle: "Un lugar único en Portugalete",
    heroDescription: "Disfruta de nuestra tradición, sabores y ambiente familiar desde 1967.",
    heroImageAlt: "Terraza del Bar Siglo XX",
    heroCircularText: "Tradición · Sabor · Familia · Portugalete",
    btnReserve: "Reservar ahora",
    btnMenu: "Ver carta",
    welcomeTitle: "Bienvenidos",
    welcomeDescription: "El Bar Siglo XX combina historia, buena comida y un ambiente inigualable.",
    featYearsTitle: "Más de 50 años",
    featYearsDesc: "Acompañando a generaciones con tradición y calidad.",
    featFlavorsTitle: "Sabores auténticos",
    featFlavorsDesc: "Nuestra cocina ofrece platos clásicos con ingredientes frescos.",
    featAmbienceTitle: "Ambiente acogedor",
    featAmbienceDesc: "Un lugar donde reunirse y disfrutar con familia y amigos.",
    experienceTitle: "Nuestra experiencia",
    experienceDescription: "Descubre por qué somos un referente en Portugalete.",
    exp1Alt: "Especialidad del chef 1",
    exp1Title: "Especialidad 1",
    exp1Desc: "Descripción de la especialidad 1.",
    exp2Alt: "Especialidad del chef 2",
    exp2Title: "Especialidad 2",
    exp2Desc: "Descripción de la especialidad 2.",
    exp3Alt: "Especialidad del chef 3",
    exp3Title: "Especialidad 3",
    exp3Desc: "Descripción de la especialidad 3.",
    specialtiesTitle: "Especialidades",
    specialtiesDescription: "Platos destacados que no te puedes perder.",
    tapasTitle: "Tapas",
    tapasDesc: "Pequeñas delicias para compartir.",
    familyAmbienceTitle: "Ambiente familiar",
    familyAmbienceDesc: "Un espacio cómodo y acogedor para todos.",
    specialtyImageAlt: "Imagen de especialidad",
    contactTitle: "Contacto",
    contactDescription: "Estamos aquí para atenderte en cualquier momento.",
    contactLocationTitle: "Ubicación",
    contactLocationDesc: "Calle Principal 1, Portugalete",
    contactReserveTitle: "Reservas",
    contactReserveDesc: "Llámanos para reservar tu mesa",
    contactHoursTitle: "Horario",
    contactHoursDesc: "Lunes a Domingo: 10:00 - 22:00",
    contactButton: "Contáctanos",
  },
  en: {
    heroTitle: "Welcome to Bar Siglo XX",
    heroSubtitle: "A unique place in Portugalete",
    heroDescription: "Enjoy our tradition, flavors, and family atmosphere since 1967.",
    heroImageAlt: "Bar Siglo XX terrace",
    heroCircularText: "Tradition · Flavor · Family · Portugalete",
    btnReserve: "Reserve now",
    btnMenu: "See menu",
    welcomeTitle: "Welcome",
    welcomeDescription: "Bar Siglo XX combines history, great food, and an unbeatable atmosphere.",
    featYearsTitle: "Over 50 years",
    featYearsDesc: "Accompanying generations with tradition and quality.",
    featFlavorsTitle: "Authentic flavors",
    featFlavorsDesc: "Our kitchen offers classic dishes with fresh ingredients.",
    featAmbienceTitle: "Cozy atmosphere",
    featAmbienceDesc: "A place to gather and enjoy with family and friends.",
    experienceTitle: "Our experience",
    experienceDescription: "Discover why we are a benchmark in Portugalete.",
    exp1Alt: "Chef specialty 1",
    exp1Title: "Specialty 1",
    exp1Desc: "Description of specialty 1.",
    exp2Alt: "Chef specialty 2",
    exp2Title: "Specialty 2",
    exp2Desc: "Description of specialty 2.",
    exp3Alt: "Chef specialty 3",
    exp3Title: "Specialty 3",
    exp3Desc: "Description of specialty 3.",
    specialtiesTitle: "Specialties",
    specialtiesDescription: "Featured dishes you can't miss.",
    tapasTitle: "Tapas",
    tapasDesc: "Small delights to share.",
    familyAmbienceTitle: "Family ambience",
    familyAmbienceDesc: "A comfortable and welcoming space for everyone.",
    specialtyImageAlt: "Specialty image",
    contactTitle: "Contact",
    contactDescription: "We are here to assist you anytime.",
    contactLocationTitle: "Location",
    contactLocationDesc: "Main Street 1, Portugalete",
    contactReserveTitle: "Reservations",
    contactReserveDesc: "Call us to reserve your table",
    contactHoursTitle: "Hours",
    contactHoursDesc: "Monday to Sunday: 10:00 - 22:00",
    contactButton: "Contact us",
  },
  eu: {
    heroTitle: "Ongi etorri Bar Siglo XX-ra",
    heroSubtitle: "Lekua Portugaleten",
    heroDescription: "Gozatu gure tradizioa, zaporeak eta familia giroa 1967tik.",
    heroImageAlt: "Bar Siglo XX terraza",
    heroCircularText: "Tradizioa · Zaporea · Familia · Portugalete",
    btnReserve: "Erreserbatu orain",
    btnMenu: "Ikusi menu-a",
    welcomeTitle: "Ongi etorri",
    welcomeDescription: "Bar Siglo XX historialea, janaria eta giro ezin hobea konbinatzen ditu.",
    featYearsTitle: "50 urtetik gora",
    featYearsDesc: "Belaunaldiak tradizio eta kalitatearekin laguntzen.",
    featFlavorsTitle: "Zapore autentikoak",
    featFlavorsDesc: "Gure sukaldaritzak plater klasikoak eskaintzen ditu osagai freskoekin.",
    featAmbienceTitle: "Giro atsegina",
    featAmbienceDesc: "Lekua familia eta lagunekin gozatzeko.",
    experienceTitle: "Gure esperientzia",
    experienceDescription: "Ezagutu zergatik gara erreferentea Portugaleten.",
    exp1Alt: "Sukaldariaren espezialitatea 1",
    exp1Title: "Espezialitatea 1",
    exp1Desc: "Espezialitate 1aren deskribapena.",
    exp2Alt: "Sukaldariaren espezialitatea 2",
    exp2Title: "Espezialitatea 2",
    exp2Desc: "Espezialitate 2aren deskribapena.",
    exp3Alt: "Sukaldariaren espezialitatea 3",
    exp3Title: "Espezialitatea 3",
    exp3Desc: "Espezialitate 3aren deskribapena.",
    specialtiesTitle: "Espezialitateak",
    specialtiesDescription: "Plater nabarmenak ezin dituzu galdu.",
    tapasTitle: "Tapak",
    tapasDesc: "Partekatzeko plater txikiak.",
    familyAmbienceTitle: "Familia giroa",
    familyAmbienceDesc: "Espazio eroso eta atsegina denontzat.",
    specialtyImageAlt: "Espezialitate irudia",
    contactTitle: "Harremana",
    contactDescription: "Uneoro zuretzat gaude prest laguntzeko.",
    contactLocationTitle: "Kokapena",
    contactLocationDesc: "Kalea Nagusia 1, Portugalete",
    contactReserveTitle: "Erreserbak",
    contactReserveDesc: "Deitu gurekin zure mahai erreserba egiteko",
    contactHoursTitle: "Ordutegia",
    contactHoursDesc: "Astelehena - Igandea: 10:00 - 22:00",
    contactButton: "Jarri harremanetan",
  },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/terraza_inicio.jpeg"
            alt={t.heroImageAlt}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto mb-8">
              <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse"></div>
              <div className="absolute inset-6 sm:inset-8 border border-primary/60 rounded-full"></div>
              <div className="absolute inset-12 sm:inset-16 border border-primary/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <RestaurantLogo className="w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-primary" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <path
                      id="circle-path"
                      d="M 200,200 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
                    />
                  </defs>
                  <text className="fill-primary text-xs sm:text-sm lg:text-base font-serif font-bold tracking-[0.4em]">
                    <textPath href="#circle-path" startOffset="0%">
                      {t.heroCircularText}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <h1 className="text-primary font-serif font-bold tracking-wider drop-shadow-2xl mb-6 text-[clamp(2.5rem,5vw,6rem)]">
              {t.heroTitle}
            </h1>
            <div className="w-20 sm:w-32 h-px bg-primary mx-auto mb-6"></div>
            <p className="italic font-serif text-primary mb-4 text-[clamp(1.2rem,2.5vw,2rem)]">
              {t.heroSubtitle}
            </p>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-[clamp(0.9rem,2vw,1.2rem)]">
              {t.heroDescription}
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t.btnReserve}
            </Button>
            <Link href="/carta">
              <Button
                variant="default"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {t.btnMenu}
              </Button>
            </Link>
          </div>
        </div>

        <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>

      {/* BIENVENIDOS */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-primary flex-1 max-w-24 sm:max-w-32"></div>
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-4 sm:mx-6" />
              <div className="h-px bg-primary flex-1 max-w-24 sm:max-w-32"></div>
            </div>

            <h2 className="text-primary font-serif font-bold tracking-wider mb-8 text-[clamp(2rem,4vw,3.5rem)]">
              {t.welcomeTitle}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 text-[clamp(1rem,2vw,1.3rem)]">
              {t.welcomeDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Award,
                  title: t.featYearsTitle,
                  desc: t.featYearsDesc,
                },
                {
                  icon: Utensils,
                  title: t.featFlavorsTitle,
                  desc: t.featFlavorsDesc,
                },
                {
                  icon: Star,
                  title: t.featAmbienceTitle,
                  desc: t.featAmbienceDesc,
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="text-center group">
                  <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">{title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-serif font-bold tracking-wider mb-6 text-[clamp(2rem,4vw,3.5rem)]">
              {t.experienceTitle}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-[clamp(1rem,2vw,1.2rem)]">
              {t.experienceDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/referente1.jpg",
                alt: t.exp1Alt,
              },
              {
                src: "/barra.jpg",
                alt: t.exp2Alt,
              },
              {
                src: "/barra1.jpg",
                alt: t.exp3Alt,
              },
            ].map(({ src, alt }, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-primary flex-1 max-w-32"></div>
              <Utensils className="h-8 w-8 text-primary mx-6" />
              <div className="h-px bg-primary flex-1 max-w-32"></div>
            </div>

            <h2 className="text-primary font-serif font-bold tracking-wider mb-6 text-[clamp(2rem,4vw,3.5rem)]">
              {t.specialtiesTitle}
            </h2>
            <p className="text-card-foreground max-w-3xl mx-auto text-[clamp(1rem,2vw,1.2rem)]">
              {t.specialtiesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">{t.tapasTitle}</h3>
                  <p className="text-card-foreground leading-relaxed">{t.tapasDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">{t.familyAmbienceTitle}</h3>
                  <p className="text-card-foreground leading-relaxed">{t.familyAmbienceDesc}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
              <Image
                src="/especialidad.jpg"
                alt={t.specialtyImageAlt}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary font-serif font-bold tracking-wider mb-6 text-[clamp(2rem,4vw,3.5rem)]">
                {t.contactTitle}
              </h2>
              <p className="text-muted-foreground text-[clamp(1rem,2vw,1.2rem)]">{t.contactDescription}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: t.contactLocationTitle,
                  desc: t.contactLocationDesc,
                },
                {
                  icon: Phone,
                  title: t.contactReserveTitle,
                  desc: t.contactReserveDesc,
                },
                {
                  icon: Clock,
                  title: t.contactHoursTitle,
                  desc: t.contactHoursDesc,
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Card
                  key={i}
                  className="text-center p-8 border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contacto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-12 py-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer">
                  {t.contactButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

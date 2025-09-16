"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/cards";
import { Badge } from "../../components/ui/badge";
import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const texts = {
  es: {
    heroTitle: "Contacto",
    heroSubtitle: "Para reservas y consultas, estamos aquí para atenderle",
    contactInfoTitle: "Información de Contacto",
    phoneTitle: "Reservas por Teléfono",
    phoneDesc: "Llámenos para hacer su reserva",
    phoneNumber: "+34 944 96 10 66",
    phoneBadge: "Preferido",
    phoneExtra: "Nuestro equipo estará encantado de atenderle y confirmar su reserva al momento",
    locationTitle: "Ubicación",
    locationAddress: "Manuel Calvo Kalea 6\n48920 Portugalete, Vizcaya",
    hoursTitle: "Horarios de Apertura",
    hoursTime: "Lunes - Domingo: 10:00 - 22:00",
    mapTitle: "Nuestra Ubicación",
    directionsTitle: "Cómo Llegar",
    metroTitle: "En Metro",
    metroDesc: "Desde Bilbao, Línea Kabieces, Parada Portugalete",
    busTitle: "En Autobús",
    busDesc: "Desde Bilbao, Línea 3151, Parada Portugalete",
    parkingTitle: "Aparcamiento",
    parkingDesc: "Varios aparcamientos cerca del Ayuntamiento y a 10 minutos a pie hay un parking privado.",
    ctaTitle: "¿Listo para una experiencia gastronómica única?",
    ctaDesc: "Reserve su mesa ahora llamando al teléfono y disfrute de la cocina excepcional en un ambiente acogedor.",
  },
  en: {
    heroTitle: "Contact",
    heroSubtitle: "For reservations and inquiries, we are here to assist you",
    contactInfoTitle: "Contact Information",
    phoneTitle: "Reservations by Phone",
    phoneDesc: "Call us to make your reservation",
    phoneNumber: "+34 944 96 10 66",
    phoneBadge: "Preferred",
    phoneExtra: "Our team will be happy to assist you and confirm your reservation immediately",
    locationTitle: "Location",
    locationAddress: "Manuel Calvo Kalea 6\n48920 Portugalete, Vizcaya",
    hoursTitle: "Opening Hours",
    hoursTime: "Monday - Sunday: 10:00 - 22:00",
    mapTitle: "Our Location",
    directionsTitle: "How to Get There",
    metroTitle: "By Metro",
    metroDesc: "From Bilbao, Kabieces Line, Portugalete Stop",
    busTitle: "By Bus",
    busDesc: "From Bilbao, Line 3151, Portugalete Stop",
    parkingTitle: "Parking",
    parkingDesc: "Various parking lots near City Hall and a private parking 10 minutes walk away.",
    ctaTitle: "Ready for a unique gastronomic experience?",
    ctaDesc: "Book your table now by phone and enjoy exceptional cuisine in a cozy atmosphere.",
  },
  eu: {
    heroTitle: "Harremana",
    heroSubtitle: "Erreserbak eta kontsultak egiteko, hemen gaude zuretzat",
    contactInfoTitle: "Harremanetarako Informazioa",
    phoneTitle: "Telefono bidezko Erreserbak",
    phoneDesc: "Deitu gurekin zure erreserba egiteko",
    phoneNumber: "+34 944 96 10 66",
    phoneBadge: "Hobetsia",
    phoneExtra: "Gure taldea pozik lagunduko dizu eta berehala baieztatuko du zure erreserba",
    locationTitle: "Kokapena",
    locationAddress: "Manuel Calvo Kalea 6\n48920 Portugalete, Bizkaia",
    hoursTitle: "Irekitze Orduak",
    hoursTime: "Astelehenetik - Igandera: 10:00 - 22:00",
    mapTitle: "Gure Kokapena",
    directionsTitle: "Nola Iritsi",
    metroTitle: "Metro bidez",
    metroDesc: "Bilbotik, Kabieces Linea, Portugalete geltokia",
    busTitle: "Autobusez",
    busDesc: "Bilbotik, 3151 Linea, Portugalete geltokia",
    parkingTitle: "Aparkalekua",
    parkingDesc: "Udaletxearen ondoan hainbat aparkaleku eta 10 minutura aparkaleku pribatu bat.",
    ctaTitle: "Prest gastronomia esperientzia paregabe bat egiteko?",
    ctaDesc: "Erreserbatu zure mahaia orain telefonoan eta gozatu sukalde aparta giro atseginean.",
  },
};

export default function ContactoPage() {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative h-64 md:h-96 bg-gradient-to-r from-background to-card flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4 md:mb-6 tracking-wider">
              {t.heroTitle}
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24 md:w-32 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* INFO + MAP */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 md:mb-8 tracking-wider">
                  {t.contactInfoTitle}
                </h2>
              </div>

              {/* TELÉFONO */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl text-primary">{t.phoneTitle}</CardTitle>
                      <p className="text-sm md:text-base text-card-foreground">{t.phoneDesc}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-xl md:text-2xl font-bold text-primary">{t.phoneNumber}</span>
                      <Badge variant="secondary" className="bg-primary text-primary-foreground self-start sm:self-center">
                        {t.phoneBadge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{t.phoneExtra}</p>
                  </div>
                </CardContent>
              </Card>

              {/* UBICACIÓN + HORARIOS */}
              <div className="grid gap-6">
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.locationTitle}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{t.locationAddress}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t.hoursTitle}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{t.hoursTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* MAPA */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 md:mb-8 tracking-wider">
                {t.mapTitle}
              </h2>

              <Card className="bg-card border-border">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.699301136173!2d-3.0168714999999997!3d43.320553800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a282928b9e7%3A0x6ff5c215a7af55b9!2sCaf%C3%A9%20Bar%20Siglo%20XX!5e0!3m2!1ses!2ses!4v1757848691849!5m2!1ses!2ses"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* CÓMO LLEGAR */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {t.directionsTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm md:text-base">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.metroTitle}</h4>
                    <p className="text-muted-foreground">{t.metroDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.busTitle}</h4>
                    <p className="text-muted-foreground">{t.busDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.parkingTitle}</h4>
                    <p className="text-muted-foreground">{t.parkingDesc}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 tracking-wider">
            {t.ctaTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="text-xl md:text-3xl font-bold text-primary">{t.phoneNumber}</div>
        </div>
      </section>
    </div>
  );
}

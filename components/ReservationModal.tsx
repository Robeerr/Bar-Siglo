"use client";
import { X, Phone, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const texts = {
  es: {
    title: "Hacer Reserva",
    subtitle: "Llámanos para reservar tu mesa",
    phoneLabel: "+34 944 96 10 66",
    phoneDesc: "Toca para llamar",
    hoursLabel: "Horarios",
    hoursTime: "Lun-Dom: 10:00 - 22:00",
    addressLabel: "Dirección",
    address: "Manuel Calvo Kalea 6, Portugalete",
    footer: "Te atenderemos con gusto para tu reserva",
  },
  en: {
    title: "Make a Reservation",
    subtitle: "Call us to reserve your table",
    phoneLabel: "+34 944 96 10 66",
    phoneDesc: "Tap to call",
    hoursLabel: "Hours",
    hoursTime: "Mon-Sun: 10:00 - 22:00",
    addressLabel: "Address",
    address: "Manuel Calvo Kalea 6, Portugalete",
    footer: "We will gladly assist you with your reservation",
  },
  eu: {
    title: "Erreserbatu Mahai Bat",
    subtitle: "Deitu gurekin zure mahaia erreserbatzeko",
    phoneLabel: "+34 944 96 10 66",
    phoneDesc: "Sakatu deitzeko",
    hoursLabel: "Ordutegiak",
    hoursTime: "Astelehenetik-Igandera: 10:00 - 22:00",
    addressLabel: "Helbidea",
    address: "Manuel Calvo Kalea 6, Portugalete",
    footer: "Pozik lagunduko dizugu zure erreserban",
  },
};

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { language } = useLanguage();
  const t = texts[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Fondo */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card border border-border/50 rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Opciones */}
        <div className="space-y-4">
          {/* Teléfono */}
          <a
            href={`tel:${t.phoneLabel}`}
            className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 rounded-xl hover:from-yellow-400/20 hover:to-yellow-600/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">{t.phoneLabel}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.phoneDesc}</p>
            </div>
          </a>

          {/* Horarios */}
          <div className="flex items-center p-3 rounded-lg bg-muted/30">
            <Clock className="w-5 h-5 text-yellow-400 mr-3" />
            <div>
              <p className="font-medium text-foreground text-sm sm:text-base">{t.hoursLabel}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.hoursTime}</p>
            </div>
          </div>

          {/* Dirección */}
          <div className="flex items-center p-3 rounded-lg bg-muted/30">
            <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
            <div>
              <p className="font-medium text-foreground text-sm sm:text-base">{t.addressLabel}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.address}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">{t.footer}</p>
        </div>
      </div>
    </div>
  );
}

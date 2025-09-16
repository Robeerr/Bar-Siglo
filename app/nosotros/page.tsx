"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const texts = {
  es: {
    heroTitle: "Nuestra Historia",
    heroSubtitle: "Una auténtica institución en Portugalete desde el siglo XX",
    historyTitle: "Un poco de historia",
    historyParagraphs: [
      "El Bar Siglo XX, ubicado en el Muelle Viejo de Portugalete, es una auténtica institución en la villa y es conocido como el bar más antiguo de Portugalete.",
      "Fundado por Valentín Pérez y en manos de la familia Gómez desde 1967, ha mantenido tradición y buen hacer durante décadas, llegando a recibir homenajes por su historia familiar."
    ],
    soulPlaceTitle: "Un lugar con alma",
    soulPlaceParagraphs: [
      "El Siglo XX es más que un bar; es un punto de encuentro y un símbolo de la vida social de Portugalete. Ha sido testigo de numerosas anécdotas y ha albergado la fundación de diversas sociedades y cuadrillas, como la conocida cuadrilla GAUXORIAK en 1975.",
      "Su historia incluye incluso la visita del entonces príncipe Juan Carlos en 1958, convirtiendo este lugar en un verdadero testimonio de la historia local."
    ],
    traditionTitle: "Tradición familiar",
    traditionParagraphs: [
      "El bar ha conservado un ambiente tradicional, donde la gente se reúne para tomar un aperitivo, leer la prensa o simplemente charlar. Los comentarios de los clientes destacan la amabilidad de la familia Gómez y el encanto del lugar.",
      "Ha acompañado a varias generaciones de portugalujos en su vida diaria, siendo un lugar donde el pasado se encuentra con el presente, manteniendo vivo el espíritu del muelle."
    ],
    todayTitle: "Hoy en día",
    todayParagraph: "Continuamos siendo ese punto de encuentro especial donde las tradiciones se mantienen vivas y cada visita es una experiencia auténtica. Te invitamos a formar parte de nuestra historia.",
    todayButton: "Visítanos",
  },
  en: {
    heroTitle: "Our Story",
    heroSubtitle: "A true institution in Portugalete since the 20th century",
    historyTitle: "A bit of history",
    historyParagraphs: [
      "The Bar Siglo XX, located at the Old Dock of Portugalete, is a true institution in the town and is known as the oldest bar in Portugalete.",
      "Founded by Valentín Pérez and in the hands of the Gómez family since 1967, it has maintained tradition and excellence for decades, even receiving tributes for its family history."
    ],
    soulPlaceTitle: "A place with soul",
    soulPlaceParagraphs: [
      "Siglo XX is more than a bar; it’s a meeting point and a symbol of Portugalete’s social life. It has witnessed countless anecdotes and hosted the founding of various societies and groups, like the famous GAUXORIAK crew in 1975.",
      "Its history even includes a visit from the then Prince Juan Carlos in 1958, making this place a true testimony of local history."
    ],
    traditionTitle: "Family tradition",
    traditionParagraphs: [
      "The bar has preserved a traditional atmosphere, where people gather for a snack, read the newspaper, or simply chat. Customer reviews highlight the kindness of the Gómez family and the charm of the place.",
      "It has accompanied several generations of Portugalete residents in their daily lives, being a place where the past meets the present, keeping the spirit of the dock alive."
    ],
    todayTitle: "Nowadays",
    todayParagraph: "We continue to be that special meeting point where traditions remain alive and every visit is an authentic experience. We invite you to be part of our story.",
    todayButton: "Visit Us",
  },
  eu: {
    heroTitle: "Gure Istorioa",
    heroSubtitle: "Portugaleten XX. mendetik benetako erakunde bat",
    historyTitle: "Historia pixka bat",
    historyParagraphs: [
      "Portugaleteko Muelle Viejoan dagoen XX. Mendea taberna benetako erakunde bat da eta Portugaleteko taberna zaharrena bezala ezaguna.",
      "Valentín Pérezek sortua eta 1967tik Gómez familiaren eskuetan, hamarkadetan zehar tradizioa eta ondo egiteko gaitasuna mantendu du, familia historiagatik omenaldiak jasotzeraino."
    ],
    soulPlaceTitle: "Arimadun lekua",
    soulPlaceParagraphs: [
      "XX. Mendea taberna baino gehiago da; Portugaleteko bizitza sozialaren topagunea eta sinboloa da. Aniztasun handiko istorioak ikusi ditu eta hainbat elkarte eta talderen sorrera hartu du, 1975eko GAUXORIAK taldea barne.",
      "Bere historia, 1958an Juan Carlos printzeak bisita egin zuen, tokiko historiaren benetako lekukotza bihurtuz."
    ],
    traditionTitle: "Familia tradizioa",
    traditionParagraphs: [
      "Tabernak giro tradizionala mantendu du, non jendeak aperitibo bat hartzeko, egunkaria irakurtzeko edo besterik gabe solasteko biltzen den. Bezeroen iritziek Gómez familiaren adeitasuna eta tokia erakargarria dela nabarmendu dute.",
      "Portugaleteko hainbat belaunaldi eguneroko bizitzan lagundu du, non iragana orainarekin elkartzen den, itsasontziko espiritua bizirik mantenduz."
    ],
    todayTitle: "Gaur egun",
    todayParagraph: "Oraindik ere topagune berezi hori izaten jarraitzen dugu, non tradizioak bizirik mantentzen diren eta bisita bakoitza esperientzia autentiko bat den. Gure istorioaren parte izan zaitez.",
    todayButton: "Bisitatu Gaitzazu",
  },
};

export default function NosotrosPage() {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden px-4">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-4 sm:mb-6 tracking-wider">
            {t.heroTitle}
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
        </motion.div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.5 }} className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 sm:w-32 mx-auto absolute bottom-8 sm:bottom-16"/>
      </section>

      {/* HISTORIA */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
            <img src="/noticiero.jpg" alt="Bar Siglo XX histórico" className="rounded-lg shadow-2xl w-full h-56 sm:h-80 md:h-96 object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-serif text-primary">{t.historyTitle}</h2>
            {t.historyParagraphs.map((p, i) => <p key={i} className="text-sm sm:text-lg text-muted-foreground leading-relaxed">{p}</p>)}
          </motion.div>
        </div>
      </section>

      {/* LUGAR CON ALMA */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4 sm:space-y-6 md:order-1">
            <h2 className="text-2xl sm:text-4xl font-serif text-primary">{t.soulPlaceTitle}</h2>
            {t.soulPlaceParagraphs.map((p, i) => <p key={i} className="text-sm sm:text-lg text-muted-foreground leading-relaxed">{p}</p>)}
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative md:order-2">
            <img src="/interior_bar.jpg" alt="Interior del bar con ambiente tradicional" className="rounded-lg shadow-2xl w-full h-56 sm:h-80 md:h-96 object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </section>

      {/* TRADICIÓN */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
            <img src="/historia1.jpg" alt="La familia Gómez en el bar" className="rounded-lg shadow-2xl w-full h-56 sm:h-80 md:h-96 object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-serif text-primary">{t.traditionTitle}</h2>
            {t.traditionParagraphs.map((p, i) => <p key={i} className="text-sm sm:text-lg text-muted-foreground leading-relaxed">{p}</p>)}
          </motion.div>
        </div>
      </section>

      {/* HOY EN DÍA */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-r from-card to-background">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-3xl sm:max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-4xl font-serif text-primary">{t.todayTitle}</h2>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">{t.todayParagraph}</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 sm:px-8 py-2 sm:py-3 bg-primary text-white font-semibold rounded-full shadow-md cursor-pointer text-sm sm:text-base" onClick={() => (window.location.href = "/contacto")}>
            {t.todayButton}
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}

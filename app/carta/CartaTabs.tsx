"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import MenuSection from "../../components/MenuSection"
import Image from "next/image"
import { useLanguage } from "../context/LanguageContext";

interface ItemData {
  name: { es: string; en: string; eu: string };
  description?: { es: string; en: string; eu: string };
  price?: string;
  special?: boolean;
}

interface SectionData {
  title: { es: string; en: string; eu: string };
  image?: string;
  items: ItemData[];
}

const texts = {
  es: {
    heroTitle: "NUESTRA CARTA",
    heroSubtitle: "Pintxos · Bocatas · Hamburguesas · Ensaladas · Raciones · Desayunos",
    heroDesc: "Disfruta de nuestra carta variada en un ambiente familiar y acogedor",
    tabsCarta: "Carta",
    tabsDesayunos: "Desayunos",
    footerFresh: "Productos frescos y de cercanía",
    footerAllergens: "Consulte sobre alérgenos e intolerancias",
  },
  en: {
    heroTitle: "OUR MENU",
    heroSubtitle: "Pintxos · Sandwiches · Burgers · Salads · Portions · Breakfasts",
    heroDesc: "Enjoy our varied menu in a friendly and cozy atmosphere",
    tabsCarta: "Menu",
    tabsDesayunos: "Breakfasts",
    footerFresh: "Fresh and local products",
    footerAllergens: "Check for allergens and intolerances",
  },
  eu: {
    heroTitle: "GURE KARTA",
    heroSubtitle: "Pintxoak · Bokatak · Hamburguesak · Entsaladak · Zatiak · Gosariak",
    heroDesc: "Gozatu gure karta anitza giro atseginean eta familiarrean",
    tabsCarta: "Karta",
    tabsDesayunos: "Gosariak",
    footerFresh: "Produktuen freskotasuna eta tokikoak",
    footerAllergens: "Kontsultatu alergenoak eta intolerantziak",
  },
};

export default function CartaPage() {
  const { language } = useLanguage();
  const t = texts[language]
  const cartaSections: SectionData[] = [
    {
        title: {
          es: "PINTXOS Y TAPAS",
          en: "PINTXOS & TAPAS",
          eu: "PINTXOAK ETA TAPAK",
    },
      image: "/pintxo.jpg",
      items: [
        { 
          name: { es: "Huevo con Bechamel", en: "Egg with Bechamel", eu: "Arrautza Bechamelarekin" },
        description: {
          es: "Huevo con Bechamel o croqueta de huevo",
          en: "Egg with Bechamel or egg croquette",
          eu: "Arrautza Bechamelarekin edo arrautz kroketarekin",
        },
        },
        {
          name: { es: "Ración de Champiñones", en: "Portion of Mushrooms", eu: "Zati bat Txanpiñoi" },
          description: {
            es: "Champiñones cocidos con salsa al ajillo, perejil y un toque picante",
            en: "Cooked mushrooms with garlic sauce, parsley, and a spicy touch",
            eu: "Sukaldatutako txanpiñoiak, oilasko saltsarekin, perrexilarekin eta ukitu pikante batekin",
          },
        },
        { name: { es: "Tortilla de Patata sin cebolla", en: "Potato Omelette without Onion", eu: "Tipula gabe Patata Tortilla" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Tortilla de Patata con cebolla y pimiento verde", en: "Potato Omelette with Onion and Green Pepper", eu: "Tipula eta Pimiento Berdearekin Patata Tortilla" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Tortilla de Patata con Jamón York y Queso", en: "Potato Omelette with York Ham and Cheese", eu: "Jamón York eta Gaztarekin Patata Tortilla" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Tortilla de Patata con Atún", en: "Potato Omelette with Tuna", eu: "Atunarekin Patata Tortilla" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Jamón", en: "Ham Sandwich", eu: "Jamón Sandwicha" }, description: { es: "Bocadillo de Jamón y Pimiento verde", en: "Ham Sandwich with Green Pepper", eu: "Jamón Sandwicha Pimiento Berdearekin" } },
        { name: { es: "Bocadillo de Lomo", en: "Pork Loin Sandwich", eu: "Lomo Sandwicha" }, description: { es: "Bocadillo de Lomo con Pimiento rojo", en: "Pork Loin Sandwich with Red Pepper", eu: "Lomo Sandwicha Pimiento Gorriarekin" } },
        { name: { es: "Bocadillo de Beicon y Queso", en: "Bacon and Cheese Sandwich", eu: "Beicon eta Gazta Sandwicha" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Tortilla", en: "Omelette Sandwich", eu: "Tortilla Sandwicha" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Chistorra", en: "Chistorra Sandwich", eu: "Chistorra Sandwicha" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Tortilla de Chorizo", en: "Chorizo Omelette Sandwich", eu: "Chorizo Tortilla Sandwicha" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Tortilla de Bonito", en: "Bonito Omelette Sandwich", eu: "Bonito Tortilla Sandwicha" }, description: { es: "", en: "", eu: "" } },
        { name: { es: "Bocadillo de Bonito", en: "Bonito Sandwich", eu: "Bonito Sandwicha" }, description: { es: "Bocadillo de Bonito con cebolla y pimiento rojo", en: "Bonito Sandwich with Onion and Red Pepper", eu: "Bonito Sandwicha Tipula eta Pimiento Gorriarekin" } },
        { name: { es: "Sandwich de Chaka", en: "Chaka Sandwich", eu: "Chaka Sandwicha" }, description: { es: "Sandwich de Chaka con Mayonesa, Jamón York y Huevo cocido", en: "Chaka Sandwich with Mayonnaise, York Ham, and Boiled Egg", eu: "Chaka Sandwicha Mayonesa, Jamón York eta Huevo egosiarekin" } },
        { name: { es: "Sandwich de Huevo frito y Beicon", en: "Fried Egg and Bacon Sandwich", eu: "Frito Egg eta Beicon Sandwicha" }, description: { es: "", en: "", eu: "" } },
      ],
    },
    {
      title: { es: "HAMBURGUESAS", en: "BURGERS", eu: "HAMBURGESAK" },
      image: "/hamburguesa1.jpg",
      items: [
        {
          name: { es: "Hamburguesa de Carne", en: "Beef Burger", eu: "Haragi Burger" },
        description: {
          es: "Hamburguesa clásica de carne (120grs) con lechuga, tomate, beicon, queso, huevo frito y cebolla caramelizada o pochada",
          en: "Classic beef burger (120gr) with lettuce, tomato, bacon, cheese, fried egg and caramelized or sautéed onion",
          eu: "Burger klasikoa (120gr) letxuga, tomate, beicon, gazta, arrautza frijitua eta tipula karamelizatua edo sautegarria",
        },
        },
        {
          name: { es: "Hamburguesa de Pollo", en: "Chicken Burger", eu: "Oilasko Burger" },
          description: { es: "Hamburguesa clásica de pollo crujiente, con lechuga, tomate, beicon, queso y pimientos rojos", en: "Classic crispy chicken burger with lettuce, tomato, bacon, cheese, and red peppers", eu: "Oilasko klasikoa, letxuga, tomate, beicon, gazta eta pimiento gorriekin" },
        },
        {
          name: { es: "Hamburguesa Vegana", en: "Vegan Burger", eu: "Began Burger" },
          description: { es: "Hamburguesa vegana (120 grs) con lechuga, tomate, pimientos y guacamole", en: "Vegan burger (120 gr) with lettuce, tomato, peppers, and guacamole", eu: "Began burger (120 gr) letxuga, tomate, piper eta guacamolekin" },
        },
        { name: { es: "Hamburguesa Junior", en: "Junior Burger", eu: "Junior Burger" }, description: { es: "Hamburguesa clásica de carne o pollo de 120 grs + Queso", en: "Classic beef or chicken burger of 120 grs + Cheese", eu: "Haragi edo oilasko klasikoa 120 grs + Gazta" } },
      ],
    },
    {
      title: { es: "BOCATAS", en: "SANDWICHES", eu: "BOKATAK" },
      image: "/bocata.jpg",
      items: [
        { name: { es: "Bocata de Lomo", en: "Pork Loin Sandwich", eu: "Txerri Bizkarreko Bokata" }, description: { es: "Bocadillo de Lomo, queso y pimientos", en: "Pork loin sandwich with cheese and peppers", eu: "Txerri bizkarreko bokata, gazta eta piperrekin" } },
        { name: { es: "Bocata de Beicon y Queso", en: "Bacon and Cheese Sandwich", eu: "Beikoi eta Gazta Bokata" }, description: { es: "Bocata de Beicon, queso y pimientos", en: "Bacon and cheese sandwich with peppers", eu: "Beikoi eta gazta bokata, piperrekin" } },
        { name: { es: "Bocata de Paletilla", en: "Shoulder Ham Sandwich", eu: "Paletilla Bokata" }, description: { es: "Bocata con paletilla y pimientos", en: "Shoulder ham sandwich with peppers", eu: "Paletilla bokata, piperrekin" } },
        {
          name: { es: "Sándwich Vegetariano", en: "Vegetarian Sandwich", eu: "Sándwich Vegetariano" },
          description: { es: "Sandwich vegetariano, lechuga, tomate, espárragos, zanahoria, remolacha y salsa vegetariana", en: "Vegetarian sandwich with lettuce, tomato, asparagus, carrot, beetroot, and vegetarian sauce", eu: "Sándwich vegetariano letxuga, tomate, espárrago, zanahoria, beet eta saltsa vegetarianoarekin" },
        },
        {
          name: { es: "Sándwich de Bonito", en: "Tuna Sandwich", eu: "Tonfisk Bokata" },
          description: { es: "Sandwich con bonito, tomate, lechuga, espárragos, huevo cocido y mayonesa", en: "Tuna sandwich with tomato, lettuce, asparagus, boiled egg, and mayonnaise", eu: "Tonfisk bokata, tomate, letxuga, espárrago, arrautza egosia eta maionesa" },
        },
      ],
    },
    {
      title: { es: "ENSALADAS", en: "SALADS", eu: "ENTSALADAK" },
      image: "/ensalada1.jpg",
      items: [
        {
          name: { es: "Ensalada de Pasta", en: "Pasta Salad", eu: "Pasta entsalada" },
          description: { es: "Ensalada de pasta con bonito, tomate cherry, lechuga iceberg, huevo cocido, maíz dulce y aceitunas negras", en: "Pasta salad with tuna, cherry tomato, iceberg lettuce, boiled egg, sweet corn, and black olives", eu: "Pasta entsalada tonifiskarekin, tomate txerriekin, letxuga izotzarekin, arrautza egosiarekin, arto gozoarekin eta oliba beltzekin" },
        },
        {
          name: { es: "Ensalada Clásica", en: "Classic Salad", eu: "Classic Bokata" },
          description: { es: "Ensalada clásica con lechuga iceberg, tomate cherry, zanahoria rayada, pimiento rojo, pepinillos, cebolleta y aceitunas verdes", en: "Classic salad with iceberg lettuce, cherry tomato, grated carrot, red pepper, pickles, spring onion, and green olives", eu: "Classic bokata letxuga izotzarekin, tomate txerriekin, zanahoria birrinduekin, piper gorriarekin, pepinilloekin, tipula berdearekin eta oliba berdeekin" },
        },
        {
          name: { es: "Ensalada Mixta", en: "Mixed Salad", eu: "Nahasketa Bokata" },
          description: { es: "Ensalada Mixta con tacos de jamón york, queso en tacos, picatostes, lechuga, aceitunas, cebolletas y tomate cherry", en: "Mixed salad with diced york ham, diced cheese, croutons, lettuce, olives, spring onions, and cherry tomatoes", eu: "Nahasketa bokata jamón york, gazta, picatostes, letxuga, oliba, tipula eta tomate txerriekin" },
        },
      ],
    },
    {
      title: { es: "RACIONES", en: "PORTIONS", eu: "PORTZIOAK" },
      image: "/racion1.jpg",
      items: [
        { name: { es: "Jamón Ibérico", en: "Iberian Ham", eu: "Jamón Ibérico" } },
        { name: { es: "Queso (Curado o Semi)", en: "Cheese (Cured or Semi-Cured)", eu: "Gazta (Izoztua edo Erdi-Izoztua)" } },
        { name: { es: "Patatas Fritas", en: "French Fries", eu: "Patata Frijituak" } },
        { name: { es: "Patatas con Beicon y Queso", en: "Potatoes with Bacon and Cheese", eu: "Patatak Beikoi eta Gaztarekin" } },
        { name: { es: "Nuggets de Pollo", en: "Chicken Nuggets", eu: "Oilasko Nuggetak" } },
        { name: { es: "Patatas Bravas con salsa Picante", en: "Spicy Potatoes with Hot Sauce", eu: "Patata Brava Piperrikarekin" } },
      ],
    },
  ]

  const desayunosSections: SectionData[] = [
    {
      title: { es: "DESAYUNOS", en: "BREAKFASTS", eu: "GELAK" },
      image: "/desayuno.jpg",
      items: [
        { name: { es: "Café / Infusión / Zumo + Pintxo", en: "Coffee / Infusion / Juice + Pintxo", eu: "Kafea / Infusioa / Zuku + Pintxo" }, description: { es: "Pulga, tortilla o croissant", en: "Pulga, tortilla or croissant", eu: "Pulga, tortilla edo croissant" } },
        { name: { es: "Café / Infusión / Zumo + Tostada", en: "Coffee / Infusion / Juice + Toast", eu: "Kafea / Infusioa / Zuku + Tostada" }, description: { es: "Con mantequilla y mermelada", en: "With butter and jam", eu: "Gehigarriekin eta marmeladarekin" } },
        {
          name: { es: "Café / Infusión + Zumo + Tostada o Pintxo", en: "Coffee / Infusion + Juice + Toast or Pintxo", eu: "Kafea / Infusioa + Zuku + Tostada edo Pintxo" },
          description: { es: "Tostada (mantequilla y mermelada) o pintxo a elegir", en: "Toast (butter and jam) or pintxo to choose", eu: "Tostada (manteka eta marmelada) edo pintxo aukeratzeko" },
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative w-full min-h-[60vh] sm:h-[500px]">
        <Image src="/terraza1.png" alt="Terraza Bar Café Siglo XX" fill priority className="object-cover brightness-75" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-primary mb-4 sm:mb-6 drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light tracking-wider uppercase mb-6 sm:mb-8 drop-shadow-md">
            {t.heroSubtitle}
          </p>
          <div className="w-16 sm:w-24 h-px bg-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md sm:max-w-xl mx-auto leading-relaxed font-light drop-shadow-md">
            {t.heroDesc}
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20">
        <Tabs defaultValue="carta" className="w-full">
          {/* Tabs */}
          <TabsList className="flex justify-center mb-8 sm:mb-12 bg-card rounded-lg shadow-md flex-wrap gap-2 sm:gap-4">
            <TabsTrigger value="carta" className="px-4 sm:px-6 py-1.5 sm:py-2 font-medium text-sm sm:text-base">
              {t.tabsCarta}
            </TabsTrigger>
            <TabsTrigger value="desayunos" className="px-4 sm:px-6 py-1.5 sm:py-2 font-medium text-sm sm:text-base">
              {t.tabsDesayunos}
            </TabsTrigger>
          </TabsList>

          {/* Carta */}
          <TabsContent value="carta">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {cartaSections.map((section, i) => (
                <MenuSection key={i} index={i} title={section.title[language]} items={section.items.map(item => ({
                  name: item.name[language],
                  description: item.description?.[language] || "",
                  price: item.price || undefined,
                  special: item.special || false,
                  }))} image={section.image} alwaysVisible={i === 0} />
              ))}
            </div>
          </TabsContent>

          {/* Desayunos */}
          <TabsContent value="desayunos">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {desayunosSections.map((section, i) => (
                <MenuSection
                  key={i}
                  index={i}
                  title={section.title[language]}
                  items={section.items.map(item => ({
                  name: item.name[language],
                  description: item.description?.[language] || "",
                  }))}
                  image={section.image}
                  alwaysVisible={i === 0}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="text-center mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-accent/20">
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 font-light tracking-wide uppercase">
            {t.footerFresh}
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground font-light">
            {t.footerAllergens}
          </p>
        </footer>
      </main>
    </div>
  );
}
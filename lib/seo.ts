import type { Metadata } from "next";

export const locales = ["en", "de", "hr", "it"] as const;
export type Locale = (typeof locales)[number];

const siteName = "Villa Bergi";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://villabergi.com";
const defaultOgImage = "/assets/images/i/28.jpg";

type SeoPage = "home" | "villa" | "pricelist" | "photogallery" | "surroundings" | "contact";

const seoDictionary: Record<Locale, Record<SeoPage, { title: string; description: string }>> = {
  en: {
    home: {
      title: "Villa Bergi | Holiday Villa in Žminj, Central Istria — Near Rovinj & Pula",
      description: "Holiday villa in Žminj, central Istria. Pool, jacuzzi, 7 bedrooms, sleeps 16. Near Rovinj, Pula and Pazin. For groups and families.",
    },
    villa: {
      title: "Villa Bergi — 7 Bedroom Villa in Žminj, Istria with Pool & Jacuzzi",
      description: "7 bedroom villa in Žminj, Istria with pool, jacuzzi, sauna and games. Sleeps 16 and suits groups and families in central Istria.",
    },
    pricelist: {
      title: "Villa Bergi Prices — Villa Rental Prices in Žminj, Istria",
      description: "See villa rental prices in Žminj and Istria villa rates for Villa Bergi. Direct booking for groups and families, no agency fees.",
    },
    photogallery: {
      title: "Villa Bergi Photos — Villa Photos in Žminj, Istria",
      description: "View Villa Bergi photos from Žminj, Istria: pool, jacuzzi, 7 bedrooms and outdoor spaces for groups and families.",
    },
    surroundings: {
      title: "Things to Do Near Žminj — Central Istria Around Villa Bergi",
      description: "Explore Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj and Pula from this villa in Istria, ideal for groups and families.",
    },
    contact: {
      title: "Book Villa Bergi — Villa in Žminj, Istria",
      description: "Book a villa in Žminj with direct contact. Villa rental Istria for groups and families, near Rovinj, Pula and central Istria sights.",
    },
  },
  de: {
    home: {
      title: "Villa Bergi | Ferienvilla in Žminj, Zentralistrien — nahe Rovinj & Pula",
      description: "Ferienvilla in Žminj, Zentralistrien. Pool, Jacuzzi, 7 Schlafzimmer, für 16 Gäste. Nahe Rovinj, Pula und Pazin. Für Gruppen und Familien.",
    },
    villa: {
      title: "Villa Bergi — 7-Schlafzimmer-Villa in Žminj, Istrien mit Pool & Jacuzzi",
      description: "7-Schlafzimmer-Villa in Žminj, Istrien mit Pool, Jacuzzi, Sauna und Spielbereich. Für 16 Gäste, ideal für Gruppen und Familien.",
    },
    pricelist: {
      title: "Villa Bergi Preise — Villa-Mietpreise in Žminj, Istrien",
      description: "Sehen Sie Villa-Mietpreise in Žminj und Istrien-Raten für Villa Bergi. Direkt buchen, ideal für Gruppen und Familien.",
    },
    photogallery: {
      title: "Villa Bergi Fotos — Villafotos aus Žminj, Istrien",
      description: "Entdecken Sie Villafotos aus Žminj, Istrien: Pool, Jacuzzi, 7 Schlafzimmer und Außenbereiche für Gruppen und Familien.",
    },
    surroundings: {
      title: "Ausflüge nahe Žminj — Zentralistrien rund um Villa Bergi",
      description: "Entdecken Sie Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj und Pula rund um diese Villa in Istrien.",
    },
    contact: {
      title: "Villa Bergi buchen — Villa in Žminj, Istrien",
      description: "Buchen Sie eine Villa in Žminj direkt. Villa-Miete in Istrien für Gruppen und Familien, nahe Rovinj, Pula und Zentralistrien.",
    },
  },
  hr: {
    home: {
      title: "Villa Bergi | Vila za odmor u Žminju, središnja Istra — blizu Rovinja i Pule",
      description: "Vila za odmor u Žminju, središnja Istra. Bazen, jacuzzi, 7 soba, za 16 gostiju. Blizu Rovinja, Pule i Pazina. Za grupe i obitelji.",
    },
    villa: {
      title: "Villa Bergi — Vila sa 7 soba u Žminju, Istra s bazenom i jacuzzijem",
      description: "Vila sa 7 soba u Žminju, Istra s bazenom, jacuzzijem, saunom i igrama. Za 16 gostiju, idealna za grupe i obitelji.",
    },
    pricelist: {
      title: "Villa Bergi Cjenik — Cijene najma vile u Žminju, Istra",
      description: "Pogledajte cijene najma vile u Žminju i cijene vila u Istri za Villu Bergi. Izravna rezervacija za grupe i obitelji.",
    },
    photogallery: {
      title: "Villa Bergi Fotografije — Fotografije vile u Žminju, Istra",
      description: "Pogledajte fotografije Ville Bergi u Žminju, Istra: bazen, jacuzzi, 7 soba i vanjske prostore za grupe i obitelji.",
    },
    surroundings: {
      title: "Što posjetiti blizu Žminja — Središnja Istra oko Ville Bergi",
      description: "Istražite Žminj, Svetvinčenat, Barban, Pazin, Kanfanar, Rovinj i Pulu oko ove vile u Istri za grupe i obitelji.",
    },
    contact: {
      title: "Rezerviraj Villa Bergi — Vila u Žminju, Istra",
      description: "Rezervirajte vilu u Žminju izravno. Najam vile u Istri za grupe i obitelji, blizu Rovinja, Pule i znamenitosti središnje Istre.",
    },
  },
  it: {
    home: {
      title: "Villa Bergi | Villa vacanze a Žminj, Istria centrale — vicino a Rovigno e Pola",
      description: "Villa vacanze a Žminj, Istria centrale. Piscina, jacuzzi, 7 camere, 16 ospiti. Vicino a Rovigno, Pola e Pisino. Per gruppi e famiglie.",
    },
    villa: {
      title: "Villa Bergi — Villa con 7 camere a Žminj, Istria con piscina e jacuzzi",
      description: "Villa con 7 camere a Žminj, Istria con piscina, jacuzzi, sauna e giochi. Per 16 ospiti, ideale per gruppi e famiglie.",
    },
    pricelist: {
      title: "Villa Bergi Prezzi — Prezzi villa in affitto a Žminj, Istria",
      description: "Scopri i prezzi villa a Žminj e le tariffe delle ville in Istria per Villa Bergi. Prenotazione diretta per gruppi e famiglie.",
    },
    photogallery: {
      title: "Villa Bergi Foto — Foto villa a Žminj, Istria",
      description: "Guarda le foto di Villa Bergi a Žminj, Istria: piscina, jacuzzi, 7 camere e spazi esterni per gruppi e famiglie.",
    },
    surroundings: {
      title: "Cosa fare vicino a Žminj — Istria centrale intorno a Villa Bergi",
      description: "Scopri Žminj, Sanvincenti, Barbana, Pisino, Canfanaro, Rovigno e Pola vicino a questa villa in Istria.",
    },
    contact: {
      title: "Prenota Villa Bergi — Villa a Žminj, Istria",
      description: "Prenota una villa a Žminj con contatto diretto. Villa in affitto in Istria per gruppi e famiglie, vicino a Rovigno e Pola.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function buildMetadata(locale: Locale, page: SeoPage, pathname: string): Metadata {
  const data = seoDictionary[locale][page];
  const canonical = `${baseUrl}/${locale}${pathname}`;

  return {
    metadataBase: new URL(baseUrl),
    title: data.title,
    description: data.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((loc) => [loc, `${baseUrl}/${loc}${pathname}`])),
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName,
      title: data.title,
      description: data.description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [defaultOgImage],
    },
  };
}

export function getLodgingJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteName,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}${defaultOgImage}`,
    description: seoDictionary[locale].home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Žminj",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
    sameAs: ["https://villabergi.com"],
  };
}

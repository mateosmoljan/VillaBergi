import React from "react";

export type LocationToVisitData = {
  placeToVisit: React.ReactNode;
  des?: string;
};

type DataObject = {
  locations: LocationToVisitData[];
};

const createLink = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow underline underline-offset-4">
    {label}
  </a>
);

const data: Record<string, DataObject> = {
  en: {
    locations: [
      { placeToVisit: createLink("https://www.central-istria.com/en", "Central Istria Tourist Board"), des: "The best starting point for inland routes, events and practical regional inspiration." },
      { placeToVisit: createLink("https://tz-svetvincenat.hr/en/", "Svetvinčenat Tourist Board"), des: "Useful for castle visits, local happenings and cultural highlights." },
      { placeToVisit: createLink("https://www.tz-pazin.hr/en", "Pazin Tourist Board"), des: "Good for central Istria planning, the castle area and active day ideas." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/en", "Rovinj Tourist Board"), des: "Helpful for old town walks, parking tips and harbour-side planning." },
      { placeToVisit: createLink("https://www.pulainfo.hr/en", "Pula Tourist Board"), des: "Official guide for the Arena, city attractions and south Istria extensions." },
    ],
  },
  de: {
    locations: [
      { placeToVisit: createLink("https://www.central-istria.com/de", "Tourismusverband Zentralistrien"), des: "Der beste Einstieg für Routen im Landesinneren, Veranstaltungen und regionale Tipps." },
      { placeToVisit: createLink("https://tz-svetvincenat.hr/de/", "Tourismusverband Svetvinčenat"), des: "Hilfreich für Kastellbesuche, lokale Ereignisse und Kulturthemen." },
      { placeToVisit: createLink("https://www.tz-pazin.hr/de", "Tourismusverband Pazin"), des: "Gut für die Planung in Zentralistrien, Burgbereich und aktive Ausflüge." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/de", "Tourismusverband Rovinj"), des: "Praktisch für Altstadt, Parkmöglichkeiten und Hafenbesuch." },
      { placeToVisit: createLink("https://www.pulainfo.hr/de", "Tourismusverband Pula"), des: "Offizieller Guide für Arena, Stadtbesichtigung und Erweiterungen nach Südistrien." },
    ],
  },
  hr: {
    locations: [
      { placeToVisit: createLink("https://www.central-istria.com/hr", "TZ Središnja Istra"), des: "Najbolja početna točka za rute unutrašnjošću, događanja i regionalne preporuke." },
      { placeToVisit: createLink("https://tz-svetvincenat.hr/hr/", "TZ Svetvinčenat"), des: "Korisno za kaštel, manifestacije i kulturne sadržaje." },
      { placeToVisit: createLink("https://www.tz-pazin.hr/hr", "TZ Pazin"), des: "Dobro za planiranje središnje Istre, kaštel i aktivne izlete." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/hr", "TZ Rovinj"), des: "Praktično za staru jezgru, parking i obilazak rive." },
      { placeToVisit: createLink("https://www.pulainfo.hr/hr", "TZ Pula"), des: "Službeni vodič za Arenu, gradske atrakcije i izlete prema jugu Istre." },
    ],
  },
  it: {
    locations: [
      { placeToVisit: createLink("https://www.central-istria.com/it", "Ente turistico dell'Istria centrale"), des: "Ottimo punto di partenza per itinerari interni, eventi e idee regionali." },
      { placeToVisit: createLink("https://tz-svetvincenat.hr/it/", "Ente turistico di Sanvincenti"), des: "Utile per il castello, gli eventi locali e i contenuti culturali." },
      { placeToVisit: createLink("https://www.tz-pazin.hr/it", "Ente turistico di Pisino"), des: "Buono per organizzare visite nell'Istria centrale e giornate attive." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/it", "Ente turistico di Rovigno"), des: "Pratico per centro storico, porto e suggerimenti di visita." },
      { placeToVisit: createLink("https://www.pulainfo.hr/it", "Ente turistico di Pola"), des: "Guida ufficiale per Arena, città ed estensioni verso il sud dell'Istria." },
    ],
  },
};

export const getLocationsData = (language: string): DataObject => data[language] ?? data.en;

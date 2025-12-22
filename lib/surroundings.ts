import en from "@/messages/en.json";
import de from "@/messages/de.json";
import hr from "@/messages/hr.json";
import it from "@/messages/it.json";

/* ---------------- TYPES ---------------- */

export type SurroundingItem = {
  title: string;
  description: string;
};

export type SurroundingPlace = {
  title: string;
  items: SurroundingItem[];
};

export type SurroundingsData = {
  rovinj: SurroundingPlace;
  bale: SurroundingPlace;
};

/* ---------------- HELPERS ---------------- */

const buildItems = (data: any, count = 7): SurroundingItem[] =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      title: data[`title${n}`],
      description: data[`des${n}`],
    };
  });

const createSurroundings = (messages: any): SurroundingsData => ({
  rovinj: {
    title: messages.Environs.rovinj_title,
    items: buildItems(messages.Environs.rovinj),
  },
  bale: {
    title: messages.Environs.bale_title,
    items: buildItems(messages.Environs.bale),
  },
});

/* ---------------- DATA MAP ---------------- */

const SURROUNDINGS_MAP: Record<string, SurroundingsData> = {
  en: createSurroundings(en),
  de: createSurroundings(de),
  hr: createSurroundings(hr),
  it: createSurroundings(it),
};

/* ---------------- PUBLIC API ---------------- */

export const getSurroundingsData = (locale: string): SurroundingsData => {
  return SURROUNDINGS_MAP[locale] ?? SURROUNDINGS_MAP.en;
};

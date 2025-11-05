type categorization = {
  value: string;
  title?: string;
};

type DataObject = {
  data: categorization[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

export const Categorization: categorization[] = [
  { value: "⭐⭐⭐⭐⭐" },
  { value: "10 persons" },
];

const replaceCategorization = (data: categorization[], title: string[]) => {
  return data.map((location, index) => ({
    ...location,
    title: title[index],
  }));
};

// Define the data object
export const CategorizationDataEn: DataObject = {
  data: replaceCategorization(Categorization, enData.Categorization.title),
};

// You can also define a separate object for German translations if needed
export const CategorizationDataDE: DataObject = {
  data: replaceCategorization(Categorization, deData.Categorization.title),
};

export const CategorizationDataHR: DataObject = {
  data: replaceCategorization(Categorization, hrData.Categorization.title),
};

export const CategorizationDataIT: DataObject = {
  data: replaceCategorization(Categorization, itData.Categorization.title),
};

export const getCategorizationData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return CategorizationDataEn;
    case "de":
      return CategorizationDataDE;
    case "hr":
      return CategorizationDataHR;
    case "it":
      return CategorizationDataIT;
    default:
      // Return default language if specified language is not found
      return CategorizationDataEn;
  }
};

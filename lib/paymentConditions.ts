type TitleData = {
  subtitle?: string;
  title?: string;
  des?: string;
  des2?: string;
  des3?: string;
  des4?: string;
  des5?: string;
  des6?: string;
  title2?: string;
};

type DataObject = {
  data: TitleData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createTitle = (
  subtitle?: string,
  title?: string,
  des?: string,
  des2?: string,
  des3?: string,
  des4?: string,
  des5?: string,
  des6?: string,
  title2?: string
): TitleData => {
  return {
    subtitle,
    title,
    des,
    des2,
    des3,
    des4,
    des5,
    des6,
    title2,
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [
    createTitle(
      enData.Payment_conditions.subtitle,
      enData.Payment_conditions.title,
      enData.Payment_conditions.des,
      enData.Payment_conditions.des2,
      enData.Payment_conditions.des3,
      enData.Payment_conditions.des4,
      enData.Payment_conditions.des5,
      enData.Payment_conditions.des6,
      enData.Payment_conditions.title2
    ),
  ],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [
    createTitle(
      deData.Payment_conditions.subtitle,
      deData.Payment_conditions.title,
      deData.Payment_conditions.des,
      deData.Payment_conditions.des2,
      deData.Payment_conditions.des3,
      deData.Payment_conditions.des4,
      deData.Payment_conditions.des5,
      deData.Payment_conditions.des6,
      deData.Payment_conditions.title2
    ),
  ],
};

export const TitleDataHR: DataObject = {
  data: [
    createTitle(
      hrData.Payment_conditions.subtitle,
      hrData.Payment_conditions.title,
      hrData.Payment_conditions.des,
      hrData.Payment_conditions.des2,
      hrData.Payment_conditions.des3,
      hrData.Payment_conditions.des4,
      hrData.Payment_conditions.des5,
      hrData.Payment_conditions.des6,
      hrData.Payment_conditions.title2
    ),
  ],
};

export const TitleDataIT: DataObject = {
  data: [
    createTitle(
      itData.Payment_conditions.subtitle,
      itData.Payment_conditions.title,
      itData.Payment_conditions.des,
      itData.Payment_conditions.des2,
      itData.Payment_conditions.des3,
      itData.Payment_conditions.des4,
      itData.Payment_conditions.des5,
      itData.Payment_conditions.des6,
      itData.Payment_conditions.title2
    ),
  ],
};

export const getPaymentConditionsData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return TitleDataEn;
    case "de":
      return TitleDataDE;
    case "hr":
      return TitleDataHR;
    case "it":
      return TitleDataIT;
    default:
      // Return default language if specified language is not found
      return TitleDataEn;
  }
};

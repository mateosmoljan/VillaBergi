type LinksData = {
  path: string;
  titles?: string;
  button?: string;
};

type DataObject = {
  NavData: LinksData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const linksData: LinksData[] = [
  { path: "/villa-bergi" },
  { path: "/pricelist" },
  { path: "/photogallery" },
  { path: "/surroundings" },
  { path: "/contact" },

  // Define other image data similarly
];

const replaceTitle = (data: LinksData[], titles: string[], button: string) => {
  return data.map((link, index) => ({
    ...link,
    titles: titles[index],
    button: button,
  }));
};

// Define the data object
export const NavigationLinksEn: DataObject = {
  NavData: replaceTitle(
    linksData,
    enData.Navigation.navlinks,
    enData.Navigation.navLinksButton
  ),
};

// You can also define a separate object for German translations if needed
export const NavigationLinksDE: DataObject = {
  NavData: replaceTitle(
    linksData,
    deData.Navigation.navlinks,
    deData.Navigation.navLinksButton
  ),
};

export const NavigationLinksHR: DataObject = {
  NavData: replaceTitle(
    linksData,
    hrData.Navigation.navlinks,
    hrData.Navigation.navLinksButton
  ),
};

export const NavigationLinksIT: DataObject = {
  NavData: replaceTitle(
    linksData,
    itData.Navigation.navlinks,
    itData.Navigation.navLinksButton
  ),
};

export const getNavigationLinks = (language: string): DataObject => {
  switch (language) {
    case "en":
      return NavigationLinksEn;
    case "de":
      return NavigationLinksDE;
    case "hr":
      return NavigationLinksHR;
    case "it":
      return NavigationLinksIT;
    default:
      // Return default language if specified language is not found
      return NavigationLinksEn;
  }
};

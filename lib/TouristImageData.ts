import { StaticImageData } from "next/image";
import image1 from "@/public/assets/images/aquarium.jpg";
import image2 from "@/public/assets/images/np-brijuni.jpg";
import image3 from "@/public/assets/images/aquacolors.jpg";
import image4 from "@/public/assets/images/arena.jpg";
import image5 from "@/public/assets/images/istralandia.jpg";
import image6 from "@/public/assets/images/beach3.jpg";
import image7 from "@/public/assets/images/aquacolors2.jpg";
import image8 from "@/public/assets/images/aquacolors3.jpg";
import image9 from "@/public/assets/images/aquacolors4.jpg";
import image10 from "@/public/assets/images/aquarium2.jpg";
import image11 from "@/public/assets/images/arena2.jpg";
import image12 from "@/public/assets/images/beach.jpg";
import image13 from "@/public/assets/images/beach2.jpg";
import image14 from "@/public/assets/images/kamenjak.jpg";

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

type LocationToVisitData = {
  src: StaticImageData;
  alt: string;
  image_title?: string;
  subtitle?: string;
  title?: string;
  image_des?: string;
};

type DataObject = {
  data: LocationToVisitData[];
};

export const TouristImageData: LocationToVisitData[] = [
  { src: image1, alt: "Aquarium Pula", image_title: "Aquarium Pula" },
  { src: image2, alt: "NP Brijuni", image_title: "NP Brijuni" },
  { src: image3, alt: "Aquacolors Porec", image_title: "Aquacolors Poreč" },
  { src: image4, alt: "Arena Pula", image_title: "Arena Pula" },
  { src: image5, alt: "Istralandia", image_title: "Istralandia" },
  { src: image6, alt: "Beach", image_title: "Kamenjak" },
  { src: image7, alt: "Aquacolors Porec" },
  { src: image8, alt: "Aquacolors Porec" },
  { src: image9, alt: "Aquacolors Porec" },
  { src: image10, alt: "Aquarium Pula" },
  { src: image11, alt: "Arena Pula" },
  { src: image12, alt: "Rocky beach and clear sea in Istria" },
  { src: image13, alt: "Cliff jumping at Cape Kamenjak, Istria" },
  { src: image14, alt: "Aerial view of Cape Kamenjak, Istria" },
];

const replaceTouristGuide = (
  data: LocationToVisitData[],
  subtitle: string,
  title: string,
  image_des: string[]
) => {
  return data.map((data, index) => ({
    ...data,
    subtitle: subtitle,
    title: title,
    image_des: image_des[index],
  }));
};

// Define the data object
export const TouristGuideDataEn: DataObject = {
  data: replaceTouristGuide(
    TouristImageData,
    enData.Tourist_Guide.subtitle,
    enData.Tourist_Guide.title,
    enData.Tourist_Guide.image_des
  ),
};

// You can also define a separate object for German translations if needed
export const TouristGuideDataDE: DataObject = {
  data: replaceTouristGuide(
    TouristImageData,
    deData.Tourist_Guide.subtitle,
    deData.Tourist_Guide.title,
    deData.Tourist_Guide.image_des
  ),
};

export const TouristGuideDataHR: DataObject = {
  data: replaceTouristGuide(
    TouristImageData,
    hrData.Tourist_Guide.subtitle,
    hrData.Tourist_Guide.title,
    hrData.Tourist_Guide.image_des
  ),
};

export const TouristGuideDataIT: DataObject = {
  data: replaceTouristGuide(
    TouristImageData,
    itData.Tourist_Guide.subtitle,
    itData.Tourist_Guide.title,
    itData.Tourist_Guide.image_des
  ),
};

export const getTouristGuideData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return TouristGuideDataEn;
    case "de":
      return TouristGuideDataDE;
    case "hr":
      return TouristGuideDataHR;
    case "it":
      return TouristGuideDataIT;
    default:
      // Return default language if specified language is not found
      return TouristGuideDataEn;
  }
};

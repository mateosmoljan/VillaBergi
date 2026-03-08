import { StaticImageData } from "next/image";

import one from "@/public/assets/images/optimized-hero/28.webp";
import two from "@/public/assets/images/optimized-hero/32.webp";
import three from "@/public/assets/images/optimized-hero/38.webp";
import four from "@/public/assets/images/optimized-hero/44.webp";

type LocationData = {
  src: StaticImageData;
  alt: string;
  title?: string;
  des?: string;
  button?: string;
};

type DataObject = {
  images: LocationData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const imageData: LocationData[] = [
  { src: one, alt: "Villa Bergi swimming pool in Žminj, Istria" },
  { src: two, alt: "Villa Bergi outdoor lounge area in Žminj, Istria" },
  { src: three, alt: "Villa Bergi jacuzzi terrace in Žminj, Istria" },
  { src: four, alt: "Villa Bergi outdoor dining area in Žminj, Istria" },
];

const replaceTitlesAndDescriptions = (
  data: LocationData[],
  titles: string[],
  descriptions: string[],
  button: string
) => {
  return data.map((image, index) => ({
    ...image,
    title: titles[index],
    des: descriptions[index],
    button: button,
  }));
};

export const HeadSwiperLibEN: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    enData.HeaderSwiper.titles,
    enData.HeaderSwiper.descriptions,
    enData.HeaderSwiper.button
  ),
};

export const HeadSwiperLibDE: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    deData.HeaderSwiper.titles,
    deData.HeaderSwiper.descriptions,
    deData.HeaderSwiper.button
  ),
};

export const HeadSwiperLibHR: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    hrData.HeaderSwiper.titles,
    hrData.HeaderSwiper.descriptions,
    hrData.HeaderSwiper.button
  ),
};

export const HeadSwiperLibIT: DataObject = {
  images: replaceTitlesAndDescriptions(
    imageData,
    itData.HeaderSwiper.titles,
    itData.HeaderSwiper.descriptions,
    itData.HeaderSwiper.button
  ),
};

export const getHeadSwiperLib = (language: string): DataObject => {
  switch (language) {
    case "en":
      return HeadSwiperLibEN;
    case "de":
      return HeadSwiperLibDE;
    case "hr":
      return HeadSwiperLibHR;
    case "it":
      return HeadSwiperLibIT;
    default:
      return HeadSwiperLibEN;
  }
};

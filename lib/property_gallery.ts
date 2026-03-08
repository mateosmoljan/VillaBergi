import { StaticImageData } from "next/image";

import image1 from "@/public/assets/images/i/1.jpg";
import image2 from "@/public/assets/images/i/2.jpg";
import image3 from "@/public/assets/images/i/3.jpg";
import image4 from "@/public/assets/images/i/4.jpg";
import image5 from "@/public/assets/images/i/5.jpg";
import image6 from "@/public/assets/images/i/6.jpg";
import image7 from "@/public/assets/images/i/7.jpg";
import image8 from "@/public/assets/images/i/8.jpg";
import image9 from "@/public/assets/images/i/9.jpg";
import image10 from "@/public/assets/images/i/10.jpg";
import image11 from "@/public/assets/images/i/11.jpg";
import image12 from "@/public/assets/images/i/12.jpg";
import image13 from "@/public/assets/images/i/13.jpg";
import image14 from "@/public/assets/images/i/14.jpg";
import image15 from "@/public/assets/images/i/15.jpg";
import image16 from "@/public/assets/images/i/16.jpg";
import image17 from "@/public/assets/images/i/17.jpg";
import image18 from "@/public/assets/images/i/18.jpg";
import image19 from "@/public/assets/images/i/19.jpg";
import image20 from "@/public/assets/images/i/20.jpg";
import image21 from "@/public/assets/images/i/21.jpg";
import image22 from "@/public/assets/images/i/22.jpg";
import image23 from "@/public/assets/images/i/23.jpg";
import image24 from "@/public/assets/images/i/24.jpg";
import image25 from "@/public/assets/images/i/25.jpg";
import image26 from "@/public/assets/images/i/26.jpg";
import image27 from "@/public/assets/images/i/27.jpg";
import image28 from "@/public/assets/images/i/28.jpg";
import image29 from "@/public/assets/images/i/29.jpg";
import image30 from "@/public/assets/images/i/30.jpg";
import image31 from "@/public/assets/images/i/31.jpg";
import image32 from "@/public/assets/images/i/32.jpg";
import image33 from "@/public/assets/images/i/33.jpg";
import image34 from "@/public/assets/images/i/34.jpg";
import image35 from "@/public/assets/images/i/35.jpg";
import image36 from "@/public/assets/images/i/36.jpg";
import image37 from "@/public/assets/images/i/37.jpg";
import image38 from "@/public/assets/images/i/38.jpg";
import image39 from "@/public/assets/images/i/39.jpg";
import image40 from "@/public/assets/images/i/40.jpg";
import image41 from "@/public/assets/images/i/41.jpg";
import image42 from "@/public/assets/images/i/42.jpg";
import image43 from "@/public/assets/images/i/43.jpg";
import image44 from "@/public/assets/images/i/44.jpg";

type LocationData = {
  src: StaticImageData;
  alt: string;
};

type DataObject = {
  images: LocationData[];
};

const galleryAlts = [
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria",
  "Villa Bergi dining room in Žminj, Istria",
  "Villa Bergi kitchen and dining area in Žminj, Istria",
  "Villa Bergi living room in Žminj, Istria",
  "Villa Bergi poolside terrace in Žminj, Istria",
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria",
  "Villa Bergi dining room in Žminj, Istria",
  "Villa Bergi kitchen and dining area in Žminj, Istria",
  "Villa Bergi living room in Žminj, Istria",
  "Villa Bergi poolside terrace in Žminj, Istria",
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria",
  "Villa Bergi dining room in Žminj, Istria",
  "Villa Bergi kitchen and dining area in Žminj, Istria",
  "Villa Bergi living room in Žminj, Istria",
  "Villa Bergi poolside terrace in Žminj, Istria",
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria",
  "Villa Bergi dining room in Žminj, Istria",
  "Villa Bergi kitchen and dining area in Žminj, Istria",
  "Villa Bergi living room in Žminj, Istria",
  "Villa Bergi poolside terrace in Žminj, Istria",
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria",
  "Villa Bergi dining room in Žminj, Istria",
  "Villa Bergi kitchen and dining area in Žminj, Istria",
  "Villa Bergi living room in Žminj, Istria",
  "Villa Bergi poolside terrace in Žminj, Istria",
  "Villa Bergi jacuzzi and wellness area in Žminj, Istria",
  "Villa Bergi outdoor lounge and terrace in Žminj, Istria",
  "Villa Bergi bedroom interior in Žminj, Istria",
  "Villa Bergi modern bathroom in Žminj, Istria"
];
const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44];

export const PropertyGalleryLib: DataObject = {
  images: galleryImages.map((src, index) => ({ src, alt: galleryAlts[index] })),
};

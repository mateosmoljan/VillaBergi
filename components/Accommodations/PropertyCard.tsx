"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { SwiperNavButtonsAcommodation } from "./SwiperNavButtonsAcommodation";
import { PropertyGalleryLib } from "@/lib/property_gallery";
import { useLocale } from "next-intl";
import { getAccommodationData } from "@/lib/acommodation";

function PropertyCard() {
  const localeActive = useLocale();
  const AccommodationsData = getAccommodationData(localeActive);
  return (
    <div className=" md:w-3/5 lg:w-1/2 shadow-md hover:shadow-xl custom_border rounded-md z-10 w-full overflow-hidden">
      <Swiper
        loop={true}
        spaceBetween={0}
        effect={"fade"}
        modules={[EffectFade]}
      >
        {PropertyGalleryLib.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex relative items-center justify-center h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={559}
                height={240}
                placeholder="blur"
                className="object-cover block rounded-t-md h-60 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtonsAcommodation />
      </Swiper>
      <div className="p-3">
        <h2 className="font-black text-xl font-arbutus">
          {AccommodationsData.data[0].card_title}
        </h2>
        <p className="text-sm">{AccommodationsData.data[0].card_des}</p>
        <p className="text-sm">
          {AccommodationsData.data[0].card_des2}{" "}
          <span className="font-bold text-yellow text-xl">140 €</span>{" "}
          {AccommodationsData.data[0].card_des3}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;

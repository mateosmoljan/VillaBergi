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
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { trackBookingEvent } from "@/lib/analytics";

function PropertyCard() {
  const localeActive = useLocale();
  const AccommodationsData = getAccommodationData(localeActive);
  const t = useTranslations("Conversion");
  return (
    <div className=" md:w-3/5 lg:w-1/2 shadow-md hover:shadow-xl custom_border rounded-md z-10 w-full overflow-hidden">
      <Swiper
        loop={false}
        spaceBetween={0}
        effect={"fade"}
        modules={[EffectFade]}
      >
        {PropertyGalleryLib.images.slice(0, 4).map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex relative items-center justify-center h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={559}
                height={240}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                className="object-cover block rounded-t-md h-60 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtonsAcommodation />
      </Swiper>
      <div className="p-3">
        <h2 className="font-black text-xl font-arbutus text-primary">
          {AccommodationsData.data[0].card_title}
        </h2>
        <p className="text-sm text-secondary">
          {AccommodationsData.data[0].card_des}
        </p>
        <p className="text-sm text-secondary">
          {AccommodationsData.data[0].card_des2}{" "}
          <span className="font-bold accent-primary text-xl">169 €</span>{" "}
          {AccommodationsData.data[0].card_des3}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/villa-bergi"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-4 py-2 font-bold text-white"
            onClick={() => trackBookingEvent("view_villa", { placement: "home_card", language: localeActive })}
          >
            {t("viewVilla")}
          </Link>
          <Link
            href="/contact"
            className="btn min-h-11 justify-center"
            onClick={() => trackBookingEvent("check_availability", { placement: "home_card", language: localeActive })}
          >
            {t("checkAvailability")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

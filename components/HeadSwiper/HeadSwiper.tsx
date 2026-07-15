"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButton";
import { getHeadSwiperLib } from "@/lib/HeadSwiperLib";
import { useLocale } from "next-intl";
import { HeroBookingActions } from "@/components/Conversion/BookingActions";
import "./style.css";

export default function HeadSwiper() {
  const localeActive = useLocale();
  const headSwiperLib = getHeadSwiperLib(localeActive);

  return (
    <section className="block h-screen max-w-screen relative">
      <div className="block relative max-w-full head_swiper h-screen">
        <Swiper
          loop
          spaceBetween={0}
          modules={[FreeMode, Autoplay, Pagination]}
          autoplay={{ delay: 10000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          grabCursor
          speed={900}
          className="h-screen"
        >
          {headSwiperLib.images.map((image, index) => (
            <SwiperSlide key={index} className="!h-screen">
              <div className="relative h-screen w-full flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  quality={75}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="left-1/20 right-1/20 md:left-auto md:right-auto md:mx-0 md:max-w-3xl z-20 absolute bottom-20 sm:bottom-8 flex items-center justify-center flex-col bg-black bg-opacity-70 rounded-md p-5 sm:p-8 gap-3">
                  <h2 className="text-white font-arbutus text-center text-3xl font-bold">{image.title}</h2>
                  <p className="text-center text-white">{image.des}</p>
                  <HeroBookingActions />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
}

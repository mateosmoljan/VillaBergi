"use client";

import { trackBookingEvent } from "@/lib/analytics";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MdOutlinePhone } from "react-icons/md";

export function HeroBookingActions() {
  const t = useTranslations("Conversion");
  const locale = useLocale();

  return (
    <div className="w-full">
      <p className="mb-4 text-center text-sm font-semibold leading-6 text-white">
        {t("priceLine")}
      </p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="btn min-h-11 justify-center px-5"
          onClick={() => trackBookingEvent("check_availability", { placement: "hero", language: locale })}
        >
          {t("checkAvailability")}
        </Link>
        <Link
          href="/pricelist"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-white bg-white/10 px-5 py-2 font-bold text-white transition hover:bg-white hover:text-[#032552]"
          onClick={() => trackBookingEvent("view_pricelist", { placement: "hero", language: locale })}
        >
          {t("viewPrices")}
        </Link>
      </div>
    </div>
  );
}

export function MobileBookingBar() {
  const t = useTranslations("Conversion");
  const locale = useLocale();

  return (
    <aside
      aria-label={t("checkAvailability")}
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/15 bg-[#032552]/95 p-2 shadow-2xl backdrop-blur lg:hidden"
    >
      <a
        href="tel:+385993717777"
        className="inline-flex min-h-12 w-1/3 items-center justify-center gap-2 rounded-md border border-white/30 px-3 font-bold text-white"
        onClick={() => trackBookingEvent("click_phone", { placement: "mobile_bar", language: locale })}
      >
        <MdOutlinePhone aria-hidden="true" />
        {t("call")}
      </a>
      <Link
        href="/contact"
        className="btn min-h-12 w-2/3 justify-center text-center"
        onClick={() => trackBookingEvent("check_availability", { placement: "mobile_bar", language: locale })}
      >
        {t("checkAvailability")}
      </Link>
    </aside>
  );
}

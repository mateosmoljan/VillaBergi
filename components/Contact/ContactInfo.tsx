"use client";

import { trackBookingEvent } from "@/lib/analytics";
import { useLocale, useTranslations } from "next-intl";

function ContactInfo() {
  const locale = useLocale();
  const t = useTranslations("Contact.Contact_Info");

  return (
    <section className="sticky top-14 sm:px-3" aria-label={t("contact_person")}>
      <div className="rounded-md custom_border shadow-md px-4 pt-8 pb-5 hover:shadow-xl">
        <div className="ml-4 mb-4">
          <h2 className="mb-1 font-titleBold text-xl">Valter Brgić</h2>
          <span className="text-sm text-white/80">{t("contact_person")}</span>
        </div>
        <address className="not-italic">
          <ul className="flex flex-col gap-4">
            <li>
              <span className="block text-sm text-white/70">{t("address")}</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Villa+Bergi+Damijani%C4%87i+6+%C5%BDminj"
                target="_blank"
                rel="noreferrer"
                className="font-Bold text-[#22b7f4] underline"
              >
                Damijanići 6, 52341 Žminj, Istria, Croatia
              </a>
            </li>
            <li>
              <span className="block text-sm text-white/70">{t("mobile")}</span>
              <a
                href="tel:+385993717777"
                className="font-Bold text-[#22b7f4] underline"
                onClick={() => trackBookingEvent("click_phone", { placement: "contact_card", language: locale })}
              >
                +385 99 371 7777
              </a>
            </li>
            <li>
              <span className="block text-sm text-white/70">{t("email")}</span>
              <a
                href="mailto:villa.bergi.wb@gmail.com"
                className="break-all font-Bold text-[#22b7f4] underline"
                onClick={() => trackBookingEvent("click_email", { placement: "contact_card", language: locale })}
              >
                villa.bergi.wb@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-sm text-white/70">{t("we_speak")}</span>
              <span className="font-Bold">Croatian, English</span>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}

export default ContactInfo;

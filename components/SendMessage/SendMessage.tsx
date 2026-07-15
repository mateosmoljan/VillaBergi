"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { trackBookingEvent } from "@/lib/analytics";


function SendMessage() {
  const t = useTranslations("Send_Message");
  const locale = useLocale();
  return (
    <section className="">
      <div className="container py-10">
        <div className="text-secondary flex justify-between gap-2 lg:items-center lg:flex-row flex-col w-full shadow-2xl p-10 ">
          <div className="lg:w-2/3">
            <p className="text-base">{t("des")}</p>
          </div>
          <div className=" flex justify-end ">
            <Link
              href="/contact"
              className="btn lg:min-w-full"
              onClick={() => trackBookingEvent("check_availability", { placement: "message_cta", language: locale })}
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessage;

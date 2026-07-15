"use client";

import { getMonthlyRanges2026 } from "@/lib/pricing2026";
import { trackBookingEvent } from "@/lib/analytics";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function PriceTable() {
  const locale = useLocale();
  const t = useTranslations("Pricing");
  const c = useTranslations("Conversion");
  const ranges = getMonthlyRanges2026();
  const currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  const monthName = new Intl.DateTimeFormat(locale, { month: "long" });

  return (
    <section className="mb-12" aria-labelledby="rates-title">
      <div className="rounded-xl border border-white/15 bg-white/5 p-4 md:p-8">
        <h2 id="rates-title" className="mb-2 text-2xl font-bold text-white md:text-3xl">
          {t("ratesTitle")}
        </h2>
        <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{t("ratesNote")}</p>

        <div className="overflow-x-auto rounded-lg border border-white/15">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead className="bg-[#032552] text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">{t("month")}</th>
                <th scope="col" className="px-4 py-3 font-semibold">{t("nightlyRate")}</th>
              </tr>
            </thead>
            <tbody>
              {ranges.map(({ month, minimum, maximum }) => (
                <tr key={month} className="border-t border-white/10 even:bg-white/5">
                  <th scope="row" className="px-4 py-3 font-medium capitalize text-white">
                    {monthName.format(new Date(2026, month - 1, 1))}
                  </th>
                  <td className="px-4 py-3 text-gray-200">
                    {currency.format(Math.round(minimum))}
                    {Math.round(minimum) !== Math.round(maximum) && ` – ${currency.format(Math.round(maximum))}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          href="/contact"
          className="btn mt-6 inline-flex"
          onClick={() => trackBookingEvent("check_availability", { placement: "price_table", language: locale })}
        >
          {c("checkAvailability")}
        </Link>
      </div>
    </section>
  );
}

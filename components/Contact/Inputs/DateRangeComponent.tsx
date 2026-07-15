"use client";

import { estimateStay2026, isVillaOpenForStay } from "@/lib/pricing2026";
import { trackBookingEvent } from "@/lib/analytics";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

function toLocalISO(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addOneDay(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + 1);
  return toLocalISO(date);
}

function stayLengthBucket(nights: number) {
  if (nights <= 3) return "1_3";
  if (nights <= 7) return "4_7";
  if (nights <= 14) return "8_14";
  return "15_plus";
}

function leadTimeBucket(days: number) {
  if (days <= 7) return "0_7";
  if (days <= 30) return "8_30";
  if (days <= 90) return "31_90";
  return "91_plus";
}

export default function DataRangeComponent() {
  const locale = useLocale();
  const t = useTranslations("Contact.Contact_Form");
  const pricing = useTranslations("Pricing");
  const trackedDates = useRef("");
  const today = useMemo(() => toLocalISO(new Date()), []);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const minimumDeparture = arrival ? addOneDay(arrival) : today;
  const openSeasonStay = useMemo(() => isVillaOpenForStay(arrival, departure), [arrival, departure]);
  const estimate = useMemo(() => estimateStay2026(arrival, departure), [arrival, departure]);
  const currency = useMemo(
    () => new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }),
    [locale]
  );

  useEffect(() => {
    if (!arrival || !departure) return;
    const stay = `${arrival}:${departure}`;
    if (trackedDates.current === stay) return;
    trackedDates.current = stay;
    const arrivalTime = Date.parse(`${arrival}T12:00:00Z`);
    const departureTime = Date.parse(`${departure}T12:00:00Z`);
    const nights = Math.max(1, Math.round((departureTime - arrivalTime) / 86400000));
    const leadDays = Math.max(0, Math.round((arrivalTime - Date.now()) / 86400000));
    trackBookingEvent("select_dates", {
      form_name: "villa_inquiry",
      language: locale,
      lead_time_bucket: leadTimeBucket(leadDays),
      stay_length_bucket: stayLengthBucket(nights),
    });
  }, [arrival, departure, locale]);

  return (
    <fieldset className="mb-4 grid w-full gap-4 px-2 sm:grid-cols-2">
      <legend className="sr-only">{t("arrival")} / {t("departure")}</legend>
      <div>
        <label htmlFor="arrivalDate" className="mb-1 block text-sm font-Bold text-gray-700">
          {t("arrival")}
        </label>
        <input
          id="arrivalDate"
          type="date"
          name="arrivalDate"
          required
          min={today}
          value={arrival}
          onChange={(event) => {
            const nextArrival = event.target.value;
            setArrival(nextArrival);
            if (departure && departure <= nextArrival) setDeparture("");
          }}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black"
        />
      </div>
      <div>
        <label htmlFor="departureDate" className="mb-1 block text-sm font-Bold text-gray-700">
          {t("departure")}
        </label>
        <input
          id="departureDate"
          type="date"
          name="departureDate"
          required
          min={minimumDeparture}
          value={departure}
          onChange={(event) => setDeparture(event.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black"
        />
      </div>

      <p className="-mt-2 text-xs leading-5 text-gray-600 sm:col-span-2">{pricing("openSeason")}</p>

      {arrival && departure && (
        <div className="rounded-lg border border-white/15 bg-[#032552] p-4 text-white sm:col-span-2" aria-live="polite">
          {!openSeasonStay ? (
            <p className="text-sm font-semibold leading-6 text-white">{pricing("closedSeason")}</p>
          ) : estimate ? (
            <>
              <p className="text-sm text-gray-300">
                {pricing("estimatedTotal")} · {estimate.nights} {pricing("nights")}
              </p>
              <p className="text-2xl font-bold">{currency.format(estimate.total)}</p>
              <p className="mt-1 text-xs leading-5 text-gray-300">{pricing("estimateNote")}</p>
              <input type="hidden" name="estimatedTotal" value={estimate.total.toFixed(2)} />
              <input type="hidden" name="estimatedNights" value={estimate.nights} />
            </>
          ) : (
            <p className="text-sm leading-6 text-gray-200">{pricing("quoteOnly")}</p>
          )}
        </div>
      )}
    </fieldset>
  );
}

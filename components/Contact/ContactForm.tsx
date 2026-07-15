"use client";

import React, { FormEvent, useRef, useState } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";
import { sendGAEvent } from "@next/third-parties/google";
import { useLocale, useTranslations } from "next-intl";
import { trackBookingEvent } from "@/lib/analytics";
import { isVillaOpenForStay } from "@/lib/pricing2026";
import { Link } from "@/navigation";
import "./style.css";

type SubmitState = "idle" | "sending" | "success" | "error";

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

function partySizeBucket(size: number) {
  if (size <= 2) return "1_2";
  if (size <= 6) return "3_6";
  return "7_12";
}

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const inquiryStarted = useRef(false);
  const locale = useLocale();
  const t = useTranslations("Contact.Contact_Form");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formVersion, setFormVersion] = useState(0);
  const [validationError, setValidationError] = useState("");

  const markInquiryStarted = () => {
    if (inquiryStarted.current) return;
    inquiryStarted.current = true;
    trackBookingEvent("begin_inquiry", { form_name: "villa_inquiry", language: locale });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || submitState === "sending") return;

    const formData = new FormData(form.current);
    const adults = Number(formData.get("adults"));
    const children = Number(formData.get("children"));
    const partySize = adults + children;
    if (partySize > 12) {
      setValidationError(t("capacity_error"));
      setSubmitState("idle");
      trackBookingEvent("inquiry_validation_error", {
        field_group: "party_size",
        form_name: "villa_inquiry",
        language: locale,
      });
      return;
    }

    const arrival = String(formData.get("arrivalDate"));
    const departure = String(formData.get("departureDate"));
    const arrivalTime = Date.parse(`${arrival}T12:00:00Z`);
    const departureTime = Date.parse(`${departure}T12:00:00Z`);
    if (!Number.isFinite(arrivalTime) || !Number.isFinite(departureTime) || departureTime <= arrivalTime) {
      setValidationError(t("date_error"));
      setSubmitState("idle");
      trackBookingEvent("inquiry_validation_error", {
        field_group: "stay_dates",
        form_name: "villa_inquiry",
        language: locale,
      });
      return;
    }
    if (!isVillaOpenForStay(arrival, departure)) {
      setValidationError(t("closed_season_error"));
      setSubmitState("idle");
      trackBookingEvent("inquiry_validation_error", {
        field_group: "open_season",
        form_name: "villa_inquiry",
        language: locale,
      });
      return;
    }
    const nights = Math.max(1, Math.round((departureTime - arrivalTime) / 86400000));
    const leadDays = Math.max(0, Math.round((arrivalTime - Date.now()) / 86400000));
    const funnelParameters = {
      form_name: "villa_inquiry",
      language: locale,
      lead_time_bucket: leadTimeBucket(leadDays),
      stay_length_bucket: stayLengthBucket(nights),
      party_size_bucket: partySizeBucket(partySize),
    };

    setValidationError("");
    trackBookingEvent("submit_inquiry", funnelParameters);

    setSubmitState("sending");

    try {
      const messageField = form.current.elements.namedItem("message") as HTMLTextAreaElement | null;
      const phoneField = form.current.elements.namedItem("user_phone") as HTMLInputElement | null;
      const originalMessage = messageField?.value ?? "";
      if (messageField && phoneField?.value) {
        messageField.value = `${originalMessage}\n\nPhone / WhatsApp: ${phoneField.value}`;
      }
      const delivery = emailjs.sendForm("service_jgpc6ko", "template_76f692g", form.current, {
        publicKey: "x1heB8vixoZsmR2Mh",
      });
      if (messageField) messageField.value = originalMessage;
      await delivery;
      form.current.reset();
      setFormVersion((version) => version + 1);
      inquiryStarted.current = false;
      setSubmitState("success");
      sendGAEvent("event", "generate_lead", {
        method: "emailjs",
        form_name: "villa_inquiry",
        villa: "villa_bergi",
        language: locale,
        lead_time_bucket: funnelParameters.lead_time_bucket,
        stay_length_bucket: funnelParameters.stay_length_bucket,
        party_size_bucket: funnelParameters.party_size_bucket,
      });
    } catch (error) {
      console.error("Villa inquiry delivery failed", error);
      setSubmitState("error");
      trackBookingEvent("inquiry_error", {
        stage: "delivery",
        provider: "emailjs",
        error_category: "unknown",
        language: locale,
      });
    }
  };

  return (
    <div className="rounded-md px-6 py-8 custom_border shadow-md bg-gray-100">
      <form ref={form} onSubmit={sendEmail} onFocusCapture={markInquiryStarted} className="w-full">
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label htmlFor="from_name" className="block text-sm font-Bold mb-1 text-gray-700">{t("name")}</label>
            <input id="from_name" required maxLength={100} name="from_name" autoComplete="name" className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label htmlFor="user_email" className="block text-sm font-Bold mb-1 text-gray-700">{t("email")}</label>
            <input id="user_email" required maxLength={254} name="user_email" type="email" autoComplete="email" className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
        </div>

        <div className="mb-4 w-full px-2">
          <label htmlFor="user_phone" className="mb-1 block text-sm font-Bold text-gray-700">{t("phone")}</label>
          <input
            id="user_phone"
            required
            name="user_phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full mb-4 px-2">
            <HolidayHome key={`home-${formVersion}`} />
          </div>
        </div>

        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2"><Adults key={`adults-${formVersion}`} /></div>
          <div className="w-1/2 px-2"><Children key={`children-${formVersion}`} /></div>
        </div>

        <DataRangeComponent key={formVersion} />

        <div className="flex w-full mb-4 px-2">
          <div className="w-full">
            <label htmlFor="message" className="block text-sm font-Bold mb-1 text-gray-700">{t("message")}</label>
            <textarea id="message" name="message" required maxLength={3000} rows={5} className="bg-white w-full rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
        </div>

        <p className="mb-4 px-2 text-xs leading-5 text-gray-700">
          {t("privacy_notice")} <Link href="/privacy" className="privacy-link font-semibold underline">{t("privacy_link")}</Link>
        </p>

        <div className="px-4">
          {validationError && <p role="alert" className="mb-3 text-sm font-semibold text-red-700">{validationError}</p>}
          <button
            type="submit"
            disabled={submitState === "sending"}
            className={`${submitState === "success" ? "bg-[#EDF7ED]" : "bg-yellow hover:bg-yellow"} w-full tracking-widest text-base font-Bold py-3 rounded-md text-black flex items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70`}
          >
            {submitState === "sending" ? (
              t("sending")
            ) : submitState === "success" ? (
              t("sent_button")
            ) : (
              <><span>{submitState === "error" ? t("try_again") : t("button")}</span><IoIosSend className="text-2xl" aria-hidden="true" /></>
            )}
          </button>
          {submitState === "success" && (
            <p role="status" aria-live="polite" className="mt-3 text-sm font-semibold text-green-700">
              {t("success")}
            </p>
          )}
          {submitState === "error" && (
            <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
              {t("error")}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

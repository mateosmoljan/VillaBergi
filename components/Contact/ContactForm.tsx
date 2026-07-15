"use client";

import React, { FormEvent, useRef, useState } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";
import { sendGAEvent } from "@next/third-parties/google";
import { useLocale } from "next-intl";
import "./style.css";

type SubmitState = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const locale = useLocale();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || submitState === "sending") return;

    setSubmitState("sending");

    try {
      await emailjs.sendForm("service_jgpc6ko", "template_76f692g", form.current, {
        publicKey: "x1heB8vixoZsmR2Mh",
      });
      form.current.reset();
      setSubmitState("success");
      sendGAEvent("event", "generate_lead", {
        method: "emailjs",
        form_name: "villa_inquiry",
        villa: "villa_bergi",
        language: locale,
      });
    } catch (error) {
      console.error("Villa inquiry delivery failed", error);
      setSubmitState("error");
    }
  };

  return (
    <div className="rounded-md px-6 py-8 custom_border shadow-md bg-gray-100">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label className="block text-sm font-Bold mb-1 text-grey3">Name</label>
            <input required name="from_name" className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label className="block text-sm font-Bold mb-1 text-grey3">Email</label>
            <input required name="user_email" type="email" className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full mb-4 px-2">
            <HolidayHome />
          </div>
        </div>

        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2"><Adults /></div>
          <div className="w-1/2 px-2"><Children /></div>
        </div>

        <DataRangeComponent />

        <div className="flex w-full mb-4 px-2">
          <div className="w-full">
            <label className="block text-sm font-Bold mb-1 text-grey3">Inquiry</label>
            <textarea name="message" required rows={5} className="bg-white w-full rounded-md border border-gray-300 py-2 px-3 text-black" />
          </div>
        </div>

        <p className="text-xs mb-4 text-grey3">
          The content of this form will be sent directly to the e-mail address of the owner of accommodation and is used exclusively for sending inquiries about booking of listed property.
        </p>

        <div className="px-4">
          <button
            type="submit"
            disabled={submitState === "sending"}
            className={`${submitState === "success" ? "bg-[#EDF7ED]" : "bg-yellow hover:bg-yellow"} w-full tracking-widest text-base font-Bold py-3 rounded-md text-black flex items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70`}
          >
            {submitState === "sending" ? (
              "Sending…"
            ) : submitState === "success" ? (
              "Inquiry sent"
            ) : (
              <><span>{submitState === "error" ? "Try Again" : "Send Inquiry"}</span><IoIosSend className="text-2xl" /></>
            )}
          </button>
          {submitState === "success" && (
            <p role="status" aria-live="polite" className="mt-3 text-sm font-semibold text-green-700">
              Your inquiry was delivered successfully. We’ll reply by email as soon as possible.
            </p>
          )}
          {submitState === "error" && (
            <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
              We couldn’t send your inquiry. Please try again or contact us using the details below.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

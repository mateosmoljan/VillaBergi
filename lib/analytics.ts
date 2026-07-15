"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type BookingEvent =
  | "check_availability"
  | "view_pricelist"
  | "view_villa"
  | "view_gallery"
  | "click_phone"
  | "click_email"
  | "begin_inquiry"
  | "select_dates"
  | "submit_inquiry"
  | "inquiry_error"
  | "inquiry_validation_error";

export function trackBookingEvent(
  event: BookingEvent,
  parameters: Record<string, string | number | boolean> = {},
) {
  sendGAEvent("event", event, {
    villa: "villa_bergi",
    ...parameters,
  });
}

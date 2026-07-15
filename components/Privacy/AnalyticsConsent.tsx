"use client";

import { Link } from "@/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const storageKey = "villa-bergi-analytics-consent";
type Consent = "unknown" | "granted" | "denied";

export function AnalyticsConsent({ measurementId }: { measurementId?: string }) {
  const t = useTranslations("Privacy");
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    setConsent(saved === "granted" || saved === "denied" ? saved : "unknown");
    const open = () => setConsent("unknown");
    window.addEventListener("villa-bergi-open-privacy-settings", open);
    return () => window.removeEventListener("villa-bergi-open-privacy-settings", open);
  }, []);

  const choose = (next: Exclude<Consent, "unknown">) => {
    window.localStorage.setItem(storageKey, next);
    setConsent(next);
  };

  return (
    <>
      {measurementId && consent === "granted" ? <GoogleAnalytics gaId={measurementId} /> : null}
      {consent === "unknown" && (
        <aside
          aria-label={t("settings")}
          className="fixed bottom-20 left-3 right-3 z-[70] rounded-xl border border-white/20 bg-[#032552] p-4 text-white shadow-2xl lg:bottom-4 lg:left-auto lg:max-w-md"
        >
          <p className="text-sm leading-6">{t("banner")}</p>
          <Link href="/privacy" className="mt-2 inline-block text-sm font-semibold underline">
            {t("link")}
          </Link>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className="btn" onClick={() => choose("granted")}>
              {t("accept")}
            </button>
            <button
              type="button"
              className="rounded-md border border-white/50 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              onClick={() => choose("denied")}
            >
              {t("decline")}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export function PrivacySettingsButton() {
  const t = useTranslations("Privacy");
  return (
    <button
      type="button"
      className="text-left text-white underline hover:text-yellow"
      onClick={() => window.dispatchEvent(new Event("villa-bergi-open-privacy-settings"))}
    >
      {t("settings")}
    </button>
  );
}

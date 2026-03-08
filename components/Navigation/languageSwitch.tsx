"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useTransition, useState, useRef, useEffect } from "react";
import en_src from "@/public/assets/icons/flags/en.png";
import de_src from "@/public/assets/icons/flags/de.png";
import hr_src from "@/public/assets/icons/flags/hr.png";
import it_src from "@/public/assets/icons/flags/it.png";
import Image, { StaticImageData } from "next/image";

interface LanguageLabel {
  code: string;
  src: StaticImageData;
}

const languageLabels: LanguageLabel[] = [
  { code: "en", src: en_src },
  { code: "de", src: de_src },
  { code: "hr", src: hr_src },
  { code: "it", src: it_src },
];

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (nextLocale: string) => {
    setOpen(false);
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1).join("/");
    const nextPath = `/${nextLocale}${rest ? `/${rest}` : ""}`;
    startTransition(() => {
      router.replace(nextPath);
    });
  };

  const activeLabel = languageLabels.find((l) => l.code === localeActive) || languageLabels[0];

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        disabled={isPending}
        className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm hover:bg-gray-50 transition-colors"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Image
          src={activeLabel.src}
          alt={`${activeLabel.code} flag`}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
        <span className="uppercase font-medium text-gray-700">{activeLabel.code}</span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 min-w-[80px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          {languageLabels.map((label) => (
            <li key={label.code} role="option" aria-selected={label.code === localeActive}>
              <button
                type="button"
                onClick={() => handleSelect(label.code)}
                className={`flex w-full items-center justify-center gap-2 px-3 py-2 transition-colors hover:bg-blue-50 ${
                  label.code === localeActive ? "bg-blue-100" : ""
                }`}
              >
                <Image
                  src={label.src}
                  alt={`${label.code} flag`}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitch;

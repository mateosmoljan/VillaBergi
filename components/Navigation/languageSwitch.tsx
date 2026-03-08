"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useMemo, useRef, useState, useTransition, useEffect } from "react";
import en_src from "@/public/assets/icons/flags/en.png";
import de_src from "@/public/assets/icons/flags/de.png";
import hr_src from "@/public/assets/icons/flags/hr.png";
import it_src from "@/public/assets/icons/flags/it.png";
import Image, { StaticImageData } from "next/image";

interface LanguageLabel {
  code: string;
  src: StaticImageData;
}

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languageLabels: LanguageLabel[] = useMemo(
    () => [
      { code: "en", src: en_src },
      { code: "de", src: de_src },
      { code: "hr", src: hr_src },
      { code: "it", src: it_src },
    ],
    []
  );

  const activeLanguage =
    languageLabels.find((language) => language.code === localeActive) ||
    languageLabels[0];

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  const handleChange = (nextLocale: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="nav_switch relative" ref={wrapperRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={isPending}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-md border border-transparent p-1 hover:border-gray-300"
      >
        <Image
          src={activeLanguage.src}
          alt={`${activeLanguage.code} flag`}
          width={24}
          height={24}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-16 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50 py-1">
          {languageLabels.map((label) => (
            <button
              key={label.code}
              type="button"
              onClick={() => handleChange(label.code)}
              className="w-full flex justify-center py-2 hover:bg-gray-100"
            >
              <Image
                src={label.src}
                alt={`${label.code} flag`}
                width={24}
                height={24}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;

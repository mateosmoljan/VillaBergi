"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useMemo, useState } from "react";
import en_src from "@/public/assets/icons/flags/en.png";
import de_src from "@/public/assets/icons/flags/de.png";
import hr_src from "@/public/assets/icons/flags/hr.png";
import it_src from "@/public/assets/icons/flags/it.png";
import Image, { StaticImageData } from "next/image";

interface LanguageLabel {
  code: string;
  src: StaticImageData;
}

const languages: LanguageLabel[] = [
  { code: "en", src: en_src },
  { code: "de", src: de_src },
  { code: "hr", src: hr_src },
  { code: "it", src: it_src },
];

function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const [open, setOpen] = useState(false);

  const active = useMemo(() => languages.find((l) => l.code === localeActive) || languages[0], [localeActive]);

  const setLocale = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) segments[0] = nextLocale;
    else segments.push(nextLocale);
    router.replace(`/${segments.join("/")}`);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="h-9 w-9 rounded-md border border-white/20 flex items-center justify-center hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
      >
        <Image src={active.src} alt={`${active.code} flag`} width={22} height={22} />
      </button>
      {open ? (
        <ul className="absolute right-0 mt-2 rounded-md bg-[#222831] border border-white/10 shadow-lg z-50 p-1">
          {languages.map((label) => (
            <li key={label.code}>
              <button
                type="button"
                className="h-9 w-9 rounded flex items-center justify-center hover:bg-white/10"
                onClick={() => setLocale(label.code)}
              >
                <Image src={label.src} alt={`${label.code} flag`} width={22} height={22} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default LanguageSwitch;

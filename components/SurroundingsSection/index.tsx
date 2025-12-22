"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { getSurroundingsData } from "@/lib/surroundings";

type PlaceKey = "rovinj" | "bale";

export default function SurroundingsSection() {
  const locale = useLocale();
  const surroundings = getSurroundingsData(locale);

  const [activePlace, setActivePlace] = useState<PlaceKey>("rovinj");

  const activeData = surroundings[activePlace];

  return (
    <section className="mt-12">
      {/* SWITCHER */}
      <div className="flex justify-center gap-6 mb-8 secondary-bg py-4 rounded-2xl">
        {(Object.keys(surroundings) as PlaceKey[]).map((place) => (
          <button
            key={place}
            onClick={() => setActivePlace(place)}
            className={`text-2xl font-ExtraBold transition ${
              activePlace === place ? "text-primary underline" : "text-gray-400"
            }`}
          >
            {surroundings[place].title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid gap-4">
        {activeData.items.map((item, idx) => (
          <article
            key={idx}
            className="p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium">⭐ {item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

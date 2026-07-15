import React from "react";
import { useTranslations } from "next-intl";

function Adults() {
  const [adults, setAdults] = React.useState("2");
  const t = useTranslations("Contact.Contact_Form");

  return (
    <div className="w-full">
      <label htmlFor="adults" className="block mb-1 text-sm font-Bold text-gray-700">
        {t("adults")}
      </label>
      <select
        required
        id="adults"
        name="adults"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-[9px] text-sm font-Bold text-gray-800"
      >
        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export default Adults;

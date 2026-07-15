import React from "react";
import { useTranslations } from "next-intl";

function Children() {
  const [children, setChildren] = React.useState("0");
  const t = useTranslations("Contact.Contact_Form");

  return (
    <div className="w-full">
      <label htmlFor="children" className="block mb-1 text-sm font-Bold text-gray-700">
        {t("children")}
      </label>
      <select
        required
        id="children"
        name="children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-[9px] text-sm font-Bold text-gray-800"
      >
        {Array.from({ length: 12 }, (_, i) => i).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export default Children;

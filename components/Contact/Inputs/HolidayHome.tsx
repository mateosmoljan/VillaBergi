import React from "react";
import { useTranslations } from "next-intl";

function HolidayHome() {
  const [home, setHome] = React.useState("Villa Bergi");
  const t = useTranslations("Contact.Contact_Form");

  return (
    <div className="w-full">
      <label htmlFor="holidayHome" className="block mb-1 text-sm font-Bold text-gray-700">
        {t("home")}
      </label>
      <select
        required
        id="holidayHome"
        name="holidayHome"
        value={home}
        onChange={(e) => setHome(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-[9px] text-sm font-Bold text-gray-800"
      >
        <option value="Villa Bergi">Villa Bergi</option>
      </select>
    </div>
  );
}

export default HolidayHome;

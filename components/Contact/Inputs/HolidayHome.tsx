import React from "react";

function HolidayHome() {
  const [home, setHome] = React.useState("Villa Bergi");

  return (
    <div className="w-full">
      <label htmlFor="holidayHome" className="block mb-1 text-sm font-Bold text-grey3">
        Holiday Home
      </label>
      <select
        required
        id="holidayHome"
        name="holidayHome"
        value={home}
        onChange={(e) => setHome(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-[9px] text-sm font-Bold text-grey3"
      >
        <option value="Villa Bergi">Villa Bergi</option>
      </select>
    </div>
  );
}

export default HolidayHome;

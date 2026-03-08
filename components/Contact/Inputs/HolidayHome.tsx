import React from "react";

function HolidayHome() {
  const [home, setHome] = React.useState("Villa Bergi");

  return (
    <div>
      <label className="block text-sm font-Bold mb-1 text-grey3">Holiday Home</label>
      <select
        required
        name="holidayHome"
        value={home}
        onChange={(e) => setHome(e.target.value)}
        className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black"
      >
        <option value="Villa Bergi">Villa Bergi</option>
      </select>
    </div>
  );
}

export default HolidayHome;

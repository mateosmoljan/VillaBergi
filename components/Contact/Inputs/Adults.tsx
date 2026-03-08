import React from "react";

function Adults() {
  const [adults, setAdults] = React.useState("2");

  return (
    <div>
      <label className="block text-sm font-Bold mb-1 text-grey3">Adults</label>
      <select
        required
        name="adults"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
        className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black"
      >
        {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export default Adults;

import React from "react";

function Children() {
  const [children, setChildren] = React.useState("0");

  return (
    <div>
      <label className="block text-sm font-Bold mb-1 text-grey3">Children</label>
      <select
        required
        name="children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
        className="w-full bg-white rounded-md border border-gray-300 py-2 px-3 text-black"
      >
        {Array.from({ length: 15 }, (_, i) => i).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export default Children;

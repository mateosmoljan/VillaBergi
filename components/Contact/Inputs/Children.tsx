import React from "react";

function Children() {
  const [children, setChildren] = React.useState("0");

  return (
    <div className="w-full">
      <label htmlFor="children" className="block mb-1 text-sm font-Bold text-grey3">
        Children
      </label>
      <select
        required
        id="children"
        name="children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-[9px] text-sm font-Bold text-grey3"
      >
        {Array.from({ length: 15 }, (_, i) => i).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export default Children;

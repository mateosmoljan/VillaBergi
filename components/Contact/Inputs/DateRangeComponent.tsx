"use client";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaCalendarAlt } from "react-icons/fa";
import enGB from "date-fns/locale/en-GB";

interface CustomRange {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

function DataRangeComponent() {
  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [activeDateRange, setActiveDateRange] = useState(false);
  const [activateDate, setActivateDate] = useState(false);
  const [state, setState] = useState<CustomRange[]>([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [calendarWidth, setCalendarWidth] = useState("vertical");
  const [disabledDateArray, setDisabledDateArray] = useState<Date[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) setActiveDateRange(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const formatDate = (date: Date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    if (state[0].startDate) setArrivalDate(formatDate(state[0].startDate));
    if (state[0].endDate) setDepartureDate(formatDate(state[0].endDate));
  }, [state]);

  useEffect(() => {
    setCalendarWidth(window.innerWidth > 640 ? "horizontal" : "vertical");
  }, []);

  useEffect(() => {
    if (state[0].startDate !== state[0].endDate) setActiveDateRange(false);
  }, [state]);

  const getDisabledDates = (): Date[] => {
    const disabledRanges = [
      { startDate: new Date("2024-05-02"), endDate: new Date("2024-11-09") },
      { startDate: new Date("2024-11-17"), endDate: new Date("2024-11-22") },
      { startDate: new Date("2025-01-05"), endDate: new Date("2025-01-06") },
      { startDate: new Date("2025-02-08"), endDate: new Date("2025-02-08") },
      { startDate: new Date("2025-03-08"), endDate: new Date("2025-03-09") },
      { startDate: new Date("2025-04-10"), endDate: new Date("2025-04-14") },
      { startDate: new Date("2025-04-24"), endDate: new Date("2025-04-29") },
      { startDate: new Date("2025-05-02"), endDate: new Date("2025-05-03") },
      { startDate: new Date("2025-05-17"), endDate: new Date("2025-06-28") },
      { startDate: new Date("2025-07-11"), endDate: new Date("2025-07-22") },
      { startDate: new Date("2025-08-05"), endDate: new Date("2025-08-08") },
      { startDate: new Date("2025-09-05"), endDate: new Date("2025-09-07") },
      { startDate: new Date("2025-09-11"), endDate: new Date("2025-09-13") },
      { startDate: new Date("2025-09-15"), endDate: new Date("2025-09-20") },
      { startDate: new Date("2025-10-20"), endDate: new Date("2025-10-25") },
    ];

    const disabledDates: Date[] = [...disabledDateArray];
    disabledRanges.forEach((range) => {
      let currentDate = new Date(range.startDate);
      while (currentDate <= range.endDate) {
        disabledDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return disabledDates;
  };

  return (
    <div className="w-full px-2">
      <div className="flex flex-row w-full gap-4">
        <button type="button" className="text-grey3 border-solid border-2 bg-white font-Bold font-poppins mb-4 rounded-md justify-between items-center flex w-full py-[8.5px] px-[14px]" onClick={() => { setActiveDateRange(true); setActivateDate(true); }}>
          {activateDate ? arrivalDate : <span>Arrival*</span>}
          <FaCalendarAlt />
        </button>
        <button type="button" className="text-grey3 border-solid border-2 bg-white font-Bold font-poppins mb-4 rounded-md justify-between items-center flex w-full py-[8.5px] px-[14px]" onClick={() => setActiveDateRange(!activeDateRange)}>
          <span>{activateDate ? departureDate : "Departure*"}</span>
          <FaCalendarAlt />
        </button>
      </div>
      {activeDateRange ? (
        <div ref={dateRangeRef} className="absolute border-solid border-2 border-grey3 z-20">
          <DateRange
            editableDateInputs
            onChange={(item) => setState([item.selection as CustomRange])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            className="relative bg-white z-20"
            months={2}
            locale={enGB}
            direction={calendarWidth === "horizontal" ? "horizontal" : "vertical"}
            rangeColors={["#B29600"]}
            disabledDates={getDisabledDates()}
            dateDisplayFormat="d.M.y"
          />
        </div>
      ) : null}
      <input type="hidden" required name="arrivalDate" value={arrivalDate} />
      <input type="hidden" required name="departureDate" value={departureDate} />
    </div>
  );
}

export default DataRangeComponent;

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import {
  BookingType,
  blockedDaysType,
  IHandleBookings,
  IFormatBookingsData,
  IGetAllBookedDays,
  IGetAllHalfDays,
  IGetDatesInRange,
  IGetMonthName,
  DaysOfWeekType,
  Days,
  DaysOfWeekOffsetType,
  DayOffset,
} from "./../types";
import { getCalendarData } from "@/lib/Calendar";

const dateFormat = "M-D-YYYY";

export const daysOfTheWeek: DaysOfWeekType = [
  Days.Monday,
  Days.Tusday,
  Days.Wednesday,
  Days.Thursday,
  Days.Friday,
  Days.Saturday,
  Days.Sunday,
];

export const daysOfTheWeekOffset: DaysOfWeekOffsetType = [
  DayOffset.Monday,
  DayOffset.Tusday,
  DayOffset.Wednesday,
  DayOffset.Thursday,
  DayOffset.Friday,
  DayOffset.Saturday,
  DayOffset.Sunday,
];

export const isValidMonthsOption = (numOfMonths: number): boolean => {
  if (!numOfMonths || typeof numOfMonths !== "number") return false;

  const validOptions = [12, 4, 2, 1];
  const isValid = validOptions.includes(numOfMonths);

  return isValid;
};

export const getMonthName = (month: number, locale: string): string | undefined => {
  const CalendarData = getCalendarData(locale);
  const months: IGetMonthName = {
    1: CalendarData.data[0].one,
    2: CalendarData.data[0].two,
    3: CalendarData.data[0].three,
    4: CalendarData.data[0].four,
    5: CalendarData.data[0].five,
    6: CalendarData.data[0].six,
    7: CalendarData.data[0].seven,
    8: CalendarData.data[0].eight,
    9: CalendarData.data[0].nine,
    10: CalendarData.data[0].ten,
    11: CalendarData.data[0].eleven,
    12: CalendarData.data[0].twelve,
  };

  return months[month];
};

export const formatBookingsData = ({
  bookings,
  year,
}: IFormatBookingsData): BookingType[] => {
  if (!Array.isArray(bookings) || bookings.length < 1) return [];

  const arr: BookingType[] = [];

  bookings.forEach((booking) => {
    const from = booking?.from;
    const to = booking?.to;
    const middayCheckout = booking?.middayCheckout;

    const validStartDate = dayjs(from).year() === Number(year);
    const validEndDate = dayjs(to).year() === Number(year);

    if (!validStartDate && !validEndDate) return null;

    const nxtBooking: BookingType = {
      from: dayjs(from).format(dateFormat),
      to: dayjs(to).format(dateFormat),
      middayCheckout,
    };

    arr.push(nxtBooking);
  });

  return arr;
};

export const getDatesInRange = ({
  startDate,
  endDate,
}: IGetDatesInRange): blockedDaysType => {
  let _startDate = dayjs(startDate, "M-D-YYYY");
  const _endDate = dayjs(endDate, "M-D-YYYY");

  const dates: blockedDaysType = [];

  while (!_startDate.isAfter(_endDate)) {
    dates.push(_startDate.format(dateFormat));

    _startDate = _startDate.add(1, "day");
  }

  return dates;
};

export const getAllBookedDays = ({
  dates,
}: IGetAllBookedDays): blockedDaysType => {
  if (!Array.isArray(dates) || dates.length < 1) return [];

  const arr: blockedDaysType = [];

  dates.forEach(({ to, from }) => {
    const nxt = getDatesInRange({ startDate: from, endDate: to });

    nxt.forEach((_date) => {
      arr.push(_date);
    });
  });

  return arr;
};

// export const getAllHalfDays = ({ dates }: IGetAllHalfDays): blockedDaysType => {
//   if (!Array.isArray(dates) || dates.length < 1) return []

//   const arr: blockedDaysType = []

//   dates.forEach(({ to, middayCheckout }) => {
//     if (middayCheckout && typeof to === 'string') {
//       arr.push(to)
//     }
//   })

//   return arr
// }

export const getAllHalfDays = ({ dates }: IGetAllHalfDays): blockedDaysType => {
  if (!Array.isArray(dates) || dates.length < 1) return [];

  const arr: blockedDaysType = [];

  dates.forEach(({ from, to, middayCheckout }) => {
    if (middayCheckout && typeof from === "string" && typeof to === "string") {
      arr.push(to);
    }
  });

  return arr;
};

export const handleBookings = ({
  bookings,
  year,
}: IHandleBookings): {
  halfDays: blockedDaysType;
  bookedDays: blockedDaysType;
} => {
  const dates = formatBookingsData({ bookings, year });
  const bookedDays = getAllBookedDays({ dates });
  const halfDays = getAllHalfDays({ dates });

  return { halfDays, bookedDays };
};

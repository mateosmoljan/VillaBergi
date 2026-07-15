const YEAR = 2026;
const OPEN_MONTHS = [1, 2, 3, 4, 11, 12];

function daysInMonth(month: number) {
  return new Date(YEAR, month, 0).getDate();
}

export function getNightlyRate2026(date: Date): number | null {
  if (date.getFullYear() !== YEAR) return null;

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 1) return day === 1 ? 797 : day <= 6 ? 249 : 179;
  if (month === 2) return 169;
  if (month === 3) return 189;
  if (month === 4) return day >= 2 && day <= 6 ? 279 : 209;
  if (month === 11) return 169;
  if (month === 12) {
    if (day <= 16) return 179;
    if (day <= 23) return 249;
    if (day <= 26) return 349;
    if (day <= 29) return 529;
    return 797;
  }

  return null;
}

export function isVillaOpenDate(date: Date) {
  return OPEN_MONTHS.includes(date.getMonth() + 1);
}

export function isVillaOpenForStay(arrivalISO: string, departureISO: string) {
  if (!arrivalISO || !departureISO) return false;
  const arrival = new Date(`${arrivalISO}T12:00:00`);
  const departure = new Date(`${departureISO}T12:00:00`);
  if (Number.isNaN(arrival.getTime()) || Number.isNaN(departure.getTime()) || departure <= arrival) return false;

  const cursor = new Date(arrival);
  while (cursor < departure) {
    if (!isVillaOpenDate(cursor)) return false;
    cursor.setDate(cursor.getDate() + 1);
  }

  return true;
}

export function estimateStay2026(arrivalISO: string, departureISO: string) {
  const arrival = new Date(`${arrivalISO}T12:00:00`);
  const departure = new Date(`${departureISO}T12:00:00`);
  if (!arrivalISO || !departureISO || departure <= arrival) return null;

  let total = 0;
  let nights = 0;
  const cursor = new Date(arrival);
  while (cursor < departure && nights < 62) {
    const rate = getNightlyRate2026(cursor);
    if (rate === null) return null;
    total += rate;
    nights += 1;
    cursor.setDate(cursor.getDate() + 1);
  }

  return nights > 0 && cursor.getTime() === departure.getTime() ? { nights, total } : null;
}

export function getMonthlyRanges2026() {
  return OPEN_MONTHS.map((month) => {
    const index = month - 1;
    const rates = Array.from({ length: daysInMonth(month) }, (_, day) =>
      getNightlyRate2026(new Date(YEAR, index, day + 1))
    ).filter((rate): rate is number => rate !== null);
    return { month, minimum: Math.min(...rates), maximum: Math.max(...rates) };
  });
}

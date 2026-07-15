const YEAR = 2026;

const seasonalAnchors: Record<number, { startTotal: number; endTotal: number }> = {
  5: { startTotal: 1583, endTotal: 2150 },
  6: { startTotal: 3018, endTotal: 4206 },
  7: { startTotal: 5118, endTotal: 6700 },
  8: { startTotal: 6700, endTotal: 4945 },
  9: { startTotal: 3067, endTotal: 1895 },
  10: { startTotal: 1835, endTotal: 1835 },
};

function daysInMonth(month: number) {
  return new Date(YEAR, month, 0).getDate();
}

export function getNightlyRate2026(date: Date): number | null {
  if (date.getFullYear() !== YEAR) return null;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const anchor = seasonalAnchors[month];

  if (anchor) {
    const start = anchor.startTotal / 7;
    const end = anchor.endTotal / 7;
    const totalDays = daysInMonth(month);
    if (day <= 7) return start;
    if (day > totalDays - 7) return end;
    const transitionStart = 7;
    const transitionEnd = totalDays - 6;
    const progress = (day - transitionStart) / (transitionEnd - transitionStart);
    return start + (end - start) * progress;
  }

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
  return Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const rates = Array.from({ length: daysInMonth(month) }, (_, day) =>
      getNightlyRate2026(new Date(YEAR, index, day + 1))
    ).filter((rate): rate is number => rate !== null);
    return { month, minimum: Math.min(...rates), maximum: Math.max(...rates) };
  });
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  // return year != 0 && Math.random() > 0.5;
}
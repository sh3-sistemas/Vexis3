export const calculateYears = (start: number, end: number): Array<number> => {
  const years = [];

  for (let i = start; i <= start + end; i += 1) {
    years.push(i);
  }

  return years;
};

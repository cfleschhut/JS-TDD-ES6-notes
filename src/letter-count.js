export const getLetterCount = (string) =>
  string.split('').reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1,
    }),
    {}
  );

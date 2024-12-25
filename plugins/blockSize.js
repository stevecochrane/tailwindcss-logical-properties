module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      bs: (value) => ({
        blockSize: value,
      }),
    },
    { values: theme("height") },
  );
};

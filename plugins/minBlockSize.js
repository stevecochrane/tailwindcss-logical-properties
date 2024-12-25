module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "min-bs": (value) => ({
        minBlockSize: value,
      }),
    },
    { values: theme("minHeight") },
  );
};

module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "max-bs": (value) => ({
        maxBlockSize: value,
      }),
    },
    { values: theme("maxHeight") },
  );
};

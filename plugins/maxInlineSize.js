module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "max-is": (value) => ({
        maxInlineSize: value,
      }),
    },
    { values: theme("maxWidth") },
  );
};

module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "min-is": (value) => ({
        minInlineSize: value,
      }),
    },
    { values: theme("minWidth") },
  );
};

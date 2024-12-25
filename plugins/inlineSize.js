module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      is: (value) => ({
        inlineSize: value,
      }),
    },
    { values: theme("width") },
  );
};

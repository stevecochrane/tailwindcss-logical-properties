module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "border-lb": (value) => ({
        "border-block-start-color": value,
        "border-block-end-color": value,
      }),
      "border-li": (value) => ({
        "border-inline-start-color": value,
        "border-inline-end-color": value,
      }),
    },
    { values: theme("borderColor") },
  );
  matchUtilities(
    {
      "border-bs": (value) => ({
        "border-block-start-color": value,
      }),
      "border-be": (value) => ({
        "border-block-end-color": value,
      }),
      "border-is": (value) => ({
        "border-inline-start-color": value,
      }),
      "border-ie": (value) => ({
        "border-inline-end-color": value,
      }),
    },
    { values: theme("borderColor") },
  );
};

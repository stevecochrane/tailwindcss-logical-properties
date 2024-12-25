module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "border-lb": (value) => ({
        borderBlockStartWidth: value,
        borderBlockEndWidth: value,
      }),
      "border-li": (value) => ({
        borderInlineStartWidth: value,
        borderInlineEndWidth: value,
      }),
    },
    { values: theme("borderWidth") },
  );
  matchUtilities(
    {
      "border-bs": (value) => ({
        borderBlockStartWidth: value,
      }),
      "border-be": (value) => ({
        borderBlockEndWidth: value,
      }),
      "border-is": (value) => ({
        borderInlineStartWidth: value,
      }),
      "border-ie": (value) => ({
        borderInlineEndWidth: value,
      }),
    },
    { values: theme("borderWidth") },
  );
};

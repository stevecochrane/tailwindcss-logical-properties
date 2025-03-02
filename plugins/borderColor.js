const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = function ({ matchUtilities, theme }) {
  // eslint-disable-next-line no-unused-vars
  let flattenedColorPalette = (({ DEFAULT: _, ...colors }) => colors)(
    flattenColorPalette(theme("borderColor")),
  );

  let valuesAsCustomProperties = {};

  for (const property in flattenedColorPalette) {
    valuesAsCustomProperties[property] = `var(--color-${property})`;
  }

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
    { values: valuesAsCustomProperties },
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
    { values: valuesAsCustomProperties },
  );
};

const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = function ({ matchUtilities, theme }) {
  /*
    If we just use theme("borderColor") like in our other plugins, that will give us the values of the colors
    (e.g. `oklch(0.637 0.237 25.331)`) rather than the custom properties. (e.g. `var(--color-red-50)`).
    We want custom properties so if users customize the property values, these utilities reflect the new values.
  */

  // eslint-disable-next-line no-unused-vars
  const flattenedColorPalette = (({ DEFAULT: _, ...colors }) => colors)(
    flattenColorPalette(theme("borderColor")),
  );

  const valuesAsCustomProperties = {};

  for (const property in flattenedColorPalette) {
    valuesAsCustomProperties[property] = `var(--color-${property})`;
  }

  // In Tailwind v3 these were included in the theme, but that no longer seems to be the case in v4.
  valuesAsCustomProperties["current"] = "currentColor";
  valuesAsCustomProperties["inherit"] = "inherit";
  valuesAsCustomProperties["transparent"] = "transparent";

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

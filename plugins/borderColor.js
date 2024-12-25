const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;
const toColorValue = require("tailwindcss/lib/util/toColorValue").default;
const withAlphaVariable =
  require("tailwindcss/lib/util/withAlphaVariable").default;

module.exports = function ({ corePlugins, matchUtilities, theme }) {
  matchUtilities(
    {
      "border-lb": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-block-start-color": toColorValue(value),
            "border-block-end-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: ["border-block-start-color", "border-block-end-color"],
          variable: "--tw-border-opacity",
        });
      },
      "border-li": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-inline-start-color": toColorValue(value),
            "border-inline-end-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: ["border-inline-start-color", "border-inline-end-color"],
          variable: "--tw-border-opacity",
        });
      },
    },
    {
      // eslint-disable-next-line no-unused-vars
      values: (({ DEFAULT: _, ...colors }) => colors)(
        flattenColorPalette(theme("borderColor")),
      ),
      type: "color",
    },
  );
  matchUtilities(
    {
      "border-bs": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-block-start-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: "border-block-start-color",
          variable: "--tw-border-opacity",
        });
      },
      "border-be": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-block-end-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: "border-block-end-color",
          variable: "--tw-border-opacity",
        });
      },
      "border-is": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-inline-start-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: "border-inline-start-color",
          variable: "--tw-border-opacity",
        });
      },
      "border-ie": (value) => {
        if (!corePlugins("borderOpacity")) {
          return {
            "border-inline-end-color": toColorValue(value),
          };
        }

        return withAlphaVariable({
          color: value,
          property: "border-inline-end-color",
          variable: "--tw-border-opacity",
        });
      },
    },
    {
      // eslint-disable-next-line no-unused-vars
      values: (({ DEFAULT: _, ...colors }) => colors)(
        flattenColorPalette(theme("borderColor")),
      ),
      type: "color",
    },
  );
};

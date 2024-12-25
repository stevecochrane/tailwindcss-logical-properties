module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "inset-block": (value) => ({
        insetBlock: value,
      }),
      "inset-inline": (value) => ({
        insetInline: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("inset"),
    },
  );
  matchUtilities(
    {
      "block-start": (value) => ({
        insetBlockStart: value,
      }),
      "block-end": (value) => ({
        insetBlockEnd: value,
      }),
      "inline-start": (value) => ({
        insetInlineStart: value,
      }),
      "inline-end": (value) => ({
        insetInlineEnd: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("inset"),
    },
  );
};

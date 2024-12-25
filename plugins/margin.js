module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      mlb: (value) => ({
        marginBlock: value,
      }),
      mli: (value) => ({
        marginInline: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("margin"),
    },
  );
  matchUtilities(
    {
      mbs: (value) => ({
        marginBlockStart: value,
      }),
      mbe: (value) => ({
        marginBlockEnd: value,
      }),
      mis: (value) => ({
        marginInlineStart: value,
      }),
      mie: (value) => ({
        marginInlineEnd: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("margin"),
    },
  );
};

module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      plb: (value) => ({
        paddingBlock: value,
      }),
      pli: (value) => ({
        paddingInline: value,
      }),
    },
    { values: theme("padding") },
  );
  matchUtilities(
    {
      pbs: (value) => ({
        paddingBlockStart: value,
      }),
      pbe: (value) => ({
        paddingBlockEnd: value,
      }),
      pis: (value) => ({
        paddingInlineStart: value,
      }),
      pie: (value) => ({
        paddingInlineEnd: value,
      }),
    },
    { values: theme("padding") },
  );
};

module.exports = function({ matchUtilities, theme }) {
  matchUtilities(
    {
      'rounded-bs': (value) => ({
        borderStartStartRadius: value,
        borderStartEndRadius: value
      }),
      'rounded-be': (value) => ({
        borderEndStartRadius: value,
        borderEndEndRadius: value
      }),
      'rounded-is': (value) => ({
        borderStartStartRadius: value,
        borderEndStartRadius: value
      }),
      'rounded-ie': (value) => ({
        borderStartEndRadius: value,
        borderEndEndRadius: value
      })
    },
    { values: theme('borderRadius') }
  );
};

module.exports = function ({ addUtilities, matchUtilities, theme }) {
  matchUtilities(
    {
      "space-b": (value) => ({
        "& > :not(:last-child)": {
          "--tw-space-b-reverse": "0",
          "margin-block-start": `calc(${value} * var(--tw-space-b-reverse))`,
          "margin-block-end": `calc(${value} * calc(1 - var(--tw-space-b-reverse)))`,
        },
      }),
      "space-i": (value) => ({
        "& > :not(:last-child)": {
          "--tw-space-i-reverse": "0",
          "margin-inline-start": `calc(${value} * var(--tw-space-i-reverse))`,
          "margin-inline-end": `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
        },
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("margin"),
    },
  );
  addUtilities({
    ".space-b-reverse > :not(:last-child)": {
      "--tw-space-b-reverse": "1",
    },
    ".space-i-reverse > :not(:last-child)": {
      "--tw-space-i-reverse": "1",
    },
  });
};

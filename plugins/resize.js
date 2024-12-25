module.exports = function ({ addUtilities }) {
  addUtilities({
    ".resize-block": { resize: "block" },
    ".resize-inline": { resize: "inline" },
  });
};

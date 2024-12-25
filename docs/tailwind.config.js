module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      fontSize: {
        rhythmLead: ["1.25rem", "1.6"],
      },
    },
  },
  plugins: [require("../index.js")],
};

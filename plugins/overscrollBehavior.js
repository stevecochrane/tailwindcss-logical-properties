module.exports = function ({ addUtilities }) {
  addUtilities({
    ".overscroll-b-auto": { overscrollBehaviorBlock: "auto" },
    ".overscroll-b-contain": { overscrollBehaviorBlock: "contain" },
    ".overscroll-b-none": { overscrollBehaviorBlock: "none" },
    ".overscroll-i-auto": { overscrollBehaviorInline: "auto" },
    ".overscroll-i-contain": { overscrollBehaviorInline: "contain" },
    ".overscroll-i-none": { overscrollBehaviorInline: "none" },
  });
};

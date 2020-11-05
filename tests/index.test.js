const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const plugin = require('../index.js');

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss(options))
    .process('@tailwind utilities;', {
      from: undefined,
    })
    .then(result => result.css);
};

const nonconfigurableStyles = `
  .float-start {
    float: inline-start
  }

  .float-end {
    float: inline-end
  }

  .clear-start {
    clear: inline-start
  }

  .clear-end {
    clear: inline-end
  }

  .text-start {
    text-align: start
  }

  .text-end {
    text-align: end
  }

  .resize-block {
    resize: block
  }

  .resize-inline {
    resize: inline
  }
`;

test('float, clear, text-align and resize', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(nonconfigurableStyles);
    });
});

test('block-size, with default height and spacing configs', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .bs-0 {
          block-size: 0
        }

        .bs-1 {
          block-size: 0.25rem
        }

        .bs-2 {
          block-size: 0.5rem
        }

        .bs-3 {
          block-size: 0.75rem
        }

        .bs-4 {
          block-size: 1rem
        }

        .bs-5 {
          block-size: 1.25rem
        }

        .bs-6 {
          block-size: 1.5rem
        }

        .bs-8 {
          block-size: 2rem
        }

        .bs-10 {
          block-size: 2.5rem
        }

        .bs-12 {
          block-size: 3rem
        }

        .bs-16 {
          block-size: 4rem
        }

        .bs-20 {
          block-size: 5rem
        }

        .bs-24 {
          block-size: 6rem
        }

        .bs-32 {
          block-size: 8rem
        }

        .bs-40 {
          block-size: 10rem
        }

        .bs-48 {
          block-size: 12rem
        }

        .bs-56 {
          block-size: 14rem
        }

        .bs-64 {
          block-size: 16rem
        }

        .bs-auto {
          block-size: auto
        }

        .bs-px {
          block-size: 1px
        }

        .bs-full {
          block-size: 100%
        }

        .bs-screen {
          block-size: 100vh
        }
      `);
    });
});

test('min-block-size, with default minHeight config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minWidth: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .min-bs-0 {
          min-block-size: 0
        }

        .min-bs-full {
          min-block-size: 100%
        }

        .min-bs-screen {
          min-block-size: 100vh
        }
      `);
    });
});

test('max-block-size, with default maxHeight config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .max-bs-full {
          max-block-size: 100%
        }

        .max-bs-screen {
          max-block-size: 100vh
        }
      `);
    });
});

// test('inline-size, with default width and spacing configs', () => {
//   return generatePluginCss({
//       corePlugins: false,
//       theme: {
//         borderRadius: {},
//         borderWidth: {},
//         height: {},
//         inset: {},
//         margin: {},
//         maxHeight: {},
//         maxWidth: {},
//         minHeight: {},
//         minWidth: {},
//         padding: {}
//       },
//       plugins: [ plugin ],
//       variants: []
//     })
//     .then(css => {
//       expect(css).toMatchCss(`
//         ${nonconfigurableStyles}
//
//         .is-0 {
//           inline-size: 0
//         }
//
//         .is-1 {
//           inline-size: 0.25rem
//         }
//
//         .is-2 {
//           inline-size: 0.5rem
//         }
//
//         .is-3 {
//           inline-size: 0.75rem
//         }
//
//         .is-4 {
//           inline-size: 1rem
//         }
//
//         .is-5 {
//           inline-size: 1.25rem
//         }
//
//         .is-6 {
//           inline-size: 1.5rem
//         }
//
//         .is-8 {
//           inline-size: 2rem
//         }
//
//         .is-10 {
//           inline-size: 2.5rem
//         }
//
//         .is-12 {
//           inline-size: 3rem
//         }
//
//         .is-16 {
//           inline-size: 4rem
//         }
//
//         .is-20 {
//           inline-size: 5rem
//         }
//
//         .is-24 {
//           inline-size: 6rem
//         }
//
//         .is-32 {
//           inline-size: 8rem
//         }
//
//         .is-40 {
//           inline-size: 10rem
//         }
//
//         .is-48 {
//           inline-size: 12rem
//         }
//
//         .is-56 {
//           inline-size: 14rem
//         }
//
//         .is-64 {
//           inline-size: 16rem
//         }
//
//         .is-auto {
//           inline-size: auto
//         }
//
//         .is-px {
//           inline-size: 1px
//         }
//
//         .is-1\/2 {
//           inline-size: 50%
//         }
//
//         .is-1\/3 {
//           inline-size: 33.333333%
//         }
//
//         .is-2\/3 {
//           inline-size: 66.666667%
//         }
//
//         .is-1\/4 {
//           inline-size: 25%
//         }
//
//         .is-2\/4 {
//           inline-size: 50%
//         }
//
//         .is-3\/4 {
//           inline-size: 75%
//         }
//
//         .is-1\/5 {
//           inline-size: 20%
//         }
//
//         .is-2\/5 {
//           inline-size: 40%
//         }
//
//         .is-3\/5 {
//           inline-size: 60%
//         }
//
//         .is-4\/5 {
//           inline-size: 80%
//         }
//
//         .is-1\/6 {
//           inline-size: 16.666667%
//         }
//
//         .is-2\/6 {
//           inline-size: 33.333333%
//         }
//
//         .is-3\/6 {
//           inline-size: 50%
//         }
//
//         .is-4\/6 {
//           inline-size: 66.666667%
//         }
//
//         .is-5\/6 {
//           inline-size: 83.333333%
//         }
//
//         .is-1\/12 {
//           inline-size: 8.333333%
//         }
//
//         .is-2\/12 {
//           inline-size: 16.666667%
//         }
//
//         .is-3\/12 {
//           inline-size: 25%
//         }
//
//         .is-4\/12 {
//           inline-size: 33.333333%
//         }
//
//         .is-5\/12 {
//           inline-size: 41.666667%
//         }
//
//         .is-6\/12 {
//           inline-size: 50%
//         }
//
//         .is-7\/12 {
//           inline-size: 58.333333%
//         }
//
//         .is-8\/12 {
//           inline-size: 66.666667%
//         }
//
//         .is-9\/12 {
//           inline-size: 75%
//         }
//
//         .is-10\/12 {
//           inline-size: 83.333333%
//         }
//
//         .is-11\/12 {
//           inline-size: 91.666667%
//         }
//
//         .is-full {
//           inline-size: 100%
//         }
//
//         .is-screen {
//           inline-size: 100vw
//         }
//       `);
//     });
// });

test('min-inline-size, with default minWidth config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .min-is-0 {
          min-inline-size: 0
        }

        .min-is-full {
          min-inline-size: 100%
        }
      `);
    });
});

test('max-inline-size, with default maxWidth config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .max-is-none {
          max-inline-size: none
        }

        .max-is-xs {
          max-inline-size: 20rem
        }

        .max-is-sm {
          max-inline-size: 24rem
        }

        .max-is-md {
          max-inline-size: 28rem
        }

        .max-is-lg {
          max-inline-size: 32rem
        }

        .max-is-xl {
          max-inline-size: 36rem
        }

        .max-is-2xl {
          max-inline-size: 42rem
        }

        .max-is-3xl {
          max-inline-size: 48rem
        }

        .max-is-4xl {
          max-inline-size: 56rem
        }

        .max-is-5xl {
          max-inline-size: 64rem
        }

        .max-is-6xl {
          max-inline-size: 72rem
        }

        .max-is-full {
          max-inline-size: 100%
        }

        .max-is-screen-sm {
          max-inline-size: 640px
        }

        .max-is-screen-md {
          max-inline-size: 768px
        }

        .max-is-screen-lg {
          max-inline-size: 1024px
        }

        .max-is-screen-xl {
          max-inline-size: 1280px
        }
      `);
    });
});

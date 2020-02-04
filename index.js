module.exports = function (variants) {
  return function ({ addUtilities, theme, variants, e }) {
    const height = Object.entries(theme('height'));
    const inset = Object.entries(theme('inset'));
    const spacing = Object.entries(theme('spacing'));
    const width = Object.entries(theme('width'));

    const captionSideUtilities = {
      '.caption-side-is': { captionSide: 'inline-start' },
      '.caption-size-ie': { captionSide: 'inline-end' }
    };

    const floatUtilities = {
      '.float-is': { float: 'inline-start' },
      '.float-ie': { float: 'inline-end' }
    };

    const clearUtilities = {
      '.clear-is': { clear: 'inline-start' },
      '.clear-ie': { clear: 'inline-end' }
    };

    const textAlignUtilities = {
      '.text-start': { textAlign: 'start' },
      '.text-end': { textAlign: 'end' }
    };

    const resizeUtilities = {
      '.resize-block': { resize: 'block' },
      '.resize-inline': { resize: 'inline' }
    };

    const blockSizeUtilities = width.map(([key, value]) => (
      {
        [`.${e(`bs-${key}`)}`]: {
          blockSize: value
        }
      }
    ));

    const inlineSizeUtilities = height.map(([key, value]) => (
      {
        [`.${e(`is-${key}`)}`]: {
          inlineSize: value
        }
      }
    ));

    const marginBlockStartUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`mbs-${key}`)}`]: {
          marginBlockStart: value
        }
      }
    ));

    const marginBlockEndUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`mbe-${key}`)}`]: {
          marginBlockEnd: value
        }
      }
    ));

    const marginInlineStartUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`mis-${key}`)}`]: {
          marginInlineStart: value
        }
      }
    ));

    const marginInlineEndUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`mie-${key}`)}`]: {
          marginInlineEnd: value
        }
      }
    ));

    const paddingBlockStartUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`pbs-${key}`)}`]: {
          paddingBlockStart: value
        }
      }
    ));

    const paddingBlockEndUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`pbe-${key}`)}`]: {
          paddingBlockEnd: value
        }
      }
    ));

    const paddingInlineStartUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`pis-${key}`)}`]: {
          paddingInlineStart: value
        }
      }
    ));

    const paddingInlineEndUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`pie-${key}`)}`]: {
          paddingInlineEnd: value
        }
      }
    ));

    const insetBlockStartUtilities = inset.map(([key, value]) => (
      {
        [`.${e(`inset-block-start-${key}`)}`]: {
          insetBlockStart: value
        }
      }
    ));

    const insetBlockEndUtilities = inset.map(([key, value]) => (
      {
        [`.${e(`inset-block-end-${key}`)}`]: {
          insetBlockEnd: value
        }
      }
    ));

    const insetInlineStartUtilities = inset.map(([key, value]) => (
      {
        [`.${e(`inset-inline-start-${key}`)}`]: {
          insetInlineStart: value
        }
      }
    ));

    const insetInlineEndUtilities = inset.map(([key, value]) => (
      {
        [`.${e(`inset-inline-end-${key}`)}`]: {
          insetInlineEnd: value
        }
      }
    ));

    addUtilities(captionSideUtilities, variants('logical'));
    addUtilities(floatUtilities, variants('logical'));
    addUtilities(clearUtilities, variants('logical'));
    addUtilities(textAlignUtilities, variants('logical'));
    addUtilities(resizeUtilities, variants('logical'));

    addUtilities(blockSizeUtilities, variants('logical'));
    addUtilities(inlineSizeUtilities, variants('logical'));

    addUtilities(marginBlockStartUtilities, variants('logical'));
    addUtilities(marginBlockEndUtilities, variants('logical'));
    addUtilities(marginInlineStartUtilities, variants('logical'));
    addUtilities(marginInlineEndUtilities, variants('logical'));

    addUtilities(paddingBlockStartUtilities, variants('logical'));
    addUtilities(paddingBlockEndUtilities, variants('logical'));
    addUtilities(paddingInlineStartUtilities, variants('logical'));
    addUtilities(paddingInlineEndUtilities, variants('logical'));

    addUtilities(insetBlockStartUtilities, variants('logical'));
    addUtilities(insetBlockEndUtilities, variants('logical'));
    addUtilities(insetInlineStartUtilities, variants('logical'));
    addUtilities(insetInlineEndUtilities, variants('logical'));
  };
};

const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

const plugin = require("../index.js");

const blockSizeStyles = require("./output/blockSize");
const borderColorStyles = require("./output/borderColor");
const borderColorPseudoSelectorStyles = require("./output/borderColor-pseudoSelectors");
const borderColorWithBorderOpacityStyles = require("./output/borderColor-borderOpacity");
const borderColorWithBorderOpacityPseudoSelectorStyles = require("./output/borderColor-borderOpacity-pseudoSelectors");
const borderRadiusStyles = require("./output/borderRadius");
const borderWidthStyles = require("./output/borderWidth");
const divideWidthStyles = require("./output/divideWidth");
const divideWidthReverseStyles = require("./output/divideWidth-reverse");
const inlineSizeStyles = require("./output/inlineSize");
const insetStyles = require("./output/inset");
const marginStyles = require("./output/margin");
const maxBlockSizeStyles = require("./output/maxBlockSize");
const maxInlineSizeStyles = require("./output/maxInlineSize");
const minBlockSizeStyles = require("./output/minBlockSize");
const minInlineSizeStyles = require("./output/minInlineSize");
const nonconfigurableStyles = require("./output/nonconfigurable");
const paddingStyles = require("./output/padding");
const spaceBetweenStyles = require("./output/spaceBetween");
const spaceBetweenReverseStyles = require("./output/spaceBetween-reverse");

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss(options))
    .process("@tailwind utilities;", {
      from: undefined,
    })
    .then((result) => result.css);
};

const getBaseConfig = () => {
  return {
    content: ["./tests/templates/*.html"],
    corePlugins: false,
    plugins: [plugin],
    theme: {
      borderColor: {},
      borderRadius: {},
      borderWidth: {},
      color: {},
      divideWidth: {},
      height: {},
      inset: {},
      margin: {},
      maxHeight: {},
      maxWidth: {},
      minHeight: {},
      minWidth: {},
      padding: {},
      space: {},
      spacing: {},
      width: {},
    },
  };
};

describe("resize and overscroll-behavior", () => {
  const testNonconfigurableStyles = (config) => {
    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testNonconfigurableStyles(getBaseConfig()));
});

describe("block-size, with default height and spacing configs", () => {
  const testBlockSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.height;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${blockSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testBlockSize(getBaseConfig()));
});

describe("min-block-size, with default minHeight config", () => {
  const testMinBlockSize = (config) => {
    delete config.theme.minHeight;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${minBlockSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testMinBlockSize(getBaseConfig()));
});

describe("max-block-size, with default maxHeight and spacing configs", () => {
  const testMaxBlockSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.maxHeight;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${maxBlockSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testMaxBlockSize(getBaseConfig()));
});

describe("inline-size, with default width and spacing configs", () => {
  const testInlineSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.width;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${inlineSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testInlineSize(getBaseConfig()));
});

describe("min-inline-size, with default minWidth config", () => {
  const testMinInlineSize = (config) => {
    delete config.theme.minWidth;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${minInlineSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testMinInlineSize(getBaseConfig()));
});

describe("max-inline-size, with default maxWidth config", () => {
  const testMaxInlineSize = (config) => {
    delete config.theme.maxWidth;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${maxInlineSizeStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testMaxInlineSize(getBaseConfig()));
});

describe("margin shorthand and single-side, with default margin and spacing configs", () => {
  const testMargin = (config) => {
    delete config.theme.spacing;
    delete config.theme.margin;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${marginStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testMargin(getBaseConfig()));
});

describe("padding shorthand and single-side, with default padding and spacing configs", () => {
  const testPadding = (config) => {
    delete config.theme.spacing;
    delete config.theme.padding;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${paddingStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testPadding(getBaseConfig()));
});

describe("space between, with default space and spacing configs", () => {
  const testSpaceBetween = (config) => {
    delete config.theme.spacing;
    delete config.theme.space;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testSpaceBetween(getBaseConfig()));
});

describe("inset shorthand and single-side, with default inset and spacing configs", () => {
  const testInset = (config) => {
    delete config.theme.spacing;
    delete config.theme.inset;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${insetStyles}
          ${divideWidthReverseStyles}
        `);
    });
  };

  test("default mode", () => testInset(getBaseConfig()));
});

describe("border-width, with default borderWidth config", () => {
  const testBorderWidth = (config) => {
    delete config.theme.borderWidth;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
          ${borderWidthStyles}
        `);
    });
  };

  test("default mode", () => testBorderWidth(getBaseConfig()));
});

describe("border-color, with default borderColor config", () => {
  test("default mode", () => {
    let config = getBaseConfig();
    delete config.theme.color;
    delete config.theme.borderColor;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
          ${borderColorStyles}
          ${borderColorPseudoSelectorStyles}
        `);
    });
  });

  test("With borderOpacity core plugin enabled", () => {
    let config = getBaseConfig();
    config.corePlugins = ["borderOpacity"];
    delete config.theme.color;
    delete config.theme.borderColor;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
          ${borderColorWithBorderOpacityStyles}
          ${borderColorWithBorderOpacityPseudoSelectorStyles}
        `);
    });
  });
});

describe("border-radius side and corner, with default borderRadius config", () => {
  const testBorderRadius = (config) => {
    delete config.theme.borderRadius;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
          ${borderRadiusStyles}
        `);
    });
  };

  test("default mode", () => testBorderRadius(getBaseConfig()));
});

describe("divide width, with default divideWidth and borderWidth configs", () => {
  const testDivideWidth = (config) => {
    delete config.theme.borderWidth;
    delete config.theme.divideWidth;

    return generatePluginCss(config).then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthStyles}
          ${divideWidthReverseStyles}
          ${borderWidthStyles}
        `);
    });
  };

  test("default mode", () => testDivideWidth(getBaseConfig()));
});

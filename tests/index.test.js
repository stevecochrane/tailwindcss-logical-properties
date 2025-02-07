const postcss = require("postcss");
const postcssImport = require("postcss-import");
const tailwindcss = require("@tailwindcss/postcss");

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
const staticKeyframesStyles = require("./output/staticKeyframes");
const staticThemeAndBaseStyles = require("./output/staticThemeAndBase.js");

const generatePluginCss = (templateDirectory) => {
  return postcss([postcssImport, tailwindcss()])
    .process(
      `@import "tailwindcss" source("./templates/${templateDirectory}"); @plugin "../index.js";`,
      {
        from: "./tests/templates",
      },
    )
    .then((result) => result.css);
};

describe.skip("resize and overscroll-behavior", () => {
  const testNonconfigurableStyles = () => {
    return generatePluginCss("nonconfigurable").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${nonconfigurableStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testNonconfigurableStyles());
});

describe("block-size, with default height and spacing configs", () => {
  const testBlockSize = () => {
    return generatePluginCss("blockSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${blockSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testBlockSize());
});

describe.skip("min-block-size, with default minHeight config", () => {
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

  test("default mode", () => testMinBlockSize());
});

describe.skip("max-block-size, with default maxHeight and spacing configs", () => {
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

  test("default mode", () => testMaxBlockSize());
});

describe.skip("inline-size, with default width and spacing configs", () => {
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

  test("default mode", () => testInlineSize());
});

describe.skip("min-inline-size, with default minWidth config", () => {
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

  test("default mode", () => testMinInlineSize());
});

describe.skip("max-inline-size, with default maxWidth config", () => {
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

  test("default mode", () => testMaxInlineSize());
});

describe.skip("margin shorthand and single-side, with default margin and spacing configs", () => {
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

  test("default mode", () => testMargin());
});

describe.skip("padding shorthand and single-side, with default padding and spacing configs", () => {
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

  test("default mode", () => testPadding());
});

describe.skip("space between, with default space and spacing configs", () => {
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

  test("default mode", () => testSpaceBetween());
});

describe.skip("inset shorthand and single-side, with default inset and spacing configs", () => {
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

  test("default mode", () => testInset());
});

describe.skip("border-width, with default borderWidth config", () => {
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

  test("default mode", () => testBorderWidth());
});

describe.skip("border-color, with default borderColor config", () => {
  test("default mode", () => {
    // let config = getBaseConfig();
    // delete config.theme.color;
    // delete config.theme.borderColor;

    // return generatePluginCss(config).then((css) => {
    return generatePluginCss().then((css) => {
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
    // let config = getBaseConfig();
    // config.corePlugins = ["borderOpacity"];
    // delete config.theme.color;
    // delete config.theme.borderColor;

    // return generatePluginCss(config).then((css) => {
    return generatePluginCss().then((css) => {
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

describe.skip("border-radius side and corner, with default borderRadius config", () => {
  // const testBorderRadius = (config) => {
  const testBorderRadius = () => {
    // delete config.theme.borderRadius;

    // return generatePluginCss(config).then((css) => {
    return generatePluginCss().then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthReverseStyles}
          ${borderRadiusStyles}
        `);
    });
  };

  test("default mode", () => testBorderRadius());
});

describe.skip("divide width, with default divideWidth and borderWidth configs", () => {
  // const testDivideWidth = (config) => {
  const testDivideWidth = () => {
    //   delete config.theme.borderWidth;
    //   delete config.theme.divideWidth;

    return generatePluginCss().then((css) => {
      expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenReverseStyles}
          ${divideWidthStyles}
          ${divideWidthReverseStyles}
          ${borderWidthStyles}
        `);
    });
  };

  test("default mode", () => testDivideWidth());
});

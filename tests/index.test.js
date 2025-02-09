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
const inlineSizeStyles = require("./output/inlineSize");
const insetStyles = require("./output/inset");
const marginStyles = require("./output/margin");
const maxBlockSizeStyles = require("./output/maxBlockSize");
const maxInlineSizeStyles = require("./output/maxInlineSize");
const minBlockSizeStyles = require("./output/minBlockSize");
const minInlineSizeStyles = require("./output/minInlineSize");
const nonconfigurableStyles = require("./output/nonconfigurable");
const paddingStyles = require("./output/padding");
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

describe.skip("block-size", () => {
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

describe.skip("min-block-size", () => {
  const testMinBlockSize = () => {
    return generatePluginCss("minBlockSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${minBlockSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testMinBlockSize());
});

describe.skip("max-block-size", () => {
  const testMaxBlockSize = () => {
    return generatePluginCss("maxBlockSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${maxBlockSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testMaxBlockSize());
});

describe.skip("inline-size", () => {
  const testInlineSize = () => {
    return generatePluginCss("inlineSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${inlineSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testInlineSize());
});

describe.skip("min-inline-size", () => {
  const testMinInlineSize = () => {
    return generatePluginCss("minInlineSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${minInlineSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testMinInlineSize());
});

describe.skip("max-inline-size", () => {
  const testMaxInlineSize = () => {
    return generatePluginCss("maxInlineSize").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${maxInlineSizeStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testMaxInlineSize());
});

describe.skip("margin shorthand and single-side", () => {
  const testMargin = () => {
    return generatePluginCss("margin").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${marginStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testMargin());
});

describe.skip("padding shorthand and single-side", () => {
  const testPadding = () => {
    return generatePluginCss("padding").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${paddingStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testPadding());
});

describe.skip("inset shorthand and single-side", () => {
  const testInset = () => {
    return generatePluginCss("inset").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${insetStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testInset());
});

describe.skip("border-width", () => {
  const testBorderWidth = () => {
    return generatePluginCss("borderWidth").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${borderWidthStyles}
          ${staticKeyframesStyles}
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
          ${borderColorWithBorderOpacityStyles}
          ${borderColorWithBorderOpacityPseudoSelectorStyles}
        `);
    });
  });
});

describe("border-radius side and corner", () => {
  const testBorderRadius = () => {
    return generatePluginCss("borderRadius").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${borderRadiusStyles}
          ${staticKeyframesStyles}
        `);
    });
  };

  test("default mode", () => testBorderRadius());
});

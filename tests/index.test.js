const postcss = require("postcss");
const postcssImport = require("postcss-import");
const tailwindcss = require("@tailwindcss/postcss");

const blockSizeStyles = require("./output/blockSize");
const borderColorStyles = require("./output/borderColor");
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
      expect(css).toMatchCss(nonconfigurableStyles);
    });
  };

  test("default mode", () => testNonconfigurableStyles());
});

describe.skip("block-size", () => {
  const testBlockSize = () => {
    return generatePluginCss("blockSize").then((css) => {
      expect(css).toMatchCss(blockSizeStyles);
    });
  };

  test("default mode", () => testBlockSize());
});

describe.skip("min-block-size", () => {
  const testMinBlockSize = () => {
    return generatePluginCss("minBlockSize").then((css) => {
      expect(css).toMatchCss(minBlockSizeStyles);
    });
  };

  test("default mode", () => testMinBlockSize());
});

describe.skip("max-block-size", () => {
  const testMaxBlockSize = () => {
    return generatePluginCss("maxBlockSize").then((css) => {
      expect(css).toMatchCss(maxBlockSizeStyles);
    });
  };

  test("default mode", () => testMaxBlockSize());
});

describe("inline-size", () => {
  const testInlineSize = () => {
    return generatePluginCss("inlineSize").then((css) => {
      expect(css).toMatchCss(inlineSizeStyles);
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
        `);
    });
  };

  test("default mode", () => testBorderWidth());
});

describe.skip("border-color", () => {
  const testBorderColor = () => {
    return generatePluginCss("borderColor").then((css) => {
      expect(css).toMatchCss(borderColorStyles);
    });
  };

  test("default mode", () => testBorderColor());
});

describe.skip("border-radius side and corner", () => {
  const testBorderRadius = () => {
    return generatePluginCss("borderRadius").then((css) => {
      expect(css).toMatchCss(`
          ${staticThemeAndBaseStyles}
          ${borderRadiusStyles}
        `);
    });
  };

  test("default mode", () => testBorderRadius());
});

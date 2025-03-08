module.exports = `
  /*! tailwindcss v4.0.9 | MIT License | https://tailwindcss.com */
  @layer theme, base, components, utilities;
  @layer theme {
    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
      --color-red-50: oklch(0.971 0.013 17.38);
      --color-red-100: oklch(0.936 0.032 17.717);
      --color-red-200: oklch(0.885 0.062 18.334);
      --color-red-300: oklch(0.808 0.114 19.571);
      --color-red-400: oklch(0.704 0.191 22.216);
      --color-red-500: oklch(0.637 0.237 25.331);
      --color-red-600: oklch(0.577 0.245 27.325);
      --color-red-700: oklch(0.505 0.213 27.518);
      --color-red-800: oklch(0.444 0.177 26.899);
      --color-red-900: oklch(0.396 0.141 25.723);
      --color-yellow-50: oklch(0.987 0.026 102.212);
      --color-yellow-100: oklch(0.973 0.071 103.193);
      --color-yellow-200: oklch(0.945 0.129 101.54);
      --color-yellow-300: oklch(0.905 0.182 98.111);
      --color-yellow-400: oklch(0.852 0.199 91.936);
      --color-yellow-500: oklch(0.795 0.184 86.047);
      --color-yellow-600: oklch(0.681 0.162 75.834);
      --color-yellow-700: oklch(0.554 0.135 66.442);
      --color-yellow-800: oklch(0.476 0.114 61.907);
      --color-yellow-900: oklch(0.421 0.095 57.708);
      --color-green-50: oklch(0.982 0.018 155.826);
      --color-green-100: oklch(0.962 0.044 156.743);
      --color-green-200: oklch(0.925 0.084 155.995);
      --color-green-300: oklch(0.871 0.15 154.449);
      --color-green-400: oklch(0.792 0.209 151.711);
      --color-green-500: oklch(0.723 0.219 149.579);
      --color-green-600: oklch(0.627 0.194 149.214);
      --color-green-700: oklch(0.527 0.154 150.069);
      --color-green-800: oklch(0.448 0.119 151.328);
      --color-green-900: oklch(0.393 0.095 152.535);
      --color-blue-50: oklch(0.97 0.014 254.604);
      --color-blue-100: oklch(0.932 0.032 255.585);
      --color-blue-200: oklch(0.882 0.059 254.128);
      --color-blue-300: oklch(0.809 0.105 251.813);
      --color-blue-400: oklch(0.707 0.165 254.624);
      --color-blue-500: oklch(0.623 0.214 259.815);
      --color-blue-600: oklch(0.546 0.245 262.881);
      --color-blue-700: oklch(0.488 0.243 264.376);
      --color-blue-800: oklch(0.424 0.199 265.638);
      --color-blue-900: oklch(0.379 0.146 265.522);
      --color-indigo-50: oklch(0.962 0.018 272.314);
      --color-indigo-100: oklch(0.93 0.034 272.788);
      --color-indigo-200: oklch(0.87 0.065 274.039);
      --color-indigo-300: oklch(0.785 0.115 274.713);
      --color-indigo-400: oklch(0.673 0.182 276.935);
      --color-indigo-500: oklch(0.585 0.233 277.117);
      --color-indigo-600: oklch(0.511 0.262 276.966);
      --color-indigo-700: oklch(0.457 0.24 277.023);
      --color-indigo-800: oklch(0.398 0.195 277.366);
      --color-indigo-900: oklch(0.359 0.144 278.697);
      --color-purple-50: oklch(0.977 0.014 308.299);
      --color-purple-100: oklch(0.946 0.033 307.174);
      --color-purple-200: oklch(0.902 0.063 306.703);
      --color-purple-300: oklch(0.827 0.119 306.383);
      --color-purple-400: oklch(0.714 0.203 305.504);
      --color-purple-500: oklch(0.627 0.265 303.9);
      --color-purple-600: oklch(0.558 0.288 302.321);
      --color-purple-700: oklch(0.496 0.265 301.924);
      --color-purple-800: oklch(0.438 0.218 303.724);
      --color-purple-900: oklch(0.381 0.176 304.987);
      --color-pink-50: oklch(0.971 0.014 343.198);
      --color-pink-100: oklch(0.948 0.028 342.258);
      --color-pink-200: oklch(0.899 0.061 343.231);
      --color-pink-300: oklch(0.823 0.12 346.018);
      --color-pink-400: oklch(0.718 0.202 349.761);
      --color-pink-500: oklch(0.656 0.241 354.308);
      --color-pink-600: oklch(0.592 0.249 0.584);
      --color-pink-700: oklch(0.525 0.223 3.958);
      --color-pink-800: oklch(0.459 0.187 3.815);
      --color-pink-900: oklch(0.408 0.153 2.432);
      --color-gray-50: oklch(0.985 0.002 247.839);
      --color-gray-100: oklch(0.967 0.003 264.542);
      --color-gray-200: oklch(0.928 0.006 264.531);
      --color-gray-300: oklch(0.872 0.01 258.338);
      --color-gray-400: oklch(0.707 0.022 261.325);
      --color-gray-500: oklch(0.551 0.027 264.364);
      --color-gray-600: oklch(0.446 0.03 256.802);
      --color-gray-700: oklch(0.373 0.034 259.733);
      --color-gray-800: oklch(0.278 0.033 256.848);
      --color-gray-900: oklch(0.21 0.034 264.665);
      --color-black: #000;
      --color-white: #fff;
      --default-font-family: var(--font-sans);
      --default-font-feature-settings: var(--font-sans--font-feature-settings);
      --default-font-variation-settings: var(
        --font-sans--font-variation-settings
      );
      --default-mono-font-family: var(--font-mono);
      --default-mono-font-feature-settings: var(
        --font-mono--font-feature-settings
      );
      --default-mono-font-variation-settings: var(
        --font-mono--font-variation-settings
      );
    }
  }
  @layer base {
    *,
    ::after,
    ::before,
    ::backdrop,
    ::file-selector-button {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0 solid;
    }
    html,
    :host {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      tab-size: 4;
      font-family: var(
        --default-font-family,
        ui-sans-serif,
        system-ui,
        sans-serif,
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      );
      font-feature-settings: var(--default-font-feature-settings, normal);
      font-variation-settings: var(
        --default-font-variation-settings,
        normal
      );
      -webkit-tap-highlight-color: transparent;
    }
    body {
      line-height: inherit;
    }
    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px;
    }
    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      -webkit-text-decoration: inherit;
      text-decoration: inherit;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp,
    pre {
      font-family: var(
        --default-mono-font-family,
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        "Courier New",
        monospace
      );
      font-feature-settings: var(
        --default-mono-font-feature-settings,
        normal
      );
      font-variation-settings: var(
        --default-mono-font-variation-settings,
        normal
      );
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse;
    }
    :-moz-focusring {
      outline: auto;
    }
    progress {
      vertical-align: baseline;
    }
    summary {
      display: list-item;
    }
    ol,
    ul,
    menu {
      list-style: none;
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    button,
    input,
    select,
    optgroup,
    textarea,
    ::file-selector-button {
      font: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      letter-spacing: inherit;
      color: inherit;
      border-radius: 0;
      background-color: transparent;
      opacity: 1;
    }
    :where(select:is([multiple], [size])) optgroup {
      font-weight: bolder;
    }
    :where(select:is([multiple], [size])) optgroup option {
      padding-inline-start: 20px;
    }
    ::file-selector-button {
      margin-inline-end: 4px;
    }
    ::placeholder {
      opacity: 1;
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
    textarea {
      resize: vertical;
    }
    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-date-and-time-value {
      min-height: 1lh;
      text-align: inherit;
    }
    ::-webkit-datetime-edit {
      display: inline-flex;
    }
    ::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
    ::-webkit-datetime-edit,
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field,
    ::-webkit-datetime-edit-second-field,
    ::-webkit-datetime-edit-millisecond-field,
    ::-webkit-datetime-edit-meridiem-field {
      padding-block: 0;
    }
    :-moz-ui-invalid {
      box-shadow: none;
    }
    button,
    input:where([type="button"], [type="reset"], [type="submit"]),
    ::file-selector-button {
      appearance: button;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }
    [hidden]:where(:not([hidden="until-found"])) {
      display: none !important;
    }
  }
`;

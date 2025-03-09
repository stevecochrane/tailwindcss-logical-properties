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
  @layer utilities {
    .-inset-inline-0 {
      inset-inline: calc(0px * -1);
    }
    .-inset-inline-0\\.5 {
      inset-inline: calc(0.125rem * -1);
    }
    .-inset-inline-1 {
      inset-inline: calc(0.25rem * -1);
    }
    .-inset-inline-1\\.5 {
      inset-inline: calc(0.375rem * -1);
    }
    .-inset-inline-1\\/2 {
      inset-inline: calc(50% * -1);
    }
    .-inset-inline-1\\/3 {
      inset-inline: calc(33.333333% * -1);
    }
    .-inset-inline-1\\/4 {
      inset-inline: calc(25% * -1);
    }
    .-inset-inline-2 {
      inset-inline: calc(0.5rem * -1);
    }
    .-inset-inline-2\\.5 {
      inset-inline: calc(0.625rem * -1);
    }
    .-inset-inline-2\\/3 {
      inset-inline: calc(66.666667% * -1);
    }
    .-inset-inline-2\\/4 {
      inset-inline: calc(50% * -1);
    }
    .-inset-inline-3 {
      inset-inline: calc(0.75rem * -1);
    }
    .-inset-inline-3\\.5 {
      inset-inline: calc(0.875rem * -1);
    }
    .-inset-inline-3\\/4 {
      inset-inline: calc(75% * -1);
    }
    .-inset-inline-4 {
      inset-inline: calc(1rem * -1);
    }
    .-inset-inline-5 {
      inset-inline: calc(1.25rem * -1);
    }
    .-inset-inline-6 {
      inset-inline: calc(1.5rem * -1);
    }
    .-inset-inline-7 {
      inset-inline: calc(1.75rem * -1);
    }
    .-inset-inline-8 {
      inset-inline: calc(2rem * -1);
    }
    .-inset-inline-9 {
      inset-inline: calc(2.25rem * -1);
    }
    .-inset-inline-10 {
      inset-inline: calc(2.5rem * -1);
    }
    .-inset-inline-11 {
      inset-inline: calc(2.75rem * -1);
    }
    .-inset-inline-12 {
      inset-inline: calc(3rem * -1);
    }
    .-inset-inline-14 {
      inset-inline: calc(3.5rem * -1);
    }
    .-inset-inline-16 {
      inset-inline: calc(4rem * -1);
    }
    .-inset-inline-20 {
      inset-inline: calc(5rem * -1);
    }
    .-inset-inline-24 {
      inset-inline: calc(6rem * -1);
    }
    .-inset-inline-28 {
      inset-inline: calc(7rem * -1);
    }
    .-inset-inline-32 {
      inset-inline: calc(8rem * -1);
    }
    .-inset-inline-36 {
      inset-inline: calc(9rem * -1);
    }
    .-inset-inline-40 {
      inset-inline: calc(10rem * -1);
    }
    .-inset-inline-44 {
      inset-inline: calc(11rem * -1);
    }
    .-inset-inline-48 {
      inset-inline: calc(12rem * -1);
    }
    .-inset-inline-52 {
      inset-inline: calc(13rem * -1);
    }
    .-inset-inline-56 {
      inset-inline: calc(14rem * -1);
    }
    .-inset-inline-60 {
      inset-inline: calc(15rem * -1);
    }
    .-inset-inline-64 {
      inset-inline: calc(16rem * -1);
    }
    .-inset-inline-72 {
      inset-inline: calc(18rem * -1);
    }
    .-inset-inline-80 {
      inset-inline: calc(20rem * -1);
    }
    .-inset-inline-96 {
      inset-inline: calc(24rem * -1);
    }
    .-inset-inline-full {
      inset-inline: calc(100% * -1);
    }
    .-inset-inline-px {
      inset-inline: calc(1px * -1);
    }
    .inset-inline-0 {
      inset-inline: 0px;
    }
    .inset-inline-0\\.5 {
      inset-inline: 0.125rem;
    }
    .inset-inline-1 {
      inset-inline: 0.25rem;
    }
    .inset-inline-1\\.5 {
      inset-inline: 0.375rem;
    }
    .inset-inline-1\\/2 {
      inset-inline: 50%;
    }
    .inset-inline-1\\/3 {
      inset-inline: 33.333333%;
    }
    .inset-inline-1\\/4 {
      inset-inline: 25%;
    }
    .inset-inline-2 {
      inset-inline: 0.5rem;
    }
    .inset-inline-2\\.5 {
      inset-inline: 0.625rem;
    }
    .inset-inline-2\\/3 {
      inset-inline: 66.666667%;
    }
    .inset-inline-2\\/4 {
      inset-inline: 50%;
    }
    .inset-inline-3 {
      inset-inline: 0.75rem;
    }
    .inset-inline-3\\.5 {
      inset-inline: 0.875rem;
    }
    .inset-inline-3\\/4 {
      inset-inline: 75%;
    }
    .inset-inline-4 {
      inset-inline: 1rem;
    }
    .inset-inline-5 {
      inset-inline: 1.25rem;
    }
    .inset-inline-6 {
      inset-inline: 1.5rem;
    }
    .inset-inline-7 {
      inset-inline: 1.75rem;
    }
    .inset-inline-8 {
      inset-inline: 2rem;
    }
    .inset-inline-9 {
      inset-inline: 2.25rem;
    }
    .inset-inline-10 {
      inset-inline: 2.5rem;
    }
    .inset-inline-11 {
      inset-inline: 2.75rem;
    }
    .inset-inline-12 {
      inset-inline: 3rem;
    }
    .inset-inline-14 {
      inset-inline: 3.5rem;
    }
    .inset-inline-16 {
      inset-inline: 4rem;
    }
    .inset-inline-20 {
      inset-inline: 5rem;
    }
    .inset-inline-24 {
      inset-inline: 6rem;
    }
    .inset-inline-28 {
      inset-inline: 7rem;
    }
    .inset-inline-32 {
      inset-inline: 8rem;
    }
    .inset-inline-36 {
      inset-inline: 9rem;
    }
    .inset-inline-40 {
      inset-inline: 10rem;
    }
    .inset-inline-44 {
      inset-inline: 11rem;
    }
    .inset-inline-48 {
      inset-inline: 12rem;
    }
    .inset-inline-52 {
      inset-inline: 13rem;
    }
    .inset-inline-56 {
      inset-inline: 14rem;
    }
    .inset-inline-60 {
      inset-inline: 15rem;
    }
    .inset-inline-64 {
      inset-inline: 16rem;
    }
    .inset-inline-72 {
      inset-inline: 18rem;
    }
    .inset-inline-80 {
      inset-inline: 20rem;
    }
    .inset-inline-96 {
      inset-inline: 24rem;
    }
    .inset-inline-auto {
      inset-inline: auto;
    }
    .inset-inline-full {
      inset-inline: 100%;
    }
    .inset-inline-px {
      inset-inline: 1px;
    }
    .-inset-block-0 {
      inset-block: calc(0px * -1);
    }
    .-inset-block-0\\.5 {
      inset-block: calc(0.125rem * -1);
    }
    .-inset-block-1 {
      inset-block: calc(0.25rem * -1);
    }
    .-inset-block-1\\.5 {
      inset-block: calc(0.375rem * -1);
    }
    .-inset-block-1\\/2 {
      inset-block: calc(50% * -1);
    }
    .-inset-block-1\\/3 {
      inset-block: calc(33.333333% * -1);
    }
    .-inset-block-1\\/4 {
      inset-block: calc(25% * -1);
    }
    .-inset-block-2 {
      inset-block: calc(0.5rem * -1);
    }
    .-inset-block-2\\.5 {
      inset-block: calc(0.625rem * -1);
    }
    .-inset-block-2\\/3 {
      inset-block: calc(66.666667% * -1);
    }
    .-inset-block-2\\/4 {
      inset-block: calc(50% * -1);
    }
    .-inset-block-3 {
      inset-block: calc(0.75rem * -1);
    }
    .-inset-block-3\\.5 {
      inset-block: calc(0.875rem * -1);
    }
    .-inset-block-3\\/4 {
      inset-block: calc(75% * -1);
    }
    .-inset-block-4 {
      inset-block: calc(1rem * -1);
    }
    .-inset-block-5 {
      inset-block: calc(1.25rem * -1);
    }
    .-inset-block-6 {
      inset-block: calc(1.5rem * -1);
    }
    .-inset-block-7 {
      inset-block: calc(1.75rem * -1);
    }
    .-inset-block-8 {
      inset-block: calc(2rem * -1);
    }
    .-inset-block-9 {
      inset-block: calc(2.25rem * -1);
    }
    .-inset-block-10 {
      inset-block: calc(2.5rem * -1);
    }
    .-inset-block-11 {
      inset-block: calc(2.75rem * -1);
    }
    .-inset-block-12 {
      inset-block: calc(3rem * -1);
    }
    .-inset-block-14 {
      inset-block: calc(3.5rem * -1);
    }
    .-inset-block-16 {
      inset-block: calc(4rem * -1);
    }
    .-inset-block-20 {
      inset-block: calc(5rem * -1);
    }
    .-inset-block-24 {
      inset-block: calc(6rem * -1);
    }
    .-inset-block-28 {
      inset-block: calc(7rem * -1);
    }
    .-inset-block-32 {
      inset-block: calc(8rem * -1);
    }
    .-inset-block-36 {
      inset-block: calc(9rem * -1);
    }
    .-inset-block-40 {
      inset-block: calc(10rem * -1);
    }
    .-inset-block-44 {
      inset-block: calc(11rem * -1);
    }
    .-inset-block-48 {
      inset-block: calc(12rem * -1);
    }
    .-inset-block-52 {
      inset-block: calc(13rem * -1);
    }
    .-inset-block-56 {
      inset-block: calc(14rem * -1);
    }
    .-inset-block-60 {
      inset-block: calc(15rem * -1);
    }
    .-inset-block-64 {
      inset-block: calc(16rem * -1);
    }
    .-inset-block-72 {
      inset-block: calc(18rem * -1);
    }
    .-inset-block-80 {
      inset-block: calc(20rem * -1);
    }
    .-inset-block-96 {
      inset-block: calc(24rem * -1);
    }
    .-inset-block-full {
      inset-block: calc(100% * -1);
    }
    .-inset-block-px {
      inset-block: calc(1px * -1);
    }
    .inset-block-0 {
      inset-block: 0px;
    }
    .inset-block-0\\.5 {
      inset-block: 0.125rem;
    }
    .inset-block-1 {
      inset-block: 0.25rem;
    }
    .inset-block-1\\.5 {
      inset-block: 0.375rem;
    }
    .inset-block-1\\/2 {
      inset-block: 50%;
    }
    .inset-block-1\\/3 {
      inset-block: 33.333333%;
    }
    .inset-block-1\\/4 {
      inset-block: 25%;
    }
    .inset-block-2 {
      inset-block: 0.5rem;
    }
    .inset-block-2\\.5 {
      inset-block: 0.625rem;
    }
    .inset-block-2\\/3 {
      inset-block: 66.666667%;
    }
    .inset-block-2\\/4 {
      inset-block: 50%;
    }
    .inset-block-3 {
      inset-block: 0.75rem;
    }
    .inset-block-3\\.5 {
      inset-block: 0.875rem;
    }
    .inset-block-3\\/4 {
      inset-block: 75%;
    }
    .inset-block-4 {
      inset-block: 1rem;
    }
    .inset-block-5 {
      inset-block: 1.25rem;
    }
    .inset-block-6 {
      inset-block: 1.5rem;
    }
    .inset-block-7 {
      inset-block: 1.75rem;
    }
    .inset-block-8 {
      inset-block: 2rem;
    }
    .inset-block-9 {
      inset-block: 2.25rem;
    }
    .inset-block-10 {
      inset-block: 2.5rem;
    }
    .inset-block-11 {
      inset-block: 2.75rem;
    }
    .inset-block-12 {
      inset-block: 3rem;
    }
    .inset-block-14 {
      inset-block: 3.5rem;
    }
    .inset-block-16 {
      inset-block: 4rem;
    }
    .inset-block-20 {
      inset-block: 5rem;
    }
    .inset-block-24 {
      inset-block: 6rem;
    }
    .inset-block-28 {
      inset-block: 7rem;
    }
    .inset-block-32 {
      inset-block: 8rem;
    }
    .inset-block-36 {
      inset-block: 9rem;
    }
    .inset-block-40 {
      inset-block: 10rem;
    }
    .inset-block-44 {
      inset-block: 11rem;
    }
    .inset-block-48 {
      inset-block: 12rem;
    }
    .inset-block-52 {
      inset-block: 13rem;
    }
    .inset-block-56 {
      inset-block: 14rem;
    }
    .inset-block-60 {
      inset-block: 15rem;
    }
    .inset-block-64 {
      inset-block: 16rem;
    }
    .inset-block-72 {
      inset-block: 18rem;
    }
    .inset-block-80 {
      inset-block: 20rem;
    }
    .inset-block-96 {
      inset-block: 24rem;
    }
    .inset-block-auto {
      inset-block: auto;
    }
    .inset-block-full {
      inset-block: 100%;
    }
    .inset-block-px {
      inset-block: 1px;
    }
    .-inline-start-0 {
      inset-inline-start: calc(0px * -1);
    }
    .-inline-start-0\\.5 {
      inset-inline-start: calc(0.125rem * -1);
    }
    .-inline-start-1 {
      inset-inline-start: calc(0.25rem * -1);
    }
    .-inline-start-1\\.5 {
      inset-inline-start: calc(0.375rem * -1);
    }
    .-inline-start-1\\/2 {
      inset-inline-start: calc(50% * -1);
    }
    .-inline-start-1\\/3 {
      inset-inline-start: calc(33.333333% * -1);
    }
    .-inline-start-1\\/4 {
      inset-inline-start: calc(25% * -1);
    }
    .-inline-start-2 {
      inset-inline-start: calc(0.5rem * -1);
    }
    .-inline-start-2\\.5 {
      inset-inline-start: calc(0.625rem * -1);
    }
    .-inline-start-2\\/3 {
      inset-inline-start: calc(66.666667% * -1);
    }
    .-inline-start-2\\/4 {
      inset-inline-start: calc(50% * -1);
    }
    .-inline-start-3 {
      inset-inline-start: calc(0.75rem * -1);
    }
    .-inline-start-3\\.5 {
      inset-inline-start: calc(0.875rem * -1);
    }
    .-inline-start-3\\/4 {
      inset-inline-start: calc(75% * -1);
    }
    .-inline-start-4 {
      inset-inline-start: calc(1rem * -1);
    }
    .-inline-start-5 {
      inset-inline-start: calc(1.25rem * -1);
    }
    .-inline-start-6 {
      inset-inline-start: calc(1.5rem * -1);
    }
    .-inline-start-7 {
      inset-inline-start: calc(1.75rem * -1);
    }
    .-inline-start-8 {
      inset-inline-start: calc(2rem * -1);
    }
    .-inline-start-9 {
      inset-inline-start: calc(2.25rem * -1);
    }
    .-inline-start-10 {
      inset-inline-start: calc(2.5rem * -1);
    }
    .-inline-start-11 {
      inset-inline-start: calc(2.75rem * -1);
    }
    .-inline-start-12 {
      inset-inline-start: calc(3rem * -1);
    }
    .-inline-start-14 {
      inset-inline-start: calc(3.5rem * -1);
    }
    .-inline-start-16 {
      inset-inline-start: calc(4rem * -1);
    }
    .-inline-start-20 {
      inset-inline-start: calc(5rem * -1);
    }
    .-inline-start-24 {
      inset-inline-start: calc(6rem * -1);
    }
    .-inline-start-28 {
      inset-inline-start: calc(7rem * -1);
    }
    .-inline-start-32 {
      inset-inline-start: calc(8rem * -1);
    }
    .-inline-start-36 {
      inset-inline-start: calc(9rem * -1);
    }
    .-inline-start-40 {
      inset-inline-start: calc(10rem * -1);
    }
    .-inline-start-44 {
      inset-inline-start: calc(11rem * -1);
    }
    .-inline-start-48 {
      inset-inline-start: calc(12rem * -1);
    }
    .-inline-start-52 {
      inset-inline-start: calc(13rem * -1);
    }
    .-inline-start-56 {
      inset-inline-start: calc(14rem * -1);
    }
    .-inline-start-60 {
      inset-inline-start: calc(15rem * -1);
    }
    .-inline-start-64 {
      inset-inline-start: calc(16rem * -1);
    }
    .-inline-start-72 {
      inset-inline-start: calc(18rem * -1);
    }
    .-inline-start-80 {
      inset-inline-start: calc(20rem * -1);
    }
    .-inline-start-96 {
      inset-inline-start: calc(24rem * -1);
    }
    .-inline-start-full {
      inset-inline-start: calc(100% * -1);
    }
    .-inline-start-px {
      inset-inline-start: calc(1px * -1);
    }
    .inline-start-0 {
      inset-inline-start: 0px;
    }
    .inline-start-0\\.5 {
      inset-inline-start: 0.125rem;
    }
    .inline-start-1 {
      inset-inline-start: 0.25rem;
    }
    .inline-start-1\\.5 {
      inset-inline-start: 0.375rem;
    }
    .inline-start-1\\/2 {
      inset-inline-start: 50%;
    }
    .inline-start-1\\/3 {
      inset-inline-start: 33.333333%;
    }
    .inline-start-1\\/4 {
      inset-inline-start: 25%;
    }
    .inline-start-2 {
      inset-inline-start: 0.5rem;
    }
    .inline-start-2\\.5 {
      inset-inline-start: 0.625rem;
    }
    .inline-start-2\\/3 {
      inset-inline-start: 66.666667%;
    }
    .inline-start-2\\/4 {
      inset-inline-start: 50%;
    }
    .inline-start-3 {
      inset-inline-start: 0.75rem;
    }
    .inline-start-3\\.5 {
      inset-inline-start: 0.875rem;
    }
    .inline-start-3\\/4 {
      inset-inline-start: 75%;
    }
    .inline-start-4 {
      inset-inline-start: 1rem;
    }
    .inline-start-5 {
      inset-inline-start: 1.25rem;
    }
    .inline-start-6 {
      inset-inline-start: 1.5rem;
    }
    .inline-start-7 {
      inset-inline-start: 1.75rem;
    }
    .inline-start-8 {
      inset-inline-start: 2rem;
    }
    .inline-start-9 {
      inset-inline-start: 2.25rem;
    }
    .inline-start-10 {
      inset-inline-start: 2.5rem;
    }
    .inline-start-11 {
      inset-inline-start: 2.75rem;
    }
    .inline-start-12 {
      inset-inline-start: 3rem;
    }
    .inline-start-14 {
      inset-inline-start: 3.5rem;
    }
    .inline-start-16 {
      inset-inline-start: 4rem;
    }
    .inline-start-20 {
      inset-inline-start: 5rem;
    }
    .inline-start-24 {
      inset-inline-start: 6rem;
    }
    .inline-start-28 {
      inset-inline-start: 7rem;
    }
    .inline-start-32 {
      inset-inline-start: 8rem;
    }
    .inline-start-36 {
      inset-inline-start: 9rem;
    }
    .inline-start-40 {
      inset-inline-start: 10rem;
    }
    .inline-start-44 {
      inset-inline-start: 11rem;
    }
    .inline-start-48 {
      inset-inline-start: 12rem;
    }
    .inline-start-52 {
      inset-inline-start: 13rem;
    }
    .inline-start-56 {
      inset-inline-start: 14rem;
    }
    .inline-start-60 {
      inset-inline-start: 15rem;
    }
    .inline-start-64 {
      inset-inline-start: 16rem;
    }
    .inline-start-72 {
      inset-inline-start: 18rem;
    }
    .inline-start-80 {
      inset-inline-start: 20rem;
    }
    .inline-start-96 {
      inset-inline-start: 24rem;
    }
    .inline-start-auto {
      inset-inline-start: auto;
    }
    .inline-start-full {
      inset-inline-start: 100%;
    }
    .inline-start-px {
      inset-inline-start: 1px;
    }
    .-inline-end-0 {
      inset-inline-end: calc(0px * -1);
    }
    .-inline-end-0\\.5 {
      inset-inline-end: calc(0.125rem * -1);
    }
    .-inline-end-1 {
      inset-inline-end: calc(0.25rem * -1);
    }
    .-inline-end-1\\.5 {
      inset-inline-end: calc(0.375rem * -1);
    }
    .-inline-end-1\\/2 {
      inset-inline-end: calc(50% * -1);
    }
    .-inline-end-1\\/3 {
      inset-inline-end: calc(33.333333% * -1);
    }
    .-inline-end-1\\/4 {
      inset-inline-end: calc(25% * -1);
    }
    .-inline-end-2 {
      inset-inline-end: calc(0.5rem * -1);
    }
    .-inline-end-2\\.5 {
      inset-inline-end: calc(0.625rem * -1);
    }
    .-inline-end-2\\/3 {
      inset-inline-end: calc(66.666667% * -1);
    }
    .-inline-end-2\\/4 {
      inset-inline-end: calc(50% * -1);
    }
    .-inline-end-3 {
      inset-inline-end: calc(0.75rem * -1);
    }
    .-inline-end-3\\.5 {
      inset-inline-end: calc(0.875rem * -1);
    }
    .-inline-end-3\\/4 {
      inset-inline-end: calc(75% * -1);
    }
    .-inline-end-4 {
      inset-inline-end: calc(1rem * -1);
    }
    .-inline-end-5 {
      inset-inline-end: calc(1.25rem * -1);
    }
    .-inline-end-6 {
      inset-inline-end: calc(1.5rem * -1);
    }
    .-inline-end-7 {
      inset-inline-end: calc(1.75rem * -1);
    }
    .-inline-end-8 {
      inset-inline-end: calc(2rem * -1);
    }
    .-inline-end-9 {
      inset-inline-end: calc(2.25rem * -1);
    }
    .-inline-end-10 {
      inset-inline-end: calc(2.5rem * -1);
    }
    .-inline-end-11 {
      inset-inline-end: calc(2.75rem * -1);
    }
    .-inline-end-12 {
      inset-inline-end: calc(3rem * -1);
    }
    .-inline-end-14 {
      inset-inline-end: calc(3.5rem * -1);
    }
    .-inline-end-16 {
      inset-inline-end: calc(4rem * -1);
    }
    .-inline-end-20 {
      inset-inline-end: calc(5rem * -1);
    }
    .-inline-end-24 {
      inset-inline-end: calc(6rem * -1);
    }
    .-inline-end-28 {
      inset-inline-end: calc(7rem * -1);
    }
    .-inline-end-32 {
      inset-inline-end: calc(8rem * -1);
    }
    .-inline-end-36 {
      inset-inline-end: calc(9rem * -1);
    }
    .-inline-end-40 {
      inset-inline-end: calc(10rem * -1);
    }
    .-inline-end-44 {
      inset-inline-end: calc(11rem * -1);
    }
    .-inline-end-48 {
      inset-inline-end: calc(12rem * -1);
    }
    .-inline-end-52 {
      inset-inline-end: calc(13rem * -1);
    }
    .-inline-end-56 {
      inset-inline-end: calc(14rem * -1);
    }
    .-inline-end-60 {
      inset-inline-end: calc(15rem * -1);
    }
    .-inline-end-64 {
      inset-inline-end: calc(16rem * -1);
    }
    .-inline-end-72 {
      inset-inline-end: calc(18rem * -1);
    }
    .-inline-end-80 {
      inset-inline-end: calc(20rem * -1);
    }
    .-inline-end-96 {
      inset-inline-end: calc(24rem * -1);
    }
    .-inline-end-full {
      inset-inline-end: calc(100% * -1);
    }
    .-inline-end-px {
      inset-inline-end: calc(1px * -1);
    }
    .inline-end-0 {
      inset-inline-end: 0px;
    }
    .inline-end-0\\.5 {
      inset-inline-end: 0.125rem;
    }
    .inline-end-1 {
      inset-inline-end: 0.25rem;
    }
    .inline-end-1\\.5 {
      inset-inline-end: 0.375rem;
    }
    .inline-end-1\\/2 {
      inset-inline-end: 50%;
    }
    .inline-end-1\\/3 {
      inset-inline-end: 33.333333%;
    }
    .inline-end-1\\/4 {
      inset-inline-end: 25%;
    }
    .inline-end-2 {
      inset-inline-end: 0.5rem;
    }
    .inline-end-2\\.5 {
      inset-inline-end: 0.625rem;
    }
    .inline-end-2\\/3 {
      inset-inline-end: 66.666667%;
    }
    .inline-end-2\\/4 {
      inset-inline-end: 50%;
    }
    .inline-end-3 {
      inset-inline-end: 0.75rem;
    }
    .inline-end-3\\.5 {
      inset-inline-end: 0.875rem;
    }
    .inline-end-3\\/4 {
      inset-inline-end: 75%;
    }
    .inline-end-4 {
      inset-inline-end: 1rem;
    }
    .inline-end-5 {
      inset-inline-end: 1.25rem;
    }
    .inline-end-6 {
      inset-inline-end: 1.5rem;
    }
    .inline-end-7 {
      inset-inline-end: 1.75rem;
    }
    .inline-end-8 {
      inset-inline-end: 2rem;
    }
    .inline-end-9 {
      inset-inline-end: 2.25rem;
    }
    .inline-end-10 {
      inset-inline-end: 2.5rem;
    }
    .inline-end-11 {
      inset-inline-end: 2.75rem;
    }
    .inline-end-12 {
      inset-inline-end: 3rem;
    }
    .inline-end-14 {
      inset-inline-end: 3.5rem;
    }
    .inline-end-16 {
      inset-inline-end: 4rem;
    }
    .inline-end-20 {
      inset-inline-end: 5rem;
    }
    .inline-end-24 {
      inset-inline-end: 6rem;
    }
    .inline-end-28 {
      inset-inline-end: 7rem;
    }
    .inline-end-32 {
      inset-inline-end: 8rem;
    }
    .inline-end-36 {
      inset-inline-end: 9rem;
    }
    .inline-end-40 {
      inset-inline-end: 10rem;
    }
    .inline-end-44 {
      inset-inline-end: 11rem;
    }
    .inline-end-48 {
      inset-inline-end: 12rem;
    }
    .inline-end-52 {
      inset-inline-end: 13rem;
    }
    .inline-end-56 {
      inset-inline-end: 14rem;
    }
    .inline-end-60 {
      inset-inline-end: 15rem;
    }
    .inline-end-64 {
      inset-inline-end: 16rem;
    }
    .inline-end-72 {
      inset-inline-end: 18rem;
    }
    .inline-end-80 {
      inset-inline-end: 20rem;
    }
    .inline-end-96 {
      inset-inline-end: 24rem;
    }
    .inline-end-auto {
      inset-inline-end: auto;
    }
    .inline-end-full {
      inset-inline-end: 100%;
    }
    .inline-end-px {
      inset-inline-end: 1px;
    }
    .-mli-0 {
      margin-inline: calc(0px * -1);
    }
    .-mli-0\\.5 {
      margin-inline: calc(0.125rem * -1);
    }
    .-mli-1 {
      margin-inline: calc(0.25rem * -1);
    }
    .-mli-1\\.5 {
      margin-inline: calc(0.375rem * -1);
    }
    .-mli-2 {
      margin-inline: calc(0.5rem * -1);
    }
    .-mli-2\\.5 {
      margin-inline: calc(0.625rem * -1);
    }
    .-mli-3 {
      margin-inline: calc(0.75rem * -1);
    }
    .-mli-3\\.5 {
      margin-inline: calc(0.875rem * -1);
    }
    .-mli-4 {
      margin-inline: calc(1rem * -1);
    }
    .-mli-5 {
      margin-inline: calc(1.25rem * -1);
    }
    .-mli-6 {
      margin-inline: calc(1.5rem * -1);
    }
    .-mli-7 {
      margin-inline: calc(1.75rem * -1);
    }
    .-mli-8 {
      margin-inline: calc(2rem * -1);
    }
    .-mli-9 {
      margin-inline: calc(2.25rem * -1);
    }
    .-mli-10 {
      margin-inline: calc(2.5rem * -1);
    }
    .-mli-11 {
      margin-inline: calc(2.75rem * -1);
    }
    .-mli-12 {
      margin-inline: calc(3rem * -1);
    }
    .-mli-14 {
      margin-inline: calc(3.5rem * -1);
    }
    .-mli-16 {
      margin-inline: calc(4rem * -1);
    }
    .-mli-20 {
      margin-inline: calc(5rem * -1);
    }
    .-mli-24 {
      margin-inline: calc(6rem * -1);
    }
    .-mli-28 {
      margin-inline: calc(7rem * -1);
    }
    .-mli-32 {
      margin-inline: calc(8rem * -1);
    }
    .-mli-36 {
      margin-inline: calc(9rem * -1);
    }
    .-mli-40 {
      margin-inline: calc(10rem * -1);
    }
    .-mli-44 {
      margin-inline: calc(11rem * -1);
    }
    .-mli-48 {
      margin-inline: calc(12rem * -1);
    }
    .-mli-52 {
      margin-inline: calc(13rem * -1);
    }
    .-mli-56 {
      margin-inline: calc(14rem * -1);
    }
    .-mli-60 {
      margin-inline: calc(15rem * -1);
    }
    .-mli-64 {
      margin-inline: calc(16rem * -1);
    }
    .-mli-72 {
      margin-inline: calc(18rem * -1);
    }
    .-mli-80 {
      margin-inline: calc(20rem * -1);
    }
    .-mli-96 {
      margin-inline: calc(24rem * -1);
    }
    .-mli-px {
      margin-inline: calc(1px * -1);
    }
    .mli-0 {
      margin-inline: 0px;
    }
    .mli-0\\.5 {
      margin-inline: 0.125rem;
    }
    .mli-1 {
      margin-inline: 0.25rem;
    }
    .mli-1\\.5 {
      margin-inline: 0.375rem;
    }
    .mli-2 {
      margin-inline: 0.5rem;
    }
    .mli-2\\.5 {
      margin-inline: 0.625rem;
    }
    .mli-3 {
      margin-inline: 0.75rem;
    }
    .mli-3\\.5 {
      margin-inline: 0.875rem;
    }
    .mli-4 {
      margin-inline: 1rem;
    }
    .mli-5 {
      margin-inline: 1.25rem;
    }
    .mli-6 {
      margin-inline: 1.5rem;
    }
    .mli-7 {
      margin-inline: 1.75rem;
    }
    .mli-8 {
      margin-inline: 2rem;
    }
    .mli-9 {
      margin-inline: 2.25rem;
    }
    .mli-10 {
      margin-inline: 2.5rem;
    }
    .mli-11 {
      margin-inline: 2.75rem;
    }
    .mli-12 {
      margin-inline: 3rem;
    }
    .mli-14 {
      margin-inline: 3.5rem;
    }
    .mli-16 {
      margin-inline: 4rem;
    }
    .mli-20 {
      margin-inline: 5rem;
    }
    .mli-24 {
      margin-inline: 6rem;
    }
    .mli-28 {
      margin-inline: 7rem;
    }
    .mli-32 {
      margin-inline: 8rem;
    }
    .mli-36 {
      margin-inline: 9rem;
    }
    .mli-40 {
      margin-inline: 10rem;
    }
    .mli-44 {
      margin-inline: 11rem;
    }
    .mli-48 {
      margin-inline: 12rem;
    }
    .mli-52 {
      margin-inline: 13rem;
    }
    .mli-56 {
      margin-inline: 14rem;
    }
    .mli-60 {
      margin-inline: 15rem;
    }
    .mli-64 {
      margin-inline: 16rem;
    }
    .mli-72 {
      margin-inline: 18rem;
    }
    .mli-80 {
      margin-inline: 20rem;
    }
    .mli-96 {
      margin-inline: 24rem;
    }
    .mli-auto {
      margin-inline: auto;
    }
    .mli-px {
      margin-inline: 1px;
    }
    .-mlb-0 {
      margin-block: calc(0px * -1);
    }
    .-mlb-0\\.5 {
      margin-block: calc(0.125rem * -1);
    }
    .-mlb-1 {
      margin-block: calc(0.25rem * -1);
    }
    .-mlb-1\\.5 {
      margin-block: calc(0.375rem * -1);
    }
    .-mlb-2 {
      margin-block: calc(0.5rem * -1);
    }
    .-mlb-2\\.5 {
      margin-block: calc(0.625rem * -1);
    }
    .-mlb-3 {
      margin-block: calc(0.75rem * -1);
    }
    .-mlb-3\\.5 {
      margin-block: calc(0.875rem * -1);
    }
    .-mlb-4 {
      margin-block: calc(1rem * -1);
    }
    .-mlb-5 {
      margin-block: calc(1.25rem * -1);
    }
    .-mlb-6 {
      margin-block: calc(1.5rem * -1);
    }
    .-mlb-7 {
      margin-block: calc(1.75rem * -1);
    }
    .-mlb-8 {
      margin-block: calc(2rem * -1);
    }
    .-mlb-9 {
      margin-block: calc(2.25rem * -1);
    }
    .-mlb-10 {
      margin-block: calc(2.5rem * -1);
    }
    .-mlb-11 {
      margin-block: calc(2.75rem * -1);
    }
    .-mlb-12 {
      margin-block: calc(3rem * -1);
    }
    .-mlb-14 {
      margin-block: calc(3.5rem * -1);
    }
    .-mlb-16 {
      margin-block: calc(4rem * -1);
    }
    .-mlb-20 {
      margin-block: calc(5rem * -1);
    }
    .-mlb-24 {
      margin-block: calc(6rem * -1);
    }
    .-mlb-28 {
      margin-block: calc(7rem * -1);
    }
    .-mlb-32 {
      margin-block: calc(8rem * -1);
    }
    .-mlb-36 {
      margin-block: calc(9rem * -1);
    }
    .-mlb-40 {
      margin-block: calc(10rem * -1);
    }
    .-mlb-44 {
      margin-block: calc(11rem * -1);
    }
    .-mlb-48 {
      margin-block: calc(12rem * -1);
    }
    .-mlb-52 {
      margin-block: calc(13rem * -1);
    }
    .-mlb-56 {
      margin-block: calc(14rem * -1);
    }
    .-mlb-60 {
      margin-block: calc(15rem * -1);
    }
    .-mlb-64 {
      margin-block: calc(16rem * -1);
    }
    .-mlb-72 {
      margin-block: calc(18rem * -1);
    }
    .-mlb-80 {
      margin-block: calc(20rem * -1);
    }
    .-mlb-96 {
      margin-block: calc(24rem * -1);
    }
    .-mlb-px {
      margin-block: calc(1px * -1);
    }
    .mlb-0 {
      margin-block: 0px;
    }
    .mlb-0\\.5 {
      margin-block: 0.125rem;
    }
    .mlb-1 {
      margin-block: 0.25rem;
    }
    .mlb-1\\.5 {
      margin-block: 0.375rem;
    }
    .mlb-2 {
      margin-block: 0.5rem;
    }
    .mlb-2\\.5 {
      margin-block: 0.625rem;
    }
    .mlb-3 {
      margin-block: 0.75rem;
    }
    .mlb-3\\.5 {
      margin-block: 0.875rem;
    }
    .mlb-4 {
      margin-block: 1rem;
    }
    .mlb-5 {
      margin-block: 1.25rem;
    }
    .mlb-6 {
      margin-block: 1.5rem;
    }
    .mlb-7 {
      margin-block: 1.75rem;
    }
    .mlb-8 {
      margin-block: 2rem;
    }
    .mlb-9 {
      margin-block: 2.25rem;
    }
    .mlb-10 {
      margin-block: 2.5rem;
    }
    .mlb-11 {
      margin-block: 2.75rem;
    }
    .mlb-12 {
      margin-block: 3rem;
    }
    .mlb-14 {
      margin-block: 3.5rem;
    }
    .mlb-16 {
      margin-block: 4rem;
    }
    .mlb-20 {
      margin-block: 5rem;
    }
    .mlb-24 {
      margin-block: 6rem;
    }
    .mlb-28 {
      margin-block: 7rem;
    }
    .mlb-32 {
      margin-block: 8rem;
    }
    .mlb-36 {
      margin-block: 9rem;
    }
    .mlb-40 {
      margin-block: 10rem;
    }
    .mlb-44 {
      margin-block: 11rem;
    }
    .mlb-48 {
      margin-block: 12rem;
    }
    .mlb-52 {
      margin-block: 13rem;
    }
    .mlb-56 {
      margin-block: 14rem;
    }
    .mlb-60 {
      margin-block: 15rem;
    }
    .mlb-64 {
      margin-block: 16rem;
    }
    .mlb-72 {
      margin-block: 18rem;
    }
    .mlb-80 {
      margin-block: 20rem;
    }
    .mlb-96 {
      margin-block: 24rem;
    }
    .mlb-auto {
      margin-block: auto;
    }
    .mlb-px {
      margin-block: 1px;
    }
    .-mis-0 {
      margin-inline-start: calc(0px * -1);
    }
    .-mis-0\\.5 {
      margin-inline-start: calc(0.125rem * -1);
    }
    .-mis-1 {
      margin-inline-start: calc(0.25rem * -1);
    }
    .-mis-1\\.5 {
      margin-inline-start: calc(0.375rem * -1);
    }
    .-mis-2 {
      margin-inline-start: calc(0.5rem * -1);
    }
    .-mis-2\\.5 {
      margin-inline-start: calc(0.625rem * -1);
    }
    .-mis-3 {
      margin-inline-start: calc(0.75rem * -1);
    }
    .-mis-3\\.5 {
      margin-inline-start: calc(0.875rem * -1);
    }
    .-mis-4 {
      margin-inline-start: calc(1rem * -1);
    }
    .-mis-5 {
      margin-inline-start: calc(1.25rem * -1);
    }
    .-mis-6 {
      margin-inline-start: calc(1.5rem * -1);
    }
    .-mis-7 {
      margin-inline-start: calc(1.75rem * -1);
    }
    .-mis-8 {
      margin-inline-start: calc(2rem * -1);
    }
    .-mis-9 {
      margin-inline-start: calc(2.25rem * -1);
    }
    .-mis-10 {
      margin-inline-start: calc(2.5rem * -1);
    }
    .-mis-11 {
      margin-inline-start: calc(2.75rem * -1);
    }
    .-mis-12 {
      margin-inline-start: calc(3rem * -1);
    }
    .-mis-14 {
      margin-inline-start: calc(3.5rem * -1);
    }
    .-mis-16 {
      margin-inline-start: calc(4rem * -1);
    }
    .-mis-20 {
      margin-inline-start: calc(5rem * -1);
    }
    .-mis-24 {
      margin-inline-start: calc(6rem * -1);
    }
    .-mis-28 {
      margin-inline-start: calc(7rem * -1);
    }
    .-mis-32 {
      margin-inline-start: calc(8rem * -1);
    }
    .-mis-36 {
      margin-inline-start: calc(9rem * -1);
    }
    .-mis-40 {
      margin-inline-start: calc(10rem * -1);
    }
    .-mis-44 {
      margin-inline-start: calc(11rem * -1);
    }
    .-mis-48 {
      margin-inline-start: calc(12rem * -1);
    }
    .-mis-52 {
      margin-inline-start: calc(13rem * -1);
    }
    .-mis-56 {
      margin-inline-start: calc(14rem * -1);
    }
    .-mis-60 {
      margin-inline-start: calc(15rem * -1);
    }
    .-mis-64 {
      margin-inline-start: calc(16rem * -1);
    }
    .-mis-72 {
      margin-inline-start: calc(18rem * -1);
    }
    .-mis-80 {
      margin-inline-start: calc(20rem * -1);
    }
    .-mis-96 {
      margin-inline-start: calc(24rem * -1);
    }
    .-mis-px {
      margin-inline-start: calc(1px * -1);
    }
    .mis-0 {
      margin-inline-start: 0px;
    }
    .mis-0\\.5 {
      margin-inline-start: 0.125rem;
    }
    .mis-1 {
      margin-inline-start: 0.25rem;
    }
    .mis-1\\.5 {
      margin-inline-start: 0.375rem;
    }
    .mis-2 {
      margin-inline-start: 0.5rem;
    }
    .mis-2\\.5 {
      margin-inline-start: 0.625rem;
    }
    .mis-3 {
      margin-inline-start: 0.75rem;
    }
    .mis-3\\.5 {
      margin-inline-start: 0.875rem;
    }
    .mis-4 {
      margin-inline-start: 1rem;
    }
    .mis-5 {
      margin-inline-start: 1.25rem;
    }
    .mis-6 {
      margin-inline-start: 1.5rem;
    }
    .mis-7 {
      margin-inline-start: 1.75rem;
    }
    .mis-8 {
      margin-inline-start: 2rem;
    }
    .mis-9 {
      margin-inline-start: 2.25rem;
    }
    .mis-10 {
      margin-inline-start: 2.5rem;
    }
    .mis-11 {
      margin-inline-start: 2.75rem;
    }
    .mis-12 {
      margin-inline-start: 3rem;
    }
    .mis-14 {
      margin-inline-start: 3.5rem;
    }
    .mis-16 {
      margin-inline-start: 4rem;
    }
    .mis-20 {
      margin-inline-start: 5rem;
    }
    .mis-24 {
      margin-inline-start: 6rem;
    }
    .mis-28 {
      margin-inline-start: 7rem;
    }
    .mis-32 {
      margin-inline-start: 8rem;
    }
    .mis-36 {
      margin-inline-start: 9rem;
    }
    .mis-40 {
      margin-inline-start: 10rem;
    }
    .mis-44 {
      margin-inline-start: 11rem;
    }
    .mis-48 {
      margin-inline-start: 12rem;
    }
    .mis-52 {
      margin-inline-start: 13rem;
    }
    .mis-56 {
      margin-inline-start: 14rem;
    }
    .mis-60 {
      margin-inline-start: 15rem;
    }
    .mis-64 {
      margin-inline-start: 16rem;
    }
    .mis-72 {
      margin-inline-start: 18rem;
    }
    .mis-80 {
      margin-inline-start: 20rem;
    }
    .mis-96 {
      margin-inline-start: 24rem;
    }
    .mis-auto {
      margin-inline-start: auto;
    }
    .mis-px {
      margin-inline-start: 1px;
    }
    .-mie-0 {
      margin-inline-end: calc(0px * -1);
    }
    .-mie-0\\.5 {
      margin-inline-end: calc(0.125rem * -1);
    }
    .-mie-1 {
      margin-inline-end: calc(0.25rem * -1);
    }
    .-mie-1\\.5 {
      margin-inline-end: calc(0.375rem * -1);
    }
    .-mie-2 {
      margin-inline-end: calc(0.5rem * -1);
    }
    .-mie-2\\.5 {
      margin-inline-end: calc(0.625rem * -1);
    }
    .-mie-3 {
      margin-inline-end: calc(0.75rem * -1);
    }
    .-mie-3\\.5 {
      margin-inline-end: calc(0.875rem * -1);
    }
    .-mie-4 {
      margin-inline-end: calc(1rem * -1);
    }
    .-mie-5 {
      margin-inline-end: calc(1.25rem * -1);
    }
    .-mie-6 {
      margin-inline-end: calc(1.5rem * -1);
    }
    .-mie-7 {
      margin-inline-end: calc(1.75rem * -1);
    }
    .-mie-8 {
      margin-inline-end: calc(2rem * -1);
    }
    .-mie-9 {
      margin-inline-end: calc(2.25rem * -1);
    }
    .-mie-10 {
      margin-inline-end: calc(2.5rem * -1);
    }
    .-mie-11 {
      margin-inline-end: calc(2.75rem * -1);
    }
    .-mie-12 {
      margin-inline-end: calc(3rem * -1);
    }
    .-mie-14 {
      margin-inline-end: calc(3.5rem * -1);
    }
    .-mie-16 {
      margin-inline-end: calc(4rem * -1);
    }
    .-mie-20 {
      margin-inline-end: calc(5rem * -1);
    }
    .-mie-24 {
      margin-inline-end: calc(6rem * -1);
    }
    .-mie-28 {
      margin-inline-end: calc(7rem * -1);
    }
    .-mie-32 {
      margin-inline-end: calc(8rem * -1);
    }
    .-mie-36 {
      margin-inline-end: calc(9rem * -1);
    }
    .-mie-40 {
      margin-inline-end: calc(10rem * -1);
    }
    .-mie-44 {
      margin-inline-end: calc(11rem * -1);
    }
    .-mie-48 {
      margin-inline-end: calc(12rem * -1);
    }
    .-mie-52 {
      margin-inline-end: calc(13rem * -1);
    }
    .-mie-56 {
      margin-inline-end: calc(14rem * -1);
    }
    .-mie-60 {
      margin-inline-end: calc(15rem * -1);
    }
    .-mie-64 {
      margin-inline-end: calc(16rem * -1);
    }
    .-mie-72 {
      margin-inline-end: calc(18rem * -1);
    }
    .-mie-80 {
      margin-inline-end: calc(20rem * -1);
    }
    .-mie-96 {
      margin-inline-end: calc(24rem * -1);
    }
    .-mie-px {
      margin-inline-end: calc(1px * -1);
    }
    .mie-0 {
      margin-inline-end: 0px;
    }
    .mie-0\\.5 {
      margin-inline-end: 0.125rem;
    }
    .mie-1 {
      margin-inline-end: 0.25rem;
    }
    .mie-1\\.5 {
      margin-inline-end: 0.375rem;
    }
    .mie-2 {
      margin-inline-end: 0.5rem;
    }
    .mie-2\\.5 {
      margin-inline-end: 0.625rem;
    }
    .mie-3 {
      margin-inline-end: 0.75rem;
    }
    .mie-3\\.5 {
      margin-inline-end: 0.875rem;
    }
    .mie-4 {
      margin-inline-end: 1rem;
    }
    .mie-5 {
      margin-inline-end: 1.25rem;
    }
    .mie-6 {
      margin-inline-end: 1.5rem;
    }
    .mie-7 {
      margin-inline-end: 1.75rem;
    }
    .mie-8 {
      margin-inline-end: 2rem;
    }
    .mie-9 {
      margin-inline-end: 2.25rem;
    }
    .mie-10 {
      margin-inline-end: 2.5rem;
    }
    .mie-11 {
      margin-inline-end: 2.75rem;
    }
    .mie-12 {
      margin-inline-end: 3rem;
    }
    .mie-14 {
      margin-inline-end: 3.5rem;
    }
    .mie-16 {
      margin-inline-end: 4rem;
    }
    .mie-20 {
      margin-inline-end: 5rem;
    }
    .mie-24 {
      margin-inline-end: 6rem;
    }
    .mie-28 {
      margin-inline-end: 7rem;
    }
    .mie-32 {
      margin-inline-end: 8rem;
    }
    .mie-36 {
      margin-inline-end: 9rem;
    }
    .mie-40 {
      margin-inline-end: 10rem;
    }
    .mie-44 {
      margin-inline-end: 11rem;
    }
    .mie-48 {
      margin-inline-end: 12rem;
    }
    .mie-52 {
      margin-inline-end: 13rem;
    }
    .mie-56 {
      margin-inline-end: 14rem;
    }
    .mie-60 {
      margin-inline-end: 15rem;
    }
    .mie-64 {
      margin-inline-end: 16rem;
    }
    .mie-72 {
      margin-inline-end: 18rem;
    }
    .mie-80 {
      margin-inline-end: 20rem;
    }
    .mie-96 {
      margin-inline-end: 24rem;
    }
    .mie-auto {
      margin-inline-end: auto;
    }
    .mie-px {
      margin-inline-end: 1px;
    }
    .resize-block {
      resize: block;
    }
    .resize-inline {
      resize: inline;
    }
    .rounded-bs {
      border-start-start-radius: 0.25rem;
      border-start-end-radius: 0.25rem;
    }
    .rounded-bs-2xl {
      border-start-start-radius: 1rem;
      border-start-end-radius: 1rem;
    }
    .rounded-bs-3xl {
      border-start-start-radius: 1.5rem;
      border-start-end-radius: 1.5rem;
    }
    .rounded-bs-full {
      border-start-start-radius: 9999px;
      border-start-end-radius: 9999px;
    }
    .rounded-bs-lg {
      border-start-start-radius: 0.5rem;
      border-start-end-radius: 0.5rem;
    }
    .rounded-bs-md {
      border-start-start-radius: 0.375rem;
      border-start-end-radius: 0.375rem;
    }
    .rounded-bs-none {
      border-start-start-radius: 0px;
      border-start-end-radius: 0px;
    }
    .rounded-bs-sm {
      border-start-start-radius: 0.25rem;
      border-start-end-radius: 0.25rem;
    }
    .rounded-bs-xl {
      border-start-start-radius: 0.75rem;
      border-start-end-radius: 0.75rem;
    }
    .rounded-is {
      border-start-start-radius: 0.25rem;
      border-end-start-radius: 0.25rem;
    }
    .rounded-is-2xl {
      border-start-start-radius: 1rem;
      border-end-start-radius: 1rem;
    }
    .rounded-is-3xl {
      border-start-start-radius: 1.5rem;
      border-end-start-radius: 1.5rem;
    }
    .rounded-is-full {
      border-start-start-radius: 9999px;
      border-end-start-radius: 9999px;
    }
    .rounded-is-lg {
      border-start-start-radius: 0.5rem;
      border-end-start-radius: 0.5rem;
    }
    .rounded-is-md {
      border-start-start-radius: 0.375rem;
      border-end-start-radius: 0.375rem;
    }
    .rounded-is-none {
      border-start-start-radius: 0px;
      border-end-start-radius: 0px;
    }
    .rounded-is-sm {
      border-start-start-radius: 0.25rem;
      border-end-start-radius: 0.25rem;
    }
    .rounded-is-xl {
      border-start-start-radius: 0.75rem;
      border-end-start-radius: 0.75rem;
    }
    .rounded-ie {
      border-start-end-radius: 0.25rem;
      border-end-end-radius: 0.25rem;
    }
    .rounded-ie-2xl {
      border-start-end-radius: 1rem;
      border-end-end-radius: 1rem;
    }
    .rounded-ie-3xl {
      border-start-end-radius: 1.5rem;
      border-end-end-radius: 1.5rem;
    }
    .rounded-ie-full {
      border-start-end-radius: 9999px;
      border-end-end-radius: 9999px;
    }
    .rounded-ie-lg {
      border-start-end-radius: 0.5rem;
      border-end-end-radius: 0.5rem;
    }
    .rounded-ie-md {
      border-start-end-radius: 0.375rem;
      border-end-end-radius: 0.375rem;
    }
    .rounded-ie-none {
      border-start-end-radius: 0px;
      border-end-end-radius: 0px;
    }
    .rounded-ie-sm {
      border-start-end-radius: 0.25rem;
      border-end-end-radius: 0.25rem;
    }
    .rounded-ie-xl {
      border-start-end-radius: 0.75rem;
      border-end-end-radius: 0.75rem;
    }
    .rounded-be {
      border-end-start-radius: 0.25rem;
      border-end-end-radius: 0.25rem;
    }
    .rounded-be-2xl {
      border-end-start-radius: 1rem;
      border-end-end-radius: 1rem;
    }
    .rounded-be-3xl {
      border-end-start-radius: 1.5rem;
      border-end-end-radius: 1.5rem;
    }
    .rounded-be-full {
      border-end-start-radius: 9999px;
      border-end-end-radius: 9999px;
    }
    .rounded-be-lg {
      border-end-start-radius: 0.5rem;
      border-end-end-radius: 0.5rem;
    }
    .rounded-be-md {
      border-end-start-radius: 0.375rem;
      border-end-end-radius: 0.375rem;
    }
    .rounded-be-none {
      border-end-start-radius: 0px;
      border-end-end-radius: 0px;
    }
    .rounded-be-sm {
      border-end-start-radius: 0.25rem;
      border-end-end-radius: 0.25rem;
    }
    .rounded-be-xl {
      border-end-start-radius: 0.75rem;
      border-end-end-radius: 0.75rem;
    }
    .border-li {
      border-inline-start-width: 1px;
      border-inline-end-width: 1px;
    }
    .border-li-0 {
      border-inline-start-width: 0px;
      border-inline-end-width: 0px;
    }
    .border-li-2 {
      border-inline-start-width: 2px;
      border-inline-end-width: 2px;
    }
    .border-li-4 {
      border-inline-start-width: 4px;
      border-inline-end-width: 4px;
    }
    .border-li-8 {
      border-inline-start-width: 8px;
      border-inline-end-width: 8px;
    }
    .border-is {
      border-inline-start-width: 1px;
    }
    .border-is-0 {
      border-inline-start-width: 0px;
    }
    .border-is-2 {
      border-inline-start-width: 2px;
    }
    .border-is-4 {
      border-inline-start-width: 4px;
    }
    .border-is-8 {
      border-inline-start-width: 8px;
    }
    .border-ie {
      border-inline-end-width: 1px;
    }
    .border-ie-0 {
      border-inline-end-width: 0px;
    }
    .border-ie-2 {
      border-inline-end-width: 2px;
    }
    .border-ie-4 {
      border-inline-end-width: 4px;
    }
    .border-ie-8 {
      border-inline-end-width: 8px;
    }
    .border-li-black {
      border-inline-start-color: var(--color-black);
      border-inline-end-color: var(--color-black);
    }
    .border-li-current {
      border-inline-start-color: currentColor;
      border-inline-end-color: currentColor;
    }
    .border-li-gray-50 {
      border-inline-start-color: var(--color-gray-50);
      border-inline-end-color: var(--color-gray-50);
    }
    .border-li-gray-100 {
      border-inline-start-color: var(--color-gray-100);
      border-inline-end-color: var(--color-gray-100);
    }
    .border-li-gray-200 {
      border-inline-start-color: var(--color-gray-200);
      border-inline-end-color: var(--color-gray-200);
    }
    .border-li-gray-300 {
      border-inline-start-color: var(--color-gray-300);
      border-inline-end-color: var(--color-gray-300);
    }
    .border-li-gray-400 {
      border-inline-start-color: var(--color-gray-400);
      border-inline-end-color: var(--color-gray-400);
    }
    .border-li-gray-500 {
      border-inline-start-color: var(--color-gray-500);
      border-inline-end-color: var(--color-gray-500);
    }
    .border-li-gray-600 {
      border-inline-start-color: var(--color-gray-600);
      border-inline-end-color: var(--color-gray-600);
    }
    .border-li-gray-700 {
      border-inline-start-color: var(--color-gray-700);
      border-inline-end-color: var(--color-gray-700);
    }
    .border-li-gray-800 {
      border-inline-start-color: var(--color-gray-800);
      border-inline-end-color: var(--color-gray-800);
    }
    .border-li-gray-900 {
      border-inline-start-color: var(--color-gray-900);
      border-inline-end-color: var(--color-gray-900);
    }
    .border-li-inherit {
      border-inline-start-color: inherit;
      border-inline-end-color: inherit;
    }
    .border-li-transparent {
      border-inline-start-color: transparent;
      border-inline-end-color: transparent;
    }
    .border-li-white {
      border-inline-start-color: var(--color-white);
      border-inline-end-color: var(--color-white);
    }
    .border-is-black {
      border-inline-start-color: var(--color-black);
    }
    .border-is-blue-50 {
      border-inline-start-color: var(--color-blue-50);
    }
    .border-is-blue-100 {
      border-inline-start-color: var(--color-blue-100);
    }
    .border-is-blue-200 {
      border-inline-start-color: var(--color-blue-200);
    }
    .border-is-blue-300 {
      border-inline-start-color: var(--color-blue-300);
    }
    .border-is-blue-400 {
      border-inline-start-color: var(--color-blue-400);
    }
    .border-is-blue-500 {
      border-inline-start-color: var(--color-blue-500);
    }
    .border-is-blue-600 {
      border-inline-start-color: var(--color-blue-600);
    }
    .border-is-blue-700 {
      border-inline-start-color: var(--color-blue-700);
    }
    .border-is-blue-800 {
      border-inline-start-color: var(--color-blue-800);
    }
    .border-is-blue-900 {
      border-inline-start-color: var(--color-blue-900);
    }
    .border-is-current {
      border-inline-start-color: currentColor;
    }
    .border-is-gray-50 {
      border-inline-start-color: var(--color-gray-50);
    }
    .border-is-gray-100 {
      border-inline-start-color: var(--color-gray-100);
    }
    .border-is-gray-200 {
      border-inline-start-color: var(--color-gray-200);
    }
    .border-is-gray-300 {
      border-inline-start-color: var(--color-gray-300);
    }
    .border-is-gray-400 {
      border-inline-start-color: var(--color-gray-400);
    }
    .border-is-gray-500 {
      border-inline-start-color: var(--color-gray-500);
    }
    .border-is-gray-600 {
      border-inline-start-color: var(--color-gray-600);
    }
    .border-is-gray-700 {
      border-inline-start-color: var(--color-gray-700);
    }
    .border-is-gray-800 {
      border-inline-start-color: var(--color-gray-800);
    }
    .border-is-gray-900 {
      border-inline-start-color: var(--color-gray-900);
    }
    .border-is-green-50 {
      border-inline-start-color: var(--color-green-50);
    }
    .border-is-green-100 {
      border-inline-start-color: var(--color-green-100);
    }
    .border-is-green-200 {
      border-inline-start-color: var(--color-green-200);
    }
    .border-is-green-300 {
      border-inline-start-color: var(--color-green-300);
    }
    .border-is-green-400 {
      border-inline-start-color: var(--color-green-400);
    }
    .border-is-green-500 {
      border-inline-start-color: var(--color-green-500);
    }
    .border-is-green-600 {
      border-inline-start-color: var(--color-green-600);
    }
    .border-is-green-700 {
      border-inline-start-color: var(--color-green-700);
    }
    .border-is-green-800 {
      border-inline-start-color: var(--color-green-800);
    }
    .border-is-green-900 {
      border-inline-start-color: var(--color-green-900);
    }
    .border-is-indigo-50 {
      border-inline-start-color: var(--color-indigo-50);
    }
    .border-is-indigo-100 {
      border-inline-start-color: var(--color-indigo-100);
    }
    .border-is-indigo-200 {
      border-inline-start-color: var(--color-indigo-200);
    }
    .border-is-indigo-300 {
      border-inline-start-color: var(--color-indigo-300);
    }
    .border-is-indigo-400 {
      border-inline-start-color: var(--color-indigo-400);
    }
    .border-is-indigo-500 {
      border-inline-start-color: var(--color-indigo-500);
    }
    .border-is-indigo-600 {
      border-inline-start-color: var(--color-indigo-600);
    }
    .border-is-indigo-700 {
      border-inline-start-color: var(--color-indigo-700);
    }
    .border-is-indigo-800 {
      border-inline-start-color: var(--color-indigo-800);
    }
    .border-is-indigo-900 {
      border-inline-start-color: var(--color-indigo-900);
    }
    .border-is-inherit {
      border-inline-start-color: inherit;
    }
    .border-is-pink-50 {
      border-inline-start-color: var(--color-pink-50);
    }
    .border-is-pink-100 {
      border-inline-start-color: var(--color-pink-100);
    }
    .border-is-pink-200 {
      border-inline-start-color: var(--color-pink-200);
    }
    .border-is-pink-300 {
      border-inline-start-color: var(--color-pink-300);
    }
    .border-is-pink-400 {
      border-inline-start-color: var(--color-pink-400);
    }
    .border-is-pink-500 {
      border-inline-start-color: var(--color-pink-500);
    }
    .border-is-pink-600 {
      border-inline-start-color: var(--color-pink-600);
    }
    .border-is-pink-700 {
      border-inline-start-color: var(--color-pink-700);
    }
    .border-is-pink-800 {
      border-inline-start-color: var(--color-pink-800);
    }
    .border-is-pink-900 {
      border-inline-start-color: var(--color-pink-900);
    }
    .border-is-purple-50 {
      border-inline-start-color: var(--color-purple-50);
    }
    .border-is-purple-100 {
      border-inline-start-color: var(--color-purple-100);
    }
    .border-is-purple-200 {
      border-inline-start-color: var(--color-purple-200);
    }
    .border-is-purple-300 {
      border-inline-start-color: var(--color-purple-300);
    }
    .border-is-purple-400 {
      border-inline-start-color: var(--color-purple-400);
    }
    .border-is-purple-500 {
      border-inline-start-color: var(--color-purple-500);
    }
    .border-is-purple-600 {
      border-inline-start-color: var(--color-purple-600);
    }
    .border-is-purple-700 {
      border-inline-start-color: var(--color-purple-700);
    }
    .border-is-purple-800 {
      border-inline-start-color: var(--color-purple-800);
    }
    .border-is-purple-900 {
      border-inline-start-color: var(--color-purple-900);
    }
    .border-is-red-50 {
      border-inline-start-color: var(--color-red-50);
    }
    .border-is-red-100 {
      border-inline-start-color: var(--color-red-100);
    }
    .border-is-red-200 {
      border-inline-start-color: var(--color-red-200);
    }
    .border-is-red-300 {
      border-inline-start-color: var(--color-red-300);
    }
    .border-is-red-400 {
      border-inline-start-color: var(--color-red-400);
    }
    .border-is-red-500 {
      border-inline-start-color: var(--color-red-500);
    }
    .border-is-red-600 {
      border-inline-start-color: var(--color-red-600);
    }
    .border-is-red-700 {
      border-inline-start-color: var(--color-red-700);
    }
    .border-is-red-800 {
      border-inline-start-color: var(--color-red-800);
    }
    .border-is-red-900 {
      border-inline-start-color: var(--color-red-900);
    }
    .border-is-transparent {
      border-inline-start-color: transparent;
    }
    .border-is-white {
      border-inline-start-color: var(--color-white);
    }
    .border-is-yellow-50 {
      border-inline-start-color: var(--color-yellow-50);
    }
    .border-is-yellow-100 {
      border-inline-start-color: var(--color-yellow-100);
    }
    .border-is-yellow-200 {
      border-inline-start-color: var(--color-yellow-200);
    }
    .border-is-yellow-300 {
      border-inline-start-color: var(--color-yellow-300);
    }
    .border-is-yellow-400 {
      border-inline-start-color: var(--color-yellow-400);
    }
    .border-is-yellow-500 {
      border-inline-start-color: var(--color-yellow-500);
    }
    .border-is-yellow-600 {
      border-inline-start-color: var(--color-yellow-600);
    }
    .border-is-yellow-700 {
      border-inline-start-color: var(--color-yellow-700);
    }
    .border-is-yellow-800 {
      border-inline-start-color: var(--color-yellow-800);
    }
    .border-is-yellow-900 {
      border-inline-start-color: var(--color-yellow-900);
    }
    .border-ie-black {
      border-inline-end-color: var(--color-black);
    }
    .border-ie-blue-50 {
      border-inline-end-color: var(--color-blue-50);
    }
    .border-ie-blue-100 {
      border-inline-end-color: var(--color-blue-100);
    }
    .border-ie-blue-200 {
      border-inline-end-color: var(--color-blue-200);
    }
    .border-ie-blue-300 {
      border-inline-end-color: var(--color-blue-300);
    }
    .border-ie-blue-400 {
      border-inline-end-color: var(--color-blue-400);
    }
    .border-ie-blue-500 {
      border-inline-end-color: var(--color-blue-500);
    }
    .border-ie-blue-600 {
      border-inline-end-color: var(--color-blue-600);
    }
    .border-ie-blue-700 {
      border-inline-end-color: var(--color-blue-700);
    }
    .border-ie-blue-800 {
      border-inline-end-color: var(--color-blue-800);
    }
    .border-ie-blue-900 {
      border-inline-end-color: var(--color-blue-900);
    }
    .border-ie-current {
      border-inline-end-color: currentColor;
    }
    .border-ie-gray-50 {
      border-inline-end-color: var(--color-gray-50);
    }
    .border-ie-gray-100 {
      border-inline-end-color: var(--color-gray-100);
    }
    .border-ie-gray-200 {
      border-inline-end-color: var(--color-gray-200);
    }
    .border-ie-gray-300 {
      border-inline-end-color: var(--color-gray-300);
    }
    .border-ie-gray-400 {
      border-inline-end-color: var(--color-gray-400);
    }
    .border-ie-gray-500 {
      border-inline-end-color: var(--color-gray-500);
    }
    .border-ie-gray-600 {
      border-inline-end-color: var(--color-gray-600);
    }
    .border-ie-gray-700 {
      border-inline-end-color: var(--color-gray-700);
    }
    .border-ie-gray-800 {
      border-inline-end-color: var(--color-gray-800);
    }
    .border-ie-gray-900 {
      border-inline-end-color: var(--color-gray-900);
    }
    .border-ie-green-50 {
      border-inline-end-color: var(--color-green-50);
    }
    .border-ie-green-100 {
      border-inline-end-color: var(--color-green-100);
    }
    .border-ie-green-200 {
      border-inline-end-color: var(--color-green-200);
    }
    .border-ie-green-300 {
      border-inline-end-color: var(--color-green-300);
    }
    .border-ie-green-400 {
      border-inline-end-color: var(--color-green-400);
    }
    .border-ie-green-500 {
      border-inline-end-color: var(--color-green-500);
    }
    .border-ie-green-600 {
      border-inline-end-color: var(--color-green-600);
    }
    .border-ie-green-700 {
      border-inline-end-color: var(--color-green-700);
    }
    .border-ie-green-800 {
      border-inline-end-color: var(--color-green-800);
    }
    .border-ie-green-900 {
      border-inline-end-color: var(--color-green-900);
    }
    .border-ie-indigo-50 {
      border-inline-end-color: var(--color-indigo-50);
    }
    .border-ie-indigo-100 {
      border-inline-end-color: var(--color-indigo-100);
    }
    .border-ie-indigo-200 {
      border-inline-end-color: var(--color-indigo-200);
    }
    .border-ie-indigo-300 {
      border-inline-end-color: var(--color-indigo-300);
    }
    .border-ie-indigo-400 {
      border-inline-end-color: var(--color-indigo-400);
    }
    .border-ie-indigo-500 {
      border-inline-end-color: var(--color-indigo-500);
    }
    .border-ie-indigo-600 {
      border-inline-end-color: var(--color-indigo-600);
    }
    .border-ie-indigo-700 {
      border-inline-end-color: var(--color-indigo-700);
    }
    .border-ie-indigo-800 {
      border-inline-end-color: var(--color-indigo-800);
    }
    .border-ie-indigo-900 {
      border-inline-end-color: var(--color-indigo-900);
    }
    .border-ie-inherit {
      border-inline-end-color: inherit;
    }
    .border-ie-pink-50 {
      border-inline-end-color: var(--color-pink-50);
    }
    .border-ie-pink-100 {
      border-inline-end-color: var(--color-pink-100);
    }
    .border-ie-pink-200 {
      border-inline-end-color: var(--color-pink-200);
    }
    .border-ie-pink-300 {
      border-inline-end-color: var(--color-pink-300);
    }
    .border-ie-pink-400 {
      border-inline-end-color: var(--color-pink-400);
    }
    .border-ie-pink-500 {
      border-inline-end-color: var(--color-pink-500);
    }
    .border-ie-pink-600 {
      border-inline-end-color: var(--color-pink-600);
    }
    .border-ie-pink-700 {
      border-inline-end-color: var(--color-pink-700);
    }
    .border-ie-pink-800 {
      border-inline-end-color: var(--color-pink-800);
    }
    .border-ie-pink-900 {
      border-inline-end-color: var(--color-pink-900);
    }
    .border-ie-purple-50 {
      border-inline-end-color: var(--color-purple-50);
    }
    .border-ie-purple-100 {
      border-inline-end-color: var(--color-purple-100);
    }
    .border-ie-purple-200 {
      border-inline-end-color: var(--color-purple-200);
    }
    .border-ie-purple-300 {
      border-inline-end-color: var(--color-purple-300);
    }
    .border-ie-purple-400 {
      border-inline-end-color: var(--color-purple-400);
    }
    .border-ie-purple-500 {
      border-inline-end-color: var(--color-purple-500);
    }
    .border-ie-purple-600 {
      border-inline-end-color: var(--color-purple-600);
    }
    .border-ie-purple-700 {
      border-inline-end-color: var(--color-purple-700);
    }
    .border-ie-purple-800 {
      border-inline-end-color: var(--color-purple-800);
    }
    .border-ie-purple-900 {
      border-inline-end-color: var(--color-purple-900);
    }
    .border-ie-red-50 {
      border-inline-end-color: var(--color-red-50);
    }
    .border-ie-red-100 {
      border-inline-end-color: var(--color-red-100);
    }
    .border-ie-red-200 {
      border-inline-end-color: var(--color-red-200);
    }
    .border-ie-red-300 {
      border-inline-end-color: var(--color-red-300);
    }
    .border-ie-red-400 {
      border-inline-end-color: var(--color-red-400);
    }
    .border-ie-red-500 {
      border-inline-end-color: var(--color-red-500);
    }
    .border-ie-red-600 {
      border-inline-end-color: var(--color-red-600);
    }
    .border-ie-red-700 {
      border-inline-end-color: var(--color-red-700);
    }
    .border-ie-red-800 {
      border-inline-end-color: var(--color-red-800);
    }
    .border-ie-red-900 {
      border-inline-end-color: var(--color-red-900);
    }
    .border-ie-transparent {
      border-inline-end-color: transparent;
    }
    .border-ie-white {
      border-inline-end-color: var(--color-white);
    }
    .border-ie-yellow-50 {
      border-inline-end-color: var(--color-yellow-50);
    }
    .border-ie-yellow-100 {
      border-inline-end-color: var(--color-yellow-100);
    }
    .border-ie-yellow-200 {
      border-inline-end-color: var(--color-yellow-200);
    }
    .border-ie-yellow-300 {
      border-inline-end-color: var(--color-yellow-300);
    }
    .border-ie-yellow-400 {
      border-inline-end-color: var(--color-yellow-400);
    }
    .border-ie-yellow-500 {
      border-inline-end-color: var(--color-yellow-500);
    }
    .border-ie-yellow-600 {
      border-inline-end-color: var(--color-yellow-600);
    }
    .border-ie-yellow-700 {
      border-inline-end-color: var(--color-yellow-700);
    }
    .border-ie-yellow-800 {
      border-inline-end-color: var(--color-yellow-800);
    }
    .border-ie-yellow-900 {
      border-inline-end-color: var(--color-yellow-900);
    }
    .pli-0 {
      padding-inline: 0px;
    }
    .pli-0\\.5 {
      padding-inline: 0.125rem;
    }
    .pli-1 {
      padding-inline: 0.25rem;
    }
    .pli-1\\.5 {
      padding-inline: 0.375rem;
    }
    .pli-2 {
      padding-inline: 0.5rem;
    }
    .pli-2\\.5 {
      padding-inline: 0.625rem;
    }
    .pli-3 {
      padding-inline: 0.75rem;
    }
    .pli-3\\.5 {
      padding-inline: 0.875rem;
    }
    .pli-4 {
      padding-inline: 1rem;
    }
    .pli-5 {
      padding-inline: 1.25rem;
    }
    .pli-6 {
      padding-inline: 1.5rem;
    }
    .pli-7 {
      padding-inline: 1.75rem;
    }
    .pli-8 {
      padding-inline: 2rem;
    }
    .pli-9 {
      padding-inline: 2.25rem;
    }
    .pli-10 {
      padding-inline: 2.5rem;
    }
    .pli-11 {
      padding-inline: 2.75rem;
    }
    .pli-12 {
      padding-inline: 3rem;
    }
    .pli-14 {
      padding-inline: 3.5rem;
    }
    .pli-16 {
      padding-inline: 4rem;
    }
    .pli-20 {
      padding-inline: 5rem;
    }
    .pli-24 {
      padding-inline: 6rem;
    }
    .pli-28 {
      padding-inline: 7rem;
    }
    .pli-32 {
      padding-inline: 8rem;
    }
    .pli-36 {
      padding-inline: 9rem;
    }
    .pli-40 {
      padding-inline: 10rem;
    }
    .pli-44 {
      padding-inline: 11rem;
    }
    .pli-48 {
      padding-inline: 12rem;
    }
    .pli-52 {
      padding-inline: 13rem;
    }
    .pli-56 {
      padding-inline: 14rem;
    }
    .pli-60 {
      padding-inline: 15rem;
    }
    .pli-64 {
      padding-inline: 16rem;
    }
    .pli-72 {
      padding-inline: 18rem;
    }
    .pli-80 {
      padding-inline: 20rem;
    }
    .pli-96 {
      padding-inline: 24rem;
    }
    .pli-px {
      padding-inline: 1px;
    }
    .plb-0 {
      padding-block: 0px;
    }
    .plb-0\\.5 {
      padding-block: 0.125rem;
    }
    .plb-1 {
      padding-block: 0.25rem;
    }
    .plb-1\\.5 {
      padding-block: 0.375rem;
    }
    .plb-2 {
      padding-block: 0.5rem;
    }
    .plb-2\\.5 {
      padding-block: 0.625rem;
    }
    .plb-3 {
      padding-block: 0.75rem;
    }
    .plb-3\\.5 {
      padding-block: 0.875rem;
    }
    .plb-4 {
      padding-block: 1rem;
    }
    .plb-5 {
      padding-block: 1.25rem;
    }
    .plb-6 {
      padding-block: 1.5rem;
    }
    .plb-7 {
      padding-block: 1.75rem;
    }
    .plb-8 {
      padding-block: 2rem;
    }
    .plb-9 {
      padding-block: 2.25rem;
    }
    .plb-10 {
      padding-block: 2.5rem;
    }
    .plb-11 {
      padding-block: 2.75rem;
    }
    .plb-12 {
      padding-block: 3rem;
    }
    .plb-14 {
      padding-block: 3.5rem;
    }
    .plb-16 {
      padding-block: 4rem;
    }
    .plb-20 {
      padding-block: 5rem;
    }
    .plb-24 {
      padding-block: 6rem;
    }
    .plb-28 {
      padding-block: 7rem;
    }
    .plb-32 {
      padding-block: 8rem;
    }
    .plb-36 {
      padding-block: 9rem;
    }
    .plb-40 {
      padding-block: 10rem;
    }
    .plb-44 {
      padding-block: 11rem;
    }
    .plb-48 {
      padding-block: 12rem;
    }
    .plb-52 {
      padding-block: 13rem;
    }
    .plb-56 {
      padding-block: 14rem;
    }
    .plb-60 {
      padding-block: 15rem;
    }
    .plb-64 {
      padding-block: 16rem;
    }
    .plb-72 {
      padding-block: 18rem;
    }
    .plb-80 {
      padding-block: 20rem;
    }
    .plb-96 {
      padding-block: 24rem;
    }
    .plb-px {
      padding-block: 1px;
    }
    .pis-0 {
      padding-inline-start: 0px;
    }
    .pis-0\\.5 {
      padding-inline-start: 0.125rem;
    }
    .pis-1 {
      padding-inline-start: 0.25rem;
    }
    .pis-1\\.5 {
      padding-inline-start: 0.375rem;
    }
    .pis-2 {
      padding-inline-start: 0.5rem;
    }
    .pis-2\\.5 {
      padding-inline-start: 0.625rem;
    }
    .pis-3 {
      padding-inline-start: 0.75rem;
    }
    .pis-3\\.5 {
      padding-inline-start: 0.875rem;
    }
    .pis-4 {
      padding-inline-start: 1rem;
    }
    .pis-5 {
      padding-inline-start: 1.25rem;
    }
    .pis-6 {
      padding-inline-start: 1.5rem;
    }
    .pis-7 {
      padding-inline-start: 1.75rem;
    }
    .pis-8 {
      padding-inline-start: 2rem;
    }
    .pis-9 {
      padding-inline-start: 2.25rem;
    }
    .pis-10 {
      padding-inline-start: 2.5rem;
    }
    .pis-11 {
      padding-inline-start: 2.75rem;
    }
    .pis-12 {
      padding-inline-start: 3rem;
    }
    .pis-14 {
      padding-inline-start: 3.5rem;
    }
    .pis-16 {
      padding-inline-start: 4rem;
    }
    .pis-20 {
      padding-inline-start: 5rem;
    }
    .pis-24 {
      padding-inline-start: 6rem;
    }
    .pis-28 {
      padding-inline-start: 7rem;
    }
    .pis-32 {
      padding-inline-start: 8rem;
    }
    .pis-36 {
      padding-inline-start: 9rem;
    }
    .pis-40 {
      padding-inline-start: 10rem;
    }
    .pis-44 {
      padding-inline-start: 11rem;
    }
    .pis-48 {
      padding-inline-start: 12rem;
    }
    .pis-52 {
      padding-inline-start: 13rem;
    }
    .pis-56 {
      padding-inline-start: 14rem;
    }
    .pis-60 {
      padding-inline-start: 15rem;
    }
    .pis-64 {
      padding-inline-start: 16rem;
    }
    .pis-72 {
      padding-inline-start: 18rem;
    }
    .pis-80 {
      padding-inline-start: 20rem;
    }
    .pis-96 {
      padding-inline-start: 24rem;
    }
    .pis-px {
      padding-inline-start: 1px;
    }
    .pie-0 {
      padding-inline-end: 0px;
    }
    .pie-0\\.5 {
      padding-inline-end: 0.125rem;
    }
    .pie-1 {
      padding-inline-end: 0.25rem;
    }
    .pie-1\\.5 {
      padding-inline-end: 0.375rem;
    }
    .pie-2 {
      padding-inline-end: 0.5rem;
    }
    .pie-2\\.5 {
      padding-inline-end: 0.625rem;
    }
    .pie-3 {
      padding-inline-end: 0.75rem;
    }
    .pie-3\\.5 {
      padding-inline-end: 0.875rem;
    }
    .pie-4 {
      padding-inline-end: 1rem;
    }
    .pie-5 {
      padding-inline-end: 1.25rem;
    }
    .pie-6 {
      padding-inline-end: 1.5rem;
    }
    .pie-7 {
      padding-inline-end: 1.75rem;
    }
    .pie-8 {
      padding-inline-end: 2rem;
    }
    .pie-9 {
      padding-inline-end: 2.25rem;
    }
    .pie-10 {
      padding-inline-end: 2.5rem;
    }
    .pie-11 {
      padding-inline-end: 2.75rem;
    }
    .pie-12 {
      padding-inline-end: 3rem;
    }
    .pie-14 {
      padding-inline-end: 3.5rem;
    }
    .pie-16 {
      padding-inline-end: 4rem;
    }
    .pie-20 {
      padding-inline-end: 5rem;
    }
    .pie-24 {
      padding-inline-end: 6rem;
    }
    .pie-28 {
      padding-inline-end: 7rem;
    }
    .pie-32 {
      padding-inline-end: 8rem;
    }
    .pie-36 {
      padding-inline-end: 9rem;
    }
    .pie-40 {
      padding-inline-end: 10rem;
    }
    .pie-44 {
      padding-inline-end: 11rem;
    }
    .pie-48 {
      padding-inline-end: 12rem;
    }
    .pie-52 {
      padding-inline-end: 13rem;
    }
    .pie-56 {
      padding-inline-end: 14rem;
    }
    .pie-60 {
      padding-inline-end: 15rem;
    }
    .pie-64 {
      padding-inline-end: 16rem;
    }
    .pie-72 {
      padding-inline-end: 18rem;
    }
    .pie-80 {
      padding-inline-end: 20rem;
    }
    .pie-96 {
      padding-inline-end: 24rem;
    }
    .pie-px {
      padding-inline-end: 1px;
    }
    .border-lb {
      border-block-start-width: 1px;
      border-block-end-width: 1px;
    }
    .border-lb-0 {
      border-block-start-width: 0px;
      border-block-end-width: 0px;
    }
    .border-lb-2 {
      border-block-start-width: 2px;
      border-block-end-width: 2px;
    }
    .border-lb-4 {
      border-block-start-width: 4px;
      border-block-end-width: 4px;
    }
    .border-lb-8 {
      border-block-start-width: 8px;
      border-block-end-width: 8px;
    }
    .border-lb-black {
      border-block-start-color: var(--color-black);
      border-block-end-color: var(--color-black);
    }
    .border-lb-current {
      border-block-start-color: currentColor;
      border-block-end-color: currentColor;
    }
    .border-lb-gray-50 {
      border-block-start-color: var(--color-gray-50);
      border-block-end-color: var(--color-gray-50);
    }
    .border-lb-gray-100 {
      border-block-start-color: var(--color-gray-100);
      border-block-end-color: var(--color-gray-100);
    }
    .border-lb-gray-200 {
      border-block-start-color: var(--color-gray-200);
      border-block-end-color: var(--color-gray-200);
    }
    .border-lb-gray-300 {
      border-block-start-color: var(--color-gray-300);
      border-block-end-color: var(--color-gray-300);
    }
    .border-lb-gray-400 {
      border-block-start-color: var(--color-gray-400);
      border-block-end-color: var(--color-gray-400);
    }
    .border-lb-gray-500 {
      border-block-start-color: var(--color-gray-500);
      border-block-end-color: var(--color-gray-500);
    }
    .border-lb-gray-600 {
      border-block-start-color: var(--color-gray-600);
      border-block-end-color: var(--color-gray-600);
    }
    .border-lb-gray-700 {
      border-block-start-color: var(--color-gray-700);
      border-block-end-color: var(--color-gray-700);
    }
    .border-lb-gray-800 {
      border-block-start-color: var(--color-gray-800);
      border-block-end-color: var(--color-gray-800);
    }
    .border-lb-gray-900 {
      border-block-start-color: var(--color-gray-900);
      border-block-end-color: var(--color-gray-900);
    }
    .border-lb-inherit {
      border-block-start-color: inherit;
      border-block-end-color: inherit;
    }
    .border-lb-transparent {
      border-block-start-color: transparent;
      border-block-end-color: transparent;
    }
    .border-lb-white {
      border-block-start-color: var(--color-white);
      border-block-end-color: var(--color-white);
    }
    .\\!border-bs-black {
      border-block-start-color: var(--color-black) !important;
    }
    .-block-end-0 {
      inset-block-end: calc(0px * -1);
    }
    .-block-end-0\\.5 {
      inset-block-end: calc(0.125rem * -1);
    }
    .-block-end-1 {
      inset-block-end: calc(0.25rem * -1);
    }
    .-block-end-1\\.5 {
      inset-block-end: calc(0.375rem * -1);
    }
    .-block-end-1\\/2 {
      inset-block-end: calc(50% * -1);
    }
    .-block-end-1\\/3 {
      inset-block-end: calc(33.333333% * -1);
    }
    .-block-end-1\\/4 {
      inset-block-end: calc(25% * -1);
    }
    .-block-end-2 {
      inset-block-end: calc(0.5rem * -1);
    }
    .-block-end-2\\.5 {
      inset-block-end: calc(0.625rem * -1);
    }
    .-block-end-2\\/3 {
      inset-block-end: calc(66.666667% * -1);
    }
    .-block-end-2\\/4 {
      inset-block-end: calc(50% * -1);
    }
    .-block-end-3 {
      inset-block-end: calc(0.75rem * -1);
    }
    .-block-end-3\\.5 {
      inset-block-end: calc(0.875rem * -1);
    }
    .-block-end-3\\/4 {
      inset-block-end: calc(75% * -1);
    }
    .-block-end-4 {
      inset-block-end: calc(1rem * -1);
    }
    .-block-end-5 {
      inset-block-end: calc(1.25rem * -1);
    }
    .-block-end-6 {
      inset-block-end: calc(1.5rem * -1);
    }
    .-block-end-7 {
      inset-block-end: calc(1.75rem * -1);
    }
    .-block-end-8 {
      inset-block-end: calc(2rem * -1);
    }
    .-block-end-9 {
      inset-block-end: calc(2.25rem * -1);
    }
    .-block-end-10 {
      inset-block-end: calc(2.5rem * -1);
    }
    .-block-end-11 {
      inset-block-end: calc(2.75rem * -1);
    }
    .-block-end-12 {
      inset-block-end: calc(3rem * -1);
    }
    .-block-end-14 {
      inset-block-end: calc(3.5rem * -1);
    }
    .-block-end-16 {
      inset-block-end: calc(4rem * -1);
    }
    .-block-end-20 {
      inset-block-end: calc(5rem * -1);
    }
    .-block-end-24 {
      inset-block-end: calc(6rem * -1);
    }
    .-block-end-28 {
      inset-block-end: calc(7rem * -1);
    }
    .-block-end-32 {
      inset-block-end: calc(8rem * -1);
    }
    .-block-end-36 {
      inset-block-end: calc(9rem * -1);
    }
    .-block-end-40 {
      inset-block-end: calc(10rem * -1);
    }
    .-block-end-44 {
      inset-block-end: calc(11rem * -1);
    }
    .-block-end-48 {
      inset-block-end: calc(12rem * -1);
    }
    .-block-end-52 {
      inset-block-end: calc(13rem * -1);
    }
    .-block-end-56 {
      inset-block-end: calc(14rem * -1);
    }
    .-block-end-60 {
      inset-block-end: calc(15rem * -1);
    }
    .-block-end-64 {
      inset-block-end: calc(16rem * -1);
    }
    .-block-end-72 {
      inset-block-end: calc(18rem * -1);
    }
    .-block-end-80 {
      inset-block-end: calc(20rem * -1);
    }
    .-block-end-96 {
      inset-block-end: calc(24rem * -1);
    }
    .-block-end-full {
      inset-block-end: calc(100% * -1);
    }
    .-block-end-px {
      inset-block-end: calc(1px * -1);
    }
    .-block-start-0 {
      inset-block-start: calc(0px * -1);
    }
    .-block-start-0\\.5 {
      inset-block-start: calc(0.125rem * -1);
    }
    .-block-start-1 {
      inset-block-start: calc(0.25rem * -1);
    }
    .-block-start-1\\.5 {
      inset-block-start: calc(0.375rem * -1);
    }
    .-block-start-1\\/2 {
      inset-block-start: calc(50% * -1);
    }
    .-block-start-1\\/3 {
      inset-block-start: calc(33.333333% * -1);
    }
    .-block-start-1\\/4 {
      inset-block-start: calc(25% * -1);
    }
    .-block-start-2 {
      inset-block-start: calc(0.5rem * -1);
    }
    .-block-start-2\\.5 {
      inset-block-start: calc(0.625rem * -1);
    }
    .-block-start-2\\/3 {
      inset-block-start: calc(66.666667% * -1);
    }
    .-block-start-2\\/4 {
      inset-block-start: calc(50% * -1);
    }
    .-block-start-3 {
      inset-block-start: calc(0.75rem * -1);
    }
    .-block-start-3\\.5 {
      inset-block-start: calc(0.875rem * -1);
    }
    .-block-start-3\\/4 {
      inset-block-start: calc(75% * -1);
    }
    .-block-start-4 {
      inset-block-start: calc(1rem * -1);
    }
    .-block-start-5 {
      inset-block-start: calc(1.25rem * -1);
    }
    .-block-start-6 {
      inset-block-start: calc(1.5rem * -1);
    }
    .-block-start-7 {
      inset-block-start: calc(1.75rem * -1);
    }
    .-block-start-8 {
      inset-block-start: calc(2rem * -1);
    }
    .-block-start-9 {
      inset-block-start: calc(2.25rem * -1);
    }
    .-block-start-10 {
      inset-block-start: calc(2.5rem * -1);
    }
    .-block-start-11 {
      inset-block-start: calc(2.75rem * -1);
    }
    .-block-start-12 {
      inset-block-start: calc(3rem * -1);
    }
    .-block-start-14 {
      inset-block-start: calc(3.5rem * -1);
    }
    .-block-start-16 {
      inset-block-start: calc(4rem * -1);
    }
    .-block-start-20 {
      inset-block-start: calc(5rem * -1);
    }
    .-block-start-24 {
      inset-block-start: calc(6rem * -1);
    }
    .-block-start-28 {
      inset-block-start: calc(7rem * -1);
    }
    .-block-start-32 {
      inset-block-start: calc(8rem * -1);
    }
    .-block-start-36 {
      inset-block-start: calc(9rem * -1);
    }
    .-block-start-40 {
      inset-block-start: calc(10rem * -1);
    }
    .-block-start-44 {
      inset-block-start: calc(11rem * -1);
    }
    .-block-start-48 {
      inset-block-start: calc(12rem * -1);
    }
    .-block-start-52 {
      inset-block-start: calc(13rem * -1);
    }
    .-block-start-56 {
      inset-block-start: calc(14rem * -1);
    }
    .-block-start-60 {
      inset-block-start: calc(15rem * -1);
    }
    .-block-start-64 {
      inset-block-start: calc(16rem * -1);
    }
    .-block-start-72 {
      inset-block-start: calc(18rem * -1);
    }
    .-block-start-80 {
      inset-block-start: calc(20rem * -1);
    }
    .-block-start-96 {
      inset-block-start: calc(24rem * -1);
    }
    .-block-start-full {
      inset-block-start: calc(100% * -1);
    }
    .-block-start-px {
      inset-block-start: calc(1px * -1);
    }
    .-mbe-0 {
      margin-block-end: calc(0px * -1);
    }
    .-mbe-0\\.5 {
      margin-block-end: calc(0.125rem * -1);
    }
    .-mbe-1 {
      margin-block-end: calc(0.25rem * -1);
    }
    .-mbe-1\\.5 {
      margin-block-end: calc(0.375rem * -1);
    }
    .-mbe-2 {
      margin-block-end: calc(0.5rem * -1);
    }
    .-mbe-2\\.5 {
      margin-block-end: calc(0.625rem * -1);
    }
    .-mbe-3 {
      margin-block-end: calc(0.75rem * -1);
    }
    .-mbe-3\\.5 {
      margin-block-end: calc(0.875rem * -1);
    }
    .-mbe-4 {
      margin-block-end: calc(1rem * -1);
    }
    .-mbe-5 {
      margin-block-end: calc(1.25rem * -1);
    }
    .-mbe-6 {
      margin-block-end: calc(1.5rem * -1);
    }
    .-mbe-7 {
      margin-block-end: calc(1.75rem * -1);
    }
    .-mbe-8 {
      margin-block-end: calc(2rem * -1);
    }
    .-mbe-9 {
      margin-block-end: calc(2.25rem * -1);
    }
    .-mbe-10 {
      margin-block-end: calc(2.5rem * -1);
    }
    .-mbe-11 {
      margin-block-end: calc(2.75rem * -1);
    }
    .-mbe-12 {
      margin-block-end: calc(3rem * -1);
    }
    .-mbe-14 {
      margin-block-end: calc(3.5rem * -1);
    }
    .-mbe-16 {
      margin-block-end: calc(4rem * -1);
    }
    .-mbe-20 {
      margin-block-end: calc(5rem * -1);
    }
    .-mbe-24 {
      margin-block-end: calc(6rem * -1);
    }
    .-mbe-28 {
      margin-block-end: calc(7rem * -1);
    }
    .-mbe-32 {
      margin-block-end: calc(8rem * -1);
    }
    .-mbe-36 {
      margin-block-end: calc(9rem * -1);
    }
    .-mbe-40 {
      margin-block-end: calc(10rem * -1);
    }
    .-mbe-44 {
      margin-block-end: calc(11rem * -1);
    }
    .-mbe-48 {
      margin-block-end: calc(12rem * -1);
    }
    .-mbe-52 {
      margin-block-end: calc(13rem * -1);
    }
    .-mbe-56 {
      margin-block-end: calc(14rem * -1);
    }
    .-mbe-60 {
      margin-block-end: calc(15rem * -1);
    }
    .-mbe-64 {
      margin-block-end: calc(16rem * -1);
    }
    .-mbe-72 {
      margin-block-end: calc(18rem * -1);
    }
    .-mbe-80 {
      margin-block-end: calc(20rem * -1);
    }
    .-mbe-96 {
      margin-block-end: calc(24rem * -1);
    }
    .-mbe-px {
      margin-block-end: calc(1px * -1);
    }
    .-mbs-0 {
      margin-block-start: calc(0px * -1);
    }
    .-mbs-0\\.5 {
      margin-block-start: calc(0.125rem * -1);
    }
    .-mbs-1 {
      margin-block-start: calc(0.25rem * -1);
    }
    .-mbs-1\\.5 {
      margin-block-start: calc(0.375rem * -1);
    }
    .-mbs-2 {
      margin-block-start: calc(0.5rem * -1);
    }
    .-mbs-2\\.5 {
      margin-block-start: calc(0.625rem * -1);
    }
    .-mbs-3 {
      margin-block-start: calc(0.75rem * -1);
    }
    .-mbs-3\\.5 {
      margin-block-start: calc(0.875rem * -1);
    }
    .-mbs-4 {
      margin-block-start: calc(1rem * -1);
    }
    .-mbs-5 {
      margin-block-start: calc(1.25rem * -1);
    }
    .-mbs-6 {
      margin-block-start: calc(1.5rem * -1);
    }
    .-mbs-7 {
      margin-block-start: calc(1.75rem * -1);
    }
    .-mbs-8 {
      margin-block-start: calc(2rem * -1);
    }
    .-mbs-9 {
      margin-block-start: calc(2.25rem * -1);
    }
    .-mbs-10 {
      margin-block-start: calc(2.5rem * -1);
    }
    .-mbs-11 {
      margin-block-start: calc(2.75rem * -1);
    }
    .-mbs-12 {
      margin-block-start: calc(3rem * -1);
    }
    .-mbs-14 {
      margin-block-start: calc(3.5rem * -1);
    }
    .-mbs-16 {
      margin-block-start: calc(4rem * -1);
    }
    .-mbs-20 {
      margin-block-start: calc(5rem * -1);
    }
    .-mbs-24 {
      margin-block-start: calc(6rem * -1);
    }
    .-mbs-28 {
      margin-block-start: calc(7rem * -1);
    }
    .-mbs-32 {
      margin-block-start: calc(8rem * -1);
    }
    .-mbs-36 {
      margin-block-start: calc(9rem * -1);
    }
    .-mbs-40 {
      margin-block-start: calc(10rem * -1);
    }
    .-mbs-44 {
      margin-block-start: calc(11rem * -1);
    }
    .-mbs-48 {
      margin-block-start: calc(12rem * -1);
    }
    .-mbs-52 {
      margin-block-start: calc(13rem * -1);
    }
    .-mbs-56 {
      margin-block-start: calc(14rem * -1);
    }
    .-mbs-60 {
      margin-block-start: calc(15rem * -1);
    }
    .-mbs-64 {
      margin-block-start: calc(16rem * -1);
    }
    .-mbs-72 {
      margin-block-start: calc(18rem * -1);
    }
    .-mbs-80 {
      margin-block-start: calc(20rem * -1);
    }
    .-mbs-96 {
      margin-block-start: calc(24rem * -1);
    }
    .-mbs-px {
      margin-block-start: calc(1px * -1);
    }
    .block-end-0 {
      inset-block-end: 0px;
    }
    .block-end-0\\.5 {
      inset-block-end: 0.125rem;
    }
    .block-end-1 {
      inset-block-end: 0.25rem;
    }
    .block-end-1\\.5 {
      inset-block-end: 0.375rem;
    }
    .block-end-1\\/2 {
      inset-block-end: 50%;
    }
    .block-end-1\\/3 {
      inset-block-end: 33.333333%;
    }
    .block-end-1\\/4 {
      inset-block-end: 25%;
    }
    .block-end-2 {
      inset-block-end: 0.5rem;
    }
    .block-end-2\\.5 {
      inset-block-end: 0.625rem;
    }
    .block-end-2\\/3 {
      inset-block-end: 66.666667%;
    }
    .block-end-2\\/4 {
      inset-block-end: 50%;
    }
    .block-end-3 {
      inset-block-end: 0.75rem;
    }
    .block-end-3\\.5 {
      inset-block-end: 0.875rem;
    }
    .block-end-3\\/4 {
      inset-block-end: 75%;
    }
    .block-end-4 {
      inset-block-end: 1rem;
    }
    .block-end-5 {
      inset-block-end: 1.25rem;
    }
    .block-end-6 {
      inset-block-end: 1.5rem;
    }
    .block-end-7 {
      inset-block-end: 1.75rem;
    }
    .block-end-8 {
      inset-block-end: 2rem;
    }
    .block-end-9 {
      inset-block-end: 2.25rem;
    }
    .block-end-10 {
      inset-block-end: 2.5rem;
    }
    .block-end-11 {
      inset-block-end: 2.75rem;
    }
    .block-end-12 {
      inset-block-end: 3rem;
    }
    .block-end-14 {
      inset-block-end: 3.5rem;
    }
    .block-end-16 {
      inset-block-end: 4rem;
    }
    .block-end-20 {
      inset-block-end: 5rem;
    }
    .block-end-24 {
      inset-block-end: 6rem;
    }
    .block-end-28 {
      inset-block-end: 7rem;
    }
    .block-end-32 {
      inset-block-end: 8rem;
    }
    .block-end-36 {
      inset-block-end: 9rem;
    }
    .block-end-40 {
      inset-block-end: 10rem;
    }
    .block-end-44 {
      inset-block-end: 11rem;
    }
    .block-end-48 {
      inset-block-end: 12rem;
    }
    .block-end-52 {
      inset-block-end: 13rem;
    }
    .block-end-56 {
      inset-block-end: 14rem;
    }
    .block-end-60 {
      inset-block-end: 15rem;
    }
    .block-end-64 {
      inset-block-end: 16rem;
    }
    .block-end-72 {
      inset-block-end: 18rem;
    }
    .block-end-80 {
      inset-block-end: 20rem;
    }
    .block-end-96 {
      inset-block-end: 24rem;
    }
    .block-end-auto {
      inset-block-end: auto;
    }
    .block-end-full {
      inset-block-end: 100%;
    }
    .block-end-px {
      inset-block-end: 1px;
    }
    .block-start-0 {
      inset-block-start: 0px;
    }
    .block-start-0\\.5 {
      inset-block-start: 0.125rem;
    }
    .block-start-1 {
      inset-block-start: 0.25rem;
    }
    .block-start-1\\.5 {
      inset-block-start: 0.375rem;
    }
    .block-start-1\\/2 {
      inset-block-start: 50%;
    }
    .block-start-1\\/3 {
      inset-block-start: 33.333333%;
    }
    .block-start-1\\/4 {
      inset-block-start: 25%;
    }
    .block-start-2 {
      inset-block-start: 0.5rem;
    }
    .block-start-2\\.5 {
      inset-block-start: 0.625rem;
    }
    .block-start-2\\/3 {
      inset-block-start: 66.666667%;
    }
    .block-start-2\\/4 {
      inset-block-start: 50%;
    }
    .block-start-3 {
      inset-block-start: 0.75rem;
    }
    .block-start-3\\.5 {
      inset-block-start: 0.875rem;
    }
    .block-start-3\\/4 {
      inset-block-start: 75%;
    }
    .block-start-4 {
      inset-block-start: 1rem;
    }
    .block-start-5 {
      inset-block-start: 1.25rem;
    }
    .block-start-6 {
      inset-block-start: 1.5rem;
    }
    .block-start-7 {
      inset-block-start: 1.75rem;
    }
    .block-start-8 {
      inset-block-start: 2rem;
    }
    .block-start-9 {
      inset-block-start: 2.25rem;
    }
    .block-start-10 {
      inset-block-start: 2.5rem;
    }
    .block-start-11 {
      inset-block-start: 2.75rem;
    }
    .block-start-12 {
      inset-block-start: 3rem;
    }
    .block-start-14 {
      inset-block-start: 3.5rem;
    }
    .block-start-16 {
      inset-block-start: 4rem;
    }
    .block-start-20 {
      inset-block-start: 5rem;
    }
    .block-start-24 {
      inset-block-start: 6rem;
    }
    .block-start-28 {
      inset-block-start: 7rem;
    }
    .block-start-32 {
      inset-block-start: 8rem;
    }
    .block-start-36 {
      inset-block-start: 9rem;
    }
    .block-start-40 {
      inset-block-start: 10rem;
    }
    .block-start-44 {
      inset-block-start: 11rem;
    }
    .block-start-48 {
      inset-block-start: 12rem;
    }
    .block-start-52 {
      inset-block-start: 13rem;
    }
    .block-start-56 {
      inset-block-start: 14rem;
    }
    .block-start-60 {
      inset-block-start: 15rem;
    }
    .block-start-64 {
      inset-block-start: 16rem;
    }
    .block-start-72 {
      inset-block-start: 18rem;
    }
    .block-start-80 {
      inset-block-start: 20rem;
    }
    .block-start-96 {
      inset-block-start: 24rem;
    }
    .block-start-auto {
      inset-block-start: auto;
    }
    .block-start-full {
      inset-block-start: 100%;
    }
    .block-start-px {
      inset-block-start: 1px;
    }
    .border-be {
      border-block-end-width: 1px;
    }
    .border-be-0 {
      border-block-end-width: 0px;
    }
    .border-be-2 {
      border-block-end-width: 2px;
    }
    .border-be-4 {
      border-block-end-width: 4px;
    }
    .border-be-8 {
      border-block-end-width: 8px;
    }
    .border-be-black {
      border-block-end-color: var(--color-black);
    }
    .border-be-blue-50 {
      border-block-end-color: var(--color-blue-50);
    }
    .border-be-blue-100 {
      border-block-end-color: var(--color-blue-100);
    }
    .border-be-blue-200 {
      border-block-end-color: var(--color-blue-200);
    }
    .border-be-blue-300 {
      border-block-end-color: var(--color-blue-300);
    }
    .border-be-blue-400 {
      border-block-end-color: var(--color-blue-400);
    }
    .border-be-blue-500 {
      border-block-end-color: var(--color-blue-500);
    }
    .border-be-blue-600 {
      border-block-end-color: var(--color-blue-600);
    }
    .border-be-blue-700 {
      border-block-end-color: var(--color-blue-700);
    }
    .border-be-blue-800 {
      border-block-end-color: var(--color-blue-800);
    }
    .border-be-blue-900 {
      border-block-end-color: var(--color-blue-900);
    }
    .border-be-current {
      border-block-end-color: currentColor;
    }
    .border-be-gray-50 {
      border-block-end-color: var(--color-gray-50);
    }
    .border-be-gray-100 {
      border-block-end-color: var(--color-gray-100);
    }
    .border-be-gray-200 {
      border-block-end-color: var(--color-gray-200);
    }
    .border-be-gray-300 {
      border-block-end-color: var(--color-gray-300);
    }
    .border-be-gray-400 {
      border-block-end-color: var(--color-gray-400);
    }
    .border-be-gray-500 {
      border-block-end-color: var(--color-gray-500);
    }
    .border-be-gray-600 {
      border-block-end-color: var(--color-gray-600);
    }
    .border-be-gray-700 {
      border-block-end-color: var(--color-gray-700);
    }
    .border-be-gray-800 {
      border-block-end-color: var(--color-gray-800);
    }
    .border-be-gray-900 {
      border-block-end-color: var(--color-gray-900);
    }
    .border-be-green-50 {
      border-block-end-color: var(--color-green-50);
    }
    .border-be-green-100 {
      border-block-end-color: var(--color-green-100);
    }
    .border-be-green-200 {
      border-block-end-color: var(--color-green-200);
    }
    .border-be-green-300 {
      border-block-end-color: var(--color-green-300);
    }
    .border-be-green-400 {
      border-block-end-color: var(--color-green-400);
    }
    .border-be-green-500 {
      border-block-end-color: var(--color-green-500);
    }
    .border-be-green-600 {
      border-block-end-color: var(--color-green-600);
    }
    .border-be-green-700 {
      border-block-end-color: var(--color-green-700);
    }
    .border-be-green-800 {
      border-block-end-color: var(--color-green-800);
    }
    .border-be-green-900 {
      border-block-end-color: var(--color-green-900);
    }
    .border-be-indigo-50 {
      border-block-end-color: var(--color-indigo-50);
    }
    .border-be-indigo-100 {
      border-block-end-color: var(--color-indigo-100);
    }
    .border-be-indigo-200 {
      border-block-end-color: var(--color-indigo-200);
    }
    .border-be-indigo-300 {
      border-block-end-color: var(--color-indigo-300);
    }
    .border-be-indigo-400 {
      border-block-end-color: var(--color-indigo-400);
    }
    .border-be-indigo-500 {
      border-block-end-color: var(--color-indigo-500);
    }
    .border-be-indigo-600 {
      border-block-end-color: var(--color-indigo-600);
    }
    .border-be-indigo-700 {
      border-block-end-color: var(--color-indigo-700);
    }
    .border-be-indigo-800 {
      border-block-end-color: var(--color-indigo-800);
    }
    .border-be-indigo-900 {
      border-block-end-color: var(--color-indigo-900);
    }
    .border-be-inherit {
      border-block-end-color: inherit;
    }
    .border-be-pink-50 {
      border-block-end-color: var(--color-pink-50);
    }
    .border-be-pink-100 {
      border-block-end-color: var(--color-pink-100);
    }
    .border-be-pink-200 {
      border-block-end-color: var(--color-pink-200);
    }
    .border-be-pink-300 {
      border-block-end-color: var(--color-pink-300);
    }
    .border-be-pink-400 {
      border-block-end-color: var(--color-pink-400);
    }
    .border-be-pink-500 {
      border-block-end-color: var(--color-pink-500);
    }
    .border-be-pink-600 {
      border-block-end-color: var(--color-pink-600);
    }
    .border-be-pink-700 {
      border-block-end-color: var(--color-pink-700);
    }
    .border-be-pink-800 {
      border-block-end-color: var(--color-pink-800);
    }
    .border-be-pink-900 {
      border-block-end-color: var(--color-pink-900);
    }
    .border-be-purple-50 {
      border-block-end-color: var(--color-purple-50);
    }
    .border-be-purple-100 {
      border-block-end-color: var(--color-purple-100);
    }
    .border-be-purple-200 {
      border-block-end-color: var(--color-purple-200);
    }
    .border-be-purple-300 {
      border-block-end-color: var(--color-purple-300);
    }
    .border-be-purple-400 {
      border-block-end-color: var(--color-purple-400);
    }
    .border-be-purple-500 {
      border-block-end-color: var(--color-purple-500);
    }
    .border-be-purple-600 {
      border-block-end-color: var(--color-purple-600);
    }
    .border-be-purple-700 {
      border-block-end-color: var(--color-purple-700);
    }
    .border-be-purple-800 {
      border-block-end-color: var(--color-purple-800);
    }
    .border-be-purple-900 {
      border-block-end-color: var(--color-purple-900);
    }
    .border-be-red-50 {
      border-block-end-color: var(--color-red-50);
    }
    .border-be-red-100 {
      border-block-end-color: var(--color-red-100);
    }
    .border-be-red-200 {
      border-block-end-color: var(--color-red-200);
    }
    .border-be-red-300 {
      border-block-end-color: var(--color-red-300);
    }
    .border-be-red-400 {
      border-block-end-color: var(--color-red-400);
    }
    .border-be-red-500 {
      border-block-end-color: var(--color-red-500);
    }
    .border-be-red-600 {
      border-block-end-color: var(--color-red-600);
    }
    .border-be-red-700 {
      border-block-end-color: var(--color-red-700);
    }
    .border-be-red-800 {
      border-block-end-color: var(--color-red-800);
    }
    .border-be-red-900 {
      border-block-end-color: var(--color-red-900);
    }
    .border-be-transparent {
      border-block-end-color: transparent;
    }
    .border-be-white {
      border-block-end-color: var(--color-white);
    }
    .border-be-yellow-50 {
      border-block-end-color: var(--color-yellow-50);
    }
    .border-be-yellow-100 {
      border-block-end-color: var(--color-yellow-100);
    }
    .border-be-yellow-200 {
      border-block-end-color: var(--color-yellow-200);
    }
    .border-be-yellow-300 {
      border-block-end-color: var(--color-yellow-300);
    }
    .border-be-yellow-400 {
      border-block-end-color: var(--color-yellow-400);
    }
    .border-be-yellow-500 {
      border-block-end-color: var(--color-yellow-500);
    }
    .border-be-yellow-600 {
      border-block-end-color: var(--color-yellow-600);
    }
    .border-be-yellow-700 {
      border-block-end-color: var(--color-yellow-700);
    }
    .border-be-yellow-800 {
      border-block-end-color: var(--color-yellow-800);
    }
    .border-be-yellow-900 {
      border-block-end-color: var(--color-yellow-900);
    }
    .border-bs {
      border-block-start-width: 1px;
    }
    .border-bs-0 {
      border-block-start-width: 0px;
    }
    .border-bs-2 {
      border-block-start-width: 2px;
    }
    .border-bs-4 {
      border-block-start-width: 4px;
    }
    .border-bs-8 {
      border-block-start-width: 8px;
    }
    .border-bs-black {
      border-block-start-color: var(--color-black);
    }
    .border-bs-blue-50 {
      border-block-start-color: var(--color-blue-50);
    }
    .border-bs-blue-100 {
      border-block-start-color: var(--color-blue-100);
    }
    .border-bs-blue-200 {
      border-block-start-color: var(--color-blue-200);
    }
    .border-bs-blue-300 {
      border-block-start-color: var(--color-blue-300);
    }
    .border-bs-blue-400 {
      border-block-start-color: var(--color-blue-400);
    }
    .border-bs-blue-500 {
      border-block-start-color: var(--color-blue-500);
    }
    .border-bs-blue-600 {
      border-block-start-color: var(--color-blue-600);
    }
    .border-bs-blue-700 {
      border-block-start-color: var(--color-blue-700);
    }
    .border-bs-blue-800 {
      border-block-start-color: var(--color-blue-800);
    }
    .border-bs-blue-900 {
      border-block-start-color: var(--color-blue-900);
    }
    .border-bs-current {
      border-block-start-color: currentColor;
    }
    .border-bs-gray-50 {
      border-block-start-color: var(--color-gray-50);
    }
    .border-bs-gray-100 {
      border-block-start-color: var(--color-gray-100);
    }
    .border-bs-gray-200 {
      border-block-start-color: var(--color-gray-200);
    }
    .border-bs-gray-300 {
      border-block-start-color: var(--color-gray-300);
    }
    .border-bs-gray-400 {
      border-block-start-color: var(--color-gray-400);
    }
    .border-bs-gray-500 {
      border-block-start-color: var(--color-gray-500);
    }
    .border-bs-gray-600 {
      border-block-start-color: var(--color-gray-600);
    }
    .border-bs-gray-700 {
      border-block-start-color: var(--color-gray-700);
    }
    .border-bs-gray-800 {
      border-block-start-color: var(--color-gray-800);
    }
    .border-bs-gray-900 {
      border-block-start-color: var(--color-gray-900);
    }
    .border-bs-green-50 {
      border-block-start-color: var(--color-green-50);
    }
    .border-bs-green-100 {
      border-block-start-color: var(--color-green-100);
    }
    .border-bs-green-200 {
      border-block-start-color: var(--color-green-200);
    }
    .border-bs-green-300 {
      border-block-start-color: var(--color-green-300);
    }
    .border-bs-green-400 {
      border-block-start-color: var(--color-green-400);
    }
    .border-bs-green-500 {
      border-block-start-color: var(--color-green-500);
    }
    .border-bs-green-600 {
      border-block-start-color: var(--color-green-600);
    }
    .border-bs-green-700 {
      border-block-start-color: var(--color-green-700);
    }
    .border-bs-green-800 {
      border-block-start-color: var(--color-green-800);
    }
    .border-bs-green-900 {
      border-block-start-color: var(--color-green-900);
    }
    .border-bs-indigo-50 {
      border-block-start-color: var(--color-indigo-50);
    }
    .border-bs-indigo-100 {
      border-block-start-color: var(--color-indigo-100);
    }
    .border-bs-indigo-200 {
      border-block-start-color: var(--color-indigo-200);
    }
    .border-bs-indigo-300 {
      border-block-start-color: var(--color-indigo-300);
    }
    .border-bs-indigo-400 {
      border-block-start-color: var(--color-indigo-400);
    }
    .border-bs-indigo-500 {
      border-block-start-color: var(--color-indigo-500);
    }
    .border-bs-indigo-600 {
      border-block-start-color: var(--color-indigo-600);
    }
    .border-bs-indigo-700 {
      border-block-start-color: var(--color-indigo-700);
    }
    .border-bs-indigo-800 {
      border-block-start-color: var(--color-indigo-800);
    }
    .border-bs-indigo-900 {
      border-block-start-color: var(--color-indigo-900);
    }
    .border-bs-inherit {
      border-block-start-color: inherit;
    }
    .border-bs-pink-50 {
      border-block-start-color: var(--color-pink-50);
    }
    .border-bs-pink-100 {
      border-block-start-color: var(--color-pink-100);
    }
    .border-bs-pink-200 {
      border-block-start-color: var(--color-pink-200);
    }
    .border-bs-pink-300 {
      border-block-start-color: var(--color-pink-300);
    }
    .border-bs-pink-400 {
      border-block-start-color: var(--color-pink-400);
    }
    .border-bs-pink-500 {
      border-block-start-color: var(--color-pink-500);
    }
    .border-bs-pink-600 {
      border-block-start-color: var(--color-pink-600);
    }
    .border-bs-pink-700 {
      border-block-start-color: var(--color-pink-700);
    }
    .border-bs-pink-800 {
      border-block-start-color: var(--color-pink-800);
    }
    .border-bs-pink-900 {
      border-block-start-color: var(--color-pink-900);
    }
    .border-bs-purple-50 {
      border-block-start-color: var(--color-purple-50);
    }
    .border-bs-purple-100 {
      border-block-start-color: var(--color-purple-100);
    }
    .border-bs-purple-200 {
      border-block-start-color: var(--color-purple-200);
    }
    .border-bs-purple-300 {
      border-block-start-color: var(--color-purple-300);
    }
    .border-bs-purple-400 {
      border-block-start-color: var(--color-purple-400);
    }
    .border-bs-purple-500 {
      border-block-start-color: var(--color-purple-500);
    }
    .border-bs-purple-600 {
      border-block-start-color: var(--color-purple-600);
    }
    .border-bs-purple-700 {
      border-block-start-color: var(--color-purple-700);
    }
    .border-bs-purple-800 {
      border-block-start-color: var(--color-purple-800);
    }
    .border-bs-purple-900 {
      border-block-start-color: var(--color-purple-900);
    }
    .border-bs-red-50 {
      border-block-start-color: var(--color-red-50);
    }
    .border-bs-red-100 {
      border-block-start-color: var(--color-red-100);
    }
    .border-bs-red-200 {
      border-block-start-color: var(--color-red-200);
    }
    .border-bs-red-300 {
      border-block-start-color: var(--color-red-300);
    }
    .border-bs-red-400 {
      border-block-start-color: var(--color-red-400);
    }
    .border-bs-red-500 {
      border-block-start-color: var(--color-red-500);
    }
    .border-bs-red-600 {
      border-block-start-color: var(--color-red-600);
    }
    .border-bs-red-700 {
      border-block-start-color: var(--color-red-700);
    }
    .border-bs-red-800 {
      border-block-start-color: var(--color-red-800);
    }
    .border-bs-red-900 {
      border-block-start-color: var(--color-red-900);
    }
    .border-bs-transparent {
      border-block-start-color: transparent;
    }
    .border-bs-white {
      border-block-start-color: var(--color-white);
    }
    .border-bs-yellow-50 {
      border-block-start-color: var(--color-yellow-50);
    }
    .border-bs-yellow-100 {
      border-block-start-color: var(--color-yellow-100);
    }
    .border-bs-yellow-200 {
      border-block-start-color: var(--color-yellow-200);
    }
    .border-bs-yellow-300 {
      border-block-start-color: var(--color-yellow-300);
    }
    .border-bs-yellow-400 {
      border-block-start-color: var(--color-yellow-400);
    }
    .border-bs-yellow-500 {
      border-block-start-color: var(--color-yellow-500);
    }
    .border-bs-yellow-600 {
      border-block-start-color: var(--color-yellow-600);
    }
    .border-bs-yellow-700 {
      border-block-start-color: var(--color-yellow-700);
    }
    .border-bs-yellow-800 {
      border-block-start-color: var(--color-yellow-800);
    }
    .border-bs-yellow-900 {
      border-block-start-color: var(--color-yellow-900);
    }
    .bs-0 {
      block-size: 0px;
    }
    .bs-0\\.5 {
      block-size: 0.125rem;
    }
    .bs-1 {
      block-size: 0.25rem;
    }
    .bs-1\\.5 {
      block-size: 0.375rem;
    }
    .bs-1\\/2 {
      block-size: 50%;
    }
    .bs-1\\/3 {
      block-size: 33.333333%;
    }
    .bs-1\\/4 {
      block-size: 25%;
    }
    .bs-1\\/5 {
      block-size: 20%;
    }
    .bs-1\\/6 {
      block-size: 16.666667%;
    }
    .bs-2 {
      block-size: 0.5rem;
    }
    .bs-2\\.5 {
      block-size: 0.625rem;
    }
    .bs-2\\/3 {
      block-size: 66.666667%;
    }
    .bs-2\\/4 {
      block-size: 50%;
    }
    .bs-2\\/5 {
      block-size: 40%;
    }
    .bs-2\\/6 {
      block-size: 33.333333%;
    }
    .bs-3 {
      block-size: 0.75rem;
    }
    .bs-3\\.5 {
      block-size: 0.875rem;
    }
    .bs-3\\/4 {
      block-size: 75%;
    }
    .bs-3\\/5 {
      block-size: 60%;
    }
    .bs-3\\/6 {
      block-size: 50%;
    }
    .bs-4 {
      block-size: 1rem;
    }
    .bs-4\\/5 {
      block-size: 80%;
    }
    .bs-4\\/6 {
      block-size: 66.666667%;
    }
    .bs-5 {
      block-size: 1.25rem;
    }
    .bs-5\\/6 {
      block-size: 83.333333%;
    }
    .bs-6 {
      block-size: 1.5rem;
    }
    .bs-7 {
      block-size: 1.75rem;
    }
    .bs-8 {
      block-size: 2rem;
    }
    .bs-9 {
      block-size: 2.25rem;
    }
    .bs-10 {
      block-size: 2.5rem;
    }
    .bs-11 {
      block-size: 2.75rem;
    }
    .bs-12 {
      block-size: 3rem;
    }
    .bs-14 {
      block-size: 3.5rem;
    }
    .bs-16 {
      block-size: 4rem;
    }
    .bs-20 {
      block-size: 5rem;
    }
    .bs-24 {
      block-size: 6rem;
    }
    .bs-28 {
      block-size: 7rem;
    }
    .bs-32 {
      block-size: 8rem;
    }
    .bs-36 {
      block-size: 9rem;
    }
    .bs-40 {
      block-size: 10rem;
    }
    .bs-44 {
      block-size: 11rem;
    }
    .bs-48 {
      block-size: 12rem;
    }
    .bs-52 {
      block-size: 13rem;
    }
    .bs-56 {
      block-size: 14rem;
    }
    .bs-60 {
      block-size: 15rem;
    }
    .bs-64 {
      block-size: 16rem;
    }
    .bs-72 {
      block-size: 18rem;
    }
    .bs-80 {
      block-size: 20rem;
    }
    .bs-96 {
      block-size: 24rem;
    }
    .bs-auto {
      block-size: auto;
    }
    .bs-dvh {
      block-size: 100dvh;
    }
    .bs-fit {
      block-size: fit-content;
    }
    .bs-full {
      block-size: 100%;
    }
    .bs-lvh {
      block-size: 100lvh;
    }
    .bs-max {
      block-size: max-content;
    }
    .bs-min {
      block-size: min-content;
    }
    .bs-px {
      block-size: 1px;
    }
    .bs-screen {
      block-size: 100vh;
    }
    .bs-svh {
      block-size: 100svh;
    }
    .is-0 {
      inline-size: 0px;
    }
    .is-0\\.5 {
      inline-size: 0.125rem;
    }
    .is-1 {
      inline-size: 0.25rem;
    }
    .is-1\\.5 {
      inline-size: 0.375rem;
    }
    .is-1\\/2 {
      inline-size: 50%;
    }
    .is-1\\/3 {
      inline-size: 33.333333%;
    }
    .is-1\\/4 {
      inline-size: 25%;
    }
    .is-1\\/5 {
      inline-size: 20%;
    }
    .is-1\\/6 {
      inline-size: 16.666667%;
    }
    .is-1\\/12 {
      inline-size: 8.333333%;
    }
    .is-2 {
      inline-size: 0.5rem;
    }
    .is-2\\.5 {
      inline-size: 0.625rem;
    }
    .is-2\\/3 {
      inline-size: 66.666667%;
    }
    .is-2\\/4 {
      inline-size: 50%;
    }
    .is-2\\/5 {
      inline-size: 40%;
    }
    .is-2\\/6 {
      inline-size: 33.333333%;
    }
    .is-2\\/12 {
      inline-size: 16.666667%;
    }
    .is-3 {
      inline-size: 0.75rem;
    }
    .is-3\\.5 {
      inline-size: 0.875rem;
    }
    .is-3\\/4 {
      inline-size: 75%;
    }
    .is-3\\/5 {
      inline-size: 60%;
    }
    .is-3\\/6 {
      inline-size: 50%;
    }
    .is-3\\/12 {
      inline-size: 25%;
    }
    .is-4 {
      inline-size: 1rem;
    }
    .is-4\\/5 {
      inline-size: 80%;
    }
    .is-4\\/6 {
      inline-size: 66.666667%;
    }
    .is-4\\/12 {
      inline-size: 33.333333%;
    }
    .is-5 {
      inline-size: 1.25rem;
    }
    .is-5\\/6 {
      inline-size: 83.333333%;
    }
    .is-5\\/12 {
      inline-size: 41.666667%;
    }
    .is-6 {
      inline-size: 1.5rem;
    }
    .is-6\\/12 {
      inline-size: 50%;
    }
    .is-7 {
      inline-size: 1.75rem;
    }
    .is-7\\/12 {
      inline-size: 58.333333%;
    }
    .is-8 {
      inline-size: 2rem;
    }
    .is-8\\/12 {
      inline-size: 66.666667%;
    }
    .is-9 {
      inline-size: 2.25rem;
    }
    .is-9\\/12 {
      inline-size: 75%;
    }
    .is-10 {
      inline-size: 2.5rem;
    }
    .is-10\\/12 {
      inline-size: 83.333333%;
    }
    .is-11 {
      inline-size: 2.75rem;
    }
    .is-11\\/12 {
      inline-size: 91.666667%;
    }
    .is-12 {
      inline-size: 3rem;
    }
    .is-14 {
      inline-size: 3.5rem;
    }
    .is-16 {
      inline-size: 4rem;
    }
    .is-20 {
      inline-size: 5rem;
    }
    .is-24 {
      inline-size: 6rem;
    }
    .is-28 {
      inline-size: 7rem;
    }
    .is-32 {
      inline-size: 8rem;
    }
    .is-36 {
      inline-size: 9rem;
    }
    .is-40 {
      inline-size: 10rem;
    }
    .is-44 {
      inline-size: 11rem;
    }
    .is-48 {
      inline-size: 12rem;
    }
    .is-52 {
      inline-size: 13rem;
    }
    .is-56 {
      inline-size: 14rem;
    }
    .is-60 {
      inline-size: 15rem;
    }
    .is-64 {
      inline-size: 16rem;
    }
    .is-72 {
      inline-size: 18rem;
    }
    .is-80 {
      inline-size: 20rem;
    }
    .is-96 {
      inline-size: 24rem;
    }
    .is-auto {
      inline-size: auto;
    }
    .is-dvw {
      inline-size: 100dvw;
    }
    .is-fit {
      inline-size: fit-content;
    }
    .is-full {
      inline-size: 100%;
    }
    .is-lvw {
      inline-size: 100lvw;
    }
    .is-max {
      inline-size: max-content;
    }
    .is-min {
      inline-size: min-content;
    }
    .is-px {
      inline-size: 1px;
    }
    .is-screen {
      inline-size: 100vw;
    }
    .is-svw {
      inline-size: 100svw;
    }
    .max-bs-0 {
      max-block-size: 0px;
    }
    .max-bs-0\\.5 {
      max-block-size: 0.125rem;
    }
    .max-bs-1 {
      max-block-size: 0.25rem;
    }
    .max-bs-1\\.5 {
      max-block-size: 0.375rem;
    }
    .max-bs-2 {
      max-block-size: 0.5rem;
    }
    .max-bs-2\\.5 {
      max-block-size: 0.625rem;
    }
    .max-bs-3 {
      max-block-size: 0.75rem;
    }
    .max-bs-3\\.5 {
      max-block-size: 0.875rem;
    }
    .max-bs-4 {
      max-block-size: 1rem;
    }
    .max-bs-5 {
      max-block-size: 1.25rem;
    }
    .max-bs-6 {
      max-block-size: 1.5rem;
    }
    .max-bs-7 {
      max-block-size: 1.75rem;
    }
    .max-bs-8 {
      max-block-size: 2rem;
    }
    .max-bs-9 {
      max-block-size: 2.25rem;
    }
    .max-bs-10 {
      max-block-size: 2.5rem;
    }
    .max-bs-11 {
      max-block-size: 2.75rem;
    }
    .max-bs-12 {
      max-block-size: 3rem;
    }
    .max-bs-14 {
      max-block-size: 3.5rem;
    }
    .max-bs-16 {
      max-block-size: 4rem;
    }
    .max-bs-20 {
      max-block-size: 5rem;
    }
    .max-bs-24 {
      max-block-size: 6rem;
    }
    .max-bs-28 {
      max-block-size: 7rem;
    }
    .max-bs-32 {
      max-block-size: 8rem;
    }
    .max-bs-36 {
      max-block-size: 9rem;
    }
    .max-bs-40 {
      max-block-size: 10rem;
    }
    .max-bs-44 {
      max-block-size: 11rem;
    }
    .max-bs-48 {
      max-block-size: 12rem;
    }
    .max-bs-52 {
      max-block-size: 13rem;
    }
    .max-bs-56 {
      max-block-size: 14rem;
    }
    .max-bs-60 {
      max-block-size: 15rem;
    }
    .max-bs-64 {
      max-block-size: 16rem;
    }
    .max-bs-72 {
      max-block-size: 18rem;
    }
    .max-bs-80 {
      max-block-size: 20rem;
    }
    .max-bs-96 {
      max-block-size: 24rem;
    }
    .max-bs-dvh {
      max-block-size: 100dvh;
    }
    .max-bs-fit {
      max-block-size: fit-content;
    }
    .max-bs-full {
      max-block-size: 100%;
    }
    .max-bs-lvh {
      max-block-size: 100lvh;
    }
    .max-bs-max {
      max-block-size: max-content;
    }
    .max-bs-min {
      max-block-size: min-content;
    }
    .max-bs-none {
      max-block-size: none;
    }
    .max-bs-px {
      max-block-size: 1px;
    }
    .max-bs-screen {
      max-block-size: 100vh;
    }
    .max-bs-svh {
      max-block-size: 100svh;
    }
    .max-is-0 {
      max-inline-size: 0px;
    }
    .max-is-2xl {
      max-inline-size: 42rem;
    }
    .max-is-3xl {
      max-inline-size: 48rem;
    }
    .max-is-4xl {
      max-inline-size: 56rem;
    }
    .max-is-5xl {
      max-inline-size: 64rem;
    }
    .max-is-6xl {
      max-inline-size: 72rem;
    }
    .max-is-7xl {
      max-inline-size: 80rem;
    }
    .max-is-fit {
      max-inline-size: fit-content;
    }
    .max-is-full {
      max-inline-size: 100%;
    }
    .max-is-lg {
      max-inline-size: 32rem;
    }
    .max-is-max {
      max-inline-size: max-content;
    }
    .max-is-md {
      max-inline-size: 28rem;
    }
    .max-is-min {
      max-inline-size: min-content;
    }
    .max-is-none {
      max-inline-size: none;
    }
    .max-is-px {
      max-inline-size: 1px;
    }
    .max-is-sm {
      max-inline-size: 24rem;
    }
    .max-is-xl {
      max-inline-size: 36rem;
    }
    .max-is-xs {
      max-inline-size: 20rem;
    }
    .mbe-0 {
      margin-block-end: 0px;
    }
    .mbe-0\\.5 {
      margin-block-end: 0.125rem;
    }
    .mbe-1 {
      margin-block-end: 0.25rem;
    }
    .mbe-1\\.5 {
      margin-block-end: 0.375rem;
    }
    .mbe-2 {
      margin-block-end: 0.5rem;
    }
    .mbe-2\\.5 {
      margin-block-end: 0.625rem;
    }
    .mbe-3 {
      margin-block-end: 0.75rem;
    }
    .mbe-3\\.5 {
      margin-block-end: 0.875rem;
    }
    .mbe-4 {
      margin-block-end: 1rem;
    }
    .mbe-5 {
      margin-block-end: 1.25rem;
    }
    .mbe-6 {
      margin-block-end: 1.5rem;
    }
    .mbe-7 {
      margin-block-end: 1.75rem;
    }
    .mbe-8 {
      margin-block-end: 2rem;
    }
    .mbe-9 {
      margin-block-end: 2.25rem;
    }
    .mbe-10 {
      margin-block-end: 2.5rem;
    }
    .mbe-11 {
      margin-block-end: 2.75rem;
    }
    .mbe-12 {
      margin-block-end: 3rem;
    }
    .mbe-14 {
      margin-block-end: 3.5rem;
    }
    .mbe-16 {
      margin-block-end: 4rem;
    }
    .mbe-20 {
      margin-block-end: 5rem;
    }
    .mbe-24 {
      margin-block-end: 6rem;
    }
    .mbe-28 {
      margin-block-end: 7rem;
    }
    .mbe-32 {
      margin-block-end: 8rem;
    }
    .mbe-36 {
      margin-block-end: 9rem;
    }
    .mbe-40 {
      margin-block-end: 10rem;
    }
    .mbe-44 {
      margin-block-end: 11rem;
    }
    .mbe-48 {
      margin-block-end: 12rem;
    }
    .mbe-52 {
      margin-block-end: 13rem;
    }
    .mbe-56 {
      margin-block-end: 14rem;
    }
    .mbe-60 {
      margin-block-end: 15rem;
    }
    .mbe-64 {
      margin-block-end: 16rem;
    }
    .mbe-72 {
      margin-block-end: 18rem;
    }
    .mbe-80 {
      margin-block-end: 20rem;
    }
    .mbe-96 {
      margin-block-end: 24rem;
    }
    .mbe-auto {
      margin-block-end: auto;
    }
    .mbe-px {
      margin-block-end: 1px;
    }
    .mbs-0 {
      margin-block-start: 0px;
    }
    .mbs-0\\.5 {
      margin-block-start: 0.125rem;
    }
    .mbs-1 {
      margin-block-start: 0.25rem;
    }
    .mbs-1\\.5 {
      margin-block-start: 0.375rem;
    }
    .mbs-2 {
      margin-block-start: 0.5rem;
    }
    .mbs-2\\.5 {
      margin-block-start: 0.625rem;
    }
    .mbs-3 {
      margin-block-start: 0.75rem;
    }
    .mbs-3\\.5 {
      margin-block-start: 0.875rem;
    }
    .mbs-4 {
      margin-block-start: 1rem;
    }
    .mbs-5 {
      margin-block-start: 1.25rem;
    }
    .mbs-6 {
      margin-block-start: 1.5rem;
    }
    .mbs-7 {
      margin-block-start: 1.75rem;
    }
    .mbs-8 {
      margin-block-start: 2rem;
    }
    .mbs-9 {
      margin-block-start: 2.25rem;
    }
    .mbs-10 {
      margin-block-start: 2.5rem;
    }
    .mbs-11 {
      margin-block-start: 2.75rem;
    }
    .mbs-12 {
      margin-block-start: 3rem;
    }
    .mbs-14 {
      margin-block-start: 3.5rem;
    }
    .mbs-16 {
      margin-block-start: 4rem;
    }
    .mbs-20 {
      margin-block-start: 5rem;
    }
    .mbs-24 {
      margin-block-start: 6rem;
    }
    .mbs-28 {
      margin-block-start: 7rem;
    }
    .mbs-32 {
      margin-block-start: 8rem;
    }
    .mbs-36 {
      margin-block-start: 9rem;
    }
    .mbs-40 {
      margin-block-start: 10rem;
    }
    .mbs-44 {
      margin-block-start: 11rem;
    }
    .mbs-48 {
      margin-block-start: 12rem;
    }
    .mbs-52 {
      margin-block-start: 13rem;
    }
    .mbs-56 {
      margin-block-start: 14rem;
    }
    .mbs-60 {
      margin-block-start: 15rem;
    }
    .mbs-64 {
      margin-block-start: 16rem;
    }
    .mbs-72 {
      margin-block-start: 18rem;
    }
    .mbs-80 {
      margin-block-start: 20rem;
    }
    .mbs-96 {
      margin-block-start: 24rem;
    }
    .mbs-auto {
      margin-block-start: auto;
    }
    .mbs-px {
      margin-block-start: 1px;
    }
    .min-bs-0 {
      min-block-size: 0px;
    }
    .min-bs-0\\.5 {
      min-block-size: 0.125rem;
    }
    .min-bs-1\\.5 {
      min-block-size: 0.375rem;
    }
    .min-bs-2\\.5 {
      min-block-size: 0.625rem;
    }
    .min-bs-3\\.5 {
      min-block-size: 0.875rem;
    }
    .min-bs-dvh {
      min-block-size: 100dvh;
    }
    .min-bs-fit {
      min-block-size: fit-content;
    }
    .min-bs-full {
      min-block-size: 100%;
    }
    .min-bs-lvh {
      min-block-size: 100lvh;
    }
    .min-bs-max {
      min-block-size: max-content;
    }
    .min-bs-min {
      min-block-size: min-content;
    }
    .min-bs-screen {
      min-block-size: 100vh;
    }
    .min-bs-svh {
      min-block-size: 100svh;
    }
    .min-is-0 {
      min-inline-size: 0px;
    }
    .min-is-0\\.5 {
      min-inline-size: 0.125rem;
    }
    .min-is-1 {
      min-inline-size: 0.25rem;
    }
    .min-is-1\\.5 {
      min-inline-size: 0.375rem;
    }
    .min-is-2 {
      min-inline-size: 0.5rem;
    }
    .min-is-2\\.5 {
      min-inline-size: 0.625rem;
    }
    .min-is-3 {
      min-inline-size: 0.75rem;
    }
    .min-is-3\\.5 {
      min-inline-size: 0.875rem;
    }
    .min-is-4 {
      min-inline-size: 1rem;
    }
    .min-is-5 {
      min-inline-size: 1.25rem;
    }
    .min-is-6 {
      min-inline-size: 1.5rem;
    }
    .min-is-7 {
      min-inline-size: 1.75rem;
    }
    .min-is-8 {
      min-inline-size: 2rem;
    }
    .min-is-9 {
      min-inline-size: 2.25rem;
    }
    .min-is-10 {
      min-inline-size: 2.5rem;
    }
    .min-is-11 {
      min-inline-size: 2.75rem;
    }
    .min-is-12 {
      min-inline-size: 3rem;
    }
    .min-is-14 {
      min-inline-size: 3.5rem;
    }
    .min-is-16 {
      min-inline-size: 4rem;
    }
    .min-is-20 {
      min-inline-size: 5rem;
    }
    .min-is-24 {
      min-inline-size: 6rem;
    }
    .min-is-28 {
      min-inline-size: 7rem;
    }
    .min-is-32 {
      min-inline-size: 8rem;
    }
    .min-is-36 {
      min-inline-size: 9rem;
    }
    .min-is-40 {
      min-inline-size: 10rem;
    }
    .min-is-44 {
      min-inline-size: 11rem;
    }
    .min-is-48 {
      min-inline-size: 12rem;
    }
    .min-is-52 {
      min-inline-size: 13rem;
    }
    .min-is-56 {
      min-inline-size: 14rem;
    }
    .min-is-60 {
      min-inline-size: 15rem;
    }
    .min-is-64 {
      min-inline-size: 16rem;
    }
    .min-is-72 {
      min-inline-size: 18rem;
    }
    .min-is-80 {
      min-inline-size: 20rem;
    }
    .min-is-96 {
      min-inline-size: 24rem;
    }
    .min-is-fit {
      min-inline-size: fit-content;
    }
    .min-is-full {
      min-inline-size: 100%;
    }
    .min-is-max {
      min-inline-size: max-content;
    }
    .min-is-min {
      min-inline-size: min-content;
    }
    .min-is-px {
      min-inline-size: 1px;
    }
    .overscroll-b-auto {
      overscroll-behavior-block: auto;
    }
    .overscroll-b-contain {
      overscroll-behavior-block: contain;
    }
    .overscroll-b-none {
      overscroll-behavior-block: none;
    }
    .overscroll-i-auto {
      overscroll-behavior-inline: auto;
    }
    .overscroll-i-contain {
      overscroll-behavior-inline: contain;
    }
    .overscroll-i-none {
      overscroll-behavior-inline: none;
    }
    .pbe-0 {
      padding-block-end: 0px;
    }
    .pbe-0\\.5 {
      padding-block-end: 0.125rem;
    }
    .pbe-1 {
      padding-block-end: 0.25rem;
    }
    .pbe-1\\.5 {
      padding-block-end: 0.375rem;
    }
    .pbe-2 {
      padding-block-end: 0.5rem;
    }
    .pbe-2\\.5 {
      padding-block-end: 0.625rem;
    }
    .pbe-3 {
      padding-block-end: 0.75rem;
    }
    .pbe-3\\.5 {
      padding-block-end: 0.875rem;
    }
    .pbe-4 {
      padding-block-end: 1rem;
    }
    .pbe-5 {
      padding-block-end: 1.25rem;
    }
    .pbe-6 {
      padding-block-end: 1.5rem;
    }
    .pbe-7 {
      padding-block-end: 1.75rem;
    }
    .pbe-8 {
      padding-block-end: 2rem;
    }
    .pbe-9 {
      padding-block-end: 2.25rem;
    }
    .pbe-10 {
      padding-block-end: 2.5rem;
    }
    .pbe-11 {
      padding-block-end: 2.75rem;
    }
    .pbe-12 {
      padding-block-end: 3rem;
    }
    .pbe-14 {
      padding-block-end: 3.5rem;
    }
    .pbe-16 {
      padding-block-end: 4rem;
    }
    .pbe-20 {
      padding-block-end: 5rem;
    }
    .pbe-24 {
      padding-block-end: 6rem;
    }
    .pbe-28 {
      padding-block-end: 7rem;
    }
    .pbe-32 {
      padding-block-end: 8rem;
    }
    .pbe-36 {
      padding-block-end: 9rem;
    }
    .pbe-40 {
      padding-block-end: 10rem;
    }
    .pbe-44 {
      padding-block-end: 11rem;
    }
    .pbe-48 {
      padding-block-end: 12rem;
    }
    .pbe-52 {
      padding-block-end: 13rem;
    }
    .pbe-56 {
      padding-block-end: 14rem;
    }
    .pbe-60 {
      padding-block-end: 15rem;
    }
    .pbe-64 {
      padding-block-end: 16rem;
    }
    .pbe-72 {
      padding-block-end: 18rem;
    }
    .pbe-80 {
      padding-block-end: 20rem;
    }
    .pbe-96 {
      padding-block-end: 24rem;
    }
    .pbe-px {
      padding-block-end: 1px;
    }
    .pbs-0 {
      padding-block-start: 0px;
    }
    .pbs-0\\.5 {
      padding-block-start: 0.125rem;
    }
    .pbs-1 {
      padding-block-start: 0.25rem;
    }
    .pbs-1\\.5 {
      padding-block-start: 0.375rem;
    }
    .pbs-2 {
      padding-block-start: 0.5rem;
    }
    .pbs-2\\.5 {
      padding-block-start: 0.625rem;
    }
    .pbs-3 {
      padding-block-start: 0.75rem;
    }
    .pbs-3\\.5 {
      padding-block-start: 0.875rem;
    }
    .pbs-4 {
      padding-block-start: 1rem;
    }
    .pbs-5 {
      padding-block-start: 1.25rem;
    }
    .pbs-6 {
      padding-block-start: 1.5rem;
    }
    .pbs-7 {
      padding-block-start: 1.75rem;
    }
    .pbs-8 {
      padding-block-start: 2rem;
    }
    .pbs-9 {
      padding-block-start: 2.25rem;
    }
    .pbs-10 {
      padding-block-start: 2.5rem;
    }
    .pbs-11 {
      padding-block-start: 2.75rem;
    }
    .pbs-12 {
      padding-block-start: 3rem;
    }
    .pbs-14 {
      padding-block-start: 3.5rem;
    }
    .pbs-16 {
      padding-block-start: 4rem;
    }
    .pbs-20 {
      padding-block-start: 5rem;
    }
    .pbs-24 {
      padding-block-start: 6rem;
    }
    .pbs-28 {
      padding-block-start: 7rem;
    }
    .pbs-32 {
      padding-block-start: 8rem;
    }
    .pbs-36 {
      padding-block-start: 9rem;
    }
    .pbs-40 {
      padding-block-start: 10rem;
    }
    .pbs-44 {
      padding-block-start: 11rem;
    }
    .pbs-48 {
      padding-block-start: 12rem;
    }
    .pbs-52 {
      padding-block-start: 13rem;
    }
    .pbs-56 {
      padding-block-start: 14rem;
    }
    .pbs-60 {
      padding-block-start: 15rem;
    }
    .pbs-64 {
      padding-block-start: 16rem;
    }
    .pbs-72 {
      padding-block-start: 18rem;
    }
    .pbs-80 {
      padding-block-start: 20rem;
    }
    .pbs-96 {
      padding-block-start: 24rem;
    }
    .pbs-px {
      padding-block-start: 1px;
    }
    .peer-checked\\:border-bs-black {
      &:is(:where(.peer):checked ~ *) {
        border-block-start-color: var(--color-black);
      }
    }
    .before\\:border-bs-black {
      &::before {
        content: var(--tw-content);
        border-block-start-color: var(--color-black);
      }
    }
    .only\\:border-bs-black {
      &:only-child {
        border-block-start-color: var(--color-black);
      }
    }
    .disabled\\:border-bs-black {
      &:disabled {
        border-block-start-color: var(--color-black);
      }
    }
    .md\\:disabled\\:focus\\:hover\\:border-bs-black {
      @media (width >= 48rem) {
        &:disabled {
          &:focus {
            &:hover {
              @media (hover: hover) {
                border-block-start-color: var(--color-black);
              }
            }
          }
        }
      }
    }
    .dark\\:border-is-black {
      @media (prefers-color-scheme: dark) {
        border-inline-start-color: var(--color-black);
      }
    }
    .dark\\:border-ie-black {
      @media (prefers-color-scheme: dark) {
        border-inline-end-color: var(--color-black);
      }
    }
    .dark\\:border-be-black {
      @media (prefers-color-scheme: dark) {
        border-block-end-color: var(--color-black);
      }
    }
    .dark\\:border-bs-black {
      @media (prefers-color-scheme: dark) {
        border-block-start-color: var(--color-black);
      }
    }
    .md\\:dark\\:disabled\\:focus\\:hover\\:border-bs-black {
      @media (width >= 48rem) {
        @media (prefers-color-scheme: dark) {
          &:disabled {
            &:focus {
              &:hover {
                @media (hover: hover) {
                  border-block-start-color: var(--color-black);
                }
              }
            }
          }
        }
      }
    }
  }
  @property --tw-content {
    syntax: "*";
    initial-value: "";
    inherits: false;
  }
`;

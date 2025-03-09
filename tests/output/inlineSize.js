module.exports = `
  /*! tailwindcss v4.0.9 | MIT License | https://tailwindcss.com */
  @layer theme, base, components, utilities;
  @layer theme {
    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
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
  }
`;

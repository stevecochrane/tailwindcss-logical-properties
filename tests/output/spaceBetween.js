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
    .-space-i-0 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0px * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0px * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-0\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.125rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.125rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-1 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.25rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.25rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-1\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.375rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.375rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-2 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.5rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.5rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-2\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.625rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.625rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-3 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.75rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.75rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-3\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(0.875rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(0.875rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-4 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1.25rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1.25rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-6 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1.5rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1.5rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-7 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1.75rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1.75rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-8 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(2rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(2rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-9 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(2.25rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(2.25rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-10 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(2.5rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(2.5rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-11 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(2.75rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(2.75rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-12 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(3rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(3rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-14 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(3.5rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(3.5rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-16 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(4rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(4rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-20 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(5rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(5rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-24 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(6rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(6rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-28 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(7rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(7rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-32 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(8rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(8rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-36 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(9rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(9rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-40 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(10rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(10rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-44 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(11rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(11rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-48 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(12rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(12rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-52 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(13rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(13rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-56 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(14rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(14rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-60 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(15rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(15rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-64 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(16rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(16rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-72 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(18rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(18rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-80 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(20rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(20rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-96 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(24rem * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(24rem * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-px {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1px * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1px * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-0 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0px * var(--tw-space-i-reverse));
        margin-inline-end: calc(0px * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-0\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.125rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.125rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-1 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.25rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.25rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-1\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.375rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.375rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-2 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.5rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.5rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-2\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.625rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.625rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-3 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.75rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.75rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-3\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(0.875rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(0.875rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-4 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(1rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1.25rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(1.25rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-6 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1.5rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(1.5rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-7 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1.75rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(1.75rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-8 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(2rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(2rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-9 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(2.25rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(2.25rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-10 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(2.5rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(2.5rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-11 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(2.75rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(2.75rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-12 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(3rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(3rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-14 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(3.5rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(3.5rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-16 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(4rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(4rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-20 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(5rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(5rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-24 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(6rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(6rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-28 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(7rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(7rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-32 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(8rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(8rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-36 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(9rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(9rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-40 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(10rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(10rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-44 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(11rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(11rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-48 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(12rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(12rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-52 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(13rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(13rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-56 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(14rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(14rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-60 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(15rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(15rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-64 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(16rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(16rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-72 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(18rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(18rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-80 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(20rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(20rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-96 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(24rem * var(--tw-space-i-reverse));
        margin-inline-end: calc(24rem * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-px {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1px * var(--tw-space-i-reverse));
        margin-inline-end: calc(1px * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-b-0 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0px * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0px * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-0\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.125rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.125rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-1 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.25rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.25rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-1\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.375rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.375rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-2 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.5rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.5rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-2\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.625rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.625rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-3 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.75rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.75rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-3\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(0.875rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(0.875rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-4 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1.25rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1.25rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-6 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1.5rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1.5rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-7 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1.75rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1.75rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-8 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(2rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(2rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-9 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(2.25rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(2.25rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-10 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(2.5rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(2.5rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-11 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(2.75rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(2.75rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-12 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(3rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(3rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-14 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(3.5rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(3.5rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-16 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(4rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(4rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-20 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(5rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(5rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-24 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(6rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(6rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-28 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(7rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(7rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-32 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(8rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(8rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-36 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(9rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(9rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-40 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(10rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(10rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-44 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(11rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(11rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-48 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(12rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(12rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-52 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(13rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(13rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-56 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(14rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(14rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-60 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(15rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(15rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-64 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(16rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(16rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-72 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(18rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(18rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-80 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(20rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(20rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-96 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(24rem * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(24rem * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-px {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1px * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1px * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-0 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0px * var(--tw-space-b-reverse));
        margin-block-end: calc(0px * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-0\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.125rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.125rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-1 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.25rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.25rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-1\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.375rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.375rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-2 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.5rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.5rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-2\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.625rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.625rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-3 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.75rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.75rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-3\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(0.875rem * var(--tw-space-b-reverse));
        margin-block-end: calc(0.875rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-4 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1rem * var(--tw-space-b-reverse));
        margin-block-end: calc(1rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1.25rem * var(--tw-space-b-reverse));
        margin-block-end: calc(1.25rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-6 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1.5rem * var(--tw-space-b-reverse));
        margin-block-end: calc(1.5rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-7 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1.75rem * var(--tw-space-b-reverse));
        margin-block-end: calc(1.75rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-8 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(2rem * var(--tw-space-b-reverse));
        margin-block-end: calc(2rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-9 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(2.25rem * var(--tw-space-b-reverse));
        margin-block-end: calc(2.25rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-10 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(2.5rem * var(--tw-space-b-reverse));
        margin-block-end: calc(2.5rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-11 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(2.75rem * var(--tw-space-b-reverse));
        margin-block-end: calc(2.75rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-12 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(3rem * var(--tw-space-b-reverse));
        margin-block-end: calc(3rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-14 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(3.5rem * var(--tw-space-b-reverse));
        margin-block-end: calc(3.5rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-16 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(4rem * var(--tw-space-b-reverse));
        margin-block-end: calc(4rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-20 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(5rem * var(--tw-space-b-reverse));
        margin-block-end: calc(5rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-24 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(6rem * var(--tw-space-b-reverse));
        margin-block-end: calc(6rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-28 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(7rem * var(--tw-space-b-reverse));
        margin-block-end: calc(7rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-32 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(8rem * var(--tw-space-b-reverse));
        margin-block-end: calc(8rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-36 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(9rem * var(--tw-space-b-reverse));
        margin-block-end: calc(9rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-40 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(10rem * var(--tw-space-b-reverse));
        margin-block-end: calc(10rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-44 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(11rem * var(--tw-space-b-reverse));
        margin-block-end: calc(11rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-48 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(12rem * var(--tw-space-b-reverse));
        margin-block-end: calc(12rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-52 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(13rem * var(--tw-space-b-reverse));
        margin-block-end: calc(13rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-56 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(14rem * var(--tw-space-b-reverse));
        margin-block-end: calc(14rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-60 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(15rem * var(--tw-space-b-reverse));
        margin-block-end: calc(15rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-64 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(16rem * var(--tw-space-b-reverse));
        margin-block-end: calc(16rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-72 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(18rem * var(--tw-space-b-reverse));
        margin-block-end: calc(18rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-80 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(20rem * var(--tw-space-b-reverse));
        margin-block-end: calc(20rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-96 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(24rem * var(--tw-space-b-reverse));
        margin-block-end: calc(24rem * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-px {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1px * var(--tw-space-b-reverse));
        margin-block-end: calc(1px * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-reverse {
      & > :not(:last-child) {
        --tw-space-b-reverse: 1;
      }
    }
    .space-i-reverse {
      & > :not(:last-child) {
        --tw-space-i-reverse: 1;
      }
    }
  }
`;

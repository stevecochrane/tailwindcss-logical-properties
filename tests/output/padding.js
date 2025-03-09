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
    .pli-0 {
      padding-inline: 0px
    }
    .pli-0\\.5 {
      padding-inline: 0.125rem
    }
    .pli-1 {
      padding-inline: 0.25rem
    }
    .pli-1\\.5 {
      padding-inline: 0.375rem
    }
    .pli-2 {
      padding-inline: 0.5rem
    }
    .pli-2\\.5 {
      padding-inline: 0.625rem
    }
    .pli-3 {
      padding-inline: 0.75rem
    }
    .pli-3\\.5 {
      padding-inline: 0.875rem
    }
    .pli-4 {
      padding-inline: 1rem
    }
    .pli-5 {
      padding-inline: 1.25rem
    }
    .pli-6 {
      padding-inline: 1.5rem
    }
    .pli-7 {
      padding-inline: 1.75rem
    }
    .pli-8 {
      padding-inline: 2rem
    }
    .pli-9 {
      padding-inline: 2.25rem
    }
    .pli-10 {
      padding-inline: 2.5rem
    }
    .pli-11 {
      padding-inline: 2.75rem
    }
    .pli-12 {
      padding-inline: 3rem
    }
    .pli-14 {
      padding-inline: 3.5rem
    }
    .pli-16 {
      padding-inline: 4rem
    }
    .pli-20 {
      padding-inline: 5rem
    }
    .pli-24 {
      padding-inline: 6rem
    }
    .pli-28 {
      padding-inline: 7rem
    }
    .pli-32 {
      padding-inline: 8rem
    }
    .pli-36 {
      padding-inline: 9rem
    }
    .pli-40 {
      padding-inline: 10rem
    }
    .pli-44 {
      padding-inline: 11rem
    }
    .pli-48 {
      padding-inline: 12rem
    }
    .pli-52 {
      padding-inline: 13rem
    }
    .pli-56 {
      padding-inline: 14rem
    }
    .pli-60 {
      padding-inline: 15rem
    }
    .pli-64 {
      padding-inline: 16rem
    }
    .pli-72 {
      padding-inline: 18rem
    }
    .pli-80 {
      padding-inline: 20rem
    }
    .pli-96 {
      padding-inline: 24rem
    }
    .pli-px {
      padding-inline: 1px
    }
    .plb-0 {
      padding-block: 0px
    }
    .plb-0\\.5 {
      padding-block: 0.125rem
    }
    .plb-1 {
      padding-block: 0.25rem
    }
    .plb-1\\.5 {
      padding-block: 0.375rem
    }
    .plb-2 {
      padding-block: 0.5rem
    }
    .plb-2\\.5 {
      padding-block: 0.625rem
    }
    .plb-3 {
      padding-block: 0.75rem
    }
    .plb-3\\.5 {
      padding-block: 0.875rem
    }
    .plb-4 {
      padding-block: 1rem
    }
    .plb-5 {
      padding-block: 1.25rem
    }
    .plb-6 {
      padding-block: 1.5rem
    }
    .plb-7 {
      padding-block: 1.75rem
    }
    .plb-8 {
      padding-block: 2rem
    }
    .plb-9 {
      padding-block: 2.25rem
    }
    .plb-10 {
      padding-block: 2.5rem
    }
    .plb-11 {
      padding-block: 2.75rem
    }
    .plb-12 {
      padding-block: 3rem
    }
    .plb-14 {
      padding-block: 3.5rem
    }
    .plb-16 {
      padding-block: 4rem
    }
    .plb-20 {
      padding-block: 5rem
    }
    .plb-24 {
      padding-block: 6rem
    }
    .plb-28 {
      padding-block: 7rem
    }
    .plb-32 {
      padding-block: 8rem
    }
    .plb-36 {
      padding-block: 9rem
    }
    .plb-40 {
      padding-block: 10rem
    }
    .plb-44 {
      padding-block: 11rem
    }
    .plb-48 {
      padding-block: 12rem
    }
    .plb-52 {
      padding-block: 13rem
    }
    .plb-56 {
      padding-block: 14rem
    }
    .plb-60 {
      padding-block: 15rem
    }
    .plb-64 {
      padding-block: 16rem
    }
    .plb-72 {
      padding-block: 18rem
    }
    .plb-80 {
      padding-block: 20rem
    }
    .plb-96 {
      padding-block: 24rem
    }
    .plb-px {
      padding-block: 1px
    }
    .pis-0 {
      padding-inline-start: 0px
    }
    .pis-0\\.5 {
      padding-inline-start: 0.125rem
    }
    .pis-1 {
      padding-inline-start: 0.25rem
    }
    .pis-1\\.5 {
      padding-inline-start: 0.375rem
    }
    .pis-2 {
      padding-inline-start: 0.5rem
    }
    .pis-2\\.5 {
      padding-inline-start: 0.625rem
    }
    .pis-3 {
      padding-inline-start: 0.75rem
    }
    .pis-3\\.5 {
      padding-inline-start: 0.875rem
    }
    .pis-4 {
      padding-inline-start: 1rem
    }
    .pis-5 {
      padding-inline-start: 1.25rem
    }
    .pis-6 {
      padding-inline-start: 1.5rem
    }
    .pis-7 {
      padding-inline-start: 1.75rem
    }
    .pis-8 {
      padding-inline-start: 2rem
    }
    .pis-9 {
      padding-inline-start: 2.25rem
    }
    .pis-10 {
      padding-inline-start: 2.5rem
    }
    .pis-11 {
      padding-inline-start: 2.75rem
    }
    .pis-12 {
      padding-inline-start: 3rem
    }
    .pis-14 {
      padding-inline-start: 3.5rem
    }
    .pis-16 {
      padding-inline-start: 4rem
    }
    .pis-20 {
      padding-inline-start: 5rem
    }
    .pis-24 {
      padding-inline-start: 6rem
    }
    .pis-28 {
      padding-inline-start: 7rem
    }
    .pis-32 {
      padding-inline-start: 8rem
    }
    .pis-36 {
      padding-inline-start: 9rem
    }
    .pis-40 {
      padding-inline-start: 10rem
    }
    .pis-44 {
      padding-inline-start: 11rem
    }
    .pis-48 {
      padding-inline-start: 12rem
    }
    .pis-52 {
      padding-inline-start: 13rem
    }
    .pis-56 {
      padding-inline-start: 14rem
    }
    .pis-60 {
      padding-inline-start: 15rem
    }
    .pis-64 {
      padding-inline-start: 16rem
    }
    .pis-72 {
      padding-inline-start: 18rem
    }
    .pis-80 {
      padding-inline-start: 20rem
    }
    .pis-96 {
      padding-inline-start: 24rem
    }
    .pis-px {
      padding-inline-start: 1px
    }
    .pie-0 {
      padding-inline-end: 0px
    }
    .pie-0\\.5 {
      padding-inline-end: 0.125rem
    }
    .pie-1 {
      padding-inline-end: 0.25rem
    }
    .pie-1\\.5 {
      padding-inline-end: 0.375rem
    }
    .pie-2 {
      padding-inline-end: 0.5rem
    }
    .pie-2\\.5 {
      padding-inline-end: 0.625rem
    }
    .pie-3 {
      padding-inline-end: 0.75rem
    }
    .pie-3\\.5 {
      padding-inline-end: 0.875rem
    }
    .pie-4 {
      padding-inline-end: 1rem
    }
    .pie-5 {
      padding-inline-end: 1.25rem
    }
    .pie-6 {
      padding-inline-end: 1.5rem
    }
    .pie-7 {
      padding-inline-end: 1.75rem
    }
    .pie-8 {
      padding-inline-end: 2rem
    }
    .pie-9 {
      padding-inline-end: 2.25rem
    }
    .pie-10 {
      padding-inline-end: 2.5rem
    }
    .pie-11 {
      padding-inline-end: 2.75rem
    }
    .pie-12 {
      padding-inline-end: 3rem
    }
    .pie-14 {
      padding-inline-end: 3.5rem
    }
    .pie-16 {
      padding-inline-end: 4rem
    }
    .pie-20 {
      padding-inline-end: 5rem
    }
    .pie-24 {
      padding-inline-end: 6rem
    }
    .pie-28 {
      padding-inline-end: 7rem
    }
    .pie-32 {
      padding-inline-end: 8rem
    }
    .pie-36 {
      padding-inline-end: 9rem
    }
    .pie-40 {
      padding-inline-end: 10rem
    }
    .pie-44 {
      padding-inline-end: 11rem
    }
    .pie-48 {
      padding-inline-end: 12rem
    }
    .pie-52 {
      padding-inline-end: 13rem
    }
    .pie-56 {
      padding-inline-end: 14rem
    }
    .pie-60 {
      padding-inline-end: 15rem
    }
    .pie-64 {
      padding-inline-end: 16rem
    }
    .pie-72 {
      padding-inline-end: 18rem
    }
    .pie-80 {
      padding-inline-end: 20rem
    }
    .pie-96 {
      padding-inline-end: 24rem
    }
    .pie-px {
      padding-inline-end: 1px
    }
    .pbe-0 {
      padding-block-end: 0px
    }
    .pbe-0\\.5 {
      padding-block-end: 0.125rem
    }
    .pbe-1 {
      padding-block-end: 0.25rem
    }
    .pbe-1\\.5 {
      padding-block-end: 0.375rem
    }
    .pbe-2 {
      padding-block-end: 0.5rem
    }
    .pbe-2\\.5 {
      padding-block-end: 0.625rem
    }
    .pbe-3 {
      padding-block-end: 0.75rem
    }
    .pbe-3\\.5 {
      padding-block-end: 0.875rem
    }
    .pbe-4 {
      padding-block-end: 1rem
    }
    .pbe-5 {
      padding-block-end: 1.25rem
    }
    .pbe-6 {
      padding-block-end: 1.5rem
    }
    .pbe-7 {
      padding-block-end: 1.75rem
    }
    .pbe-8 {
      padding-block-end: 2rem
    }
    .pbe-9 {
      padding-block-end: 2.25rem
    }
    .pbe-10 {
      padding-block-end: 2.5rem
    }
    .pbe-11 {
      padding-block-end: 2.75rem
    }
    .pbe-12 {
      padding-block-end: 3rem
    }
    .pbe-14 {
      padding-block-end: 3.5rem
    }
    .pbe-16 {
      padding-block-end: 4rem
    }
    .pbe-20 {
      padding-block-end: 5rem
    }
    .pbe-24 {
      padding-block-end: 6rem
    }
    .pbe-28 {
      padding-block-end: 7rem
    }
    .pbe-32 {
      padding-block-end: 8rem
    }
    .pbe-36 {
      padding-block-end: 9rem
    }
    .pbe-40 {
      padding-block-end: 10rem
    }
    .pbe-44 {
      padding-block-end: 11rem
    }
    .pbe-48 {
      padding-block-end: 12rem
    }
    .pbe-52 {
      padding-block-end: 13rem
    }
    .pbe-56 {
      padding-block-end: 14rem
    }
    .pbe-60 {
      padding-block-end: 15rem
    }
    .pbe-64 {
      padding-block-end: 16rem
    }
    .pbe-72 {
      padding-block-end: 18rem
    }
    .pbe-80 {
      padding-block-end: 20rem
    }
    .pbe-96 {
      padding-block-end: 24rem
    }
    .pbe-px {
      padding-block-end: 1px
    }
    .pbs-0 {
      padding-block-start: 0px
    }
    .pbs-0\\.5 {
      padding-block-start: 0.125rem
    }
    .pbs-1 {
      padding-block-start: 0.25rem
    }
    .pbs-1\\.5 {
      padding-block-start: 0.375rem
    }
    .pbs-2 {
      padding-block-start: 0.5rem
    }
    .pbs-2\\.5 {
      padding-block-start: 0.625rem
    }
    .pbs-3 {
      padding-block-start: 0.75rem
    }
    .pbs-3\\.5 {
      padding-block-start: 0.875rem
    }
    .pbs-4 {
      padding-block-start: 1rem
    }
    .pbs-5 {
      padding-block-start: 1.25rem
    }
    .pbs-6 {
      padding-block-start: 1.5rem
    }
    .pbs-7 {
      padding-block-start: 1.75rem
    }
    .pbs-8 {
      padding-block-start: 2rem
    }
    .pbs-9 {
      padding-block-start: 2.25rem
    }
    .pbs-10 {
      padding-block-start: 2.5rem
    }
    .pbs-11 {
      padding-block-start: 2.75rem
    }
    .pbs-12 {
      padding-block-start: 3rem
    }
    .pbs-14 {
      padding-block-start: 3.5rem
    }
    .pbs-16 {
      padding-block-start: 4rem
    }
    .pbs-20 {
      padding-block-start: 5rem
    }
    .pbs-24 {
      padding-block-start: 6rem
    }
    .pbs-28 {
      padding-block-start: 7rem
    }
    .pbs-32 {
      padding-block-start: 8rem
    }
    .pbs-36 {
      padding-block-start: 9rem
    }
    .pbs-40 {
      padding-block-start: 10rem
    }
    .pbs-44 {
      padding-block-start: 11rem
    }
    .pbs-48 {
      padding-block-start: 12rem
    }
    .pbs-52 {
      padding-block-start: 13rem
    }
    .pbs-56 {
      padding-block-start: 14rem
    }
    .pbs-60 {
      padding-block-start: 15rem
    }
    .pbs-64 {
      padding-block-start: 16rem
    }
    .pbs-72 {
      padding-block-start: 18rem
    }
    .pbs-80 {
      padding-block-start: 20rem
    }
    .pbs-96 {
      padding-block-start: 24rem
    }
    .pbs-px {
      padding-block-start: 1px
    }
  }
`;

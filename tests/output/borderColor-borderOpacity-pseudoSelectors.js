module.exports = `
  .before\\:border-bs-black::before {
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
  }
  .only\\:border-bs-black:only-child {
    --tw-border-opacity: 1;
    border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
  }
  .disabled\\:border-bs-black:disabled {
    --tw-border-opacity: 1;
    border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
  }
  .peer:checked ~ .peer-checked\\:border-bs-black {
    --tw-border-opacity: 1;
    border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
  }
  @media (min-width: 768px) {
    .md\\:disabled\\:focus\\:hover\\:border-bs-black:hover:focus:disabled {
      --tw-border-opacity: 1;
      border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
    }
  }
  @media (prefers-color-scheme: dark) {
    .dark\\:border-be-black {
      --tw-border-opacity: 1;
      border-block-end-color: rgb(0 0 0 / var(--tw-border-opacity))
    }
    .dark\\:border-bs-black {
      --tw-border-opacity: 1;
      border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
    }
    .dark\\:border-ie-black {
      --tw-border-opacity: 1;
      border-inline-end-color: rgb(0 0 0 / var(--tw-border-opacity))
    }
    .dark\\:border-is-black {
      --tw-border-opacity: 1;
      border-inline-start-color: rgb(0 0 0 / var(--tw-border-opacity))
    }
  }
  @media (min-width: 768px) {
    @media (prefers-color-scheme: dark) {
      .md\\:dark\\:disabled\\:focus\\:hover\\:border-bs-black:hover:focus:disabled {
        --tw-border-opacity: 1;
        border-block-start-color: rgb(0 0 0 / var(--tw-border-opacity))
      }
    }
  }
`;

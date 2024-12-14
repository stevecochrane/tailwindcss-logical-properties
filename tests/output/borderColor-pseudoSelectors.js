module.exports = `
  .before\\:border-bs-black::before {
    content: var(--tw-content);
    border-block-start-color: #000
  }
  .only\\:border-bs-black:only-child {
    border-block-start-color: #000
  }
  .disabled\\:border-bs-black:disabled {
    border-block-start-color: #000
  }
  .peer:checked ~ .peer-checked\\:border-bs-black {
    border-block-start-color: #000
  }
  @media (min-width: 768px) {
    .md\\:disabled\\:focus\\:hover\\:border-bs-black:hover:focus:disabled {
      border-block-start-color: #000
    }
  }
  @media (prefers-color-scheme: dark) {
    .dark\\:border-be-black {
      border-block-end-color: #000
    }
    .dark\\:border-bs-black {
        border-block-start-color: #000
    }
    .dark\\:border-ie-black {
      border-inline-end-color: #000
    }
    .dark\\:border-is-black {
        border-inline-start-color: #000
    }
  }
  @media (min-width: 768px) {
    @media (prefers-color-scheme: dark) {
        .md\\:dark\\:disabled\\:focus\\:hover\\:border-bs-black:hover:focus:disabled {
          border-block-start-color: #000
        }
    }
  }
`;

const cssMatcher = require('jest-matcher-css');

// eslint-disable-next-line no-undef
expect.extend({
  toMatchCss: cssMatcher,
});

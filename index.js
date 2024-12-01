const plugin = require('tailwindcss/plugin');

const blockSize = require('./plugins/blockSize');
const borderColor = require('./plugins/borderColor');
const borderRadius = require('./plugins/borderRadius');
const borderWidth = require('./plugins/borderWidth');
const divideWidth = require('./plugins/divideWidth');
const inlineSize = require('./plugins/inlineSize');
const inset = require('./plugins/inset');
const margin = require('./plugins/margin');
const maxBlockSize = require('./plugins/maxBlockSize');
const maxInlineSize = require('./plugins/maxInlineSize');
const minBlockSize = require('./plugins/minBlockSize');
const minInlineSize = require('./plugins/minInlineSize');
const overscrollBehavior = require('./plugins/overscrollBehavior');
const padding = require('./plugins/padding');
const resize = require('./plugins/resize');
const spaceBetween = require('./plugins/spaceBetween');

module.exports = plugin(function(helpers) {
  resize(helpers);
  overscrollBehavior(helpers);

  blockSize(helpers);
  minBlockSize(helpers);
  maxBlockSize(helpers);

  inlineSize(helpers);
  minInlineSize(helpers);
  maxInlineSize(helpers);

  margin(helpers);
  padding(helpers);
  spaceBetween(helpers);

  inset(helpers);

  divideWidth(helpers);
  borderWidth(helpers);
  borderColor(helpers);
  borderRadius(helpers);
});

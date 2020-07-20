const path = require("path");
require(path.join(__dirname, "../styleguide-globals.js"));

const styleguideConfig = require(path.join(__dirname, "styleguide.config.js"));

styleguideConfig.styleguideDir = path.join(
  __dirname,
  `../docs/${globalThis.STYLEGUIDE_CURRENT_VERSION}`
);
styleguideConfig.require.push(
  path.join(__dirname, "../styleguide-globals.js"),
  path.join(__dirname, "../version-switcher/index.js")
);

module.exports = styleguideConfig;

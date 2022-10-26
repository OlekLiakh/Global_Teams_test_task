const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  },
  chromeWebSecurity: false,
  viewportHeight: 900,
  viewportWidth: 1440
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "http://localhost:8080",
  },
  env: { BACKEND: "http://localhost:5000" },
});

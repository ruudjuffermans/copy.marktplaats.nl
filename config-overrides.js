const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      middleware: path.resolve(__dirname, "src/middleware"),
      layouts: path.resolve(__dirname, "src/layouts"),
      pages: path.resolve(__dirname, "src/pages"),
      state: path.resolve(__dirname, "src/state"),
      components: path.resolve(__dirname, "src/components"),
      theme: path.resolve(__dirname, "src/theme"),
      styles: path.resolve(__dirname, "src/styles"),
      utils: path.resolve(__dirname, "src/utils"),
      store: path.resolve(__dirname, "src/store"),
      services: path.resolve(__dirname, "src/services"),
      locales: path.resolve(__dirname, "src/locales"),
      router: path.resolve(__dirname, "src/router"),
    },
  };

  return config;
};

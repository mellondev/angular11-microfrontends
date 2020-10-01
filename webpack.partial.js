const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("4711"),
    }),
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      exposes: {
        Module: "./projects/mdmf-shell/src/app/app.module.ts",
      }
    }),
  ],
};

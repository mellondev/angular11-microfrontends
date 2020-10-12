const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "mdmfprofile"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      library: { type: "var", name: "profile" },
      filename: "remoteEntry.js",
      exposes: {
        Module: "./projects/mdmf-profile/src/app/app.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ]
};

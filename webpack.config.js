const { join } = require("path");

module.exports = {
  mode: "production",
  entry: "./index.tsx",
  output: {
    path: join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [ { test: /.tsx?$/, loader: "ts-loader" } ]
  }
}

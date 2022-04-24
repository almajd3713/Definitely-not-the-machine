const path = require("path")

module.exports = {
  entry: "./src",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve:{
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {"test": /\.scss$/, "use": ["style-loader", "css-loader", "sass-loader"]},
      {"test": /\.ts$/, "use": ["ts-loader"]},
      {"test": /\.svg$/, "use": ["raw-loader"]}
    ]
  }
}
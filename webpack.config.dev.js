import path from "path";
import { injectHtml } from "./webpack.plugins";

export default {
  devtool: "inline-source-map",
  entry: [path.resolve(__dirname, "src/index")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [injectHtml()],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
};

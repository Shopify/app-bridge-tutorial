const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: ["./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: path.resolve(__dirname, "./public"),
    filename: `[name].bundle.js`
  },
  resolve: {
    extensions: [".jsx", ".js"],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "node_modules"),
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      }
    ]
  },
  plugins: [
    // Create the dist HTML file with variables defined in src/config
    new HtmlWebpackPlugin({ title: "App Bridge Tutorial" }),

    // Sets variables to be usable in the JS
    new webpack.DefinePlugin({
      SHOPIFY_API_KEY: JSON.stringify(process.env.SHOPIFY_API_KEY)
    })
  ],
  externals: {
    polaris: "@shopify/polaris"
  },
  devtool: "source-map"
};

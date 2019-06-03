const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

var apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
module.exports = withCSS({
  webpack: function(config) {
    var env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    config.resolve.mainFields = ["main"];
    return config;
  }
});

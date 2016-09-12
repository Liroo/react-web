var webpack = require("webpack");
var path = require("path");
 
var ROOT = path.resolve(__dirname);
var BUNDLE = path.resolve(__dirname, "bundleCore");
 
var config = {
  entry: ROOT + "/index.js",
  output: {
    path: BUNDLE,
    filename: "/bundle.js",
  },
  module: {
    loaders: [{
      include: ROOT,
      loader: "babel",
    }],
  },
};
 
module.exports = config;

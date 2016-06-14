var join = require("path").join;
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProduction ? "cheap-module-source-map" : "eval",
  entry: ["babel-polyfill", join(__dirname, "./index.js")],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: "babel",
        include: [
          join(__dirname, './routes.jsx'),
          join(__dirname, './src')
        ]
    }]
  },
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js'
  }
};

if (isProduction) {
  var webpack = require("webpack");

  module.exports.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ];
}

var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      process.env.NODE_ENV === 'production' ? { test: /\.js$/, use: 'babel-loader' } : {},
      {
        test: /\.js$/,
        use: [
          'ify-loader',
          'transform-loader?plotly.js/tasks/util/compress_attributes.js',
          ]
      },
    ]
  }
};

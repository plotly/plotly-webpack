var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.webpack.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'ify-loader',
      },
      {
        test: /\.js$/,
        use: 'transform-loader?plotly.js/tasks/util/compress_attributes.js',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.optimize.UglifyJsPlugin({
      ie8: false,
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    })
  ]
};

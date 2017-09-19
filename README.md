# Bundling plotly.js with webpack or browserify

A repo to demonstrate bundling [plotly.js](https://github.com/plotly/plotly.js), either with browserify or webpack. Webpack bundling requires [ify-loader@1.1.0+](https://github.com/browserify/ify-loader) for the glslify, cwise, and brfs browserify transforms.

## To bundle with browserify:

```bash
$ npm install
$ npm run bundle:browserify
$ open index.browserify.html
```

## To bundle with webpack:

Bundling with webpack requires [ify-loader@1.1.0+](https://github.com/browserify/ify-loader). You can add a loader as follows:

```js
// webpack.config.js:
module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ify-loader'
      }
    ]
  }
  ...
}
```

See [building plotly.js with webpack](https://github.com/plotly/plotly.js#building-plotlyjs-with-webpack) for more details.

```bash
$ npm install
$ npm run bundle:webpack
$ open index.webpack.html
```

## License

&copy; 2017 Ricky Reusser. MIT License.


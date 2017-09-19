# Bundling plotly.js with webpack or browserify

A repo to demonstrate bundling [plotly.js](https://github.com/plotly/plotly.js), either with browserify or webpack. Webpack bundling requires [ify-loader@1.1.0+](https://github.com/browserify/ify-loader) for the glslify, cwise, and brfs browserify transforms.

## Input

The input for this example is a simple `index.js` that creates a plot:

```javascript
// index.js:
var Plotly = require('plotly.js');
var gd = document.createElement('div');
document.body.appendChild(gd);

Plotly.plot(gd, [{x: [1, 2, 3], y: [2, 1, 4]}]);
```

## To bundle with browserify:

```bash
$ npm install
$ browserify index.js > bundle.browserify.js
$ open index.browserify.html
```

In this example repo, you may run the above command by running [`npm run bundle:browserify`](https://github.com/rreusser/plotly-webpack/blob/ec0c5588438dc5a6574e666330452145d05f086b/package.json#L8).

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

In this example repo, [`npm run bundle:webpack`](https://github.com/rreusser/plotly-webpack/blob/ec0c5588438dc5a6574e666330452145d05f086b/package.json#L7) runs `webpack` which then uses the config in [`webpack.config.js`](https://github.com/rreusser/plotly-webpack/blob/master/webpack.config.js):

```bash
$ npm install
$ npm run bundle:webpack
$ open index.webpack.html
```

See [building plotly.js with webpack](https://github.com/plotly/plotly.js#building-plotlyjs-with-webpack) for more details.

## License

&copy; 2017 Ricky Reusser. MIT License.


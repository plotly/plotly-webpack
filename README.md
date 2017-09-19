# Bundling plotly.js with webpack or browserify

A repo to demonstrate bundling [plotly.js](https://github.com/plotly/plotly.js), either with browserify or webpack. Webpack bundling requires [ify-loader@1.1.0+](https://github.com/browserify/ify-loader) for the glslify, cwise, and brfs browserify transforms.

## Input

The input for this example is a simple `index.js` that creates a plot:

```javascript
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

In this example repo, you may run this command by running `npm run bundle:browserify`.

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

In this example repo, `npm run bundle:webpack` runs `webpack` with the given config file in `webpack.config.js`.

## License

&copy; 2017 Ricky Reusser. MIT License.


# Bundling plotly.js with webpack or browserify

A repo to demonstrate bundling [plotly.js](https://github.com/plotly/plotly.js), either with browserify or webpack.

## Defining your custom build

The input for this example is an `index.js` that creates a scatter plot using a custom build of plotly.js. If you want the kitchen sink, you may just `require('plotly.js')`, but for a more targeted build, you can `require('plotly.js/lib/core)` and [register individual modules](https://github.com/plotly/plotly.js/blob/master/lib/index.js). Scatter plots are provided by default, but all other trace types and transforms must be registered.

```javascript
// index.js:
var Plotly = require('plotly.js/lib/core');

// Register your desired components here:
Plotly.register([
  require('plotly.js/lib/bar')
]);

var gd = document.createElement('div');
document.body.appendChild(gd);

Plotly.plot(gd, [{
  type: 'bar'
  x: [1, 2, 3],
  y: [2, 1, 4],
}]);
```

## Bundling with webpack

Bundling with webpack requires [ify-loader@1.1.0+](https://github.com/browserify/ify-loader) for the glslify, cwise, and brfs browserify transforms. Additionally, you may wish to use [transform-loader](https://github.com/webpack-contrib/transform-loader) to run plotly.js's custom [compress\_attributes](https://github.com/plotly/plotly.js/blob/master/tasks/util/compress_attributes.js) text descriptions from the plot schema that aren't needed to create and view plots. You can add these loaders as follows:

```js
// webpack.config.js:
module.exports = {
  ...
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
  ...
};
```

In the above configuration, `ify-loader` looks at the `browesrify.transform` field of at each nested module's `package.json` for the browserify transforms that need to be run. `transform-loader`, on the other hand, applies the specified transform to all files matching the pattern `/\.js$/`.

To further optimize and reduce the bundle size, you may include [additional plugins](https://webpack.js.org/plugins/). For example:

```js
// webpack.config.js:
module.exports = {
  ...
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.optimize.UglifyJsPlugin({
      ie8: false,
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    })
  ],
  ...
};
```

In this example repo, [`npm run bundle:webpack`](https://github.com/rreusser/plotly-webpack/blob/ec0c5588438dc5a6574e666330452145d05f086b/package.json#L7) runs `webpack` which then uses the config in [`webpack.config.js`](https://github.com/rreusser/plotly-webpack/blob/master/webpack.config.js):

```bash
$ npm install
$ npm run bundle:webpack
$ open index.webpack.html
```

See [building plotly.js with webpack](https://github.com/plotly/plotly.js#building-plotlyjs-with-webpack) for more details.

## Bundling with browserify

```bash
$ npm install
$ browserify index.js > bundle.browserify.js
$ open index.browserify.html
```

In this example repo, you may run the above command by running [`npm run bundle:browserify`](https://github.com/rreusser/plotly-webpack/blob/ec0c5588438dc5a6574e666330452145d05f086b/package.json#L8).

Similar to the webpack configuration, there is a lot you may do to reduce the bundle size. See: [envify](https://github.com/hughsk/envify), [uglify-js](https://github.com/mishoo/UglifyJS2), [uglifyify](https://github.com/hughsk/uglifyify), and [bundle-collapser](https://github.com/substack/bundle-collapser), for a start.

```bash
$ browserify \
  -g plotly.js/tasks/util/compress_attributes.js \
  -g [ envify --NODE_ENV production ]
  -g uglifyify \
  -p bundle-collapser/plugin \
  index.js | \
  uglifyjs -cm \
  > bundle.browserify.js
```

## License

&copy; 2017 Ricky Reusser. MIT License.


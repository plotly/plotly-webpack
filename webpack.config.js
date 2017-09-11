module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.webpack.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ify-loader'
            }
        ]
    }
};

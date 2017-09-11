module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /node_modules/,
                loader: 'ify-loader'
            }
        ]
    }
};

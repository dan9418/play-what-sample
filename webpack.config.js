let config = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./sample.js"
    },
    resolve: {
        symlinks: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}

module.exports = config;
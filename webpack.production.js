
process.env.NODE_ENV = 'production'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = require("./webpack.common")

config.mode = "production"

config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
    })
]

module.exports = config;
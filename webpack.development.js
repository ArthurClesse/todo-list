
process.env.NODE_ENV = 'development'

const config = require("./webpack.common")

config.mode = "development"

config.devServer = {
    liveReload: true,
    hot: false,
    open: true,
    watchFiles: ['./dist/index.html'],
};

module.exports = config;
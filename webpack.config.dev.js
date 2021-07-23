const baseConfig = require('./webpack.config');

baseConfig.output.publicPath = "http://localhost:3000/build/";
baseConfig.devServer = {
    port: 3000,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    compress: true,
    hot: true
};

module.exports = baseConfig;

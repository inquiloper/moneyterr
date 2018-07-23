const path = require('path');
const environment = process.env.NODE_ENV;
module.exports = {

    mode:environment,
    entry: './src/moneyterr.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'moneyterr.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {},
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',

}
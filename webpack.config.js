const path = require('path');


const config = {
    entry : __dirname+'/src/js/app.js',
    output : {
        path:path.resolve(__dirname+'/public_html/dist/'),
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMap: true,
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }
        ]
    }
}

module.exports = config;
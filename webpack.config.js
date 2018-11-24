const path = require('path');

var babelOptions = {
    "presets": [
        "@babel/preset-env",
        [
            "es2015",
            {
                "modules": false
            }
        ],
        "es2016"
    ]
};

module.exports = {
    entry: './src/main.js',
    // devtool: 'inline-source-map',

    module: {
        rules: [
            // {
            //     loader: 'babel-loader',
            //     test: /\.js$/,
            //     exclude: /node_modules/
            // },
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.js$/,
            //     use: ["source-map-loader"],
            //     enforce: "pre"
            // },
            // {
            //     test: /\.handlebars$/,
            //     loader: "handlebars-loader"
            // },
            {
                test: /\.(png|svg|jpg|gif|mst)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [
                            ':data-src',
                            'img:src'
                        ]
                    }
                }
            }
        ]
    },
    // plugins: [
    // ],
    // resolve: {
    //     extensions: ['.ts', '.tsx', '.js'],
    //     alias: {
    //     //     'handlebars': 'node_modules/handlebars/dist/handlebars.js'
    //     //     'handlebars': 'handlebars/runtime.js'
    //     }
    // },
    node: {
        fs: 'empty'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/swipe/ui/'
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        inline: true,
        contentBase: './static'
    }
};
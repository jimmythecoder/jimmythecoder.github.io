const path                          = require('path');
const fs                            = require("fs");
const webpack                       = require('webpack');
const htmlWebpackPlugin             = require('html-webpack-plugin');

const pkg           = JSON.parse(fs.readFileSync('./package.json'));
const sourcePath    = path.resolve(__dirname,'src');
const outputPath    = path.resolve(__dirname);

module.exports = function(env, argv) {

    const port = '3000';

    const config = {

        mode: env.production ? 'production' : 'development',

        entry: `${sourcePath}/app.ts`,
        
        output: {
            filename: 'assets/js/[name].[chunkhash].bundle.js',
            path: outputPath,
            publicPath: '/'
        },

        devServer: {
            static: {
                directory: outputPath,
            },
            historyApiFallback: true,
            open: true,
            compress: true,
            hot: true,
            port,
            host: 'local-ip',
            allowedHosts: "all"
        },

        devtool: false,

        resolve: {
            extensions: ['.ts', '.js', '.json', '.scss']
        },

        module: {
            rules: [
                {
                    loader: 'ts-loader',
                    test: /\.ts?$/,
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            target: 'ES6'
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    type: "asset/resource",
                    generator: {
                        filename: `assets/fonts/[hash][ext][query]`
                    }
                },
                {
                    test: /\.(gif|jpg|jpeg|png|svg)$/,
                    type: "asset",
                    generator: {
                        filename: `assets/img/[hash][ext][query]`
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 20 * 1024 // 20kb
                        }
                    }
                },
            ]
        },

        plugins: [
            new webpack.ProgressPlugin(),
            new htmlWebpackPlugin({
                template: `./index.ejs`,
                filename: `index.html`,
                version: pkg.version,
            })
        ],
        externals: []
    };

    return config;
}

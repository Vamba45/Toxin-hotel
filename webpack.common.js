const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'assets/script/[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/style/[name].css"
        })
    ],
    module: {
        rules: [
            //JS, TS
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                  },
                ],
              },
            //CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            //Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                },
            },
            //Fonts 
            {
              test: /\.(woff2?|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'assets/fonts/[name][ext]'
              },
            },
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
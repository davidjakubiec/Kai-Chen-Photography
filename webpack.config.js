const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/', // Output path for images
                        },
                    },
                ],
            }, 
            {
                test: /\.(MP4|mov)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]', // Output the file with its original name and extension
                    outputPath: 'videos/', // Output directory for the MP4 files (you can change this)
                  },
                },
              }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};
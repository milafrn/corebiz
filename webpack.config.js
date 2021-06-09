const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'bundle.js'
 },
 devServer: {
   port: 3000,
   watchContentBase: true
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new webpack.HotModuleReplacementPlugin()],
}
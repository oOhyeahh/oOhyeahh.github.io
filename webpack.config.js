const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'app-bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ],
    loaders: [
      {
          test: /\.html$/,
          loader: 'file-loader?name=[name].[ext]',
      },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      query: {
          presets: ['es2015', 'react']
      }
  },
],
  },
  devServer: {
    host: '0.0.0.0',
    overlay: true
  }
}

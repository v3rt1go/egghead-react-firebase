'use strict';
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  //plugins: [
    //new webpack.ProvidePlugin({
      //$: "jquery",
      //jQuery: "jquery",
      //semantic: "semantic-ui/dist/semantic.min.js"
    //})
  //],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'eslint-loader'
      }
    ]
  }
};


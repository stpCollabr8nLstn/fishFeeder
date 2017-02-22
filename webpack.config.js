var webpack = require('webpack');
var path = require('path');

// Plug-ins
const DefinePlugin = require('webpack').DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      _src: APP_DIR
    }
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file',
        query: {
          name: "images/[name].[ext]"
        }
      },

      {
        test: /\.(s?css)$/,
        loader:  ExtractTextPlugin.extract("style-loader", 'css!sass')
      }
    ]
  }
};

module.exports = config;

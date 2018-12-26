const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'public/javascripts/scrollbar/MAIN.js'),
      path.resolve(__dirname, 'public/javascripts/chat/MAIN.js'),
      path.resolve(__dirname, 'public/javascripts/chatButtons/MAIN.js'),
      path.resolve(__dirname, 'public/javascripts/userListTouch/MAIN.js')
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'public/javascripts/fallbackBundle'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }]
      }
    ]
  }
};

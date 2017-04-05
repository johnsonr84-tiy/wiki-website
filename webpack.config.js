var path = require('path');

module.exports = {
  entry: ['./app/scripts/index.js','./app/styles/main.sass'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  devtool: "source-map",
  module: {
      rules: [{
          test: /\.sass$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
        }]
      }]
  }
};

var path = require('path');

module.exports = {
  entry: ['./app/scripts/index.js', './app/styles/main.sass.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-eval-source-map'
  watch: true,
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

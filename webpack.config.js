const path = require('path')

module.exports = {
  entry: './src/server/modules/index.jsx',

  watch: true,

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules/')
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader?sourceMap'
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:10]'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}

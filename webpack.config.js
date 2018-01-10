var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "../images/[hash].[ext]",
          },
        },
      },
    ]
  },
   plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '../css/style.css',
      allChunks: true,
    }),
  ],
}
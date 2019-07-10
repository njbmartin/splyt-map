const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'development',
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.jsx'),
      path.resolve(__dirname, 'src/styles/base.scss'),
    ],
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.min.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './public/',
        to: './',
      },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader',
      },
    ],
  },
};

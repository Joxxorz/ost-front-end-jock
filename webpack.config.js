const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  base: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './app/index.js',
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'static/[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      title: 'Default Template',
      template: './app/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'static/style.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(`${paths.base}`),
      path.resolve('node_modules/')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: paths.base
      },
      {
        test: /\.global\.scss$/,
        exclude: [/node_modules/, /\styles/],
        include: paths.base,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [paths.base]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.global\.scss$/],
        include: paths.base,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[local]___[hash:base64:5]',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [paths.base]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: paths.base,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/static/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: paths.base,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/static/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/',
    port: 8400,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false
  }
};

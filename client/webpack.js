const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = (env) => ({
  mode: 'development',
  entry: {
    'bundle.js': './src/index.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
  },
  devServer: {
    bonjour: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(env.API_URL),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@components': `${__dirname}/src/components/`,
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
    extensions: [ '.js', '.jsx' ],
  },
});

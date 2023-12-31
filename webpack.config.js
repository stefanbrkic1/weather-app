const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    forecast: path.resolve(__dirname, './src/forecast.js'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name]-[contenthash][ext]',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WeatherApp',
      filename: 'index.html',
      favicon: './src/img/logo/favicon.ico',
      template: path.resolve(__dirname, './src/pages/index.ejs'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'WeatherApp | Forecast',
      filename: 'weather.html',
      favicon: './src/img/logo/favicon.ico',
      template: path.resolve(__dirname, './src/pages/weather.ejs'),
      chunks: ['forecast'],
    }),
  ],
};

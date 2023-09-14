const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RouterPlugin = require('./plugins/router-plugin.js');

module.exports = {
  entry: './src/entry.tsx',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM',
    '@remix-run/router': 'RemixRouter',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src")
              },
            },
          },
          'postcss-loader'
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].[contenthash:8].css",
    }),
    new RouterPlugin({
      srcDir: path.join(__dirname, 'src', 'pages'),
      outputDir: path.join(__dirname, 'src/$fizzy-generated'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@@': path.resolve(__dirname, 'src/$fizzy-generated'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  output: {
    filename: '[name].[contenthash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    chunkIds: 'named',
  },
};
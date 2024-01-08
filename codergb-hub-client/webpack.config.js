const webpack = require("webpack")
const path = require('path');
const config = require("./config/index.js");

const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[contenthash].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  cache:true,
  mode:process.env.NODE_ENV==='development'?'development':"production",
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  devtool: 'source-map',
  devServer: {
    port: process.env.WEBPACK_SERVER_PORT,
    open: true,
    hot: true,
    proxy: {
      '/gb': {
        target: `http://${process.env.HOST}:${process.env.SERVER_PORT}`,
        pathRewrite: { '^/gb': '' },
      },
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.css$/i
      }),
      new TerserPlugin({
        exclude:/node_modules/,
        test:/\.tsx?$/i
      })
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.tsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp|svg)$/,
        type: 'asset/resource',
        exclude: /(node_modules|bower_components)/,
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'codergb-hub',
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico')
    }),
    new DotenvWebpack({
      path: config.envConfigPath[process.env.CURRENT_ENV], // 根据环境配置文件路径
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      moment:'moment'
    })
  ]
};

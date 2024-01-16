const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const { envConfigPath } = require('./index.js');
const paths = require('./paths.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    target: 'browserslist', //用于构建多种环境
    mode: isEnvProduction ? 'production' : 'development',
    devtool: isEnvProduction ? false : 'cheap-module-source-map',
    entry: paths.appIndexJs,
    output: {
      path: paths.appBuild,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : 'static/js/[name].chunk.js',
      assetModuleFilename: 'static/medis/[name].[hash][ext]',
      clean: true,
      publicPath:process.env.PUBLIC_PATH
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: paths.cacheDirectory,
      store: 'pack'
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
        terserOptions: {
          parse: {
            ecma:8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger:true
          },
          output: {
            ecma: 5,
            comments:false
          }
        }
      }), new CssMinimizerPlugin()]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(tsx|ts|jsx|js)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
                cacheCompression: false
              }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.less$/i,
              use: ['style-loader', 'css-loader', 'less-loader']
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
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'codergb-hub',
        template: paths.appHtml,
        favicon: paths.appIcon
      }),
      new DotenvWebpack({
        path: envConfigPath[process.env.CURRENT_ENV] // 根据环境配置文件路径
      }),
      new webpack.ProgressPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
        moment: 'moment'
      }),
      new CopyPlugin({
        patterns: [
          { from: paths.appStatic, to: `${paths.appBuild}/${process.env.STATIC_PATH}/[name].[contenthash][ext]` },
        ],
      }),
    ]
  };
};

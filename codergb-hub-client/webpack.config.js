const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename:"js/[contenthash].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    clean:true
  },
  mode:"development",
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx','.js'],
  },
  devtool:"source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test:/\.css$/i
      }),
    ],
    splitChunks: {
      chunks:"all"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader:"babel-loader"
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp|svg)$/,
        type: "asset/resource",
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
      title:"codergb-hub",
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname,'./public/favicon.ico'),
      
    })
  ]
}
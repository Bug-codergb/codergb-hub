const WebpackDevServer = require('webpack-dev-server');
const path = require("path");
require('../config/dotenv.js');
const paths = require('../config/paths.js');

const { checkRequirdFiles } = require("../config/checkRequiredFiles.js");
const configFactory = require('../config/webpack.config.js');
const { createCompiler } = require('../config/createCompiler.js');
process.env.NODE_ENV = 'development';
const DEFAULT_PORT = parseInt(process.env.WEBPACK_SERVER_PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

if (!checkRequirdFiles([paths.appHtml, paths.appIndexJs,paths.appStatic])) {
  process.exit(1)
}
const config = configFactory('development');
const appName = require(paths.appPackageJson).name;
const compiler = createCompiler({
  appName,
  config
});

const devServer = new WebpackDevServer(
  {
    port: 3000,
    open: true,
    static: {
      directory:  paths.appStatic,
      publicPath:"/"
    },
    proxy: {
      '/gb': {
        target: `http://${process.env.HOST}:${process.env.SERVER_PORT}`,
        pathRewrite: { '^/gb': '' }
      }
    }
  },
  compiler
);
devServer.startCallback(() => {
  console.log('start......');
});

const WebpackDevServer = require('webpack-dev-server');

const dotenvConfig = require('../config/dotenv.js');
console.log(process.env.HOST);
const paths = require('../config/paths.js');

const configFactory = require('../config/webpack.config.js');
const { createCompiler } = require('../config/createCompiler.js');
process.env.NODE_ENV = 'development';
const DEFAULT_PORT = parseInt(process.env.WEBPACK_SERVER_PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

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

process.env.NODE_ENV = 'production';
require('../config/dotenv.js');
const webpack = require('webpack');
const paths = require("../config/paths.js");
const { checkRequirdFiles } = require('../config/checkRequiredFiles.js');
if (!checkRequirdFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}
const configFactory = require('../config/webpack.config.js');
const config = configFactory('production');
const compiler = webpack(config);
compiler.run((err, stats) => {
  
})
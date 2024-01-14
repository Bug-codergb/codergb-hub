const dotenv = require('dotenv');
const path = require('path');
const envConfigPath = {
  development: path.resolve(__dirname, '../.env.development'),
  test: path.resolve(__dirname, '.env.test'),
  production: path.resolve(__dirname, '../.env.production')
};
const envConfig = dotenv.config({
  path: envConfigPath[process.env.CURRENT_ENV]
}).parsed;

module.exports = {
  dotenv,
  envConfigPath,
  envConfig
};

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
console.log(appDirectory);
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const buildPath = process.env.BUILD_PATH;

module.exports = {
  appBuild: resolveApp(buildPath),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIcon: resolveApp('public/favicon.ico'),
  appIndexJs: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src'),
  appPackageJson: resolveApp('package.json'),
  appWebpackCache: resolveApp('node_modules/.cache') //构建时缓存的位置
};

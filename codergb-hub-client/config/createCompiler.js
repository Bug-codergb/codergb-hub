const webpack = require("webpack");

function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  );
}
function createCompiler({
  appName,
  config
}) {
  let compiler;
  try {
    compiler = webpack(config);
  } catch (e) {
    console.error("failed to compile")
    console.log(e.message);
  }
  return compiler;
}
module.exports = {
  createCompiler
}
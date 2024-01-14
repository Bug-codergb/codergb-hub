const path = require('path');
const fs = require('fs');
function checkRequirdFiles(files) {
  let currentFilePath;
  try {
    files.forEach(filePath => {
      currentFilePath = filePath;
      fs.accessSync(filePath,fs.F_OK)
    })
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = {
  checkRequirdFiles
}
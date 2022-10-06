const fs = require("fs");
function judgeFile(filePath){
  return new Promise((resolve,reject)=>{
    fs.access(filePath,(err)=>{
      if(!err){
        resolve(true);
      }else{
        resolve(false);
      }
    })
  })
}
module.exports={
  judgeFile
}

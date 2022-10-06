const fs = require('fs');
const path = require('path');
const { judgeFile } = require("./judgeFile");
const { setResponse } = require("./setResponse")
function deleteFile(path){
  return new Promise((resolve,reject)=>{
    fs.unlink(path,(err)=>{
      if(!err){
        resolve(true);
      }else{
        resolve(false);
      }
    })
  })
}
async function deleteFileReq(ctx,next,id,fn,destName='dest',fileName='filename'){
  try{
    const result = await fn(id);
    if(result && result.length!==0){
      const msg = result[0];
      //const {avatarFilename,avatarDest} = msg;
      const isExists = await judgeFile(path.resolve(__dirname,"../../",`${msg[destName]}/${msg[fileName]}`));
      if(isExists){
        await deleteFile(path.resolve(__dirname,"../../",`${msg[destName]}/${msg[fileName]}`))
        await next();
      }else{
        await next();
      }
    }else{
      setResponse(ctx,"文件不存在",400)
    }
  }catch (e) {
    setResponse(ctx,e.message,500)
  }
}
module.exports={
  deleteFile,
  deleteFileReq
}

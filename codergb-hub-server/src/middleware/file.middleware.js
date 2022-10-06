const Multer=require('koa-multer');
const fs = require("fs");
const Jimp=require('jimp');
const path=require('path');
const fileStorage = (filePath=>{
  try{
    return Multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, filePath);
      },
      filename: function (req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
      }
    })
  }catch (e) {
    console.log(e)
  }
})
function uploadHandle(path,uploadName,method){
  try{
    const methods=['single','array']
    if(!methods.includes(method)){
      return;
    }
    const upload = Multer({
      storage:fileStorage(path),
    })
    return upload[method](uploadName)
  }catch (e) {
    console.log(e)
  }
}

function fileStorageChunk(filePath){
  try{
    return Multer.diskStorage({
      destination: function (req, file, cb) {
        const { index,hash,name,size,type,chunkSize } = req.body;
        fs.access(`${filePath}/${hash}`,(err)=>{
           if(err){
             fs.mkdirSync(`${filePath}/${hash}`)
             cb(null, `${filePath}/${hash}`);
           }else{
             cb(null, `${filePath}/${hash}`);
           }
        })
      },
      filename: function (req, file, cb) {
        const { index,hash,name,size,type,chunkSize } = req.body;
        req.body.dest = `${filePath}/${hash}`;
        cb(null, hash+`-${index}`+ path.extname(file.originalname));
      }
    })
  }catch (e) {
    console.log(e)
  }
}
//分片上传
function chunkHandle(path,uploadName,method){
  try{
    const methods=['single','array']
    if(!methods.includes(method)){
      return;
    }
    const upload = Multer({
      storage:fileStorageChunk(path),
    })
    return upload[method](uploadName)
  }catch (e) {
    console.log(e)
  }
}

//用户头像上传
const userAvatarUpload = uploadHandle("./upload/user/avatar",'avatar','single');
//频道头像上传
const channelAvatarUpload = uploadHandle("./upload/channel/avatar",'avatar','single');

//视频上传
const videoUpload= chunkHandle("./upload_temp/video",'video','single');
module.exports={
  userAvatarUpload,
  channelAvatarUpload,
  videoUpload
}

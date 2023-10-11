const Multer=require('koa-multer');
const fs = require("fs");
const Jimp=require('jimp');
const path=require('path');

const createUploadPath=(relativePath)=>{
  const fullPath = path.resolve(__dirname,"../../",relativePath);
  fs.access(fullPath,(err)=>{
    if(err){
      const arr=relativePath.split("/").filter((item)=>item!==".");
      let str = path.resolve(__dirname,"../../");
      for(let item of arr){
        str+=`/${item}`;
        try{
          fs.accessSync(str);
        }catch (e) {
          fs.mkdirSync(str);
        }
      }
    }
  })
}

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

function uploadHandle(relativePath,uploadName,method){
  try{

    createUploadPath(relativePath);

    const methods=['single','array']
    if(!methods.includes(method)){
      return;
    }
    const upload = Multer({
      storage:fileStorage(relativePath),
    })
    return upload[method](uploadName)
  }catch (e) {
    console.log(relativePath);
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
function chunkHandle(relativePath,uploadName,method){
  try{
    createUploadPath(relativePath);
    const methods=['single','array']
    if(!methods.includes(method)){
      return;
    }
    const upload = Multer({
      storage:fileStorageChunk(relativePath),
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
//文件图片上传
const imageUpload = uploadHandle("./upload/image","file","single");
//视频上传
const videoUpload= chunkHandle("./upload_temp/video",'video','single');

createUploadPath("./upload/video");
module.exports={
  userAvatarUpload,
  channelAvatarUpload,  
  videoUpload,
  imageUpload,
  createUploadPath
}

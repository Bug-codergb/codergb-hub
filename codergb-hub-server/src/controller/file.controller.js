const path =require("path");
const fs = require("fs");
const {
  APP_HOST,
  APP_PORT,
} = require("../app/config");
const { setResponse } = require("../utils/setResponse");
const { deleteFile } = require("../utils/deleteFile")
const {
  getImagePrevService,
  uploadService,
  getFileService,
  deleteImageService
} = require("../service/file.service");
class FileController{
  //获取图片预览
  async getImagePrev(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getImagePrevService(ctx,id);
      if(result){
        const { dest,filename,mimetype }=result[0];
        const filePath = path.resolve(__dirname,"../../",`./${dest}/${filename}`);
        console.log(filePath)
        ctx.set("content-type",mimetype);
        ctx.body = fs.createReadStream(filePath);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //图片上传
  async upload(ctx,next){
    try{
      if(ctx.req.file && Object.keys(ctx.req.file)){
        const { mimetype,destination,filename,originalname, size } = ctx.req.file;
        const id = new Date().getTime();
        const picUrl=`${APP_HOST}:${APP_PORT}/image/${id}`;
        const result = await uploadService(ctx,id,picUrl,originalname,mimetype,destination,filename,size);
        if(result){
          setResponse(ctx,"上传成功",200,{
            picUrl:picUrl,
            id:id
          });
        }
      }else{
        setResponse(ctx,"上传文件不能为空",400);
      }
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  //删除上传文件
  async deleteImage(ctx,next){
    try {
      const {id} = ctx.params;
      const result = await getFileService(ctx,id);
      console.log(result);
      if(result){
        const {dest,filename} = result[0];
        const filePath = path.resolve(__dirname,"../../",`${dest}/${filename}`);
        await deleteImageService(ctx,id);
        deleteFile(filePath);
        setResponse(ctx,"success",200,{});
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}
module.exports = new FileController();

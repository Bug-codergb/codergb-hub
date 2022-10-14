const path =require("path");
const fs = require("fs");
const { setResponse } = require("../utils/setResponse");
const {
  getImagePrevService
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
}
module.exports = new FileController();

const { setResponse }=require("../utils/setResponse");
const connection = require("../app/databse");
class FileService{
  async getImagePrevService(ctx,id){
    try{
      const sql = `select * from file where id =?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async uploadService(ctx,id,picUrl,originalname,mimetype,dest,filename,size){
    try{
      const sql=`insert into file(id,picUrl,originalname,mimetype,dest,filename,size)
                 values(?,?,?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,picUrl,originalname,mimetype,dest,filename,size]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //获取文件信息
  async getFileService(ctx,id){
    try{
      const sql=`select * from file where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  //删除文件信息
  async deleteImageService(ctx,id){
    try{
      const sql=`delete from file where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new FileService();

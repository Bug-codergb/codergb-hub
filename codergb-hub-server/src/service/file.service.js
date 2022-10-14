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
}
module.exports = new FileService();

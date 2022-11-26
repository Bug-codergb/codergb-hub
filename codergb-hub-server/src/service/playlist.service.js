const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class PlaylistService{
  async createService(ctx,id,name,description,userId,isPublic){
    try{
      const sql = `insert into playlist(id,name,description,userId,isPublic) values(?,?,?,?,?)`;
      const result =await connection.execute(sql,[id,name,description,userId,isPublic]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getPlaylistCount(ctx){
    try{
      const sql=`select count(*) as count from playlist`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllPlaylistService(ctx,offset,limit){
    try{
      const sql=`select * from playlist limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new PlaylistService().getPlaylistCount(ctx);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserPlaylistCountService(ctx,userId){
    try{
      const sql=`select count(*) as count from playlist where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserPlaylistService(ctx,userId,offset,limit){
    try{
      const sql=`select * from playlist where userId=? limit ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new PlaylistService().getUserPlaylistCountService(ctx,userId);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new PlaylistService();

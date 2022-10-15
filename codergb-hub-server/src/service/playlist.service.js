const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class PlaylistService{
  async createService(ctx,id,name,description,userId){
    try{
      const sql = `insert into playlist(id,name,description,userId) values(?,?,?,?)`;
      const result =await connection.execute(sql,[id,name,description,userId]);
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
        playlist:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new PlaylistService();

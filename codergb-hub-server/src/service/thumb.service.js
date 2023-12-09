const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");

class ThumbService{
  async createService(ctx,alias,id,userId,tread){
    try{
      const uniqueId = new Date().getTime();
      const sql=`insert into thumb (id,userId,${alias}${tread!==undefined? ',tread' :''}) values(?,?,?${tread!==undefined?',?':''})`;
      let result = [];
      result = await connection.execute(sql,[uniqueId,userId,id,tread]);
      return result[0];
    }catch (e) {
      console.log(e)
      setResponse(ctx,e.message,500,{});
    }
  }
  //判断是否已经点赞
  async getThumbService(ctx,alias,id,userId,tread){
    try{
      const sql=`select * from thumb where userId=? and ${alias}=? ${tread!==undefined ? `and tread = ?` :''}`;
      let result=[];
      result = await connection.execute(sql,[userId,id,tread]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async cancelService(ctx,alias,id,userId,tread){
    try{
      const sql=`delete from thumb where userId=? and ${alias}=? ${tread!==undefined?'and tread=?':""}`;
      let result = [];
      result = await connection.execute(sql,[userId,id,tread]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //踩
  async createTreadService(ctx,alias,id,userId,tread){
    try{
      const result = await new ThumbService().createService(ctx, alias, id, userId, tread);
      return result;
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //取消踩
  async cancelTreadService(ctx,alias,id,userId,tread){
    try{
      const result = await new ThumbService().cancelService(ctx, alias, id, userId, tread);
      return result;
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getVideoThumbService(ctx,id){
    try{
      const sql=`
                select count(t.userId) as count
          from thumb as t
          where t.vId IS NOT NULL AND t.tread =0 and t.vId=?
          group by t.vId`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}
module.exports = new ThumbService();

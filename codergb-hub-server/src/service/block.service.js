const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class BlockService{
  async createService(ctx,name,description){
    try{
      const id = new Date().getTime();
      const sql=`insert into block(id,name,description) values(?,?,?)`;
      const result = await connection.execute(sql,[id,name,description]);
      return result[0];
    }catch (e) {
      ctx.setResponse(ctx,e.message,500,{})
    }
  }
  async allBlockService(ctx){
    try{
      const sql =`select * from block`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      ctx.setResponse(ctx,e.message,500,{})
    }
  }
  //用户添加板块
  async userAddBlockService(ctx,userId,blockId){
    try{
      const sql=`insert into user_block (userId,blockId) values(?,?)`;
      const result = await connection.execute(sql,[userId,blockId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async userDelBlockService(ctx,userId,blockId){
    try{
      const sql=`delete from user_block where userId=? and blockId=?`;
      const result = await connection.execute(sql,[userId,blockId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserBlockService(ctx,userId){
    try{
      const sql=`select block.id,block.name,description,block.createTime,block.updateTime
                 from user_block as ub
                 LEFT JOIN block on block.id = ub.blockId
                 where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserBlockDetail(ctx,userId,blockId){
    try{
      const sql=`select userId blockId from user_block where userId=? and blockId = ?`;  
      const result = await connection.execute(sql,[userId,blockId]);
      return result[0];
    }catch(e){
      setResponse(ctx,"error",500,{})
    }
  }
}

module.exports = new BlockService();

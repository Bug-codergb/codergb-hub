const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class RoleService{
  async createService(ctx,name){
    try{
      const id = new Date().getTime();
      const sql=`insert into role (id,name) values(?,?)`;
      const result = await connection.execute(sql,[id,name]);
      return result[0]
    }catch (e) {
      const msg = e.message;
      setResponse(ctx,msg.includes('Duplicate') ? "角色名称重复" :'',200,{})
    }
  }
  async selectUserRoleService(ctx,userId,roleId){
    try{
      const sql=`select userId from role_user where userId= ? and roleId=?`;
      const result = await connection.execute(sql,[userId,roleId]);
      return result[0]
    }catch (e) {
      return []
    }
  }
  async createUserRoleService(ctx,userId,roleId){
    try{
      const sql=`insert into role_user(userId,roleId) values(?,?)`;
      const result = await connection.execute(sql,[userId,roleId]);
      return result[0];
    }catch (e) {
      console.log(e.message);
    }
  }
  async getAllRoleCountService(ctx,keyword){
    try{
      const sql=`select count(role.id) as count
            from role
             ${keyword.trim().length!==0 ? `where name like '%${keyword}%'` : ''}`
      const result = await connection.execute(sql,[keyword]);
      return result[0][0].count
    }catch (e) {
      return 0
    }
  }
  async getAllRoleService(ctx,offset,limit,keyword){
    try{
      const sql=`
      select *
      from role
      ${keyword.trim().length!==0 ? `where name like '%${keyword}%'` : ''}
      order by createTime desc
      limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new RoleService().getAllRoleCountService(ctx,keyword);
      return {
        list:result[0],
        count,
      };
    }catch (e) {
      console.log(e.message)
    }
  }
  async deleteUserRoleService(ctx,userId){
    try{
      const sql=`delete from role_user where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0]
    }catch(e){
      setResponse(ctx,'error',200,{})
    }
  }
  async setUserRoleService(ctx,userId,roleList){
    try{
      let prevSql='';
      let exec = []
      for(let item of roleList){
        let temp =`(?,?),`;
        prevSql+=temp;
        exec.push(userId,item);
      }
      prevSql = prevSql.substring(0,prevSql.length-1);

      const sql=`insert into role_user (userId,roleId) values ${prevSql}`;
      console.log(sql)
      console.log(exec)
      const result = await connection.execute(sql,exec);
      return result[0];
    }catch (e) {

    }
  }
  async deleteRoleService(ctx,id){
    try{
      const sql=`delete from role where id=?`;
      const res = await connection.execute(sql,[id]);
      return res[0]
    }catch (e) {
      setResponse(ctx,"error",500,{});
    }
  }
}
module.exports = new RoleService()

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
}
module.exports = new RoleService()

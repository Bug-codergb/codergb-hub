const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse")
const { serviceContainer } = require("../utils/serviceContainer")
class UserService{
  async uploadAvatarService(ctx,userId,avatarUrl,mimetype,destination,filename, size,originalname){
    try{
      const sql=`update user set avatarUrl=?,mimetype=?,dest=?,filename=?,size=?,originalname=? where userId=?`;
      const result =await connection.execute(sql,[avatarUrl,mimetype,destination,filename,size,originalname,userId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500);
    }
  }
  async getUserMsgService(ctx,userId){
    return serviceContainer(ctx,async function(){
      const sql=`select * from user where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0]
    })
  }
}
module.exports=new UserService();

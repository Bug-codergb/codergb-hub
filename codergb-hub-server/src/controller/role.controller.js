const {
  createService ,
  createUserRoleService,
  selectUserRoleService,
  getAllRoleService
} = require("../service/role.service")
const { setResponse } = require("../utils/setResponse")
const { isEmpty } = require("../utils/isEmpty")
class RoleController{
  async create(ctx,next){
    try{
      const { name =""} = ctx.request.body;
      if(!isEmpty(ctx,name,"角色名称不能为空")){
        const result = await createService(ctx,name);
        if(result){
          setResponse(ctx,"success",200);
        }
      }
    }catch (e) {

    }
  }
  async createUserRole(ctx,next){
    try{
      const {userId,roleId} = ctx.request.body;
      if(!isEmpty(ctx,userId,"用户不能为空") && !isEmpty(ctx,roleId,"角色不能为空")){
        const isExist = await selectUserRoleService(ctx,userId,roleId);
       if(isExist.length!==0){
         setResponse(ctx,"用户角色已经存在",200,{})
         return
       }
        const result = await createUserRoleService(ctx,userId,roleId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }

    }catch (e) {

    }
  }
  async getAllRole(ctx,next){
    try{
      const {offset="0",limit="30",keyword=""} = ctx.query;
      const result = await getAllRoleService(ctx,offset,limit,keyword);
      setResponse(ctx,"success",200,result);
    }catch (e) {

    }
  }
}

module.exports = new RoleController();

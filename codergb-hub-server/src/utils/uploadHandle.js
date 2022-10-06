const { setResponse } = require("../utils/setResponse");
const { APP_PORT,APP_HOST } = require("../app/config");
const connection = require("../app/databse")
async function uploadHandle(ctx,path,tableName,urlName='avatarUrl',keyId,id,keys=['mimetype','dest','filename','size','originalname']){
  try{
    const avatarUrl = `${APP_HOST}:${APP_PORT}${path}/${id}`;
    const {mimetype,destination,filename,originalname, size} = ctx.req.file;

    const sql=`update ${tableName} set ${urlName}=?,${
      keys.map((item,index)=>{
        if(index === keys.length-1){
          return item+"=?"
        }else{
          return item+"=? ,"
        }
      }).join("")
    } where ${keyId}=?`;
    const result =await connection.execute(sql,[avatarUrl,mimetype,destination,filename,size,originalname,id]);
    return result[0]
  }catch (e) {
    setResponse(ctx,e.message,500)
  }
}

module.exports = {
  uploadHandle
}

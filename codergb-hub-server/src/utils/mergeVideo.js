const fs = require("fs");
const path = require("path");
const { setResponse } = require("../utils/setResponse")
function mergeVideo(ctx,dest,source,hash){
  try{
    fs.access(dest,(err)=>{
      if(!err){
        const fileList = fs.readdirSync(dest);
        if(fileList.length!==0){
          fileList.sort((a,b)=>{
            let reg = /-(\d+)/;
            return reg.exec(a)[1] - reg.exec(b)[1]
          })
          fileList.forEach(item=>{
            let suffix = /\.([0-9a-zA-Z]+)$/.exec(item)[1];
            fs.appendFileSync(`${source}/${hash}.${suffix}`,
              fs.readFileSync(`${dest}/${item}`));
            fs.unlinkSync(`${dest}/${item}`);
          })
          fs.rmdirSync(dest);
        }
      }else{
        setResponse(ctx,err.message,500)
      }
    })

  }catch (e) {
    console.log(e)
    setResponse(ctx,e.message,500)
  }
}
module.exports = {
  mergeVideo
}

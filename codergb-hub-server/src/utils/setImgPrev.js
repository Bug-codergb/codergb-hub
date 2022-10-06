const fs = require('fs');
const path = require('path');
const fsPromises = require("node:fs/promises");
const { setResponse } = require("../utils/setResponse")
async function setImgPrev(ctx,dest,mimetype){
  const filePath = path.resolve(__dirname,'../../',`${dest}`)
  try{
    const result = await fsPromises.access(filePath,fs.constants.F_OK);
    ctx.set('content-type',mimetype);
    ctx.status =200;
    ctx.body = fs.createReadStream(dest);
  }catch (e) {
    setResponse(ctx,e.message,500);
  }
}
module.exports={
  setImgPrev
}

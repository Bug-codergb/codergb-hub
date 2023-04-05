const getFileName=(fileNameWithExt)=>{
  const index = fileNameWithExt.lastIndexOf(".");
  if(index!==-1){
    return fileNameWithExt.substring(0,index);
  }else{
    return fileNameWithExt;
  }
}
module.exports = {
  getFileName
}

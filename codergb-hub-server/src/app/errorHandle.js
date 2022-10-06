function errorHandle(error,ctx){
  ctx.body = {
    message:error.message,
    status:error.status,
    data:error.data
  };
  ctx.status = error.status ? error.status : 404;
  return;
}
module.exports = errorHandle;

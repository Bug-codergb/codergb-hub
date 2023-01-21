const { setResponse } = require("../utils/setResponse")
function isEmpty(ctx,rest, msg) {
  if (rest === undefined || rest === null || rest.toString().trim().length === 0) {
    setResponse(ctx,msg,400,{});
    return true;
  } else {
    return false;
  }
}
module.exports = {
  isEmpty
};

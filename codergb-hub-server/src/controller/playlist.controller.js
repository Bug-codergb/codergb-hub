const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getAllPlaylistService
} = require("../service/playlist.service");
class PlaylistController{
  async create(ctx,next){
    try{
      const {userId} = ctx.user;
      const id = new Date().getTime();
      const {name="",description=""} = ctx.request.body;
      console.log(name);
      if(!isEmpty(ctx,name,"播放列表名称不能为空")){
        const result = await createService(ctx,id,name,description,userId);
        if(result){
          setResponse(ctx,"播放列表创建成功",200,{});
        }
      }
    }catch (e){
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取所有播放列表
  async getAllPlaylist(ctx,next){
    try{
      const { offset="0",limit="30" } = ctx.query;
      const result = await getAllPlaylistService(ctx,offset,limit);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new PlaylistController();

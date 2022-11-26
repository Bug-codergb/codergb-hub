const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getAllPlaylistService,
  getUserPlaylistService
} = require("../service/playlist.service");
const {
  createVideoPlaylistService
} =require("../service/video.service");
class PlaylistController{
  async create(ctx,next){
    try{
      const {userId} = ctx.user;
      const id = new Date().getTime();
      const {name="",description="",isPublic=1} = ctx.request.body;
      console.log(name);
      if(!isEmpty(ctx,name,"播放列表名称不能为空") && !isEmpty(ctx,isPublic,"播放列表是否为公开不能为空")){
        const result = await createService(ctx,id,name,description,userId,isPublic);
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
  //获取用户播放列表
  async getUserPlaylist(ctx,next){
    try{
      const {id} = ctx.params;
      const { offset="0",limit="30" } = ctx.query;
      const result = await getUserPlaylistService(ctx,id,offset,limit);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //将视频添加到播放列表
  async addVideo(ctx,next){
    try{
      const {vId,pId} = ctx.request.body;
      if(!isEmpty(ctx,vId,"视频ID不能为空")&&!isEmpty(ctx,pId,"播放列表ID不能为空")){
        const result = await createVideoPlaylistService(ctx,vId,pId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
}

module.exports = new PlaylistController();

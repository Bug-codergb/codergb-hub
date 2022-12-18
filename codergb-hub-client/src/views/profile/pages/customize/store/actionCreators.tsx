import {getUserChannel} from "../../../../../network/channel";
import {IChannel} from "../../../../../types/channel/IChannel";
import {IResponseType} from "../../../../../types/responseType";
import localCache from "../../../../../utils/cache";

export function changeChannel(channel:IChannel){
  return {
    type:"changeChannel",
    channel:channel
  }
}
export function changeChannelAction(userId:string){
  return async (dispatch:any)=>{
    const data = await getUserChannel<IResponseType<IChannel>>(userId);
    if(data.status === 200){
      console.log(data)
      dispatch(changeChannel(data.data));
      localCache.setCache("channel",data.data);
    }
  }
}
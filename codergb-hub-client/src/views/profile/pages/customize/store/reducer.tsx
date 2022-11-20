import {Map} from "immutable";
import {IChannel} from "../../../../../types/channel/IChannel";
import {IUserMsg} from "../../../../../types/user/IUserMsg";
const defaultState = Map<IChannel>({
  channel:{
    id:"",
    name:"",
    alias:"",
    official:0,
    createTime:"",
    updateTime:"",
    user:{
      userId:"",
      userName:"",
      avatarUrl:"",
      token:""
    },
  }
})
const reducer=(state=defaultState,action:any)=>{
  switch (action.type){
    case "changeChannel":
      return state.setIn(['channel'],action.channel);
    default:
      return state;
  }
}
export default reducer;
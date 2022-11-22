import {IUserDetail} from "../../../types/user/IUserDetail";
import {IUserMsg} from "../../../types/user/IUserMsg";
import {IResponseType} from "../../../types/responseType";
import {login} from "../../../network/login";
import localCache from "../../../utils/cache";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {getUserMsg} from "../../../network/user";
import {changeChannelAction} from "../../profile/pages/customize/store/actionCreators";

export function changeUserMsg(userMsg:IUserMsg){
  return {
    type:"changeUserMsg",
    userMsg:userMsg
  }
}
export function changeUserDetail(userDetail:IUserDetail){
  return {
    type:"changeUserDetail",
    userDetail:userDetail
  }
}
export function changeLoginType(loginType:number){
  return {
    type:"changeLoginType",
    loginType:loginType
  }
}
export function loginAction(userName:string,password:string,navigate:NavigateFunction){
  return async(dispatch:any)=>{
    try{
      const data=await login<IResponseType<IUserMsg>>(userName,password);
      if(data.status===200){
        await dispatch(changeUserMsg(data.data));
        await dispatch(changeUserDetailAction(data.data.userId));
        await dispatch(changeLoginType(1));

        localCache.setCache("userMsg",data.data);
        localCache.setCache("loginType",1)
        navigate("/Home",{
          replace:true,
        })
      }
    }catch (e) {
      console.log(e)
    }
  }
}

export function changeUserDetailAction(userId:string){
  return async (dispatch:any)=>{
    try{
      const data=await getUserMsg<IResponseType<IUserDetail>>(userId);
      if(data.status===200){
        dispatch(changeUserDetail(data.data));
        localCache.deleteCache("userDetail");
        localCache.setCache("userDetail",data.data);
        await dispatch(changeChannelAction(userId));
      }
    }catch (e) {
      console.log(e)
    }
  }
}

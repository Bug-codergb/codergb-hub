import store from "./index";
import localCache from "../utils/cache"
import {changeLoginType, changeUserMsg} from "../views/login/store/actionCreators";
//store.dispatch(changeUserDetail(localCache.getCache("userDetail")));
console.log(localCache.getCache("userMsg"))
store.dispatch(changeUserMsg(localCache.getCache("userMsg")));
store.dispatch(changeLoginType(localCache.getCache("loginType")));
console.log("ahahaha")
export {}

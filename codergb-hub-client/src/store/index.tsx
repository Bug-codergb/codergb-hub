import { configureStore } from '@reduxjs/toolkit';
import {
  reducer as loginReducer,
  changeLoginType,
  changeUserDetail,
  changeUserMsg
} from '../views/login/store/index';
import {
  reducer as channelReducer,
  changeChannel
} from '../views/profile/pages/customize/store/index';
import localCache from '../utils/cache';
const store = configureStore({
  reducer: {
    loginReducer,
    channelReducer
  },
  devTools: true
});
store.dispatch(changeUserMsg(localCache.getCache('userMsg')));
store.dispatch(changeLoginType(localCache.getCache('loginType')));
store.dispatch(changeUserDetail(localCache.getCache('userDetail')));
store.dispatch(changeChannel(localCache.getCache('channel')));
export default store;

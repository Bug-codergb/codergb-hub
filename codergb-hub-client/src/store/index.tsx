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
import { changeQueueList, reducer as queueReducer } from '@/components/content/add/store/index';
import localCache from '../utils/cache';
const store = configureStore({
  reducer: {
    loginReducer,
    channelReducer,
    queueReducer
  },
  devTools: true
});
store.dispatch(changeUserMsg(localCache.getCache('userMsg') || {}));
store.dispatch(changeLoginType(localCache.getCache('loginType') || 0));
store.dispatch(changeUserDetail(localCache.getCache('userDetail') || {}));
store.dispatch(changeChannel(localCache.getCache('channel') || {}));
store.dispatch(changeQueueList(localCache.getCache('queue') || []));
export default store;

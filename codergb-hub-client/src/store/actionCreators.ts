import store from './index';
import localCache from '../utils/cache';
import { changeLoginType, changeUserDetail, changeUserMsg } from '../views/login/store';
import { changeChannel } from '../views/profile/pages/customize/store/actionCreators';
import { changeQueue, changeQueueAction } from '../components/content/add/store/actionCreators';
// store.dispatch(changeUserDetail(localCache.getCache("userDetail")));
// console.log(localCache.getCache("userMsg"))
store.dispatch(changeUserMsg(localCache.getCache('userMsg')));
store.dispatch(changeLoginType(localCache.getCache('loginType')));
store.dispatch(changeUserDetail(localCache.getCache('userDetail')));
store.dispatch(changeChannel(localCache.getCache('channel')));
store.dispatch(changeQueueAction(localCache.getCache('queue') ?? []));
export {};

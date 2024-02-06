import { defineStore } from 'pinia';
import { login } from '@/network/login';
import { IResponseType } from '@/types/responseType';
import { IUserMsg } from '@/types/user/IUserMsg';
import localCache from '../../../utils/cache';
import useChannel from '../../../store/modules/channel';
const useLoginStore = defineStore('login', {
  state: () => {
    return {
      userMsg: {
        userId: '',
        userName: '',
        avatarUrl: '',
        token: ''
      }
    };
  },
  actions: {
    async loginAction(userName: string, password: string): Promise<boolean> {
      const channel = useChannel();
      const res = await login<IResponseType<IUserMsg>>(userName, password);
      if (res.status === 200) {
        this.userMsg = res.data;
        localCache.setCache('userMsg', res.data);
        await channel.getChannelAction(this.userMsg.userId);
        return true;
      } else {
        return false;
      }
    }
  }
});
export default useLoginStore;

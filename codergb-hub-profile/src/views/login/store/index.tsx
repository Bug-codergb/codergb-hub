import { defineStore } from 'pinia';
import { login } from '@/network/login';
import { IResponseType } from '@/types/responseType';
import { IUserMsg } from '@/types/user/IUserMsg';
import localCache from '../../../utils/cache';
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
      const res = await login<IResponseType<IUserMsg>>(userName, password);

      if (res.status === 200) {
        this.userMsg = res.data;
        localCache.setCache('userMsg', res.data);
        return true;
      } else {
        return false;
      }
    }
  }
});
export default useLoginStore;

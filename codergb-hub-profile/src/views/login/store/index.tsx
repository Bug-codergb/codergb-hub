import { defineStore } from 'pinia';
import { getLoginMsg, login } from '@/network/login';
import { IResponseType } from '@/types/responseType';
import { IUserMsg } from '@/types/user/IUserMsg';
import localCache from '../../../utils/cache';
import useChannel from '../../../store/modules/channel';
import { ElMessage } from 'element-plus';
const useLoginStore = defineStore('login', {
  state: () => {
    return {
      userMsg: {
        userId: '',
        userName: '',
        avatarUrl: '',
        token: '',
        isExplore: 0,
        history: 1
      }
    };
  },
  actions: {
    async loginAction(userName: string, password: string): Promise<boolean> {
      const channel = useChannel();
      const res = await login<IResponseType<IUserMsg>>(userName, password);
      if (res.status === 200) {
        if (res.data.manage !== 1) {
          ElMessage.closeAll();
          ElMessage({
            type: 'warning',
            message: '您没有访问权限'
          });
          return false;
        }
        this.userMsg = res.data;
        localCache.setCache('userMsg', res.data);
        await channel.getChannelAction(this.userMsg.userId);
        return true;
      } else {
        return false;
      }
    },
    async changeMsgAction(userId: string) {
      const res = await getLoginMsg<IResponseType<IUserMsg>>(userId);
      if (res.status === 200) {
        const token: string = this.userMsg.token;
        this.userMsg = {
          ...res.data,
          token: this.userMsg.token
        };
        console.log(this.userMsg.token);
        localCache.setCache('userMsg', {
          ...res.data,
          token
        });
      }
    }
  }
});
export default useLoginStore;

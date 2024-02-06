import { defineStore } from 'pinia';
import { getUserChannel } from '@/network/channel';
import localCache from '../../utils/cache';
const useChannelStore = defineStore('channel', {
  state: () => {
    return {
      channel: {
        id: '',
        name: '',
        alias: '',
        official: 0,
        createTime: '',
        updateTime: '',
        user: {},
        description: '',
        picUrl: '',
        trailer: {},
        featured: {}
      }
    };
  },
  actions: {
    async getChannelAction(userId: string) {
      const res = await getUserChannel(userId);
      if (res.status === 200) {
        this.channel = res.data;
        localCache.setCache('channel', res.data);
      }
    }
  }
});
export default useChannelStore;

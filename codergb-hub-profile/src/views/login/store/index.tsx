import { defineStore } from 'pinia';
const useStore = defineStore('login', {
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
  actions: {}
});

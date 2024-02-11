import { App } from 'vue';
import router from '@/router';
import { USER_DETAIL_PATH, VIDEO_DETAIL_PATH } from '@/router/constant';

export const initRouter = (app: App<Element>) => {
  app.config.globalProperties.$videoRouter = (id?: string) => {
    if (id === undefined || id === '' || id === null) {
      return;
    }
    router.push({
      path: VIDEO_DETAIL_PATH + '/' + id
    });
  };
  app.config.globalProperties.$userRouter = (userId?: string) => {
    if (userId === undefined || userId === '' || userId === null) {
      return;
    }
    router.push({
      path: USER_DETAIL_PATH + '/' + userId
    });
  };
};

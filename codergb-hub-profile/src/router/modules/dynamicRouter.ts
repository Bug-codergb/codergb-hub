import router from '../index';
import { menu } from '@/constant/menu';
import { RouteRecordRaw } from 'vue-router';
export const initDynamicRouter = () => {
  for (const item of menu) {
    router.addRoute('layout', item as unknown as RouteRecordRaw);
  }
};

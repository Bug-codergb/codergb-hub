import { createApp } from 'vue';

import pinia from '@/store';
import App from './App.vue';
import router from './router';
import './assets/css/base.css';
import './assets/css/cropper.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { initRouter } from '@/utils/globalRouter';
const app = createApp(App);
app.use(router).use(pinia).use(ElementPlus).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
initRouter(app);

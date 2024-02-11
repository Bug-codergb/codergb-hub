/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  interface ComponentCustomProperties {
    $videoRouter: (id?: string) => void;
    $userRouter: (userId: string) => void;
  }
  export default component;
}
declare module 'watermark-dom';

import { RouteRecordRaw } from 'vue-router';
import {
  COLLECTION_DETAIL_PATH,
  HOME_PATH,
  VIDEO_PATH,
  CATE_VIDEO_DETAIL_PATH
} from '@/router/constant';
import CollectionDetail from '@/views/detail/collectionDetail/CollectionDetail.vue';
import CateVideoDetail from '@/views/detail/cateVideoDetail/CateVideoDetail.vue';
const collectionRoute: RouteRecordRaw = {
  path: COLLECTION_DETAIL_PATH + '/:id',
  component: CollectionDetail
};
const cateVideoRoute: RouteRecordRaw = {
  path: CATE_VIDEO_DETAIL_PATH + '/:id',
  component: CateVideoDetail
};
export { collectionRoute, cateVideoRoute };

import { RouteRecordRaw } from 'vue-router';
import { COLLECTION_DETAIL_PATH, HOME_PATH, VIDEO_PATH } from '@/router/constant';
import CollectionDetail from '@/views/detail/collectionDetail/CollectionDetail.vue';
const collectionRoute: RouteRecordRaw = {
  path: COLLECTION_DETAIL_PATH + '/:id',
  component: CollectionDetail
};
export { collectionRoute };

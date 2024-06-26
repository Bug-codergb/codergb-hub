import { RouteRecordRaw } from 'vue-router';
import {
  COLLECTION_DETAIL_PATH,
  HOME_PATH,
  VIDEO_PATH,
  PLAYLIST_DETAIL_PATH,
  CATE_VIDEO_DETAIL_PATH,
  TAG_DETAIL_PATH,
  VIDEO_DETAIL_PATH,
  MOMENT_DETAIL_PATH,
  USER_DETAIL_PATH,
  CHANNEL_DETAIL_PATH
} from '@/router/constant';
import CollectionDetail from '@/views/detail/collectionDetail/CollectionDetail.vue';
import CateVideoDetail from '@/views/detail/cateVideoDetail/CateVideoDetail.vue';
import PlaylistDetail from '@/views/detail/playlistDetail/PlaylistDetail.vue';
const collectionRoute: RouteRecordRaw = {
  path: COLLECTION_DETAIL_PATH + '/:id',
  component: CollectionDetail
};
const cateVideoRoute: RouteRecordRaw = {
  path: CATE_VIDEO_DETAIL_PATH + '/:id',
  component: CateVideoDetail
};
const playlistRoute: RouteRecordRaw = {
  path: PLAYLIST_DETAIL_PATH + '/:id',
  component: PlaylistDetail
};
const tagRoute: RouteRecordRaw = {
  path: TAG_DETAIL_PATH + '/:id',
  component: () => import('@/views/detail/tagVideoDetail/TagVideo.vue')
};
const videoRoute: RouteRecordRaw = {
  path: VIDEO_DETAIL_PATH + '/:id',
  component: () => import('@/views/detail/videoDetail/VideoDetail.vue')
};
const momentRoute: RouteRecordRaw = {
  path: MOMENT_DETAIL_PATH + '/:id',
  component: () => import('@/views/detail/momentDetail/MomentDetail.vue')
};
const userRoute: RouteRecordRaw = {
  path: USER_DETAIL_PATH + '/:id',
  component: () => import('@/views/detail/userDetail/UserDetail.vue')
};
const channelRoute: RouteRecordRaw = {
  path: CHANNEL_DETAIL_PATH + '/:id',
  component: () => import('@/views/detail/channelDetail/ChannelDetail.vue')
};
export {
  collectionRoute,
  momentRoute,
  cateVideoRoute,
  playlistRoute,
  tagRoute,
  videoRoute,
  userRoute,
  channelRoute
};

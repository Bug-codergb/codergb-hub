<template>
  <div class="video-detail-container">
    <el-card>
      <el-row v-if="videoDetail">
        <el-col :span="6" class="img-container">
          <el-image :src="videoDetail.picUrl" fit="contain" />
        </el-col>
        <el-col :span="17">
          <el-row>
            <el-col :span="24">
              <span class="label"> 名称:</span>
              <span>{{ videoDetail.name }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <span class="label">创建时间:</span>
              <span>{{ moment(videoDetail.createTime).format('yyyy-MM-DD HH:mm') }}</span>
            </el-col>
            <el-col :span="12">
              <span class="label">创建人:</span>
              <span class="cate" @click="userRouter(videoDetail.user)">{{
                videoDetail.user?.userName
              }}</span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <span class="label">分类:</span>
              <span class="cate">{{ videoDetail.category?.name }}</span>
            </el-col>
            <el-col :span="12">
              <span>播放量:</span>
              <span>{{ videoDetail.playCount }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="label">标签:</span>
              <el-tag v-for="item in videoDetail.tag" :key="item.id">{{ item.name }}</el-tag>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="label">简介:</span>
              <span class="desc">{{ videoDetail.description }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-tabs v-if="videoDetail">
        <el-tab-pane label="评论">
          <Comment :id="videoDetail.id" />
        </el-tab-pane>
        <el-tab-pane label="弹幕">
          <Dm :id="videoDetail.id" />
        </el-tab-pane>
        <el-tab-pane label="点赞">
          <Thumb :id="videoDetail.id" />
        </el-tab-pane>
        <el-tab-pane label="源文件">
          <Source :id="videoDetail.id" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import Comment from './childCpn/comment/Comment.vue';
import Dm from './childCpn/dm/Dm.vue';
import Thumb from './childCpn/thumb/Thumb.vue';
import Source from './childCpn/source/Source.vue';
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';
import { getVideoDetail } from '@/network/video/index';
import { IVideo } from '@/types/video/IVideo';
import { IResponseType } from '@/types/responseType';
import { IUserMsg } from '@/types/user/IUserMsg';
import { USER_DETAIL_PATH } from '@/router/constant';

const route = useRoute();
const videoDetail = ref<IVideo | null>(null);
const { id } = route.params;
getVideoDetail<IResponseType<IVideo>>(id).then((res) => {
  if (res.status === 200) {
    console.log(res.data);
    videoDetail.value = res.data;
    console.log(videoDetail.value.picUrl);
  }
});
const router = useRouter();
const userRouter = (user?: IUserMsg) => {
  user &&
    router.push({
      path: USER_DETAIL_PATH + '/' + user.userId
    });
};
</script>

<style scoped lang="less">
.video-detail-container {
  font-size: (20/40rem);
  .img-container {
    margin: 0 20px 0 0;
  }
  .el-image {
    background-color: #f5f7fa;
  }
  .el-row {
    margin: 0 0 10px 0;
  }
  .el-tag {
    margin: 0 5px 0 0;
    cursor: pointer;
  }
  .label {
    color: #606266;
    margin: 0 5px 0 0;
  }
  .desc {
    color: #999999;
  }
  .cate {
    color: #6ea8f9;
    cursor: pointer;
    &:hover {
      color: #5a9cf8;
    }
  }
  .el-card {
    margin: 0 0 10px 0;
  }
}
</style>

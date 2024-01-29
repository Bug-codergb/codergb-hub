<template>
  <div class="moment-container">
    <el-card v-loading="loading">
      <el-form v-if="detail">
        <el-row>
          <el-col :span="24">
            <el-form-item label="标题：">
              <span class="title">{{ detail.title }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="内容">
              <span class="content">{{ detail?.content }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="创建时间">{{
              moment(detail.createTime).format('YYYY-MM-DD HH:mm')
            }}</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建人">{{ detail.user.userName }}</el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="评论" name="comment">
          <Comment />
        </el-tab-pane>
        <el-tab-pane label="关联视频" name="associate-video">
          <Video />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import Comment from './childCpn/comment/Comment.vue';
import Video from './childCpn/video/Video.vue';
import { IMoment } from '@/types/moment';
import { getMomentDetail } from '@/network/moment';
import { IResponseType } from '@/types/responseType';
import moment from 'moment';
const route = useRoute();
const detail = ref<IMoment | null>(null);
const loading = ref<boolean>(false);
const { id } = route.params;
const activeName = 'comment';
loading.value = true;
getMomentDetail<IResponseType<IMoment>>(id as string).then((res) => {
  if (res.status === 200) {
    loading.value = false;
    detail.value = res.data;
  }
});
</script>
<style scoped lang="less">
.moment-container {
  .el-card {
    margin: 0 0 15px 0;
  }
}
</style>

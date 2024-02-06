<template>
  <div class="user-detail-container">
    <el-card class="header-container">
      <template v-if="userDetail">
        <el-row :gutter="24">
          <el-col :span="4">
            <el-avatar :src="userDetail.avatarUrl" fit="contain" shape="square" :size="140" />
          </el-col>
          <el-col :span="20">
            <el-row :gutter="24">
              <el-col :span="12">
                <span class="label">用户名</span>
                <span class="value">{{ userDetail.userName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="label">创建时间</span>
                <span class="value">
                  {{ moment(userDetail?.createTime).format('yyyy-MM-DD HH：mm') }}</span
                >
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="12">
                <span class="label">存储历史</span>
                <span class="value">{{ userDetail.history === 0 ? '否' : '是' }}</span>
              </el-col>
              <el-col :span="12">
                <span class="label">探索类型</span>
                <span class="value">{{ userDetail.isExplore === 0 ? '否' : '是' }}</span>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="12">
                <span class="label">上传视频数量</span>
                <span class="value">{{ userLibrary.uploadCount }}</span>
              </el-col>
              <el-col :span="12">
                <span class="label">收藏数量</span>
                <span class="value">{{ userLibrary.subCount }}</span>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="12">
                <span class="label">点赞数量</span>
                <span class="value">{{ userLibrary.thumbCount }}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
    </el-card>
    <el-card>
      <el-tabs>
        <el-tab-pane label="Ta的视频"> <UserVideo :url="`/user/video/${id}`" /> </el-tab-pane>
        <el-tab-pane label="Ta的播放列表"></el-tab-pane>
        <el-tab-pane label="Ta的订阅"></el-tab-pane>
        <el-tab-pane label="Ta的社区"></el-tab-pane>
        <el-tab-pane label="Ta的收藏"></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup lang="ts">
interface ILibrary {
  subCount: number;
  thumbCount: number;
  uploadCount: number;
}
import { ref } from 'vue';
import moment from 'moment';
import { useRoute } from 'vue-router';
import { getUserLibrary, getUserMsg } from '@/network/user';
import { IResponseType } from '@/types/responseType';
import { IUserDetail } from '@/types/user/IUserDetail';
import UserVideo from '@/views/detail/userDetail/childCpn/userVideo/UserVideo.vue';

const route = useRoute();
const { id } = route.params;

const userDetail = ref<IUserDetail | null>(null);
getUserMsg<IResponseType<IUserDetail>>(id as string).then((res) => {
  if (res.status === 200) {
    userDetail.value = res.data;
  }
});
const userLibrary = ref<ILibrary>({ subCount: 0, uploadCount: 0, thumbCount: 0 });
getUserLibrary<IResponseType<ILibrary>>(id as string).then((res) => {
  if (res.status === 200) {
    userLibrary.value = res.data;
  }
});
</script>

<style scoped lang="less">
.user-detail-container {
  .el-avatar {
    box-shadow: 0 0 3px #c1c4cb;
  }
  .el-card {
    margin: 0 0 15px 0;
  }
  .header-container {
    .el-col {
      line-height: 16px;
      margin: 0 0 14px 0;
    }
    .label {
      color: #606266;
      margin: 0 5px 0 0;
      font-size: (20/40rem);
      &::after {
        content: ':';
        margin: 0 5px 0 0;
      }
    }
    .value {
      color: #606266;
      margin: 0 5px 0 0;
      font-size: (24/40rem);
    }
  }
}
</style>

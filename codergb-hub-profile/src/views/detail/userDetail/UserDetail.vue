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
              <el-col :span="12" v-if="userDetail && userDetail.role">
                <span class="label">角色</span>
                <el-tag v-for="it in userDetail.role" :key="it.id" style="margin: 0 5px 0 0">{{
                  it.name
                }}</el-tag>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
    </el-card>
    <el-card class="content-detail">
      <el-tabs>
        <el-tab-pane label="Ta的视频"> <UserVideo :url="`/user/video/${id}`" /> </el-tab-pane>
        <el-tab-pane label="Ta的播放列表">
          <UserPlaylist :user-id="id" />
        </el-tab-pane>
        <el-tab-pane label="Ta的订阅">
          <SubUser :user-id="id" @user-detail="changeUserDetail" />
        </el-tab-pane>
        <el-tab-pane label="Ta的社区">
          <template v-if="channel">
            <Community :user-id="channel.id" />
          </template>
        </el-tab-pane>
        <el-tab-pane label="Ta的收藏">
          <SubPlaylist :user-id="id" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { USER_DETAIL_PATH } from '@/router/constant';

interface ILibrary {
  subCount: number;
  thumbCount: number;
  uploadCount: number;
}
import { ref } from 'vue';
import moment from 'moment';
import { useRoute, useRouter } from 'vue-router';
import { getUserLibrary, getUserMsg } from '@/network/user';
import { IResponseType } from '@/types/responseType';
import { IChannel } from '@/types/channel';
import { IUserDetail } from '@/types/user/IUserDetail';
import UserVideo from '@/views/detail/userDetail/childCpn/userVideo/UserVideo.vue';
import UserPlaylist from '@/views/detail/userDetail/childCpn/userPlaylist/UserPlaylist.vue';
import SubUser from '@/views/detail/userDetail/childCpn/subUser/SubUser.vue';
import Community from '@/views/detail/userDetail/childCpn/community/Community.vue';
import SubPlaylist from '@/views/detail/userDetail/childCpn/subPlaylist/SubPlaylist.vue';
import { getUserChannel } from '@/network/channel';
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const changeUserDetail = (userId: string) => {
  router.push({
    path: USER_DETAIL_PATH + '/' + userId
  });
  initData(userId);
};
initData(id as string);

const channel = ref<IChannel | null>(null);
getUserChannel(id as string).then((res) => {
  if (res.status === 200) {
    channel.value = res.data;
  }
});
const userDetail = ref<IUserDetail | null>(null);
const userLibrary = ref<ILibrary>({ subCount: 0, uploadCount: 0, thumbCount: 0 });
function initData(id: string) {
  getUserMsg<IResponseType<IUserDetail>>(id).then((res) => {
    if (res.status === 200) {
      userDetail.value = res.data;
    }
  });
  getUserLibrary<IResponseType<ILibrary>>(id).then((res) => {
    if (res.status === 200) {
      userLibrary.value = res.data;
    }
  });
}
</script>

<style scoped lang="less">
.user-detail-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content-detail {
    flex: 1;
    height: 100%;
    overflow-x: hidden;
  }
  .el-avatar {
    box-shadow: 0 0 3px #c1c4cb;
  }
  .el-card {
    &:nth-child(1) {
      margin: 0 0 10px 0;
    }
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

<template>
  <div class="playlist-detail">
    <el-card>
      <el-row>
        <el-col :span="12">
          <span class="key">名称：</span>
          <span class="value">{{ playlist.name }}</span>
        </el-col>
        <el-col :span="12">
          <span class="key">是否私有：</span>
          <span class="value">{{ playlist.isPublic === 0 ? '私有' : '公有' }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span class="key">创建时间：</span>
          <span class="value">{{ moment(playlist.createTime).format('yyyy-MM-DD HH:mm') }}</span>
        </el-col>
        <el-col :span="12">
          <span class="key">更新时间：</span>
          <span class="value">{{ moment(playlist.updateTime).format('yyy-MM-DD HH:mm') }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span class="key">简介：</span>
          <span class="value">{{ playlist.description }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span class="key">创建人：</span>
          <span class="value person" @click="userRouter(playlist.user)">{{
            playlist.user.userName
          }}</span>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <div class="detail-body">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="集合视频" name="first">
            <VideoTable
              :key="keyIndex"
              :url="url"
              ref="videoTableRef"
              :isOperate="false"
              :is-show-create="false"
              :height="tableHeight"
            >
              <template v-slot:video-end>
                <el-table-column label="操作" fixed="right">
                  <template #default="scope">
                    <el-button
                      type="danger"
                      style="font-size: 13px; padding: 5px"
                      text
                      @click="delHandle(scope.row)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </template>
            </VideoTable>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';
import { useRoute, useRouter } from 'vue-router';
import { deletePlaylistVideo, getPlaylistDetail } from '@/network/playlist';
import { IPlaylist } from '@/types/playlist/IPlaylist';
import { IResponseType } from '@/types/responseType';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { IVideo } from '@/types/video/IVideo';
import { ElMessage, ElMessageBox } from 'element-plus';
import { IUserMsg } from '@/types/user/IUserMsg';
import { USER_DETAIL_PATH } from '@/router/constant';

const activeName = 'first';
const keyIndex = ref(0);
const tableHeight = ref(window.innerHeight - 400);
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const url = ref(`/playlist/video/${id}`);
const playlist = ref<IPlaylist>({
  id: '',
  name: '',
  description: '',
  isPublic: 0,
  createTime: '',
  updateTime: '',
  video: 0,
  user: {
    userId: '',
    userName: '',
    avatarUrl: '',
    token: ''
  }
});
const getPlaylistDetailHandler = (id: string) => {
  getPlaylistDetail<IResponseType<IPlaylist>>(id).then((res) => {
    if (res.status === 200) {
      playlist.value = res.data;
    }
  });
};
getPlaylistDetailHandler(id as string);

const videoTableRef = ref();
const delHandle = (item: IVideo) => {
  console.log(item);
  ElMessageBox.confirm('确定要删除该视频从当前列表么?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      deletePlaylistVideo(item.id, id as string).then((res) => {
        if (res.status === 200) {
          videoTableRef.value && videoTableRef.value.search();
          ElMessage({
            type: 'success',
            message: '删除成功'
          });
        }
      });
    })
    .catch(() => {});
};
const userRouter = (user: IUserMsg) => {
  router.push({
    path: `${USER_DETAIL_PATH}/${user.userId}`
  });
};
</script>

<style scoped lang="less">
.playlist-detail {
  font-size: (20/40rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  .detail-body {
    height: 100%;
  }
  .el-card {
    &:nth-child(1) {
      margin: 0 0 15px 0;
    }
  }
  .el-row {
    margin: 0 0 15px 0;
  }
  .key {
    color: #474747;
    margin: 0 5px 0 0;
  }
  .value {
    color: #474747;
    &.person {
      color: #47b1ff;
      cursor: pointer;
    }
  }
}
</style>

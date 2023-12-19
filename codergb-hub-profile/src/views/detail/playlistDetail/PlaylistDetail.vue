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
          <span class="value person">{{ playlist.user.userName }}</span>
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
import { useRoute } from 'vue-router';
import { getPlaylistDetail } from '@/network/playlist';
import { IPlaylist } from '@/types/playlist/IPlaylist';
import { IResponseType } from '@/types/responseType';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { IVideo } from '@/types/video/IVideo';

const activeName = 'first';
const keyIndex = ref(0);
const tableHeight = ref(window.innerHeight - 400);
const route = useRoute();
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
getPlaylistDetail<IResponseType<IPlaylist>>(id).then((res) => {
  if (res.status === 200) {
    console.log(res.data);
    playlist.value = res.data;
  }
});
const delHandle = (item: IVideo) => {};
</script>

<style scoped lang="less">
.playlist-detail {
  font-size: (20/40rem);
  .el-card {
    margin: 0 0 15px 0;
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

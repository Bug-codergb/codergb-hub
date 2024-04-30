<template>
  <div class="cate-video">
    <div class="cate-title">
      <el-tag class="ml-2" type="success" size="large">{{ name }}</el-tag>
    </div>
    <el-tabs v-model="activeName" class="cate-tab">
      <el-tab-pane label="分类视频" name="first">
        <VideoTable
          :key="keyIndex"
          :url="url"
          :isOperate="false"
          :exclude-header="['cate', 'tag']"
          :is-show-create="false"
        >
          <template #video-end>
            <el-table-column label="操作" fixed="right" width="120">
              <template #default="scope">
                <el-button
                  type="primary"
                  style="font-size: 13px; padding: 5px"
                  text
                  @click="detailHandle(scope.row)"
                  >详情</el-button
                >
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
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { IVideo } from '@/types/video/IVideo';
import { VIDEO_DETAIL_PATH } from '@/router/constant';
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const { name } = route.query;
const url = ref('');
url.value = `/video/cate/${id}`;
const keyIndex = ref(0);
const activeName = ref('first');

const detailHandle = (item: IVideo) => {
  router.push({
    path: `${VIDEO_DETAIL_PATH}/${item.id}`
  });
};
const delHandle = (item: IVideo) => {};
</script>

<style scoped lang="less">
.cate-video {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.cate-tab {
  height: 100%;
  overflow-x: hidden;
  flex: 1;
}
.cate-title {
  font-size: (24/40rem);
  margin: 0 0 (12/40rem) 0;
}
</style>

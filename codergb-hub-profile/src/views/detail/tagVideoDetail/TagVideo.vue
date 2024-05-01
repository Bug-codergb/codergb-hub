<template>
  <div class="detail-body table-box">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="标签视频" name="first">
        <VideoTable
          :key="keyIndex"
          :url="url"
          :isOperate="false"
          :is-show-create="false"
          :height="tableHeight"
          :exclude-header="['tag']"
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
</template>
<script setup lang="ts">
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { IVideo } from '@/types/video/IVideo';
const route = useRoute();
const { id } = route.params;
const keyIndex = ref(0);
const activeName = 'first';
const url = ref('/tag/video/' + id);
const tableHeight = ref(window.innerHeight - 260);
const delHandle = (item: IVideo) => {};
</script>

<style scoped lang="less">
.detail-body {
  border-radius: 6px;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
  background-color: var(--el-bg-color);
  border: 1px solid var(--el-border-color-light);
  padding: 20px;
}
</style>

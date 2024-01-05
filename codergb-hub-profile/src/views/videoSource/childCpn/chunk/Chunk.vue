<template>
  <GbDialog v-model="isShow" width="40%" title="文件切片">
    <el-scrollbar max-height="50vh">
      <ul class="chunk-list">
        <li v-for="(item, index) in videoSource" :key="item">
          <span>{{ item }}</span>

          <el-button link type="primary" @click="deleteHandle(item, index)">删除</el-button>
        </li>
      </ul>
    </el-scrollbar>
  </GbDialog>
</template>
<script setup lang="ts">
import { ref, defineExpose, nextTick } from 'vue';
import GbDialog from '@/components/common/gbDialog/GbDialog.vue';
import { IVideoSource } from '@/types/video/IVideo';
import { ElMessage, ElMessageBox } from 'element-plus';
import { deleteVideoSource } from '@/network/video';
const isShow = ref(false);
const videoSource = ref<string[]>([]);
const showDialog = (data: IVideoSource) => {
  isShow.value = true;
  videoSource.value = data.chunk;
};
const deleteHandle = (item: string, index: number) => {
  ElMessageBox.confirm('删除视频切片可能会导致视频不完整，确定删除吗?', '警告', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(async () => {
      const result = await deleteVideoSource(item);
      if (result.status === 200) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        });
        videoSource.value.splice(index, 1);
      }
    })
    .catch(() => {});
};
defineExpose({
  showDialog
});
</script>
<style lang="less" setup>
.chunk-list {
  & > li {
    padding: 10px 20px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(odd) {
      background-color: #f5f7fa;
    }
  }
}
</style>

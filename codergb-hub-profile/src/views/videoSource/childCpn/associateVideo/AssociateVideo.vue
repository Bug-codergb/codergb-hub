<template>
  <GbDialog v-model="isShow" title="关联视频" width="50%" :is-show-footer="false">
    <p class="label-name">
      <span>文件:</span>
      <span>{{ videoSource?.name }}</span>
    </p>
    <el-table :data="videoSource?.videos" :border="true">
      <el-table-column label="视频名称" prop="name" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column
        label="视频源名称"
        prop="originalname"
        :show-overflow-tooltip="true"
      ></el-table-column>
    </el-table>
  </GbDialog>
</template>
<script setup lang="ts">
import { ref, defineExpose } from 'vue';
import GbDialog from '@/components/common/gbDialog/GbDialog.vue';
import { IVideoSource } from '@/types/video/IVideo';
const isShow = ref(false);
const videoSource = ref<IVideoSource>();
const showDialog = (data: IVideoSource) => {
  isShow.value = true;
  videoSource.value = data;
};
defineExpose({
  showDialog
});
</script>
<style lang="less" scoped>
.label-name {
  margin: 0 0 15px 0;
}
</style>

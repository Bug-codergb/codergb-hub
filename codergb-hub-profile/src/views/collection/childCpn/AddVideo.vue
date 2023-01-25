<template>
  <GbDrawer
    v-model="drawer"
    :title="title"
    width="75%"
    @openDrawer="openDrawer"
    @confirm="confirmHandle"
  >
    <div>
      <VideoTable
        :isOperate="false"
        ref="videoTable"
        @selectionChange="selectionChange"
        url="/video/all"
      />
    </div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { ICollection } from '@/types/collection/ICollection';
import { IVideo } from '@/types/video/IVideo';
import { ElMessage } from 'element-plus';

const videoTable = ref<InstanceType<typeof VideoTable>>(null);
const drawer = ref(false);
const title = ref('添加视频');
const selectVideo = reactive<{ list: IVideo[] }>({
  list: []
});
const openDrawer = () => {
  if (videoTable.value) {
    videoTable.value.tableData.columns.unshift({
      type: 'selection'
    });
  }
};
const selectionChange = (item: IVideo[]) => {
  selectVideo.list = item;
};
const showDrawer = (data: ICollection) => {
  drawer.value = true;
};
const confirmHandle = (close) => {
  if (selectVideo.list.length === 0) {
    ElMessage({
      type: 'warning',
      message: '请选择视频'
    });
    return;
  } else {
    close();
  }
};
defineExpose({
  showDrawer
});
</script>

<style scoped></style>

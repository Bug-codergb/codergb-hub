<script setup lang="ts">
import { ref, defineExpose, defineEmits, reactive } from 'vue';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { ElMessage } from 'element-plus';

const emit = defineEmits<{
  (e: 'select', item: any): void;
}>();

const drawer = ref(false);
const title = ref('关联视频');

const videoTable = ref();
const openDrawer = () => {
  if (videoTable.value) {
    videoTable.value.tableData.columns.unshift({
      type: 'selection'
    });
  }
};
const confirmHandle = () => {
  if (tableCell.value) {
    emit('select', tableCell.value);
    drawer.value = false;
  } else {
    ElMessage({
      type: 'warning',
      message: '请选择视频'
    });
  }
};
const tableCell = ref();
const selectionChange = (e: any) => {
  tableCell.value = e;
};
const showDrawer = () => {
  drawer.value = true;
};
defineExpose({
  showDrawer
});
</script>

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
        :is-show-refresh="false"
        :is-show-create="false"
        :is-radio="true"
      />
    </div>
  </GbDrawer>
</template>

<style scoped lang="less"></style>

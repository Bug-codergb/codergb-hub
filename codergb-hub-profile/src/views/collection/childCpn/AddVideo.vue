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
        :data-callback="dataCallback"
      />
    </div>
  </GbDrawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineEmits, reactive } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { ICollection } from '@/types/collection/ICollection';
import { IVideo } from '@/types/video/IVideo';
import { ElMessage } from 'element-plus';
import { addVideoToCol, IVCol } from '@/network/collection';
import { IPage } from '@/types/IPage';
import { getCollectionVideo } from '@/network/video';
import { IResponseType } from '@/types/responseType';
const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const videoTable = ref<InstanceType<typeof VideoTable>>(null);
const drawer = ref(false);
const title = ref('添加视频');
const selectVideo = reactive<{ list: IVideo[] }>({
  list: []
});
const collection = reactive<{
  item: ICollection | null;
}>({
  item: null
});
const openDrawer = () => {
  if (videoTable.value) {
    videoTable.value.tableData.columns.unshift({
      type: 'selection'
    });
  }
};
const selectionChange = (item: IVideo[]) => {
  //console.log(item);
  //selectVideo.list = item;
};
const dataCallback = async (res: any) => {
  getCollectionVideo<IResponseType<IPage<IVideo[]>>>(collection.item!.id, 0, 100000).then(
    (result) => {
      let rows: any[] = [];
      if (result.status === 200) {
        rows = result.data.list ?? {};
      }
      videoTable.value.gbTable.initSelectRow(rows, 'id');
    }
  );

  return res;
};
const showDrawer = (data: ICollection) => {
  console.log(data);
  drawer.value = true;
  collection.item = data;
};
const confirmHandle = async (close) => {
  const map = videoTable.value.gbTable.selectMap ?? new Map();
  selectVideo.list = [];
  map.forEach((value: IVideo, key: number) => {
    if (Array.isArray(value)) selectVideo.list.push(...value);
  });
  console.log(selectVideo.list);
  if (selectVideo.list.length === 0) {
    ElMessage({
      type: 'warning',
      message: '请选择视频'
    });
    return;
  } else {
    const list: IVCol[] = selectVideo.list.map((item) => {
      return {
        id: item.id,
        sort: 12
      };
    });
    if (collection.item) {
      const result = await addVideoToCol(list, collection.item.id);
      if (result.status === 200) {
        ElMessage({
          type: 'success',
          message: '添加成功'
        });
        emit('refresh');
        close();
      }
    }
  }
};
defineExpose({
  showDrawer
});
</script>

<style scoped></style>

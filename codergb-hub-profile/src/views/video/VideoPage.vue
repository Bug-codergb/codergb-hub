<template>
  <div>
    <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle" @cancel="cancelHandle">
      <Create
        ref="createRef"
        v-model="formData"
        :table-constructor="tableConstructor"
        :scale="1.95"
        :aspect-ratio="1.95"
        :item-width="260"
        :real-width="280"
      />
    </GbDrawer>
    <VideoTable url="/video/all" @create="createHandle" ref="videoTableRef" />
  </div>
</template>

<script lang="ts" setup>
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { onMounted, ref } from 'vue';
import useLoginStore from '@/views/login/store';
import Create from '@/components/content/create/Create.vue';

import useFormData from '@/views/video/hook/useFormData';
import useTableConstructor from '@/views/video/hook/useTableConstructor';
import { createVideo } from '@/network/video';

const title = ref('新增视频');
const drawer = ref(false);
const createHandle = () => {
  drawer.value = true;
};
const { formData, resetFormData } = useFormData();
const tableConstructor = ref();
onMounted(async () => {
  const user = useLoginStore();
  if (user && user.userMsg) {
    tableConstructor.value = await useTableConstructor(user.userMsg.userId);
  }
});
const createRef = ref<InstanceType<typeof Create>>();
const videoTableRef = ref<InstanceType<typeof VideoTable>>();
const confirmHandle = () => {
  createRef.value?.ruleFormRef.validate(async (e: boolean) => {
    if (e) {
      const result = await createVideo(
        formData.value.videoId,
        formData.value.title,
        formData.value.desc,
        formData.value.imgId,
        formData.value.playlist,
        formData.value.tag,
        formData.value.cate,
        formData.value.dt
      );
      if (result.status === 200) {
        drawer.value = false;
        if (videoTableRef.value.gbTable) videoTableRef.value.gbTable.search();
        resetFormData();
      }
    }
  });
};
const cancelHandle = () => {
  resetFormData();
};
</script>

<style scoped></style>

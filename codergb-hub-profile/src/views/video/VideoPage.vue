<template>
  <el-card class="g-inner-card">
    <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle" @cancel="cancelHandle">
      <Create
        ref="createRef"
        v-model="formData"
        :table-constructor="tableConstructor"
        :scale="1.95"
        :aspect-ratio="1.95"
        :item-width="260"
        :real-width="280"
        :is-update="isUpdate"
      />
    </GbDrawer>
    <VideoTable url="/video/all" @create="createHandle" ref="videoTableRef" @edit="editHandle" />
  </el-card>
</template>

<script lang="ts" setup>
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import { onMounted, ref } from 'vue';
import useLoginStore from '@/views/login/store';
import Create from '@/components/content/create/Create.vue';

import useFormData from '@/views/video/hook/useFormData';
import useTableConstructor from '@/views/video/hook/useTableConstructor';
import { createVideo, updateVideo } from '@/network/video';
import { IVideo } from '@/types/video/IVideo';
import { ITag } from '@/types/tag/ITag';
import { ElMessage } from 'element-plus';

const title = ref('新增视频');
const drawer = ref(false);

const { formData, resetFormData } = useFormData();
const createHandle = () => {
  drawer.value = true;
  isUpdate.value = false;
  vid.value = '';

  resetFormData();
};

const vid = ref('');
const isUpdate = ref(false);
const editHandle = (row: IVideo) => {
  isUpdate.value = true;
  drawer.value = true;
  formData.value.title = row.name;
  formData.value.desc = row.description;
  formData.value.dt = row.dt;
  formData.value.cate = row.category.id;
  formData.value.playlist = row.playlist ? row.playlist.id : '';
  formData.value.tag = row.tag ? row.tag.map((item: ITag) => item.id) : [];
  formData.value.imgId = row.imgId ?? '';
  formData.value.imgURL = row.picUrl;
  formData.value.videoId = row.videoSourceId ?? '';
  vid.value = row.id;
};

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
      const result = !isUpdate.value
        ? await createVideo(
            formData.value.videoId,
            formData.value.title,
            formData.value.desc,
            formData.value.imgId,
            formData.value.playlist,
            formData.value.tag,
            formData.value.cate,
            formData.value.dt
          )
        : await await updateVideo(
            vid.value,
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
        ElMessage.success(`${isUpdate.value ? '更新' : '创建'}成功`);
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

<script setup lang="ts">
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import Create from '@/components/content/create/Create.vue';
import VideoPage from '@/views/videoDict/childCpn/carousel/childCpn/VideoPage.vue';
import { reactive, ref, defineExpose, defineEmits } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import { addCarousel } from '@/network/video';
import { ElMessage } from 'element-plus';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const formData = reactive({
  data: {
    title: '',
    description: '',
    videoId: '',
    fileId: ''
  }
});
const drawer = ref(false);
const title = ref('新增');
const showDrawer = (data: any) => {
  drawer.value = true;
  formData.data.videoId = '';
  formData.data.fileId = '';
  formData.data.description = '';
  formData.data.title = '';
  video.value = null;
};
const create = ref();
const confirmHandle = () => {
  if (create.value && create.value.ruleFormRef) {
    create.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        const result = await addCarousel(
          formData.data.title,
          formData.data.description,
          formData.data.fileId,
          formData.data.videoId
        );
        if (result.status === 200) {
          ElMessage({
            type: 'success',
            message: '新增成功'
          });
          drawer.value = false;
          emit('refresh');
        }
      }
    });
  }
};
const tableConstructor = reactive([
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%'
        }
      },
      hint: '请输入名称',
      label: '名称',
      prop: 'title',
      trigger: 'blur',
      required: true
    }
  ],
  [
    {
      type: {
        name: 'input',
        attr: {
          type: 'textarea',
          style: 'width:100%'
        }
      },
      hint: '请输入简介',
      label: '简介',
      prop: 'description',
      trigger: 'blur',
      required: true
    }
  ],
  [
    {
      type: {
        name: 'avatar',
        attr: {
          style: 'width:100%',
          alias: 'avatar'
        }
      },
      hint: '请选择封面',
      label: '封面',
      prop: 'fileId',
      required: true,
      trigger: 'change'
    }
  ],
  [
    {
      type: {
        name: 'slot'
      },
      label: '关联视频',
      prop: 'select-video'
    }
  ]
]);
const videoPage = ref();
const selectVideo = () => {
  videoPage.value.showDrawer();
};
const video = ref<IVideo | null>(null);
const selectHandler = (e: any) => {
  video.value = e;
  if (video.value) formData.data.videoId = video.value.id;
  else {
    formData.data.videoId = '';
  }
};
defineExpose({
  showDrawer
});
</script>

<template>
  <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
    <div>
      <Create
        v-model="formData.data"
        :scale="4.5"
        :aspect-ratio="4.5"
        :item-width="280"
        :real-width="1200"
        :table-constructor="tableConstructor"
        ref="create"
      >
        <template #select-video>
          <el-button type="primary" @click="selectVideo">选择视频</el-button>
          <template v-if="video && video.name">
            <el-input v-model="video.name" readonly style="margin: 10px 0 0 0" />
          </template>
        </template>
      </Create>
      <VideoPage ref="videoPage" @select="selectHandler" />
    </div>
  </GbDrawer>
</template>

<style scoped lang="less"></style>

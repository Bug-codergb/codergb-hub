<template>
  <div class="create-moment">
    <GbDrawer v-model="drawer" :title="title" @confirm="confirmHandle">
      <Create ref="createRef" :table-constructor="tableConstructor" v-model="formData.data">
        <template #videoId>
          <el-button type="primary" @click="selectVideoHandler">选择视频</el-button>
          <template v-if="video && video.name">
            <el-input v-model="video.name" readonly style="margin: 10px 0 0 0" />
          </template>
        </template>
      </Create>
    </GbDrawer>
    <VideoPage ref="videoPage" @select="selectHandler" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineExpose, defineEmits } from 'vue';
import { ElMessage } from 'element-plus';
import useLoginStore from '@/views/login/store';
import useChannelStore from '@/store/modules/channel';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import Create from '@/components/content/create/Create.vue';
import VideoPage from '@/views/videoDict/childCpn/carousel/childCpn/VideoPage.vue';
import { IVideo } from '@/types/video/IVideo';
import { login } from '@/network/login';
import { createMoment, updateMoment } from '@/network/moment';
import { IResponseType } from '@/types/responseType';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const drawer = ref(false);
const title = ref('创建动态');

const formData = reactive({
  data: {
    id: '',
    title: '',
    content: '',
    vid: '',
    userId: '',
    cId: ''
  }
});
const tableConstructor = reactive([
  [
    {
      type: {
        name: 'input'
      },
      hint: '请输入标题',
      label: '标题',
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
          type: 'textarea'
        }
      },
      hint: '请输入内容',
      label: '内容',
      prop: 'content',
      trigger: 'blur',
      required: true
    }
  ],
  [
    {
      type: {
        name: 'slot'
      },
      label: '关联视频',
      prop: 'videoId'
    }
  ]
]);
const isUpdate = ref(false);
const showDrawer = (data: any) => {
  isUpdate.value = Boolean(data);
  drawer.value = true;
  if (isUpdate.value) {
    formData.data.id = data.id;
    formData.data.title = data.title;
    formData.data.content = data.content;
    formData.data.userId = data.user.userId;
    formData.data.cId = data.channel.id;
    formData.data.vid = data.video.id;
    video.value = data.video;
  } else {
    const loginMsg = useLoginStore();
    const channel = useChannelStore();

    formData.data.id = '';
    formData.data.title = '';
    formData.data.content = '';
    formData.data.vid = '';
    formData.data.userId = loginMsg.userMsg.userId;
    formData.data.cId = channel.channel.id;

    video.value = null;
  }
};
const createRef = ref();
const videoPage = ref();
const selectVideoHandler = () => {
  videoPage.value.showDrawer();
};

const video = ref<IVideo | null>(null);
const selectHandler = (e: any) => {
  video.value = e;
  if (video.value) {
    formData.data.vid = video.value.id;
  } else {
    formData.data.vid = '';
  }
};
const confirmHandle = () => {
  createRef.value &&
    createRef.value.ruleFormRef.validate(async (e: boolean) => {
      if (e) {
        console.log(e);
        const res = isUpdate.value
          ? await updateMoment<IResponseType<any>>(
              formData.data.id,
              formData.data.title,
              formData.data.content,
              formData.data.vid
            )
          : await createMoment<IResponseType<any>>(
              formData.data.title,
              formData.data.content,
              formData.data.vid,
              formData.data.userId,
              formData.data.cId
            );
        if (res.status === 200) {
          ElMessage({
            message: '添加成功',
            type: 'success'
          });
          emit('refresh');
          drawer.value = false;
        }
      }
    });
};
defineExpose({
  showDrawer
});
</script>

<style scoped lang="less"></style>

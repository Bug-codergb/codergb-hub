<template>
  <div class="edit-channel">
    <GbDrawer v-model="isShow" title="编辑频道" @confirm="confirmHandle">
      <div>
        <Create
          v-model="formData.data"
          :tableConstructor="tableConstructor"
          ref="createRef"
          :aspect-ratio="6.2"
          :real-width="1000"
        >
          <template #official>
            <el-radio-group v-model="formData.data.official">
              <el-radio :label="0">否</el-radio>
              <el-radio :label="1">是</el-radio>
            </el-radio-group>
          </template>
          <template #featured>
            <el-button type="primary" @click="() => selectVideoHandler('featured')"
              >选择视频</el-button
            >
            <template v-if="featured && featured.name">
              <el-input v-model="featured.name" readonly style="margin: 10px 0 0 0" />
            </template>
          </template>
          <template #trailer>
            <el-button type="primary" @click="() => selectVideoHandler('trailer')"
              >选择视频</el-button
            >
            <template v-if="trailer && trailer.name">
              <el-input v-model="trailer.name" readonly style="margin: 10px 0 0 0" />
            </template>
          </template>
        </Create>
      </div>
    </GbDrawer>
    <VideoPage ref="videoPage" @select="selectHandler" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineExpose, defineEmits } from 'vue';
import GbDrawer from '@/components/common/gbDrawer/GbDrawer.vue';
import Create from '@/components/content/create/Create.vue';
import { IChannel } from '@/types/channel/IChannel';
import { IVideo } from '@/types/video/IVideo';
import VideoPage from '@/views/videoDict/childCpn/carousel/childCpn/VideoPage.vue';
import { updateUserChannel } from '@/network/channel';
import { ElMessage } from 'element-plus';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();
const isShow = ref(false);
const detail = ref<IChannel | null>(null);
const showDrawer = (data: IChannel & { banner: null | string }) => {
  isShow.value = true;
  console.log(data);
  detail.value = data;
  formData.data.id = data.id;
  formData.data.name = data.name;
  formData.data.trailer = data.trailer ? data.trailer.id : null;
  formData.data.featured = data.featured ? data.featured.id : null;
  formData.data.description = data.description;
  formData.data.alias = data.alias ?? null;
  formData.data.banner = data.banner ? data.banner : null;
  formData.data.official = data.official ?? 0;
  formData.data.imgURL = data.picUrl ?? '';

  featured.value = data.featured ?? null;
  trailer.value = data.trailer ?? null;
};

const featured = ref<IVideo | null>(null);
const trailer = ref<IVideo | null>(null);
const videoPage = ref();
const alias = ref('');
const selectHandler = (e: any) => {
  if (alias.value === 'featured') {
    featured.value = e;
    featured.value && (formData.data.featured = featured.value.id);
  }
  if (alias.value === 'trailer') {
    trailer.value = e;
    trailer.value && (formData.data.trailer = trailer.value.id);
  }
};
const selectVideoHandler = (e: string) => {
  videoPage.value && videoPage.value.showDrawer();
  alias.value = e;
};
interface IFormData {
  name: string;
  alias: string;
  description: string;
  official: number;
  banner: string | null;
  featured: string | null;
  trailer: string | null;
  id: string;
  imgURL: string;
}
const formData = reactive<{ data: IFormData }>({
  data: {
    name: '',
    alias: '',
    description: '',
    official: 0,
    banner: '',
    featured: '',
    trailer: '',
    id: '',
    imgURL: ''
  }
});
const tableConstructor = reactive([
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%'
        }
      },
      label: '名称',
      hint: '请输入频道名称',
      prop: 'name',
      required: true,
      trigger: 'blur'
    }
  ],
  [
    {
      type: {
        name: 'input',
        attr: {
          style: 'width:100%'
        }
      },
      label: '别名',
      hint: '请输入频道别名',
      prop: 'alias',
      required: true,
      trigger: 'blur'
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
      label: '简介',
      hint: '请输入频道简介',
      prop: 'description',
      required: true,
      trigger: 'blur'
    }
  ],
  [
    {
      type: {
        name: 'slot',
        attr: {
          style: 'width:100%'
        }
      },
      label: '是否为官方频道',
      hint: '请选择是否为官方频道',
      prop: 'official',
      required: true,
      trigger: 'blur'
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
      hint: '请选择频道横幅',
      label: '横幅',
      prop: 'banner',
      required: true,
      trigger: 'change'
    }
  ],
  [
    {
      type: {
        name: 'slot'
      },
      prop: 'featured',
      label: '频道精选视频'
    }
  ],
  [
    {
      type: {
        name: 'slot'
      },
      prop: 'trailer',
      label: '频道预告片'
    }
  ]
]);
const createRef = ref();
const confirmHandle = () => {
  createRef.value &&
    createRef.value.ruleFormRef.validate(async (e: boolean) => {
      e &&
        updateUserChannel(
          formData.data.id,
          formData.data.name,
          formData.data.alias,
          formData.data.description,
          formData.data.official,
          formData.data.banner,
          formData.data.featured,
          formData.data.trailer
        ).then((res) => {
          if (res.status === 200) {
            ElMessage({
              type: 'success',
              message: '更新成功'
            });
            emit('refresh');
            isShow.value = false;
          }
        });
    });
};
defineExpose({
  showDrawer
});
</script>

<style scoped lang="less"></style>

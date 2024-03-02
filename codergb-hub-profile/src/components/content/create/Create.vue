<template>
  <div class="create">
    <el-form :model="newFormData" ref="ruleFormRef" :rules="rules" label-position="top">
      <template v-for="item in tableConstructor" :key="item">
        <el-row>
          <el-col v-for="it in item" :key="it">
            <el-form-item :label="it.label" :prop="it.prop">
              <template v-if="it.type.name === 'input'">
                <el-input
                  v-model="newFormData[`${it.prop}`]"
                  :placeholder="it.hint"
                  v-bind="{ ...it.type.attr }"
                />
              </template>
              <template v-if="it.type.name === 'select'">
                <el-select
                  v-model="newFormData[`${it.prop}`]"
                  :placeholder="it.hint"
                  v-bind="{ ...it.type.attr }"
                >
                  <el-option
                    v-for="i in it.options"
                    :label="i.label"
                    :value="i.value"
                    :key="i.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-if="it.type.name === 'avatar'">
                <div class="img-container">
                  <template v-if="isPrev">
                    <img :src="imgURL" />
                  </template>
                  <template v-if="!isPrev">
                    <el-icon class="upload-icon"><Picture class="upload-icon" /></el-icon>
                    <input type="file" @change="(e) => fileChange(e, it.prop)" />
                  </template>
                  <template v-if="isPrev">
                    <div class="mask" @click="deleteCover">
                      <el-icon><Delete /></el-icon>
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="it.type.name === 'video'">
                <div class="video-container">
                  <template v-if="isPrevVideo">
                    <video :src="videoURl" controls />
                  </template>
                  <template v-if="!isPrevVideo">
                    <el-icon class="upload-icon"><Monitor class="upload-icon" /></el-icon>
                    <input type="file" @change="(e) => videoChange(e, it.prop)" />
                  </template>
                </div>
              </template>
              <template v-if="it.type.name === 'slot'">
                <slot :name="it.prop"></slot>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
      <slot>
        <el-row>
          <el-col></el-col>
        </el-row>
      </slot>
    </el-form>
    <GbUpload
      v-model="isShowUpload"
      :file="file"
      :aspectRatio="aspectRatio"
      :realWidth="realWidth"
      :itemWidth="itemWidth"
      :scale="scale"
      @confirm="confirmHandle"
    />
    <GbVideo v-model="isShowVideoUpload" :file="videoFile" @confirm="videoConfirm" />
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  watch,
  ref,
  nextTick,
  onMounted
} from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import GbUpload from '@/components/common/gbUpload/GbUpload.vue';
import GbVideo from '@/components/common/gbVideo/GbVideo.vue';
import { getVideoDuration } from '@/utils/video';
const props = defineProps({
  aspectRatio: {
    type: Number,
    default: 1
  },
  realWidth: {
    type: Number,
    default: 200
  },
  scale: {
    type: Number,
    default: 1
  },
  itemWidth: {
    type: Number,
    default: 100
  },
  tableConstructor: {
    type: Array,
    default() {
      return [];
    }
  },
  modelValue: {
    type: Object,
    default() {
      return {};
    }
  },
  isUpdate: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update:modelValue']);
const newFormData = ref(JSON.parse(JSON.stringify(props.modelValue)));
const ruleFormRef = ref<FormInstance>();
const imgURL = ref('');
const isPrev = ref(false);
const isShowUpload = ref(false);
const file = ref();
const imgProp = ref('');

watch(
  newFormData,
  (newVal) => {
    emit('update:modelValue', newVal);
  },
  { deep: true }
);
onMounted(() => {
  isPrev.value = false;
  imgURL.value = newFormData.value['imgURL'] ?? '';
  if (imgURL.value) {
    isPrev.value = true;
  }
});
let ruleObj = {};
for (let item of props.tableConstructor) {
  for (let it of item) {
    Object.defineProperty(ruleObj, it.prop, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: [
        {
          required: it.required,
          message: it.hint,
          trigger: it.trigger
        }
      ]
    });
  }
}
const rules = reactive<FormRules>(ruleObj);
const fileChange = (e: Event, prop: string) => {
  imgProp.value = prop;
  const tar = e.target as HTMLInputElement;
  if (tar.files && tar.files[0]) {
    isShowUpload.value = true;
    nextTick(() => {
      file.value = tar.files![0];
    });
  }
};
const videoURl = ref('');
const isPrevVideo = ref(false);
const isShowVideoUpload = ref(false);
const videoProp = ref('');
const videoFile = ref();
const videoChange = (e: Event, prop: string) => {
  videoProp.value = prop;
  const tar = e.target as HTMLInputElement;
  if (tar.files && tar.files[0]) {
    isShowVideoUpload.value = true;
    nextTick(() => {
      videoFile.value = tar.files![0];
    });
  }
};
const confirmHandle = (e: { file: File; id: string; res: any }) => {
  isPrev.value = true;
  imgURL.value = URL.createObjectURL(e.file);
  newFormData.value[imgProp.value] = e.id;
};
const videoConfirm = async (e: { file: File | null; videoId: string }) => {
  isPrevVideo.value = true;
  newFormData.value[videoProp.value] = e.videoId;
  if (e.file) videoURl.value = URL.createObjectURL(e.file);
  if (e.file) {
    const data = await getVideoDuration(e.file);
    newFormData.value['dt'] = data;
  }
};

const deleteCover = () => {
  isPrev.value = false;
  file.value = null;
};
defineExpose({
  ruleFormRef
});
</script>

<style scoped lang="less">
.create {
  .img-container,
  .video-container {
    width: 100%;
    background-color: var(--img-bgc);
    height: (150/40rem);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .upload-icon {
      font-size: (50/40rem);
      color: var(--primary-color);
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    video {
      height: 100%;
    }
    & > input {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.2s;
      .el-icon {
        color: #fff;
        font-size: (50/40rem);
      }
    }
  }
  .img-container:hover {
    .mask {
      opacity: 1;
    }
  }
}
</style>

<template>
  <div class="gb-video">
    <el-dialog
      v-model="dialogVisible"
      title="视频上传"
      width="60%"
      top="5vh"
      :close-on-click-modal="false"
    >
      <div class="video-container">
        <div class="container">
          <video :src="vioURL" controls />
        </div>
      </div>
      <div class="progress">
        <el-progress :percentage="Number(parseFloat(percent ? `${percent}` : '0').toFixed(2))" />
      </div>
      <template v-if="isLoading">
        <div class="loading-container">
          <div v-loading="isLoading"></div>
          <span class="loading-label">视频正在处理中</span>
        </div>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmHandle"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, watch, ref } from 'vue';
import { shardUtils } from '@/utils/shard';

interface IProps {
  modelValue: boolean;
  file: File | null;
}
const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update:modelValue', newVal: boolean): void;
  (e: 'confirm', arg: any): void;
}>();
const vioURL = ref('');
const percent = ref(0);
const isLoading = ref(false);
const videoId = ref('');
watch(
  () => props.file,
  async (newVal: File | null) => {
    if (newVal !== null) {
      vioURL.value = URL.createObjectURL(newVal);
      const result = await shardUtils(
        newVal,
        (e: number) => {
          percent.value = (e / newVal.size) * 100;
        },
        (e) => {
          percent.value = e;
          if (!isLoading.value) {
            isLoading.value = true;
          }
        }
      );
      if (result.status === 200) {
        videoId.value = result.data.id ?? '';
        percent.value = 100;
        isLoading.value = false;
      }
    }
  }
);

const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit('update:modelValue', newVal);
  }
});
const confirmHandle = () => {
  emit('confirm', { file: props.file, videoId: videoId.value });
  dialogVisible.value = false;
};
</script>

<style scoped lang="less">
.gb-video {
  .video-container {
    width: 100%;
    height: (450/40rem);
    .container {
      width: 100%;
      height: 100%;
      background-color: #000000;
      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .progress {
    margin: (30/40rem) 0 0 0;
  }
  .loading-container {
    margin: (20/40rem) 0 0 0;
    display: flex;
    align-items: center;
    .loading-label {
      font-size: (16/40rem);
      color: #171717;
      margin: 0 0 0 (50/40rem);
    }
  }
}
</style>

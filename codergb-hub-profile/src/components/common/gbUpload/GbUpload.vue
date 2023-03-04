<template>
  <div class="gb-upload">
    <el-dialog v-model="dialogVisible" title="图片上传" width="60%" :close-on-click-modal="false">
      <div class="img-container">
        <div class="container">
          <img ref="imgRef" class="cropper-img" :src="imgURL" />
        </div>
        <div class="prev">
          <div
            class="small"
            :style="{ width: itemWidth + 'px', height: itemWidth * scale + 'px' }"
          ></div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmHandle"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue';
import Cropper from 'cropperjs';
import { uploadImage } from '@/network/image';
interface IProps {
  modelValue: boolean;
  file: File | null;
  aspectRatio: number;
  realWidth: number;
  itemWidth: number;
  scale: number;
}
const props = defineProps<IProps>();

const emit = defineEmits(['update:modelValue', 'confirm']);
const imgURL = ref('');
const imgRef = ref();
const cropper = ref<Cropper>();
const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit('update:modelValue', newVal);
  }
});
const initCropper = () => {
  if (imgRef.value) {
    let cropperContainer = new Cropper(imgRef.value, {
      dragMode: 'move',
      aspectRatio: props.aspectRatio,
      viewMode: 1,
      background: false,
      zoomable: false,
      preview: '.small'
    });
    cropper.value = cropperContainer;
    cropperContainer.replace(imgURL.value);
  }
};
const getCropperFile = async () => {
  return new Promise<File | null>((resolve, reject) => {
    if (cropper.value) {
      let canvasFile = cropper.value.getCroppedCanvas({
        imageSmoothingQuality: 'high',
        width: props.realWidth,
        imageSmoothingEnabled: false,
        fillColor: '#fff'
      });
      canvasFile.toBlob((blob: Blob | null) => {
        if (blob && props.file) {
          const cropperFile = new File([blob], props.file.name, {
            type: props.file.type
          });
          resolve(cropperFile);
        } else {
          resolve(null);
        }
      });
    } else {
      reject(new Error('cropper 不存在'));
    }
  });
};
watch(
  (): File | null => props.file,
  (newVal: File | null) => {
    if (newVal) {
      imgURL.value = URL.createObjectURL(newVal);
      initCropper();
    }
  },
  { deep: true }
);
const confirmHandle = async () => {
  const res: File | null = await getCropperFile();
  if (res) {
    let formData = new FormData();
    formData.append('file', res);
    const result = await uploadImage(formData, () => {});
    if (result.status === 200) {
      emit('confirm', { file: res, id: result.data.id });
    }
  }
  dialogVisible.value = false;
};
</script>

<style scoped lang="less">
.gb-upload {
  .img-container {
    display: flex;
    align-items: center;
    height: (260/40rem);
    .container {
      flex: 1;
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      background-color: var(--img-bgc);
      img {
        height: 100%;
      }
    }
    .prev {
      flex: 1;
      height: 100%;
      background-color: var(--img-bgc);
      display: flex;
      align-items: center;
      justify-content: center;
      .small {
        overflow: hidden;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>

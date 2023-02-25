<template>
  <div class="create">
    <el-form :model="newFormData" ref="ruleFormRef" :rules="rules">
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
                </div>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
    </el-form>
    <GbUpload
      v-model="isShowUpload"
      :file="file"
      :aspectRatio="1"
      :realWidth="200"
      :itemWidth="100"
      :scale="1"
      @confirm="confirmHandle"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineExpose, reactive, watch, ref, nextTick } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import GbUpload from '@/components/common/gbUpload/GbUpload.vue';
const props = defineProps({
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
const confirmHandle = (e: { file: File; id: string }) => {
  isPrev.value = true;
  imgURL.value = URL.createObjectURL(e.file);
  newFormData.value[imgProp.value] = e.id;
};
defineExpose({
  ruleFormRef
});
</script>

<style scoped lang="less">
.create {
  .img-container {
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
  }
}
</style>
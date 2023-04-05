<template>
  <el-dialog
    v-model="showDialog"
    :title="title"
    :width="width"
    :append-to-body="true"
    :destroy-on-close="true"
    :close-on-click-modal="false"
  >
    <slot></slot>
    <template #footer>
      <template v-if="isShowFooter">
        <span class="dialog-footer">
          <el-button @click="cancelHandle">{{ cancelText }}</el-button>
          <el-button type="primary" @click="confirmHandle"> {{ confirmText }} </el-button>
        </span>
      </template>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, computed, defineEmits } from 'vue';
interface IProps {
  modelValue: boolean;
  title: string;
  width?: string;
  confirmText?: string;
  cancelText?: string;
  isShowFooter?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  title: '30%',
  confirmText: '确定',
  cancelText: '取消',
  isShowFooter: true
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
const showDialog = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit('update:modelValue', value);
  }
});
const confirmHandle = () => {
  showDialog.value = false;
};
const cancelHandle = () => {
  showDialog.value = false;
};
</script>
<style lang="less">
.el-dialog__body {
  padding: 10px 20px !important;
}
</style>

<template>
  <el-drawer
    v-model="showDrawer"
    :destroy-on-close="true"
    :modal="true"
    :direction="direction"
    :show-close="false"
    :append-to-body="true"
  >
    <template #header="{ close }">
      <div class="gb-drawer-header">
        <div class="left-header">{{ title }}</div>
        <div class="right-header">
          <el-button size="small" type="primary" @click="close">确定</el-button>
          <el-button size="small" @click="close">取消</el-button>
        </div>
      </div>
    </template>
    <div class="drawer-inner">
      <slot></slot>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);
const direction = ref('rtl');

const showDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    console.log(value);
    emit('update:modelValue', value);
  }
});
</script>
<style lang="less">
.el-drawer__header {
  padding: (20/40rem) (20/40rem) 0;
  margin-bottom: (10/40rem) !important;
}
</style>
<style scoped lang="less">
.drawer-inner {
}

.gb-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line-color);
  padding-bottom: (20/40rem);
  .left-header {
    font-size: (20/40rem);
  }
}
</style>

<template>
  <div class="gb-header">
    <div class="left-container">
      <template v-for="item in header" :key="item.id">
        <template v-if="item.type === 'input'">
          <el-input
            v-model="item.bingParam"
            :placeholder="item.hint"
            @input="keywordInp(item)"
            v-bind="{ ...item.attr }"
          />
        </template>
        <template v-if="item.type === 'select'">
          <el-select
            v-model="item.bingParam"
            :placeholder="item.hint"
            @change="item.onChange"
            v-bind="{ ...item.attr }"
          >
            <el-option
              v-for="it in item.options"
              :key="it.label"
              :label="it.label"
              :value="it.value"
            ></el-option>
          </el-select>
        </template>
      </template>
    </div>
    <div class="right-container">
      <div class="create">
        <slot>
          <el-button type="primary" @click="createHandle">新增</el-button>
        </slot>
        <slot name="btnContent"></slot>
      </div>
      <template v-if="isShowRefresh">
        <div class="page-item-list-header-right">
          <el-icon :class="{ active: isRotate }" @click="changeRotate"><refresh /></el-icon>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, isReactive } from 'vue';
import { Refresh } from '@element-plus/icons-vue';
import { debounce } from '@/utils/debounce';

const props = defineProps({
  header: {
    type: Object,
    default() {
      return {};
    }
  },
  isShowRefresh: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['create']);
if (!isReactive(props.header)) {
  console.error('header必须是一个reactive');
}
const isRotate = ref(false);
const changeRotate = () => {
  isRotate.value = true;
  setTimeout(() => {
    isRotate.value = false;
  }, 2000);
};
const createHandle = () => {
  emit('create');
};
const keywordInp = debounce(
  (item: any) => {
    item.onChange(item.bingParam);
  },
  1000,
  false
);
</script>

<style scoped lang="less">
.gb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line-color);
  padding-bottom: (15/40rem);
  .left-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > .el-input {
      margin: 0 15px 0 0;
    }
    & > .el-select {
      margin: 0 15px 0 0;
    }
  }
  .right-container {
    display: flex;
    align-items: center;
    .create {
      margin: 0 (15/40rem) 0 0;
      display: flex;
      align-items: center;
    }
    .page-item-list-header-right {
      background-color: #00a1d6;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 4px;
      cursor: pointer;
      @keyframes test {
        from {
          transform: rotateZ(0deg);
        }
        to {
          transform: rotateZ(-360deg);
        }
      }
      .el-icon {
        font-size: 24px;
        color: #fff;
        &.active {
          animation: test 1s linear 0s 1;
        }
      }
    }
  }
}
</style>

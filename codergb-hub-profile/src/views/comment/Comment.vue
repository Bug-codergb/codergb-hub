<template>
  <div class="comment">
    <GbTable :table-data="tableData" ref="gbTable" />
    <Notify ref="notifyRef" />
    <Detail ref="detailRef" />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import Notify from './childCpn/notify/Notify.vue';
import useTable from './hook/useTable';
import Detail from './childCpn/detail/Detail.vue';
const gbTable = ref();
const notifyRef = ref();
const detailRef = ref();
const { tableData } = useTable(notifyRef, gbTable, detailRef);
</script>
<style lang="less">
.comment-from {
  display: flex;
  .el-tag {
    flex: 1;
  }
  span {
    flex: 6;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 0 5px;
  }
}
.comment-creator {
  display: flex;
  align-items: center;
  span {
    margin: 0 0 0 5px;
    color: #409eff;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="g-inner-card table-box">
    <GbHeader :header="header" :is-show-create="false" :is-show-refresh="true" @refresh="refresh" />
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
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
const gbTable = ref();
const notifyRef = ref();
const detailRef = ref();
const { tableData } = useTable(notifyRef, gbTable, detailRef);
const header = reactive([
  {
    type: 'input',
    hint: '请输入集合名称',
    id: '23',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.params.keyword = e;
      gbTable.value.search();
    }
  }
]);
const refresh = () => {
  gbTable.value.search();
};
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

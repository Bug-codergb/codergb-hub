<template>
  <div class="gb-table">
    <el-table
      ref="tableRef"
      row-key="id"
      :data="tableList.list"
      style="width: 100%"
      :height="tableData.height"
      @select="selectionChange"
      @select-all="selectionChange"
      v-bind="$attrs"
    >
      <template v-for="item in tableData.columns" :key="item.prop">
        <template v-if="!item.btns">
          <el-table-column
            :label="item.label"
            :prop="item.prop"
            :key="item.label"
            v-bind="{ ...item }"
          ></el-table-column>
        </template>
        <template v-if="isOperate && item.btns && item.btns.length !== 0">
          <el-table-column #default="scope" :label="item.label" v-bind="{ ...item }">
            <el-button
              v-for="it in item.btns"
              :key="it.text"
              text
              :type="it.type"
              style="font-size: 13px; padding: 5px"
              @click="btnClick(it, scope)"
              >{{ it.text }}</el-button
            >
          </el-table-column>
        </template>
      </template>
      <slot name="end"></slot>
    </el-table>
    <div class="page" v-if="total > tableData.pageSize">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="tableData.pageSize"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineExpose, defineEmits, reactive, ref, nextTick } from 'vue';
import lodash from 'lodash';
import { ElMessage, ElMessageBox } from 'element-plus';
import { IResponseType } from '@/types/responseType';
import { IPage } from '@/types/IPage';
import gbRequest from '@/network';
const props = defineProps({
  tableData: {
    type: Object,
    default() {
      return {};
    }
  },
  isOperate: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['selectionChange']);
let tableList = reactive<{ list: any[] }>({
  list: []
});
const total = ref<number>(0);
const getTableDataReq = async (offset: number, limit: number, data: any, params: any) => {
  const result = await gbRequest.request<IResponseType<IPage<any[]>>>({
    url: props.tableData.url,
    method: props.tableData.method,
    data: data,
    params: {
      ...params,
      offset,
      limit
    }
  });
  if (result.status === 200) {
    tableList.list = result.data.list;
    total.value = result.data.count;
    //console.log(tableList.list, total.value);
  }
};
//初始化调用
getTableDataReq(
  0,
  props.tableData.pageSize ? props.tableData.pageSize : 10,
  props.tableData.data,
  props.tableData.params
);
const tableRef = ref();
const selectMap = ref(new Map());

const currentPage = ref(1);
const currentChange = async (e: number) => {
  console.log(11);
  currentPage.value = e;
  await getTableDataReq(
    (e - 1) * (props.tableData.pageSize ? props.tableData.pageSize : 10),
    props.tableData.pageSize ? props.tableData.pageSize : 10,
    props.tableData.data,
    props.tableData.params
  );
  await nextTick();
  const rows = selectMap.value.get(e) ?? [];
  console.log(rows, 109);
  if (rows.length !== 0) {
    for (let item of rows) {
      tableRef.value.toggleRowSelection(
        tableList.list.find((row) => row.id === item.id),
        true
      );
    }
  }
};
const search = () => {
  getTableDataReq(
    0,
    props.tableData.pageSize ? props.tableData.pageSize : 10,
    props.tableData.data,
    props.tableData.params
  );
};
const btnClick = (it: any, scope: any) => {
  if (it.text === '删除' || it.text === 'delete' || it.text === '移除') {
    ElMessageBox.confirm('确定要删除么?', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        it.onClick(scope.row, scope.$index);
      })
      .catch(() => {});
  } else {
    it.onClick(scope.row, scope.$index);
  }
};
const selectionChange = (row: unknown) => {
  console.log(row, 143);
  selectMap.value.set(currentPage.value, row);
  emit('selectionChange', row);
};
defineExpose({
  search,
  selectMap: selectMap.value
});
</script>

<style scoped lang="less">
.gb-table {
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: (18/40rem) 0;
  }
}
</style>

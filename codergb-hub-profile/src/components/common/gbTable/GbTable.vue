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
const emit = defineEmits<{
  (e: 'selectionChange', row: any): void;
}>();
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
  },
  dataCallback: {
    type: Function
  },
  isRadio: {
    type: Boolean,
    default: false
  }
});

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
    if (props.dataCallback) {
      const res = (await props.dataCallback(result.data.list)) ?? [];
      tableList.list = res;
      total.value = result.data.count;
    } else {
      tableList.list = result.data.list;
      total.value = result.data.count;
    }
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
  currentPage.value = e;
  await getTableDataReq(
    (e - 1) * (props.tableData.pageSize ? props.tableData.pageSize : 10),
    props.tableData.pageSize ? props.tableData.pageSize : 10,
    props.tableData.data,
    props.tableData.params
  );
  await nextTick();
  const rows = selectMap.value.get(e) ?? [];

  if (rows.length !== 0) {
    for (let item of rows) {
      tableRef.value.toggleRowSelection(
        tableList.list.find((row) => row.id === item.id),
        true
      );
    }
  }
};
let selectRows: any[] = [];
const initSelectRow = (rows: any[], rowKey: string) => {
  nextTick(() => {
    selectRows = [];
    if (rows.length !== 0 && tableList.list && tableList.list.length !== 0) {
      for (let item of tableList.list) {
        const index = rows.findIndex((it) => {
          return it[rowKey] === item[rowKey];
        });
        if (index !== -1) {
          tableRef.value.toggleRowSelection(item, true);
          selectRows.push(item);
        }
      }
    }
    if (selectRows.length !== 0) {
      selectionChange(selectRows);
    }
  });
};
const search = async () => {
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

const selectionChange = (row: any) => {
  if (!props.isRadio) {
    selectMap.value.set(currentPage.value, row);
    emit('selectionChange', row);
  } else {
    row = row.length > 0 ? row[row.length - 1] : null;
    tableRef.value.clearSelection();
    tableRef.value.toggleRowSelection(row ?? {});
    if (row) selectMap.value.set(currentPage.value, [row[row.length - 1]]);
    else {
      selectMap.value.delete(currentPage.value);
    }
    emit('selectionChange', row);
  }
};
defineExpose({
  search,
  selectMap: selectMap.value,
  initSelectRow
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

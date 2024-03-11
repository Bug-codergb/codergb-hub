<template>
  <div>
    <GbHeader :header="header" :isShowRefresh="true" @create="createHandle" @refresh="refresh" />
    <GbTable :tableData="tableData" ref="gbTable" />
    <CreateTag ref="createTagRef" @refresh="refresh" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { deleteCate, getAllCate } from '@/network/category';
import { IResponseType } from '@/types/responseType';
import { ICate } from '@/types/category/ICate';
import { IPage } from '@/types/IPage';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import CreateTag from './childCpn/CreateTag';
import { ElMessage } from 'element-plus';
import { deleteTag } from '@/network/tag';
import { TAG_DETAIL_PATH } from '@/router/constant';

const router = useRouter();
const gbTable = ref<InstanceType<typeof GbHeader>>();
const createTagRef = ref<InstanceType<typeof CreateTag>>();
const tableData = reactive({
  url: '/tag/all',
  method: 'get',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9,
    keyword: ''
  },
  columns: [
    {
      prop: 'id',
      label: '分类编号',
      'min-width': 180
    },
    {
      prop: 'name',
      label: '分类名称',
      'min-width': 180
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: ICate) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: ICate) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      label: '操作',
      'min-width': 200,
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: ICate, index: number) => {
            router.push({
              path: TAG_DETAIL_PATH + '/' + row.id
            });
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: ICate, index: number) => {
            if (createTagRef.value) {
              createTagRef.value.showDrawer(row);
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: ICate, index: number) => {
            const result = await deleteTag(row.id);
            if (result.status === 200) {
              ElMessage.success('删除成功');
              gbTable.value?.search();
            }
          }
        }
      ]
    }
  ]
});
const header = reactive([
  {
    type: 'input',
    hint: '请输入标签名称',
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
const createHandle = () => {
  createTagRef.value.showDrawer();
};
</script>

<style scoped lang="less"></style>

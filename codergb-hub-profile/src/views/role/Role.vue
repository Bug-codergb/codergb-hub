<template>
  <div class="table-box g-inner-card">
    <GbHeader :header="header" @create="createHandler" @refresh="search" />
    <GbTable :table-data="tableData" ref="gbTableRef" />
    <CreateRole ref="createRoleRef" @refresh="search" />
  </div>
</template>
<script setup lang="tsx">
import GbTable from '@/components/common/gbTable/GbTable.vue';
import moment from 'moment';
import { reactive, ref } from 'vue';
import { IRole } from '@/types/role';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import CreateRole from '@/views/role/childCpn/createRole/CreateRole.vue';
const gbTableRef = ref();
const createRoleRef = ref();
const tableData = reactive({
  url: '/role/all',
  method: 'get',
  pageSize: 10,
  params: {
    offset: 0,
    limit: 10,
    keyword: ''
  },
  data: {
    keyword: ''
  },
  columns: [
    {
      label: '角色名称',
      prop: 'name'
    },
    {
      label: '创建时间',
      prop: 'createTime',
      formatter: (scope: IRole) => {
        return <span>{moment(scope.createTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      formatter: (scope: IRole) => {
        return <span>{moment(scope.updateTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '操作',
      prop: 'operator',
      btns: [
        {
          text: '编辑',
          type: 'primary',
          onClick: (scope: IRole) => {
            console.log(scope);
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: (scope: IRole) => {
            console.log(scope);
          }
        }
      ]
    }
  ]
});
const createHandler = () => {
  createRoleRef.value && createRoleRef.value.showDrawer();
};
const header = reactive([
  {
    type: 'input',
    hint: '请输入角色名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.params.keyword = e;
      if (gbTableRef.value) gbTableRef.value.search();
    }
  }
]);
const search = () => {
  if (gbTableRef.value) gbTableRef.value.search();
};
</script>

<style scoped lang="less"></style>

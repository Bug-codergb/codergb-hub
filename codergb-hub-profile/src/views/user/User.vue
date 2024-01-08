<template>
  <div class="user-list">
    <GbHeader :header="header" @create="createHandler" />
    <CreateUser ref="createUserRef" @refresh="search" />
    <GbTable :tableData="tableData" ref="gbTable" />
  </div>
</template>

<script lang="tsx" setup>
import { reactive, h, ref } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import moment from 'moment';
import { IUserMsg } from '@/types/user/IUserMsg';
import CreateUser from '@/views/user/childCpn/createUser/CreateUser.vue';
const tableData = reactive({
  url: '/user/all',
  method: 'post',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9
  },
  data: {
    keyword: ''
  },
  columns: [
    {
      prop: 'userName',
      label: '名称',
      'min-width': 100
    },
    {
      prop: 'avatarUrl',
      label: '用户头像',
      'min-width': 90,
      formatter: (row: IUserMsg) => {
        return <el-avatar shape="square" size={50} fit="contain" src={row.avatarUrl} />;
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'history',
      label: '是否存储历史记录',
      'min-width': 120,
      formatter: (row: IUserMsg) => {
        const { history } = row;
        return history === 1 ? '是' : '否';
      }
    },
    {
      prop: 'isExplore',
      label: '是否为探索模块',
      'min-width': 120,
      formatter: (row: IUserMsg) => {
        const { isExplore } = row;
        return isExplore === 1 ? '是' : '否';
      }
    },
    {
      label: '操作',
      'min-width': 200,
      fixed: 'right',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IVideo, index: number) => {
            console.log(row);
          }
        },
        {
          text: '编辑',
          type: 'primary'
          /*onClick: (row: ICate, index: number) => {
            if (createCateRef.value) {
              createCateRef.value.showDrawer(row);
            }
          }*/
        },
        {
          text: '删除',
          type: 'danger',
          onClick: (row: IVideo, index: number) => {
            console.log(index);
          }
        }
      ]
    }
  ]
});

const gbTable = ref<InstanceType<typeof GbHeader>>(null);
const header = reactive([
  {
    type: 'input',
    hint: '请输入用户名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.data.keyword = e;
      if (gbTable.value) gbTable.value.search();
    }
  }
]);

const createUserRef = ref<InstanceType<typeof CreateUser>>(null);
const createHandler = () => {
  if (createUserRef.value) {
    createUserRef.value.showDrawer();
  }
};
const search = () => {
  debugger;
  if (gbTable.value) gbTable.value.search();
};
</script>

<style scoped lang="less">
.user-list {
  .img-container {
  }
}
</style>

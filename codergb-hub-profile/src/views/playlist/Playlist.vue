<template>
  <div class="playlist">
    <GbHeader :header="header" :isShowRefresh="true" @create="newPlaylist" />
    <GbTable :tableData="tableData" ref="gbTable" />
    <CreatePlaylist ref="createPlaylist" @refresh="refresh" :key="keyIndex" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { IPlaylist } from '../../types/playlist';
import { IUserMsg } from '@/types/user/IUserMsg';
import CreatePlaylist from './childCpn/createPlaylist/CreatePlaylist.vue';

const gbTable = ref<InstanceType<typeof GbHeader>>();
const createPlaylist = ref<InstanceType<typeof CreatePlaylist>>();
const keyIndex = ref(0);
const tableData = reactive({
  url: '/playlist/all',
  method: 'post',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9
  },
  data: {
    keyword: '',
    isPublic: -1
  },
  columns: [
    {
      prop: 'name',
      label: '名称',
      'min-width': 100
    },
    {
      prop: 'isPublic',
      label: '状态',
      'min-width': 90,
      formatter: (row: IPlaylist) => {
        const { isPublic } = row;
        return isPublic === 1 ? '公开' : '私有';
      }
    },
    {
      prop: 'user',
      label: '用户',
      'min-width': 100,
      formatter: (row: IPlaylist) => {
        const { user } = row;
        return user.userName;
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'history',
      label: '是否存储历史记录',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
        const { history } = row;
        return history === 1 ? '是' : '否';
      }
    },
    {
      prop: 'isExplore',
      label: '是否为探索模块',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
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
          onClick: (row: IPlaylist, index: number) => {
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
          onClick: (row: IPlaylist, index: number) => {
            console.log(index);
          }
        }
      ]
    }
  ]
});
const header = reactive([
  {
    type: 'input',
    hint: '请输入播放列表名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.data.keyword = e;
      gbTable.value.search();
    }
  },
  {
    type: 'select',
    hint: '请选择状态',
    id: 'isPublic',
    bingParam: -1,
    attr: {
      style: 'min-width:40%',
      clearable: false
    },
    options: [
      {
        label: '全部',
        value: -1
      },

      {
        label: '私有',
        value: 0
      },
      {
        label: '公开',
        value: 1
      }
    ],
    onChange: (e: number) => {
      tableData.data.isPublic = e;
      gbTable.value.search();
    }
  }
]);
const newPlaylist = () => {
  if (createPlaylist.value) {
    createPlaylist.value.showDrawer();
  }
};
const refresh = () => {
  gbTable.value.search();
  setTimeout(() => {
    keyIndex.value = keyIndex.value + 1;
  }, 500);
};
</script>

<style scoped></style>

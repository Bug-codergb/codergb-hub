<template>
  <el-card>
    <div class="playlist">
      <GbHeader :header="header" :isShowRefresh="true" @create="newPlaylist" />
      <GbTable :tableData="tableData" ref="gbTable" />
      <CreatePlaylist ref="createPlaylist" @refresh="refresh" :key="keyIndex" />
    </div>
  </el-card>
</template>

<script lang="tsx" setup>
import { reactive, ref, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { IPlaylist } from '../../types/playlist';
import { IUserMsg } from '@/types/user/IUserMsg';
import CreatePlaylist from './childCpn/createPlaylist/CreatePlaylist.vue';
import { View, Hide } from '@element-plus/icons-vue';
import { PLAYLIST_DETAIL_PATH } from '@/router/constant';
import { deletePlaylist } from '@/network/playlist';
const router = useRouter();
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
      'min-width': 150,
      formatter: (scope: IPlaylist) => {
        return <span class="text-mul-line">{scope.name}</span>;
      }
    },
    {
      prop: 'isPublic',
      label: '状态',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
        const { isPublic } = row;
        return isPublic === 1 ? (
          <div class="playlist-status">
            <el-icon>
              <View />
            </el-icon>
            <span class="label">公开</span>
          </div>
        ) : (
          <div class="playlist-status">
            <el-icon>
              <Hide />
            </el-icon>
            <span class="label">私有</span>
          </div>
        );
      }
    },
    {
      prop: 'user',
      label: '用户',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
        const { user } = row;
        return user.userName;
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 140,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 140,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
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
            router.push({
              path: PLAYLIST_DETAIL_PATH + '/' + row.id
            });
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: IPlaylist, index: number) => {
            console.log(createPlaylist.value);
            if (createPlaylist.value) {
              createPlaylist.value.showDrawer(row);
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: IPlaylist, index: number) => {
            console.log(index);
            const result = await deletePlaylist(row.id);
            if (result.status === 200) {
              gbTable.value.search();
              ElMessage({
                message: '删除成功',
                type: 'success'
              });
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
<style lang="less">
.playlist {
  .playlist-status {
    display: flex;
    align-items: center;
    .label {
      margin: 0 0 0 (15/40rem);
    }
  }
}
</style>
<style scoped lang="less"></style>

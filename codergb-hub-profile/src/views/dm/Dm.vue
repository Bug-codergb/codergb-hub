<template>
  <el-card class="g-inner-card">
    <div class="dm">
      <GbHeader :header="header" :is-show-create="false" />
      <GbTable :table-data="tableData" ref="gbTable" />
    </div>
    <Edit ref="editRef" @refresh="refreshHandler" />
  </el-card>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { User } from '@element-plus/icons-vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { IChannel } from '@/types/channel/IChannel';
import Edit from './childCpn/edit/Edit.vue';
import moment from 'moment/moment';
import { deleteDm } from '@/network/dm';
import { ElMessage } from 'element-plus';
import { IVideo } from '@/types/video/IVideo';
import { USER_DETAIL_PATH, VIDEO_DETAIL_PATH } from '@/router/constant';
const router = useRouter();

const videoRouter = (video: IVideo) => {
  router.push({
    path: `${VIDEO_DETAIL_PATH}/${video.id}`
  });
};

const editRef = ref();
const tableData = reactive({
  url: '/dm/all',
  method: 'get',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9,
    keyword: ''
  },
  columns: [
    {
      label: '弹幕内容',
      prop: 'text',
      'min-width': 180,
      
    },
    {
      label: '视频时间',
      prop: 'time'
    },
    {
      label: '用户',
      prop: '',
      formatter: (row: any) => {
        return (
          <div class="base-user-info-icon" onClick={() => userRouter(row)}>
            <el-icon>
              <User />
            </el-icon>
            <span>{row.user.userName}</span>
          </div>
        );
      }
    },

    {
      label: '视频',
      prop: '',
      'min-width': 220,
      formatter: (row: any) => {
        return (
          <span class="text-mul-line g-vio-name" onClick={() => videoRouter(row.video)}>
            {row.video.name}
          </span>
        );
      }
    },
    {
      label: '创建时间',
      prop: '',
      width: 150,
      formatter: (row: IChannel) => {
        return <span>{moment(row.createTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '操作',
      'min-width': 200,
      fixed: 'right',
      btns: [
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: any) => {
            editRef.value && editRef.value.showDialog(row);
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: any) => {
            const res = await deleteDm(row.id);
            if (res.status === 200) {
              ElMessage.success('删除成功');
              if (gbTable.value) gbTable.value.search();
            }
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
    hint: '请输入弹幕名称名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.params.keyword = e;
      if (gbTable.value) gbTable.value.search();
    }
  }
]);
const userRouter = (row: any) => {
  router.push({
    path: `${USER_DETAIL_PATH}/${row.user.userId}`
  });
};
const refreshHandler = () => {
  if (gbTable.value) gbTable.value.search();
};
</script>

<style lang="less">
.g-vio-name {
  cursor: pointer;
  color: #5a9cf8 !important;
}

</style>

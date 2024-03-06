<template>
  <el-card class="g-inner-card">
    <div class="moment">
      <GbHeader :header="header" :isShowRefresh="true" @create="createHandler" />
      <GbTable :table-data="tableData" ref="gbTable" />
      <CreateMoment ref="createMomentRef" @refresh="search" />
    </div>
  </el-card>
</template>
<script setup lang="tsx">
import { getCurrentInstance } from 'vue';
import { User } from '@element-plus/icons-vue';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import CreateMoment from './childCpn/createMoment/CreateMoment.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { IMoment } from '@/types/moment';
import { MOMENT_DETAIL_PATH } from '@/router/constant';
import { deleteMoment } from '@/network/moment';
import { IResponseType } from '@/types/responseType';

const gbTable = ref();
const router = useRouter();

const createMomentRef = ref();
const createHandler = () => {
  if (createMomentRef.value) {
    createMomentRef.value.showDrawer();
  }
};

const instance = getCurrentInstance();
const tableData = reactive({
  url: '/moment/list',
  method: 'post',
  pageSize: 8,
  params: {
    offset: 0,
    limit: 8,
    keyword: ''
  },
  columns: [
    {
      label: '标题',
      prop: 'title',
      'min-width': 120,
      formatter: (scope: IMoment) => {
        return <div class="text-mul-line">{scope.title}</div>;
      }
    },
    {
      label: '内容',
      prop: 'content',
      'min-width': 160,
      formatter: (scope: IMoment) => {
        return <div class="text-mul-line">{scope.content}</div>;
      }
    },
    {
      label: '关联视频',
      prop: 'video',
      'min-width': 100,
      formatter: (scope: IMoment) => {
        return (
          <span
            class="text-mul-line associate-video"
            onClick={() => instance?.proxy?.$videoRouter(scope.video.id)}
          >
            {scope.video.name}
          </span>
        );
      }
    },
    {
      label: '创建人',
      prop: 'user',
      formatter: (scope: IMoment) => {
        return (
          <div
            class="base-user-info-icon"
            onClick={() => instance?.proxy?.$userRouter(scope.user.userId)}
          >
            <el-icon>
              <User />
            </el-icon>
            <span>{scope.user.userName}</span>
          </div>
        );
      }
    },
    {
      label: '频道',
      prop: 'channel',
      formatter: (scope: IMoment) => {
        return <span>{scope.channel?.name}</span>;
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: 180,
      formatter: (scope: IMoment) => {
        return <span>{moment(scope.createTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '操作',
      fixed: 'right',
      width: 170,
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (scope: IMoment) => {
            router.push({
              path: MOMENT_DETAIL_PATH + `/${scope.id}`
            });
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (scope: IMoment) => {
            if (createMomentRef.value) {
              createMomentRef.value.showDrawer(scope);
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (scope: IMoment) => {
            const res = await deleteMoment<IResponseType<any>>(scope.id);
            if (res.status === 200) {
              search();
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
      tableData.params.keyword = e;
      gbTable.value.search();
    }
  }
]);
const search = () => {
  if (gbTable.value) gbTable.value.search();
};
</script>

<style lang="less">
.moment {
  .associate-video {
    cursor: pointer;
    color: #47b1ff;
  }
}
</style>

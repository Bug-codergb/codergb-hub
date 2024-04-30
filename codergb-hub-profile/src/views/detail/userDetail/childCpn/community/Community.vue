<template>
  <div class="community-container">
    <gb-table :table-data="tableData" />
  </div>
</template>
<script setup lang="tsx">
import { reactive, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { IMoment } from '@/types/moment';
import { MOMENT_DETAIL_PATH, VIDEO_DETAIL_PATH } from '@/router/constant';
interface IProps {
  userId: string;
}
const props = defineProps<IProps>();
const router = useRouter();
const tableData = reactive({
  url: `/moment/channel/${props.userId}`,
  method: 'post',
  params: {
    offset: 0,
    limit: 10
  },
  columns: [
    {
      label: '标题',
      prop: 'title',
      formatter: (scope: IMoment) => {
        return <span class="text-mul-line">{scope.title}</span>;
      }
    },
    {
      label: '内容',
      prop: 'content',
      formatter: (scope: IMoment) => {
        return <span class="text-mul-line">{scope.content}</span>;
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
      formatter: (scope: IMoment) => {
        return <span>{moment(scope.createTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '关联视频',
      prop: 'video',
      formatter: (scope: IMoment) => {
        return (
          <span class="text-mul-line video-name" onClick={() => videoRouter(scope)}>
            {scope.video.name}
          </span>
        );
      }
    },
    {
      label: '操作',
      prop: 'operation',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IMoment) => {
            momentRouter(row);
          }
        }
      ]
    }
  ]
});
const videoRouter = (item: IMoment) => {
  console.log(item);
  router.push({
    path: `${VIDEO_DETAIL_PATH}/${item.video.id}`
  });
};
const momentRouter = (item: IMoment) => {
  router.push({
    path: `${MOMENT_DETAIL_PATH}/${item.id}`
  });
};
</script>

<style lang="less">
.community-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .video-name {
    color: #47b1ff;
    cursor: pointer;
  }
}
</style>

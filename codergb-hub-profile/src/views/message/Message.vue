<template>
  <div class="g-inner-card table-box">
    <GbTable :table-data="tableData" />
  </div>
</template>
<script setup lang="tsx">
import { reactive, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import { User } from '@element-plus/icons-vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { IUserMsg } from '@/types/user/IUserMsg';
import { MOMENT_DETAIL_PATH, USER_DETAIL_PATH } from '@/router/constant';
import { IMoment } from '@/types/moment';
const instance = getCurrentInstance();
const router = useRouter();
const tableData = reactive({
  url: '/notify/all',
  pageSize: 10,
  method: 'post',
  data: {
    offset: 0,
    limit: 10
  },
  columns: [
    {
      label: '操作人',
      prop: 'operation',
      width: 120,
      formatter: (scope: any) => {
        return (
          <div class="base-user-info-icon" onClick={() => userRouter(scope.operation)}>
            <el-icon>
              <User />
            </el-icon>
            <span>{scope.operation.userName}</span>
          </div>
        );
      }
    },
    {
      label: '行为',
      prop: 'content',
      width: 100
    },
    {
      label: '类型',
      width: 110,
      formatter: (scope: any) => {
        return (
          <span>
            {scope.type === 'upload' ? (
              <el-tag>视频</el-tag>
            ) : scope.type === 'thumb-commentId' ? (
              <el-tag type="success">评论</el-tag>
            ) : scope.type === 'thumb-vId' ? (
              <el-tag type="warning">视频</el-tag>
            ) : scope.type === 'thumb-mId' ? (
              <el-tag type="info">动态</el-tag>
            ) : (
              <el-tag type="danger">用户</el-tag>
            )}
          </span>
        );
      }
    },
    {
      label: '内容',
      minWidth: 120,
      formatter: (scope: any) => {
        return (
          <span>
            {scope.type === 'upload' ? (
              <span
                class="text-mul-line notify-video"
                onClick={() => instance?.proxy?.$videoRouter(scope.video.id)}
              >
                {scope.video.name}
              </span>
            ) : scope.type === 'thumb-commentId' ? (
              <span class="text-mul-line">{scope.comment.content}</span>
            ) : scope.type === 'thumb-vId' ? (
              <span
                class="text-mul-line notify-video"
                onClick={() => instance?.proxy?.$videoRouter(scope.video.id)}
              >
                {scope.video.name}
              </span>
            ) : scope.type === 'thumb-mId' ? (
              <span class="text-mul-line notify-video" onClick={() => momentRouter(scope.moment)}>
                {scope.moment.title}
              </span>
            ) : (
              <span class="text-mul-line">{scope.user?.userName}</span>
            )}
          </span>
        );
      }
    },
    {
      label: '通知给',
      prop: 'userId',
      width: 120,
      formatter: (scope: any) => {
        return (
          <div class="base-user-info-icon" onClick={() => userRouter(scope.user)}>
            <el-icon>
              <User />
            </el-icon>
            <span>{scope.user?.userName}</span>
          </div>
        );
      }
    },
    {
      label: '是否已读',
      width: 90,
      formatter: (scope: any) => {
        return <span>{scope.isRead === 0 ? '否' : '是'}</span>;
      }
    },
    {
      label: '操作时间',
      formatter: (scope: any) => {
        return moment(scope.createTime).format('yyyy-MM-DD HH:mm');
      }
    }
  ]
});

const userRouter = (user?: IUserMsg) => {
  user &&
    router.push({
      path: `${USER_DETAIL_PATH}/${user.userId}`
    });
};
const momentRouter = (moment: IMoment) => {
  router.push({
    path: `${MOMENT_DETAIL_PATH}/${moment.id}`
  });
};
</script>

<style lang="less">
.message {
  .notify-video {
    cursor: pointer;
    color: #47b1ff;
  }
}
</style>

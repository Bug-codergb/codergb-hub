import { deletComment } from '@/network/comment';
import { IComment } from '@/types/comment/IComment';
import { ITableData } from '@/types/tableData/tableData';
import { User } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import moment from 'moment';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { IUserMsg } from '@/types/user/IUserMsg';
import { MOMENT_DETAIL_PATH, USER_DETAIL_PATH, VIDEO_DETAIL_PATH } from '@/router/constant';
const useTable = (notifyRef: any, gbTable: any, detailRef: any) => {
  const router = useRouter();

  const userRouter = (user: IUserMsg) => {
    router.push({
      path: `${USER_DETAIL_PATH}/${user.userId}`
    });
  };
  const commentRouter = (comment: IComment) => {
    console.log(comment);
    if (comment.video) {
      router.push({
        path: `${VIDEO_DETAIL_PATH}/${comment.video.id}`
      });
    } else if (comment.moment) {
      router.push({
        path: `${MOMENT_DETAIL_PATH}/${comment.moment.id}`
      });
    }
  };
  const tableData = reactive<ITableData<IComment>>({
    url: '/comment/all',
    params: {
      offset: 0,
      limit: 10,
      keyword: ''
    },
    method: 'post',
    pageSize: 10,
    columns: [
      {
        label: '内容',
        prop: 'content',
        minWidth: 120,
        formatter: (row: IComment) => {
          return <div class="text-nowrap">{row.content}</div>;
        }
      },
      {
        label: '创建人',
        prop: 'user',
        minWidth: 80,
        formatter: (row: IComment) => {
          return (
            <div class="comment-creator" onClick={() => userRouter(row.user)}>
              <el-icon>
                <User />
              </el-icon>
              <span>{row.user.userName}</span>
            </div>
          );
        }
      },
      {
        label: '创建时间',
        prop: 'createTime',
        formatter: (row: IComment) => {
          return moment(row.createTime).format('yyyy-MM-DD HH:mm');
        }
      },
      {
        label: '评论来自',
        prop: 'video',
        minWidth: 140,
        formatter: (row: IComment) => {
          return (
            <div class="comment-from" onClick={() => commentRouter(row)}>
              <el-tag
                type={row.video != null ? 'success' : row.moment != null ? 'warning' : 'danger'}
              >
                {row.video != null ? '视频' : row.moment != null ? '动态' : '评论'}
              </el-tag>
              <span>
                {row.video != null
                  ? row.video.name
                  : row.moment != null
                  ? row.moment.title
                  : (row.reply as IComment)?.content}
              </span>
            </div>
          );
        }
      },
      {
        prop: '',
        label: '操作',
        btns: [
          {
            text: '详情',
            type: 'primary',
            onClick: (row) => {
              if (detailRef.value) {
                detailRef.value.showDialog(row);
              }
            }
          },
          {
            text: '删除',
            type: 'danger',
            onClick: async (row) => {
              const result = await deletComment(row.id);
              if (result.status === 200) {
                if (gbTable.value) gbTable.value.search();
                ElMessage({
                  type: 'success',
                  message: '删除成功'
                });
              }
            }
          }
        ]
      }
    ]
  });
  return {
    tableData
  };
};
export default useTable;

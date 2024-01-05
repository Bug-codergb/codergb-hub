import { reactive } from 'vue';
import { ITableData } from '@/types/tableData/tableData';
import moment from 'moment';
import { IUserMsg } from '@/types/user/IUserMsg';
const useTable = (id: string, gbTable: any) => {
  const tableData = reactive<ITableData<IUserMsg & { createTime: string }>>({
    url: '/thumb/user/' + id,
    params: {
      offset: 0,
      limit: 10
    },
    method: 'get',
    pageSize: 10,
    columns: [
      {
        label: '头像',
        formatter: (user: IUserMsg) => {
          return <el-avatar shape="square" size={60} fit="contain" src={user.avatarUrl} />;
        }
      },
      {
        label: '用户名称',
        prop: 'userName'
      },
      {
        label: '用户',
        prop: '',
        btns: [
          {
            text: '详情',
            type: 'primary',
            onClick: () => {}
          }
        ]
      },
      {
        label: '点赞于',
        prop: 'createTime',
        formatter: (scope: IUserMsg & { createTime: string }) => {
          return <span>{moment(scope.createTime).format('yyyy-MM-DD HH:mm')}</span>;
        }
      }
    ]
  });

  return {
    tableData
  };
};
export default useTable;

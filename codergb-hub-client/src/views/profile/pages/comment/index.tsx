import { type FC, type ReactElement } from 'react';
import type React from 'react';
import { memo, useEffect, useState } from 'react';
import { type Map } from 'immutable';
import { Divider, Radio, Table } from 'antd';
import { CommentWrapper } from './style';
import { useSelector } from 'react-redux';
import { type IComment } from '../../../../types/comment/IComment';
import { type ILogin } from '../../../../types/login/ILogin';
import { getUserComment } from '../../../../network/comment';
import { type IPage } from '../../../../types/IPage';
import { type IResponseType } from '../../../../types/responseType';
import { columns } from './config';

const Comment: FC = (): ReactElement => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [comment, setComment] = useState<IComment[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  useEffect(() => {
    getUserComment<IResponseType<IPage<IComment[]>>>(login.userMsg.userId, 0, 6).then((data) => {
      if (data.status === 200) {
        setComment(data.data.list);
        setCount(data.data.count);
      }
    });
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IComment[]) => {
      console.log('selectedRows: ', selectedRows);
    }
  };
  const pageChangeHandle = (e: number) => {
    getUserComment<IResponseType<IPage<IComment[]>>>(login.userMsg.userId, (e - 1) * 6, 6).then(
      (data) => {
        if (data.status === 200) {
          setComment(data.data.list);
          setCount(data.data.count);
        }
      }
    );
  };
  return (
    <CommentWrapper>
      {comment && comment.length !== 0 && (
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection
          }}
          rowKey={'id'}
          columns={columns}
          dataSource={comment}
          pagination={{
            pageSize: 6,
            total: count,
            onChange: (e) => {
              pageChangeHandle(e);
            }
          }}
        />
      )}
    </CommentWrapper>
  );
};
export default memo(Comment);

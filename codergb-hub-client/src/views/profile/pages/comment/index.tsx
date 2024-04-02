import { type FC, type ReactElement } from 'react';
import type React from 'react';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { Divider, Empty, Radio, Table } from 'antd';
import { CommentWrapper } from './style';
import { useSelector } from 'react-redux';
import { type IComment } from '../../../../types/comment/IComment';
import { type ILogin } from '../../../../types/login/ILogin';
import { getUserComment } from '../../../../network/comment';
import { type IPage } from '../../../../types/IPage';
import { type IResponseType } from '../../../../types/responseType';
import { columns } from './config';
import { useLoginMsg } from '../../../../hook/useLoginMsg';

const Comment: FC = (): ReactElement => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [comment, setComment] = useState<IComment[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useLoginMsg();

  const navigate = useNavigate();
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
    setPageIndex(e);
    getUserComment<IResponseType<IPage<IComment[]>>>(login.userMsg.userId, (e - 1) * 6, 6).then(
      (data) => {
        if (data.status === 200) {
          setComment(data.data.list);
          setCount(data.data.count);
        }
      }
    );
  };
  const [pageIndex, setPageIndex] = useState<number>(1);
  const getAllUserComment = () => {
    getUserComment<IResponseType<IPage<IComment[]>>>(login.userMsg.userId, 0, 6).then((data) => {
      if (data.status === 200) {
        setPageIndex(1);
        setComment(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return (
    <CommentWrapper>
      {comment && comment.length !== 0 && (
        <Table
          rowKey={'id'}
          columns={columns(navigate, getAllUserComment)}
          dataSource={comment}
          pagination={{
            pageSize: 6,
            total: count,
            current: pageIndex,
            onChange: (e) => {
              pageChangeHandle(e);
            }
          }}
        />
      )}
      {(!comment || comment.length === 0) && (
        <div className="empty-container">
          <Empty description="您还没有发布评论" />
        </div>
      )}
    </CommentWrapper>
  );
};
export default memo(Comment);

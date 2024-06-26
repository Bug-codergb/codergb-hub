import type React from 'react';
import { memo, type FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { Divider, Radio, Table, Empty } from 'antd';
import { MessageWrapper } from './style';
import { type INotify } from '../../../../types/message';
import { type ILogin } from '../../../../types/login/ILogin';
import { useSelector } from 'react-redux';
import { getAllNotify } from '../../../../network/notify';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import { columns } from './config';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
const Message: FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [nofity, setNotify] = useState<INotify[]>([]);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  const login = useLoginMsg();
  const pageSize = 7;
  useEffect(() => {
    getAllNotify<IResponseType<IPage<INotify[]>>>(login.userMsg.userId, 0, pageSize).then(
      (data) => {
        if (data.status === 200) {
          setNotify(data.data.list);
          setCount(data.data.count);
        }
      }
    );
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: INotify[]) => {
      console.log('selectedRows: ', selectedRows);
    }
  };
  const pageChangeHandle = (e: number) => {
    getAllNotify<IResponseType<IPage<INotify[]>>>(
      login.userMsg.userId,

      (e - 1) * pageSize,
      pageSize
    ).then((data) => {
      if (data.status === 200) {
        setNotify(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return (
    <MessageWrapper>
      {nofity && nofity.length !== 0 && (
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection
          }}
          rowKey={'id'}
          columns={columns(navigate)}
          dataSource={nofity}
          pagination={{
            pageSize,
            total: count,
            onChange: (e) => {
              pageChangeHandle(e);
            }
          }}
        />
      )}
      {(!nofity || nofity.length === 0) && (
        <div className="empty-container">
          <Empty description="暂无消息" />
        </div>
      )}
    </MessageWrapper>
  );
};
export default memo(Message);

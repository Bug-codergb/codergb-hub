import React, { memo, type FC, type ReactElement, useState, useEffect } from 'react';
import { Popconfirm, Button, message } from 'antd';
import { type Map } from 'immutable';
import { MoreOutlined } from '@ant-design/icons';
import { UserBlockListWrapper } from './style';
import { type IBlock } from '../../../../../../../../../../types/block/IBlock';
import { deleteUserBlock, getUserBlock } from '../../../../../../../../../../network/block';
import { type IResponseType } from '../../../../../../../../../../types/responseType';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../../../../../../../../../types/login/ILogin';
import EmptyHolder from '../../../../../../../../../../components/common/emptyHolder';
import { useLoginMsg } from '../../../../../../../../../../hook/useLoginMsg';
const UserBlockList: FC = (): ReactElement => {
  const [block, setBlock] = useState<IBlock[]>([]);
  const login = useLoginMsg();
  useEffect(() => {
    if (login && login.userMsg) {
      getUserBlock<IResponseType<IBlock[]>>(login.userMsg.userId).then((data) => {
        if (data.status === 200) {
          setBlock(data.data);
        }
      });
    }
  }, [login]);

  const confirmHandler = (item: IBlock) => {
    deleteUserBlock(login.userMsg.userId, item.id).then((res) => {
      if (res.status === 200) {
        message.destroy();
        message.success('移除成功');
        getUserBlock<IResponseType<IBlock[]>>(login.userMsg.userId).then((data) => {
          if (data.status === 200) {
            setBlock(data.data);
          }
        });
      }
    });
  };

  return (
    <UserBlockListWrapper>
      <ul className="user-block-list">
        {block &&
          block.length !== 0 &&
          block.map((item) => {
            return (
              <li key={item.id}>
                <div className="left-container">
                  <div className="layout-icon"> </div>
                  <div className="block">
                    <div className="block-name">{item.name}</div>
                    <div className="block-desc">{item.description}</div>
                  </div>
                </div>
                <div className="right-container">
                  <Popconfirm
                    title="确定移除当前板块吗?"
                    onConfirm={() => confirmHandler(item)}
                    onCancel={() => {}}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="link" danger>
                      移除
                    </Button>
                  </Popconfirm>
                </div>
              </li>
            );
          })}
        {block && block.length == 0 && (
          <EmptyHolder msg={'请添加板块，添加后在您的首页显示'} padding={70} />
        )}
      </ul>
    </UserBlockListWrapper>
  );
};
export default memo(UserBlockList);

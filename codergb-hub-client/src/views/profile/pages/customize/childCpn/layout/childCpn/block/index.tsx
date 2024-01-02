import React, { memo, FC, ReactElement, useState } from 'react';
import { Dropdown, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { BlockPageWrapper } from './style';
import BlockList from './childCpn/blockList';
import UserBlockList from './childCpn/userBlockList';
const BlockPage: FC = (): ReactElement => {
  const [keyIndex, setKeyIndex] = useState<number>(1);
  const addBlockHandle = () => {
    setKeyIndex(keyIndex + 1);
  };
  return (
    <BlockPageWrapper>
      <div className="block-header">
        <div className="header-left">
          <div className="name">精选板块</div>
          <div className="desc">自定义频道首页的布局</div>
        </div>
        <div className="header-right">
          <div className="add-icon">
            <PlusOutlined className="add" />
          </div>
          <Dropdown
            overlayClassName={'profile-drop-style'}
            placement={'topLeft'}
            trigger={['click']}
            overlay={<BlockList addBlock={() => addBlockHandle()} />}
          >
            <div className="add-label">添加板块</div>
          </Dropdown>
        </div>
      </div>
      <UserBlockList key={keyIndex} />
    </BlockPageWrapper>
  );
};
export default memo(BlockPage);

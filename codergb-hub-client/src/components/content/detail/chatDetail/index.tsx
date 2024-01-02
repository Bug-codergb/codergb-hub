import React, { memo, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderTop from '../../../../components/header/index';
import { ChatWrapper } from './style';
import ChatWindow from './childCpn/chatWindow';
const { Header, Footer, Sider, Content } = Layout;
const ChatDetail: FC = () => {
  const location = useLocation();
  const { userId, userName } = location.state;
  return (
    <ChatWrapper>
      <Layout>
        <Header>
          <HeaderTop />
        </Header>
        <Content className="gb-content">
          <div className="gb-content-inner">
            <div className="title">我的消息</div>
            <ChatWindow userId={userId} userName={userName} />
          </div>
        </Content>
      </Layout>
    </ChatWrapper>
  );
};
export default memo(ChatDetail);

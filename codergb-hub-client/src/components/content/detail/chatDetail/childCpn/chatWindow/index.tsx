import React,{memo,FC} from 'react';
import { Layout ,Input} from 'antd';
import {
  ChatWindowWrapper
} from "./style";
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
interface IProps{
  userId:string;
  userName:string
}
const ChatWindow:FC<IProps>=(props)=>{
  const { userName,userId }=props;
  return <ChatWindowWrapper>
    <Layout>
      <Sider className="gb-chat-side">
        <div className="recent-title">近期消息</div>
      </Sider>
      <Layout>
        <Header className="gb-chat-header">{userName}</Header>
        <Content className='gb-chat'>Content</Content>
        <Footer className="gb-chat-footer">
          <div className="chat-inp">
            <TextArea rows={3} maxLength={500} />
          </div>
          <div className="publish-container">
            <div className="publish-btn">发布</div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  </ChatWindowWrapper>
}
export default memo(ChatWindow)
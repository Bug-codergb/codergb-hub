import React, { memo, type FC } from 'react';
import { ProfileWrapper } from './style';
import { Layout } from 'antd';
import HeaderTop from '../../components/header';
import NavList from '../../components/navList';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const Profile: FC = () => {
  return (
    <ProfileWrapper>
      <Layout>
        <Layout>
          <Header>
            <HeaderTop />
          </Header>
          <Layout>
            <Sider>
              <NavList isHome={false} />
            </Sider>
            <Content className="g-navigate-content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ProfileWrapper>
  );
};
export default memo(Profile);

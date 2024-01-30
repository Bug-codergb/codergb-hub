import React, { memo, type FC, type ReactElement, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderTop from '../../components/header';
import { HomeWrapper } from './style';
import NavList from '../../components/navList';
const { Header, Footer, Sider, Content } = Layout;
const Home: FC = (): ReactElement => {
  const location = useLocation();

  const routeElement = useRef<HTMLDivElement>(null);
  return (
    <HomeWrapper>
      <Layout>
        <Layout>
          <Header>
            <HeaderTop />
          </Header>
          <Layout>
            <Sider className={'codergb-sider'}>
              <NavList isHome={true} />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
};
export default memo(Home);

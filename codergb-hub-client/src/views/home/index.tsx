import React, { memo, type FC, type ReactElement } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Outlet, useLocation, useOutlet } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderTop from '../../components/header';
import { HomeWrapper } from './style';
import NavList from '../../components/navList';
const { Header, Footer, Sider, Content } = Layout;
const Home: FC = (): ReactElement => {
  const location = useLocation();
  const currentOutlet = useOutlet();
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
              <SwitchTransition>
                <CSSTransition
                  key={location.key}
                  unmountOnExit={true}
                  classNames={'g-page'}
                  timeout={200}
                >
                  {() => {
                    return <div className="g-page">{currentOutlet}</div>;
                  }}
                </CSSTransition>
              </SwitchTransition>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
};
export default memo(Home);

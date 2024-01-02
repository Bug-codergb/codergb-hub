import React, { ReactElement } from 'react';
import { Button, Result } from 'antd';
import withRouter from '../../hook/withRouter/withRouter';

interface IProps {
  children: ReactElement;
  router: any;
}
interface IState {
  hasError: boolean;
}
class ErrorBoundary extends React.PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  loginRouter() {
    const { navigate } = this.props.router;
    navigate('/home/recommend');
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="404"
          title="错误"
          subTitle="抱歉，页面好像出现了一个未知错误，请点击下方按钮跳转至首页"
          extra={
            <Button type="primary" onClick={() => this.loginRouter()}>
              首页
            </Button>
          }
        />
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);

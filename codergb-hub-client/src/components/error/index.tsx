import React, {ReactElement} from "react";
import {Button, Result} from "antd";
interface IProps{
  children:ReactElement
}
interface IState{
  hasError:boolean,
}
class ErrorBoundary extends React.PureComponent<IProps,IState> {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error:any) {
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    console.log(error, errorInfo);
  }

  loginRouter(){

  }
  render() {
    if (this.state.hasError) {
      return <Result
          status="404"
          title="错误"
          subTitle="抱歉，页面好像出现了一个未知错误，请点击下方按钮跳转至登录页面"
          extra={<Button type="primary" onClick={()=>this.loginRouter}>登录</Button>}
      />
    }

    return this.props.children;
  }
}
export default ErrorBoundary
import React, { memo, type FC, type ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginWrappers } from './style';
import { useDispatch } from 'react-redux';
import { loginAction } from './store/actionCreators';
import { type Dispatch } from 'redux';
const Login: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();
  const onFinish = useCallback((values: any) => {
    const { username, password } = values;
    dispatch(loginAction(username, password, navigate));
  }, []);
  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, []);
  return (
    <LoginWrappers>
      <div className="login-bgc">
        <div className="signup-space">
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
        </div>
      </div>
      <div className="login-inner">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
            <Button>注册</Button>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWrappers>
  );
};
export default memo(Login);

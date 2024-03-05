import React, { memo, type FC, type ReactElement, useState, type ChangeEvent } from 'react';
import { message } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RegisterWrapper } from './style';
import { useDispatch } from 'react-redux';
import { type Dispatch } from 'redux';
import { registerReq } from '../../network/login';

const Register: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onFinish = () => {
    if (!username || !password) {
      message.destroy();
      message.warning('用户名或者密码不能为空');
      return;
    }
    registerReq(username, password).then((res) => {
      if (res.status === 200) {
        message.success('账号注册成功');
        navigate('/login');
      }
    });
  };
  const register = () => {
    navigate('/login');
  };
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <RegisterWrapper>
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
        <h2 className="title">codergb-hub</h2>
        <h3 className="tip">添加一个codergb-hub账号</h3>
        <div className="form-item">
          <div className="label">用户名</div>
          <input
            className="inp"
            value={username}
            onChange={(e) => {
              usernameChange(e);
            }}
          />
        </div>
        <div className="form-item">
          <div className="label">密&nbsp;&nbsp;码</div>
          <input
            className="inp"
            value={password}
            type="password"
            autoComplete="new-password"
            onChange={(e) => {
              passwordChange(e);
            }}
          />
        </div>
        <div className="form-item">
          <button
            className="btn"
            onClick={() => {
              register();
            }}
          >
            <LeftOutlined />
            <span className="login-label">登录</span>
          </button>
          <div className="block"></div>
          <button
            className="btn login"
            onClick={() => {
              onFinish();
            }}
          >
            注册
          </button>
        </div>
      </div>
    </RegisterWrapper>
  );
};
export default memo(Register);

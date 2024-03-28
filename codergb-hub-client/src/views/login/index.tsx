import React, {
  memo,
  type FC,
  type ReactElement,
  useCallback,
  useState,
  type ChangeEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginWrappers } from './style';
import { useDispatch } from 'react-redux';
import { loginAction } from './store/asyncThunk';
import { type Dispatch } from 'redux';
const Login: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onFinish = () => {
    dispatch(loginAction({ username, password, navigate }));
  };
  const register = () => {
    console.log(1);
    navigate('/register', {
      replace: false
    });
  };
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
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
        <h2 className="title">codergb-hub账号登录</h2>
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
            <span className="register-label">去注册</span>
            <RightOutlined />
          </button>
          <div className="block"></div>
          <button
            className="btn login"
            onClick={() => {
              onFinish();
            }}
          >
            登录
          </button>
        </div>
      </div>
    </LoginWrappers>
  );
};
export default memo(Login);

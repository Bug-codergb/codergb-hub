import React, {
  memo,
  type FC,
  type ReactElement,
  useEffect,
  useState,
  type MouseEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';
import { Card, Row, Col, Button, Modal, Form, Input, message } from 'antd';
import { SettingWrapper } from './style';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import moment from 'moment';
import { editUserPass, getLoginLog } from '../../../../network/login';
import { type IResponseType } from '../../../../types/responseType';

const { confirm } = Modal;
interface ILoinLog {
  count: number;
  date: string;
}
const Setting: FC = (): ReactElement => {
  const loginState = useLoginMsg();
  useEffect(() => {
    loginState &&
      loginState.userMsg &&
      getLoginLog<IResponseType<ILoinLog[]>>(loginState.userMsg.userId).then((res) => {
        if (res.status === 200) {
          const xAxis = [];
          const yAxis = [];
          for (const item of res.data) {
            xAxis.push(item.date);
            yAxis.push(item.count);
          }
          const chartDom = document.querySelector('.login-log-chart-container');
          const myChart = echarts.init(chartDom);
          let option;

          option = {
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '2%',
              right: '4%',
              bottom: '2%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: xAxis
            },
            yAxis: {
              type: 'value',
              name: '登录次数'
            },
            series: [
              {
                name: '登录次数',
                data: yAxis,
                type: 'line',
                areaStyle: {}
              }
            ]
          };

          option && myChart.setOption(option);
          window.addEventListener('resize', () => {
            myChart.resize();
          });
        }
      });
  }, [loginState.userMsg.userId]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  useEffect(() => {
    setUsername(loginState.userMsg.userName);
  }, [loginState.userMsg.userName]);
  const changeUserHandler = () => {
    setUsername(loginState.userMsg.userName);
    setPassword('');
    setIsModalOpen(true);
  };

  const navigate = useNavigate();
  const handleOk = () => {
    message.destroy();
    if (username.trim().length == 0) {
      message.warn('用户名不能为空');
      return;
    }
    if (password.trim().length == 0) {
      message.warn('密码不能为空');
      return;
    }
    editUserPass(username, password).then((res) => {
      if (res.status === 200) {
        setIsModalOpen(false);
        message.info('更新成功');
        navigate('/login', {
          replace: false
        });
      }
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const userNameChange = (e: MouseEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const passwordChange = (e: MouseEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const logoff = () => {
    console.log(12);
    confirm({
      title: '确定要注销当前账号么?',
      icon: <ExclamationCircleOutlined />,
      content: '注销账号则删除用户以及频道中的所有数据',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  return (
    <SettingWrapper>
      <Card
        className="g-card"
        title="基本信息"
        style={{ width: '100%' }}
        extra={
          <>
            <Button
              type="link"
              onClick={() => {
                changeUserHandler();
              }}
            >
              修改
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                logoff();
              }}
            >
              注销账号
            </Button>
          </>
        }
      >
        <p className="description">
          您于{moment(loginState.userDetail.createTime).format('yyyy-MM-DD HH:mm')}
          加入codergb-hub，codergb-hub陪你走过了
          {moment(new Date()).diff(moment(loginState.userDetail.createTime), 'days')}天
        </p>
      </Card>
      <Card title="用户活跃度" style={{ width: '100%' }}>
        <div className="login-log-chart-container"></div>
      </Card>

      <Modal
        title="修改用户名或者密码"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="取消"
        okText="确定"
        className="edit-user-info"
        maskClosable={false}
      >
        <input
          value={username}
          onInput={(e) => {
            userNameChange(e);
          }}
          className="g-info-item"
          placeholder="请输入用户名"
        />
        <input
          onInput={(e) => {
            passwordChange(e);
          }}
          type="password"
          autoComplete="new-password"
          value={password}
          className="g-info-item"
          placeholder="请输入密码"
        />
      </Modal>
    </SettingWrapper>
  );
};
export default memo(Setting);

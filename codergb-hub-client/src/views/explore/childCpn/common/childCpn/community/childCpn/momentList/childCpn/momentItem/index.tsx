import React, { memo, type FC, type ReactElement } from 'react';
import { MomentItemWrapper } from './style';
import { type IMoment } from '../../../../../../../../../../types/moment';
import { useNavigate } from 'react-router-dom';
import {
  cancelThumb,
  cancelTread,
  thumb,
  tread
} from '../../../../../../../../../../network/thumb';
import { Dropdown, Menu, message } from 'antd';
import timeMoment from 'moment';
import { type Dispatch } from 'redux';
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  MoreOutlined
} from '@ant-design/icons';
import { useThumb, useTread } from '../../../../../../../../../../hook/useThumb';
import { useDispatch } from 'react-redux';
import { changeUserDetailAction } from '../../../../../../../../../login/store/asyncThunk';
import { useLoginMsg } from '../../../../../../../../../../hook/useLoginMsg';

interface IProps {
  moment: IMoment;
  deleteHandler: () => void;
  thumbHandler: () => void;
}
const MomentItem: FC<IProps> = (props): ReactElement => {
  const { moment, deleteHandler, thumbHandler: propThumber } = props;

  const isThumb = useThumb('moment', moment.id);
  const isTread = useTread('moment', moment.id);
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();
  const loginState = useLoginMsg();
  const momentRouter = (item: IMoment) => {
    navigate('/home/moment', {
      replace: false,
      state: {
        id: item.id
      }
    });
  };
  const drodownHandler = (e: any, item: IMoment) => {
    const { key } = e;
    if (key === 'del') {
      deleteHandler();
    }
  };

  const thumbHandler = async (item: IMoment) => {
    if (isThumb) {
      const result = await cancelThumb(item.id, 'mId');
      if (result.status === 200) {
        propThumber();
      }
    } else {
      const result = await thumb(item.id, 'mId');
      if (result.status === 200) {
        propThumber();
      }
    }
    if (loginState && loginState.userMsg) {
      dispatch(changeUserDetailAction({ userId: loginState.userMsg.userId, setMsg: false }));
    }
  };
  const treadHandler = async (item: IMoment) => {
    if (!isTread) {
      const result = await tread(item.id, 'mId');
      if (result.status === 200) {
        propThumber();
      }
    } else {
      const result = await cancelTread(item.id, 'mId');
      if (result.status === 200) {
        propThumber();
      }
    }
    if (loginState && loginState.userMsg) {
      dispatch(changeUserDetailAction({ userId: loginState.userMsg.userId, setMsg: false }));
    }
  };
  return (
    <MomentItemWrapper>
      <div className="avatar-container">
        <img src={moment.user.avatarUrl} />
      </div>
      <div className="right-container">
        {moment.user.userId === loginState.userMsg.userId && (
          <div className="operation">
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu
                  onClick={(e) => {
                    drodownHandler(e, moment);
                  }}
                >
                  <Menu.Item key="del">
                    <div>删除</div>
                  </Menu.Item>
                </Menu>
              }
              placement="bottom"
            >
              <MoreOutlined className="more-icon" />
            </Dropdown>
          </div>
        )}
        <div className="g-user-info">
          <p className="user-name">{moment.user.userName}</p>
          <p className="create-time">{timeMoment(moment.createTime).fromNow()}</p>
        </div>
        <p
          className="title"
          onClick={() => {
            momentRouter(moment);
          }}
        >
          {moment.title}
        </p>
        <p className="content">{moment.content}</p>
        <div
          className="video-container"
          onClick={() => {
            momentRouter(moment);
          }}
        >
          <img src={moment.video.picUrl} />
        </div>
        <div className="thumb">
          <div
            className="thumb-inner"
            onClick={() => {
              thumbHandler(moment);
            }}
          >
            {!isThumb && <LikeOutlined className={`thumb-icon`} />}
            {isThumb && <LikeFilled className={`thumb-icon`} />}
            <span className="label">{moment.thumb}</span>
          </div>
          <div
            className="tread"
            onClick={() => {
              treadHandler(moment);
            }}
          >
            {!isTread && <DislikeOutlined className="tread-icon" />}
            {isTread && <DislikeFilled className="tread-icon" />}
          </div>
        </div>
      </div>
    </MomentItemWrapper>
  );
};
export default memo(MomentItem);

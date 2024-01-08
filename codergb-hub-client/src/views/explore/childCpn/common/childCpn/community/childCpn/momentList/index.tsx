import React, {
  memo,
  type FC,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  type Ref,
  Fragment
} from 'react';
import { useNavigate } from 'react-router-dom';
import { MomentListWrapper } from './style';
import { deleteMoment, getChannelMoment } from '../../../../../../../../network/moment';
import { type IMoment } from '../../../../../../../../types/moment';
import { type IResponseType } from '../../../../../../../../types/responseType';
import { type IPage } from '../../../../../../../../types/IPage';
import timeMoment from 'moment';
import { Dropdown, Menu, Pagination, message } from 'antd';
import Operation from './childCpn/operation';
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  MoreOutlined
} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
interface IMomentList {
  getChannelMomentReq: (id: string, offset: number, limit: number) => void;
}
interface IProps {
  cId: string;
  ref: Ref<IMomentList>;
}
const MomentList: FC<IProps> = forwardRef((props, propsRef) => {
  const { cId } = props;
  const [total, setTotal] = useState<number>(0);
  const [moment, setMoment] = useState<IMoment[]>([]);
  const getChannelMomentReq = async (id: string, offset: number, limit: number) => {
    const result = await getChannelMoment<IResponseType<IPage<IMoment[]>>>(id, offset, limit);
    if (result.status === 200) {
      setTotal(result.data.count);
      setMoment(result.data.list);
    }
  };
  useImperativeHandle(propsRef, () => {
    return {
      getChannelMomentReq
    };
  });
  useEffect(() => {
    getChannelMomentReq(cId, 0, 10).then(() => {});
  }, [cId]);
  const pageChange = (e: number) => {
    getChannelMomentReq(cId, (e - 1) * 10, 10).then(() => {});
  };
  const navigate = useNavigate();
  const momentRouter = (item: IMoment) => {
    navigate('/home/moment', {
      replace: false,
      state: {
        id: item.id
      }
    });
  };
  const drodownHandler = (e: any, item: IMoment) => {
    console.log(e);
    const { key } = e;
    if (key === 'del') {
      deleteMoment(item.id).then((res) => {
        if (res.status === 200) {
          message.info('删除成功');
          getChannelMomentReq(cId, 0, 10).then(() => {});
        }
      });
    }
  };
  return (
    <MomentListWrapper>
      <ul className="moment-list">
        {moment &&
          moment.length !== 0 &&
          moment.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="avatar-container">
                  <img src={item.user.avatarUrl} />
                </div>
                <div className="right-container">
                  <div className="operation">
                    <Dropdown
                      trigger={['click']}
                      overlay={
                        <Menu
                          onClick={(e) => {
                            drodownHandler(e, item);
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
                  <div className="g-user-info">
                    <p className="user-name">{item.user.userName}</p>
                    <p className="create-time">{timeMoment(item.createTime).fromNow()}</p>
                  </div>
                  <p
                    className="title"
                    onClick={() => {
                      momentRouter(item);
                    }}
                  >
                    {item.title}
                  </p>
                  <p className="content">{item.content}</p>
                  <div
                    className="video-container"
                    onClick={() => {
                      momentRouter(item);
                    }}
                  >
                    <img src={item.video.picUrl} />
                  </div>
                  <div className="thumb">
                    <div className="thumb-inner">
                      <LikeOutlined className={`thumb-icon`} />
                      <LikeFilled className={`thumb-icon`} />
                      <span className="label">14万</span>
                    </div>
                    <div className="tread">
                      <DislikeOutlined className="tread-icon" />
                      <DislikeFilled className="tread-icon" />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      {total > 10 && (
        <Fragment>
          <div className={'page'}>
            <Pagination
              defaultCurrent={1}
              pageSize={10}
              total={total}
              onChange={(e) => {
                pageChange(e);
              }}
            />
          </div>
        </Fragment>
      )}
    </MomentListWrapper>
  );
});
export default memo(MomentList);
/*
  
*/

import React, { memo, FC, ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MomentDetailWrapper } from './style';
import { getMomentDetail } from '../../../../network/moment';
import { IMoment } from '../../../../types/moment';
import { IResponseType } from '../../../../types/responseType';
import Publish from './childCpn/publish';
const MomentDetail: FC = (): ReactElement => {
  const location = useLocation();
  const { id } = location.state;
  const [moment, setMoment] = useState<IMoment>();
  useEffect(() => {
    getMomentDetail<IResponseType<IMoment>>(id).then((data) => {
      if (data.status === 200) {
        setMoment(data.data);
      }
    });
  }, [id]);
  const navigate = useNavigate();
  const handleVideoRoute = (moment: IMoment) => {
    moment.video && navigate('/videoDetail/' + moment.video.id + '/source', {});
  };
  return (
    <MomentDetailWrapper>
      <div className="moment-header">
        {moment && (
          <div className="left-container">
            <img src={moment?.user.avatarUrl} />
          </div>
        )}
        {moment && (
          <div className="right-container">
            <p className="user-name">{moment.user.userName}</p>
            <p className="title">{moment.title}</p>
            <p className="content">{moment.content}</p>
            <div className="img-container" onClick={() => handleVideoRoute(moment)}>
              <img src={moment.video.picUrl} />
            </div>
          </div>
        )}
      </div>
      <div className="moment-body">{moment && <Publish id={moment.id} />}</div>
    </MomentDetailWrapper>
  );
};
export default memo(MomentDetail);

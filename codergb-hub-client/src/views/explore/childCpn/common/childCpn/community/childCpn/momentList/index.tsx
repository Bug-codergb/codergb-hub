import {
  memo,
  type FC,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  type Ref,
  Fragment
} from 'react';
import { MomentListWrapper } from './style';
import { deleteMoment, getChannelMoment } from '../../../../../../../../network/moment';
import { type IMoment } from '../../../../../../../../types/moment';
import { type IResponseType } from '../../../../../../../../types/responseType';
import { type IPage } from '../../../../../../../../types/IPage';

import { Pagination, message } from 'antd';
import MomentItem from './childCpn/momentItem';
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

  const deleteHandler = (item: IMoment) => {
    deleteMoment(item.id).then((res) => {
      if (res.status === 200) {
        message.info('删除成功');
        getChannelMomentReq(cId, 0, 10).then(() => {});
      }
    });
  };
  const thumbHandler = () => {
    getChannelMomentReq(cId, 0, 10).then(() => {});
  };
  return (
    <MomentListWrapper>
      <ul className="moment-list">
        {moment &&
          moment.length !== 0 &&
          moment.map((item, index) => {
            return (
              <li key={item.id}>
                <MomentItem
                  moment={item}
                  thumbHandler={thumbHandler}
                  deleteHandler={() => {
                    deleteHandler(item);
                  }}
                />
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

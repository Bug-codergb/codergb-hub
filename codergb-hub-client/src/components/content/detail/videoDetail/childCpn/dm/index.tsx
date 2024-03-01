import React, { memo, type FC, useState, type FormEvent } from 'react';
import { DmWrapper } from './style';
import { pubDm } from '../../../../../../network/dm';
import moment from 'moment';
import { message } from 'antd';
interface IProps {
  id: string;
  time: string;
  pub: () => void;
}
const Dm: FC<IProps> = (props) => {
  const { id, time, pub } = props;
  const [content, setContent] = useState<string>('');
  const dmInp = (e: FormEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };
  const pubHandle = () => {
    if (content && content.trim().length !== 0) {
      pubDm(id, content, time).then((data) => {
        if (data.status === 200) {
          setContent('');
          pub();
        }
      });
    } else {
      message.destroy();
      message.warning('弹幕内容不能为空');
    }
  };
  return (
    <DmWrapper>
      <span>已装填2条弹幕</span>
      <div className="dm-outer">
        <input
          type={'text'}
          value={content}
          onInput={(e) => {
            dmInp(e);
          }}
          placeholder={'发个弹幕,见证当下'}
        />
        <div
          className="pub"
          onClick={(e) => {
            pubHandle();
          }}
        >
          发送
        </div>
      </div>
    </DmWrapper>
  );
};
export default memo(Dm);

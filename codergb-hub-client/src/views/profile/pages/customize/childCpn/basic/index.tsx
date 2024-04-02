import React, { memo, type FC, type ReactElement, type FormEvent, useState } from 'react';
import { type Map } from 'immutable';
import { Input, notification } from 'antd';
import { BasicWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { type IChannel } from '../../../../../../types/channel/IChannel';
import { updateChannel } from '../../../../../../network/channel';
import { type Dispatch } from 'redux';
import { changeChannelAction } from '../../store/actionCreators';
import { type ILogin } from '../../../../../../types/login/ILogin';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
const { TextArea } = Input;
const Basic: FC = (): ReactElement => {
  const channel = useSelector<{ channelReducer: { channel: IChannel } }, IChannel>((state) => {
    return state.channelReducer.channel as IChannel;
  });
  const login = useLoginMsg();
  const [name, setName] = useState<string>(channel.name);
  const [desc, setDesc] = useState<string>(channel.description);
  const dispatch = useDispatch<Dispatch<any>>();
  const channelNameInp = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const channelDescInp = (e: FormEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value);
  };
  const updateChannelHandle = async () => {
    const result = await updateChannel(channel.id, {
      description: desc,
      name
    });
    if (result.status === 200) {
      dispatch(changeChannelAction(login.userMsg.userId));
      notification.success({
        message: `通知`,
        description: '您的信息更新成功',
        placement: 'bottomLeft'
      });
    }
  };
  return (
    <BasicWrapper>
      <div className="publish-outer">
        <button
          disabled={!name || name.trim().length === 0 || !desc || desc.trim().length === 0}
          onClick={async (e) => {
            await updateChannelHandle();
          }}
        >
          发布
        </button>
      </div>
      <div className="name-label-first">名称</div>
      <p className="desc-label">选用的频道名称要能反映您的身份和内容。</p>
      <Input
        placeholder="请输入人频道名称"
        value={name}
        onInput={(e) => {
          channelNameInp(e);
        }}
      />
      <div className="name-label-second">说明</div>
      <p className="desc-label">请介绍您的频道，方便大家认识你</p>
      <TextArea
        rows={4}
        onInput={(e) => {
          channelDescInp(e);
        }}
        value={desc}
        placeholder="请输入简介"
        maxLength={200}
      />
    </BasicWrapper>
  );
};
export default memo(Basic);

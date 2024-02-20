import React, {
  memo,
  type FC,
  type ReactElement,
  useState,
  type FormEvent,
  useImperativeHandle,
  forwardRef,
  type Ref,
  type MouseEvent
} from 'react';
import { Modal, Input, Select, notification, Menu, message } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import type { NotificationPlacement } from 'antd/es/notification';
import { AddWrapper } from './style';
import {
  ADD_PLAYLIST,
  ADD_QUEUE,
  ADD_WATCH_LATER,
  addList,
  type IAddType
} from '../../../constant/addList';
import Playlist from '../playlist';
import { addVideoPlaylist, createPlaylist } from '../../../network/playlist';
import { type IPlaylist } from '../../../types/playlist/IPlaylist';
import { addLater } from '../../../network/later';
import { useDispatch } from 'react-redux';
import { changeQueue } from './store/actionCreators';
import { getVideoDetail } from '../../../network/video';
import { type IResponseType } from '../../../types/responseType';
import { type IVideo } from '../../../types/video/IVideo';

const { Option } = Select;
interface IAdd {
  liClick: (item: IAddType) => void;
}
interface IProps {
  id: string;
  ref: Ref<IAdd> | null;
}
const Add: FC<IProps> = forwardRef((props, propsRef): ReactElement => {
  const { id } = props;
  const [isShowAddPlay, setIsShowPlay] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [keyIndex, setKeyIndex] = useState<number>(1);

  const [name, setName] = useState<string>('');
  const [isPublic, setIsPublic] = useState<number>(0);

  const dispatch = useDispatch();
  const openNotification = (placement: NotificationPlacement) => {
    notification.info({
      message: `已成功添加至稍后观看`,
      description: '在"稍后观看"查看您添加的视频',
      placement
    });
  };

  const liClick = (item: IAddType) => {
    console.log(item);
    if (item.name === ADD_PLAYLIST) {
      setIsShowPlay(true);
      return;
    }
    if (item.name === ADD_WATCH_LATER) {
      addLater(id)
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            openNotification('bottomLeft');
          }
        })
        .catch((err) => {});
      return;
    }
    if (item.name === ADD_QUEUE) {
      console.log(item.id);
      if (item.id) {
        getVideoDetail<IResponseType<IVideo>>(item.id).then((res) => {
          if (res.status === 200) {
            dispatch(changeQueue(res.data));
            message.success('成功添加到播放队列');
          }
        });
      }
      //
    }
  };

  useImperativeHandle<IAdd, IAdd>(propsRef, () => {
    return {
      liClick
    };
  });
  const cancelHandle = () => {
    setIsShowPlay(false);
  };
  const nameInpHandle = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const selectPublicHandle = (value: number) => {
    setIsPublic(value);
  };
  // 创建播放列表
  const createHandle = () => {
    if (name) {
      createPlaylist(name, name, isPublic).then((data) => {
        if (data.status === 200) {
          setIsCreate(false);
          setKeyIndex(keyIndex + 1);
        }
      });
    }
  };
  const checkHandle = (checked: boolean, item: IPlaylist) => {
    if (checked) {
      addVideoPlaylist(id, item.id).then((data) => {
        if (data.status === 200) {
          notification.info({
            message: `已成功添加至${item.name}`,
            description: `在"${item.name}"查看您添加的视频`,
            placement: 'bottomLeft'
          });
        }
      });
    }
  };

  const createPlaylistHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsCreate(true);
  };
  return (
    <AddWrapper>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Modal
          key={id}
          title="保存到..."
          width={'30%'}
          destroyOnClose={true}
          maskClosable={false}
          open={isShowAddPlay}
          onCancel={(e) => {
            cancelHandle();
          }}
          footer={
            !isCreate
              ? [
                  <div className="add-new-playlist">
                    <PlusOutlined />
                    <div
                      className="add-label"
                      onClick={(e) => {
                        createPlaylistHandler(e);
                      }}
                    >
                      新建播放列表
                    </div>
                  </div>
                ]
              : [
                  <div className="create-playlist">
                    <p>名称</p>
                    <Input
                      placeholder="请输入播放列表名称"
                      showCount
                      maxLength={20}
                      onInput={(e) => {
                        nameInpHandle(e);
                      }}
                    />
                    <p>隐私设置</p>
                    <Select
                      onChange={selectPublicHandle}
                      value={isPublic}
                      placeholder={'请选择播放列表属性'}
                    >
                      <Option value={0}>
                        <div className="private">
                          <div className="name">私享</div>
                          <div className="icon">
                            <EyeInvisibleOutlined />
                          </div>
                        </div>
                      </Option>
                      <Option value={1}>
                        <div className="private">
                          <div className="name">公开</div>
                          <div className="icon">
                            <EyeOutlined />
                          </div>
                        </div>
                      </Option>
                    </Select>
                    <div
                      className="create-label"
                      onClick={(e) => {
                        createHandle();
                      }}
                    >
                      创建
                    </div>
                  </div>
                ]
          }
        >
          {isShowAddPlay && (
            <Playlist
              key={keyIndex}
              select={(checked, item) => {
                checkHandle(checked, item);
              }}
            />
          )}
        </Modal>
      </div>
    </AddWrapper>
  );
});
export default memo(Add);

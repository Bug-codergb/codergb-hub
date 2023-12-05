import React, { memo, FC, ReactElement, useEffect, useState } from "react";
import { BlockListWrapper } from "./style";
import {
  getAllBlock,
  userAddBlock,
} from "../../../../../../../../../../network/block";
import { IResponseType } from "../../../../../../../../../../types/responseType";
import { IBlock } from "../../../../../../../../../../types/block/IBlock";
import UploadVideo from "../../../../../../../../../../components/header/childCpn/uploadVideo";
import { Modal } from "antd";
import {
  CREATED_PLAYLIST,
  HOT_VIDEO,
  SINGLE_PLAYLIST,
  SUB_CHANNEL,
  UPLOADED_VIDEO,
  WONDER_CHANNEL,
} from "../../../../../../../../../../constant/block";
import { set } from "immutable";
import Playlist from "./childCpn/playlist";
interface IProps {
  addBlock: () => void;
}
const BlockList: FC<IProps> = (props): ReactElement => {
  const { addBlock } = props;
  const [block, setBlock] = useState<IBlock[]>([]);
  const [isShowPlay, setIsShowPlay] = useState<boolean>(false);
  useEffect(() => {
    getAllBlock<IResponseType<IBlock[]>>().then((data) => {
      if (data.status === 200) {
        setBlock(data.data);
      }
    });
  }, []);
  const confirmHandle = () => {
    setIsShowPlay(false);
  };
  const cancelHandle = () => {
    setIsShowPlay(false);
  };
  const addBlockHandle = (item: IBlock) => {
    console.log(item);
    if (item.name === SINGLE_PLAYLIST) {
      setIsShowPlay(true);
    } else if (item.name === UPLOADED_VIDEO || item.name === HOT_VIDEO) {
      userAddBlock(item.id).then((data) => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === CREATED_PLAYLIST) {
      userAddBlock(item.id).then((data) => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === SUB_CHANNEL) {
      userAddBlock(item.id).then((data) => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === WONDER_CHANNEL) {
      userAddBlock(item.id).then((data) => {
        if (data.status === 200) {
          addBlock();
        }
      });
    }
  };
  return (
    <BlockListWrapper>
      <ul className="block-list">
        {block &&
          block.length !== 0 &&
          block.map((item, index) => {
            return (
              <li key={item.id} onClick={(e) => addBlockHandle(item)}>
                {item.name}
              </li>
            );
          })}
      </ul>
      <Modal
        title="选择播放列表"
        cancelText={"取消"}
        okText={"确定"}
        open={isShowPlay}
        onOk={confirmHandle}
        maskClosable={false}
        destroyOnClose={true}
        width={"60%"}
        onCancel={cancelHandle}
      >
        {isShowPlay && <Playlist />}
      </Modal>
    </BlockListWrapper>
  );
};
export default memo(BlockList);

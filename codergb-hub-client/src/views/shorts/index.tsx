import React, {
  memo,
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import VideoItem from "./childCpn/videoItem";
import lodash from "lodash";

import { ShortsWrapper } from "./style";
import { IVideo } from "../../types/video/IVideo";
import { getAllVideo } from "../../network/video";
import { IResponseType } from "../../types/responseType";
import { IPage } from "../../types/IPage";

const Shorts: FC = (): ReactElement => {
  const [video, setVideo] = useState<IVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const pending = useRef(false);
  const offset = useRef(0);

  const getShortVideoReq = async (offset: number, limit: number) => {
    if (!pending.current) {
      pending.current = true;
      const result = await getAllVideo<IResponseType<IPage<IVideo[]>>>(
        offset,
        limit,
        ""
      );
      if (result.status === 200) {
        setVideo(result.data.list);
        setTotal(result.data.count);
      }
    }
  };
  useEffect(() => {
    getShortVideoReq(4, 3);
  }, []);

  const listRef = useRef<any>(null);
  const itemRef = useRef<any>(null);
  useEffect(() => {
    const offsetHeight = listRef.current.offsetHeight;
    let beforTop = 0;
    let direction = "";
    if (listRef && listRef.current && itemRef.current) {
      listRef.current.onscroll = lodash.throttle(function (e: any) {
        pending.current = false;
        let afterTop = listRef.current.scrollTop;
        if (afterTop - beforTop > 0) {
          direction = "向上";
        } else {
          direction = "向下";
        }

        beforTop = afterTop;

        const boundingClientRect = itemRef.current.getBoundingClientRect();
        const top = boundingClientRect.top - 80;
        if (top <= offsetHeight / 2) {
          //滚动超过一半
          if (listRef.current.scrollTop >= itemRef.current.offsetHeight) {
            listRef.current.scrollTop = itemRef.current.offsetHeight;
            console.log("吸顶");
            //getShortVideoReq(1, 3);
          } else {
            requestAnimationFrame(() => {
              if (listRef.current.scrollTop < itemRef.current.offsetHeight) {
                listRef.current.scrollTop += 10;
              }
            });
            if (listRef.current.scrollTop === 0) {
            }
          }
        } else {
          //不足一半
          requestIdleCallback(() => {
            listRef.current.scrollTop -= 10;
          });
        }
      }, 10);
    }
  }, [listRef.current, itemRef.current]);

  useEffect(() => {
    window.onwheel = function (e: any) {
      console.log(e.deltaY);
    };
  }, []);

  return (
    <ShortsWrapper>
      <div className="box">
        <div className="outer" ref={listRef}>
          <div className="inner">
            <ul className="short-video-list">
              {video &&
                video.length !== 0 &&
                video.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="item"
                      ref={index === 1 ? itemRef : null}
                    >
                      <VideoItem video={item} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </ShortsWrapper>
  );
};
export default memo(Shorts);

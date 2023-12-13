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

  const moveSubScrollTop = () => {
    requestAnimationFrame(() => {
      listRef.current.scrollTop -= 20;
      if (listRef.current.scrollTop === 0) {
        pending.current = false;
      } else {
        moveSubScrollTop();
      }
    });
  };
  const moveAddScrollTop = () => {
    requestAnimationFrame(() => {
      if (listRef.current.scrollTop < itemRef.current.offsetHeight) {
        listRef.current.scrollTop += 20;
        moveAddScrollTop();
      } else {
        listRef.current.scrollTop = itemRef.current.offsetHeight;
        pending.current = false;
      }
    });
  };
  const scrollEndHandler = (offsetHeight: number) => {
    pending.current = true;
    const boundingClientRect = itemRef.current.getBoundingClientRect();
    const top = boundingClientRect.top - 80;
    if (top <= offsetHeight / 2) {
      //滚动超过一半
      moveAddScrollTop();
    } else {
      //不足一半
      moveSubScrollTop();
    }
  };
  let t: any = null;
  useEffect(() => {
    const offsetHeight = listRef.current.offsetHeight;
    if (listRef && listRef.current && itemRef.current) {
      listRef.current.onscroll = function (e: any) {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          if (!pending.current) {
            scrollEndHandler(offsetHeight);
          }
        }, 100);
      };
      listRef.current.addEventListener("touchstart", () => {
        console.log("eee");
      });
      listRef.current.addEventListener("touchend", () => {
        console.log("eee");
      });
    }
  }, [listRef.current, itemRef.current]);

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

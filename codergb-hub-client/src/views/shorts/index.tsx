import React, {
  memo,
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import { ShortsWrapper } from "./style";
import { IVideo } from "../../types/video/IVideo";
import { getAllVideo } from "../../network/video";
import { IResponseType } from "../../types/responseType";
import { IPage } from "../../types/IPage";
const Shorts: FC = (): ReactElement => {
  const [video, setVideo] = useState<IVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const scrollDiff = useRef(0);
  const timer = useRef<NodeJS.Timeout>(null);
  const getShortVideoReq = async (offset: number, limit: number) => {
    const result = await getAllVideo<IResponseType<IPage<IVideo[]>>>(
      offset,
      limit,
      ""
    );
    if (result.status === 200) {
      setVideo(result.data.list);
      setTotal(result.data.count);
    }
  };
  useEffect(() => {
    getShortVideoReq(0, 3);
  }, []);

  const listRef = useRef<any>(null);
  const itemRef = useRef<any>(null);
  function scroll() {
    console.log(1);
    if (!timer.current) {
      timer.current = setInterval(() => {
        console.log(12);
        if (scrollDiff.current < itemRef.current.offseHeight) {
          scrollDiff.current += 30;
          console.log(223);
          listRef.current.scrollTop = 420;
        }
      }, 60);
    }
  }
  useEffect(() => {
    const offsetHeight = listRef.current.offsetHeight;

    if (listRef && listRef.current && itemRef.current) {
      listRef.current.onscroll = function (e: any) {
        const boundingClientRect = itemRef.current.getBoundingClientRect();
        const top = boundingClientRect.top - 80;
        if (top <= offsetHeight / 2) {
          scroll();
        }
      };
    }
  }, [listRef, listRef.current, itemRef, itemRef.current]);
  return (
    <ShortsWrapper>
      <div className="outer" ref={listRef}>
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
                  <div className="container">
                    <img src={item.picUrl} />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </ShortsWrapper>
  );
};
export default memo(Shorts);

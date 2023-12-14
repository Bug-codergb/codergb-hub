import React, {
  memo,
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
  createRef,
} from "react";
import VideoItem from "./childCpn/videoItem";
import lodash from "lodash";

import { ShortsWrapper } from "./style";
import { IVideo } from "../../types/video/IVideo";
import { getAllVideo } from "../../network/video";
import { IResponseType } from "../../types/responseType";
import { IPage } from "../../types/IPage";

interface ICustomVideo extends IVideo {
  ref: any;
}

interface ICustomHtmlElement extends HTMLDivElement {
  g_flag: boolean;
}

const Shorts: FC = (): ReactElement => {
  const [video, setVideo] = useState<ICustomVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const pending = useRef(false);
  const offset = useRef(0);

  const [direction, setDirection] = useState<string>("");

  const getShortVideoReq = async (offset: number, limit: number) => {
    if (!pending.current) {
      const result = await getAllVideo<IResponseType<IPage<ICustomVideo[]>>>(
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
    getShortVideoReq(0, 3);
  }, []);
  useEffect(() => {
    if (video.length !== 0) {
      for (let item of video) {
        item.ref = createRef();
      }
    }
  }, [video]);

  const listRef = useRef<any>(null);
  const itemRef = useRef<any>(null);

  // const scrollEndHandler = (offsetHeight: number) => {
  //   pending.current = true;
  //   const boundingClientRect = itemRef.current.getBoundingClientRect();
  //   const top = boundingClientRect.top - 80;
  //   if (top <= offsetHeight / 2) {
  //     moveAddScrollTop();
  //   } else {
  //     moveSubScrollTop();
  //   }
  // };

  useEffect(() => {
    const offsetHeight = listRef.current.offsetHeight;
    let lastScrollTop = 0;
    if (listRef && listRef.current) {
      listRef.current.onscroll = lodash.debounce(
        function (e: any) {
          // if (t) {
          //   clearTimeout(t);
          // }
          // t = setTimeout(() => {
          //   if (!pending.current) {
          //     scrollEndHandler(offsetHeight);
          //   }
          // }, 100);
        },
        1000,
        false
      );
    }
  }, [listRef.current]);

  const scrollRef = useRef<ICustomHtmlElement>(null);
  const moveSubScrollTop = () => {
    requestAnimationFrame(() => {
      listRef.current.scrollTop -= 20;
      if (listRef.current.scrollTop === 0) {
        pending.current = false;

        scrollRef.current!.g_flag = false;

        const scrollHeight = scrollRef.current!.scrollHeight;
        const clientHeight = scrollRef.current!.clientHeight;
        scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;
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
        scrollRef.current!.g_flag = false;
        const scrollHeight = scrollRef.current!.scrollHeight;
        const clientHeight = scrollRef.current!.clientHeight;
        scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;
        //debugger;
      }
    });
  };
  useEffect(() => {
    console.log(direction);
    if (direction === "向上") {
      moveAddScrollTop();
    } else {
      moveSubScrollTop();
    }
  }, [direction]);

  let t: any = null;
  useEffect(() => {
    if (scrollRef.current) {
      let lastScrollTop = 0;

      scrollRef.current.g_flag = true;
      scrollRef.current.onscroll = function (e) {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          scrollRef.current!.g_flag = true;
        }, 66);
        if (scrollRef.current!.g_flag) {
          let scrollTop = (e.target! as HTMLDivElement).scrollTop;
          if (scrollTop <= lastScrollTop) {
            setDirection("向下");
            console.log("向下");
          } else {
            setDirection("向上");
            console.log("向上");
          }
          lastScrollTop = scrollTop;
        }
      };
    }
  }, [scrollRef, scrollRef.current, pending.current]);
  return (
    <ShortsWrapper>
      <div className="box">
        <div className="box-inner">
          <div className="scroll-container" ref={scrollRef}>
            <div className="scroll-inner">1111111</div>
          </div>
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
                        ref={index === 0 ? itemRef : null}
                      >
                        <VideoItem video={item} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ShortsWrapper>
  );
};
export default memo(Shorts);

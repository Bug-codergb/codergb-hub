import { memo, type FC, useState, useEffect, createRef, useRef } from 'react';

import { CateWrapper } from './style';
import { type IPage } from '../../../../types/IPage';
import { type IResponseType } from '../../../../types/responseType';
import { getAllCate } from '../../../../network/category';
import { type ICate } from '../../../../types/category/ICate';

interface ICustomCate extends ICate {
  ref: any;
}
interface IProps {
  itemClick: (item: ICate) => void;
}
const Cate: FC<IProps> = (props) => {
  const { itemClick } = props;

  const [cate, setCate] = useState<ICustomCate[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    getAllCate<IResponseType<IPage<ICate[]>>>(0, 100000).then((res) => {
      if (res.status === 200) {
        const cateList: ICustomCate[] = [];
        for (const item of res.data.list) {
          const it: ICustomCate = {
            ...item,
            ref: createRef()
          };
          cateList.push(it);
        }
        setCate(cateList);
        setCount(res.data.count);
        if (res.data.list.length !== 0) {
          itemClick(res.data.list[0]);
        }
      }
    });
  }, []);
  const contItemRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [translateWidth, setTranslateWidth] = useState<number>(0);
  useEffect(() => {
    if (cate && cate.length !== 0 && contItemRef.current && pageRef.current) {
      const children = Array.from(contItemRef.current.children);
      let width = 0;
      for (const item of children) {
        width += item.offsetWidth + 15;
      }
      console.log(width);
      contItemRef.current.style.width = `${width}px`;
      pageRef.current.style.width = `${width / 2}px`;
      setTranslateWidth(width / 2);
    }
  }, [cate, contItemRef.current, pageRef.current]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const liClick = (item: ICate, index: number) => {
    itemClick(item);
    setCurrentIndex(index);
  };
  return (
    <CateWrapper width={translateWidth}>
      <div className="page" ref={pageRef}>
        <div className="container">
          <div className="photo-container">
            <div className="photo-cont-item animation-3" ref={contItemRef}>
              {cate &&
                cate.length !== 0 &&
                cate.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      ref={item.ref}
                      className={`photo-item ${currentIndex === index ? 'active' : ''}`}
                      onClick={() => {
                        liClick(item, index);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              {cate &&
                cate.length !== 0 &&
                cate.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className={`photo-item ${currentIndex === index ? 'active' : ''}`}
                      onClick={() => {
                        liClick(item, index);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </CateWrapper>
  );
};
export default memo(Cate);

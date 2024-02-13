import { memo, type FC, type ReactElement, useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { ExploreWrapper } from './style';
import { type IResponseType } from '../../types/responseType';
import { getExplore } from '../../network/explore';
import { type IUserMsg } from '../../types/user/IUserMsg';
import { type IPage } from '../../types/IPage';
import {
  EXPLORE_GAME,
  EXPLORE_MOVIE,
  EXPLORE_MUSIC,
  EXPLORE_NEW,
  EXPLORE_SPORT,
  EXPLORE_STUDY,
  exploreMap
} from '../../constant/explore';
import Music from './childCpn/music';
import Movie from './childCpn/movie';
import Game from './childCpn/game';
import News from './childCpn/news';
import Sport from './childCpn/sport';
import Study from './childCpn/study';
import Ordinary from './childCpn/ordinary';
interface ITab {
  label: string;
  key: string;
  children: ReactElement;
}
const Explore: FC = (): ReactElement => {
  const [explore, setExplore] = useState<IUserMsg[]>([]);
  const [tabItems, setTabItems] = useState<ITab[]>([]);
  const getExploreContent = (activeName: string, userId: string) => {
    switch (exploreMap.get(activeName)) {
      case EXPLORE_MUSIC:
        return <Music userId={userId} />;
      case EXPLORE_MOVIE:
        return <Movie userId={userId} />;
      case EXPLORE_GAME:
        return <Game userId={userId} />;
      case EXPLORE_NEW:
        return <News userId={userId} />;
      case EXPLORE_SPORT:
        return <Sport userId={userId} />;
      case EXPLORE_STUDY:
        return <Study userId={userId} />;
      default:
        return <Ordinary userId={userId} />;
    }
  };
  useEffect(() => {
    getExplore<IResponseType<IPage<IUserMsg[]>>>().then((data) => {
      setExplore(data.data.list);
      const list = [];
      for (const item of data.data.list) {
        list.push({
          label: item.userName,
          key: item.userId,
          children: getExploreContent(item.userName, item.userId)
        });
      }
      setTabItems(list);
    });
  }, []);
  return (
    <ExploreWrapper>
      <Tabs items={tabItems} />
    </ExploreWrapper>
  );
};
export default memo(Explore);

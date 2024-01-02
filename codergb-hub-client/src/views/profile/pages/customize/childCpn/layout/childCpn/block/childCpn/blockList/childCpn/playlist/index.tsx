import React, { memo, FC, ReactElement, useState } from 'react';
import { PlaylistWrapper } from './style';
import { Input } from 'antd';
const { Search } = Input;
const Playlist: FC = (): ReactElement => {
  const [userInp, setUserInp] = useState<string>('');
  const onSearchUserSelf = async (value: string) => {
    setUserInp(value);
  };
  const onSearchOther = () => {};
  return (
    <PlaylistWrapper>
      <div className="search-container">
        <div className="user-self">
          <Search
            placeholder="搜索您的播放列表"
            onSearch={(value, event) => onSearchUserSelf(value)}
          />
        </div>
        <div className="video-lib">
          <Search placeholder="搜索整站的播放列表" onSearch={(e) => onSearchOther()} />
        </div>
      </div>
    </PlaylistWrapper>
  );
};
export default memo(Playlist);

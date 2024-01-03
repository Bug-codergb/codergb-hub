import React, { memo, type FC, useState, useEffect } from 'react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { PlaylistWrapper } from './style';
import { Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { type IPlaylist } from '../../../types/playlist/IPlaylist';
import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../../types/login/ILogin';
import { getUserPlaylist } from '../../../network/playlist';
import { type IResponseType } from '../../../types/responseType';
import { type IPage } from '../../../types/IPage';
interface IProps {
  select: (checked: boolean, item: IPlaylist) => void;
}
const Playlist: FC<IProps> = (props) => {
  const { select } = props;
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  useEffect(() => {
    getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(login.userMsg.userId, 0, 10).then((data) => {
      if (data.status === 200) {
        setPlaylist(data.data.list);
        setCount(data.data.count);
      }
    });
  }, [login]);

  const selectChangeHandle = (e: CheckboxChangeEvent, item: IPlaylist) => {
    select(e.target.checked, item);
  };
  return (
    <PlaylistWrapper>
      <ul className="add-play-list">
        {playlist &&
          playlist.length !== 0 &&
          playlist.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="left-container">
                  <div className="check">
                    <Checkbox
                      onChange={(e) => {
                        selectChangeHandle(e, item);
                      }}
                    />
                  </div>
                  <div className="play-list-name">{item.name}</div>
                </div>
                <div className="right-container">
                  {item.isPublic === 1 && <EyeOutlined />}
                  {item.isPublic !== 1 && <EyeInvisibleOutlined />}
                </div>
              </li>
            );
          })}
      </ul>
    </PlaylistWrapper>
  );
};
export default memo(Playlist);

import React, { memo, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map } from 'immutable';
import { ProfileWrapper } from './style';
import { useSelector } from 'react-redux';
import { ILogin } from '../../../../types/login/ILogin';
import { profileMenu } from '../../../../constant/profileMenu';
import UserIcon from '../../../../assets/html/user/userIcon';

const Profile: FC = () => {
  const navigate = useNavigate();
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  const profileMenuHandle = (item: { name: string; path: string }) => {
    console.log(item);
    navigate(item.path, {
      replace: true,
      state: {
        id: login.userMsg.userId
      }
    });
  };
  return (
    <ProfileWrapper>
      <div className="profile">
        {login.loginType === 1 && login.userMsg.avatarUrl && (
          <div className="avatar-container">
            <img className="avatar" src={login.userMsg.avatarUrl} alt={'avatar'} />
          </div>
        )}
        {login.loginType === 1 && !login.userMsg.avatarUrl && (
          <div className="avatar-container">
            <UserIcon />
          </div>
        )}
        <span className="user-name">{login.userMsg.userName}</span>
      </div>
      <div className="mine">
        <ul className="mine-list">
          {profileMenu &&
            profileMenu.length !== 0 &&
            profileMenu.map((item) => {
              return (
                <li key={item.name} onClick={(e) => profileMenuHandle(item)}>
                  <div className="icon">{item.icon}</div>
                  <div className="name">{item.name}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </ProfileWrapper>
  );
};
export default memo(Profile);

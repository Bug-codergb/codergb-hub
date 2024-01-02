import React, { memo, FC, ReactElement, useState, FormEvent } from 'react';
import { PublishWrapper } from './style';
import { IUserMsg } from '../../../types/user/IUserMsg';
interface IProps {
  user: IUserMsg;
  publish: (content: string) => void;
  isShowAt: boolean;
  atUser?: IUserMsg;
}
const Publish: FC<IProps> = (props): ReactElement => {
  const { user, publish, isShowAt, atUser } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');

  const inpFocusHandle = () => {
    setIsFocus(true);
  };
  const inpBlurHandle = () => {
    //setIsFocus(false);
  };
  const inpChangeHandle = (e: FormEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };
  const cancelHandle = () => {
    setIsFocus(false);
    setContent('');
  };
  const publishHandle = () => {
    setContent('');
    setIsFocus(false);
    publish(content);
  };
  return (
    <PublishWrapper>
      <div className={`publish-component-outer ${isFocus ? 'publish-component-outer-start' : ''}`}>
        <div className="user-msg">
          <img src={user.avatarUrl} />
        </div>
        <div className="right-input">
          <div className={`input-container ${isFocus ? 'input-focus' : ''}`}>
            {isShowAt && (
              <div className="at-user">
                <span className="at-label">@</span>
                <span className="at-user-name">{atUser?.userName}</span>
              </div>
            )}
            <input
              type={'text'}
              placeholder="添加回复..."
              value={content}
              onFocus={(e) => inpFocusHandle()}
              onBlur={(e) => inpBlurHandle()}
              onInput={(e) => inpChangeHandle(e)}
            />
          </div>
          {isFocus && (
            <div className="btn-controller">
              <button className="cancel" onClick={(e) => cancelHandle()}>
                取消
              </button>
              <button
                className="confirm"
                disabled={content.length === 0}
                onClick={(e) => publishHandle()}
              >
                评论
              </button>
            </div>
          )}
        </div>
      </div>
    </PublishWrapper>
  );
};
export default memo(Publish);

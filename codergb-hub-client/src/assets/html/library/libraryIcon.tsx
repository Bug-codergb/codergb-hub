import React, { memo, FC } from 'react';
const LibraryIcon: FC = () => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
        style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
      >
        <g className="style-scope yt-icon">
          <path
            d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(LibraryIcon);

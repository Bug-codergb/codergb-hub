import React, { memo, type FC, type ReactElement } from 'react';
const VideoIcon: FC = (): ReactElement => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope tp-yt-iron-icon"
        style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
      >
        <g className="style-scope tp-yt-iron-icon">
          <path
            d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
            className="style-scope tp-yt-iron-icon"
          ></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(VideoIcon);

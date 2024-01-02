import React, { memo, FC } from 'react';
const PlaylistIcon: FC = () => {
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
            d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(PlaylistIcon);

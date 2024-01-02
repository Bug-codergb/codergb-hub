import React, { memo, FC } from 'react';
const SubscribeIcon: FC = () => {
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
            d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(SubscribeIcon);

import React,{memo,FC} from "react";
const PlaylistShadowIcon:FC=()=>{
  return (
      <div>
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
             style={{pointerEvents: 'none', display:'block', width: '100%', height: '100%'}}>
          <g className="style-scope yt-icon">
            <path d="M15,19v-8l7,4L15,19z M22,7H2v2h20V7z M13,13H2v-2h11V13z M13,17H2v-2h11V17z"
                  className="style-scope yt-icon"></path>
          </g>
        </svg>
      </div>
  )
}
export default memo(PlaylistShadowIcon)
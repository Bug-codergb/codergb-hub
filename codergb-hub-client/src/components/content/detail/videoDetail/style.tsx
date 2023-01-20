import styled from "styled-components";
import {
  centerWidth
} from "../../../../constant/centerWidth";

export const VideoDetailWrapper = styled.div`

`
export const CenterContent = styled.div`
  width: ${centerWidth/40}rem;
  border-left: 1px solid #ec4141;
  border-right: 1px solid #ec4141;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`
export const LeftContentWrapper:any = styled.div`
  width: 67%;
  padding: ${20/40}rem 0;
  .video-dm-container{
    width: ${1190/40}rem;
    height: ${600/40}rem;
    position:relative ;
    overflow: hidden;
    .inner{
      display: flex;
      align-items:center ;
      height:100%;
      position: absolute;
      left:50% ;
      top:50% ;
      transform:translate(-50%,-50%) ;
      .start,
      .end {
        width: 400px;
        height: 100%;
      }
      .start{
        display:flex ;
        justify-content:flex-end ;
        position: relative;
        z-index: 99;
        &>ul{
          display:flex ;
          flex-direction:column-reverse ;
          align-items:flex-end ;
          &>li{
            text-align:end ;
            list-style:none ;
            background-color:rgba(0,0,0,.4) ;
            border-radius:18px ;
            padding:5px 12px 8px 12px;
            color:#fff ;
            font-weight: bolder;
            letter-spacing: 2px;
            font-size: ${20/40}rem;
            text-shadow: 1px 1px 2px black;
          }
        }
      }
      .text {
        white-space: nowrap;
        color: #ec4141;
      }
    }
  }
  .video-container{
    width: ${1150/40}rem;
    height: ${600/40}rem;
    overflow: hidden;
    background-color: black;
    video{
      width: ${1150/40}rem;
      height: ${600/40}rem;
      object-position: 50% 50%;
      object-fit: contain;
    }
  }
`
export const RightContentWrapper = styled.div`
 padding: 0 0 0 ${26/40}rem; 
`
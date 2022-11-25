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

`
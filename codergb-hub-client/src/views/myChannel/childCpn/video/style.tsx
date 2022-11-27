import styled from "styled-components";
export const VideoWrapper = styled.div`
  .user-video-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &>li{
      margin:0 0 ${30/40}rem 0;
      transition: transform 0.7s;
      &.active{
        transform: scale(1.3) translateY(8%);
        box-shadow: 0 0 ${24/40}rem rgba(0,0,0,.1);
      }
    }
  }
`
import styled from "styled-components"
export const RecommendWrapper=styled.div`
  .video-list{
    height: 86vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    &::-webkit-scrollbar{
      width: 8px;
      height: 50px;
    }
    &>li{
      margin: 0 0 ${30/40}rem 0;
      transition: transform 0.4s;
      &.active{
        transform: scale(1.3) translateY(8%);
        box-shadow: 0 0 ${24/40}rem rgba(0,0,0,.1);
      }
    }
  }
`
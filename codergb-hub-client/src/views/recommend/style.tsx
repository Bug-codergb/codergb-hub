import styled from "styled-components"
export const RecommendWrapper:any=styled.div`
  .video-list{
    height: 87vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 8px;
      height: 50px;
    }
    &>li{
      margin: 0 0 ${30/40}rem 0;
      transition: transform 0.3s;
      &.active{
        transform:${(props:any)=>props.isRightBoundray ? 'scale(1.3) translate(-14%,8%)' : props.isLeftBoundray ?'scale(1.3) translate(14%,8%)' : 'scale(1.3) translate(0,8%)'} ;
        box-shadow: 0 0 ${24/40}rem rgba(0,0,0,.1);
        z-index: 999999;
      }
    }
  }
`
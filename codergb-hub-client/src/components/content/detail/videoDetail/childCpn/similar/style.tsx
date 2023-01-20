import styled from "styled-components";
export const SimilarWrapper = styled.div`
  padding: ${16/40}rem 0;
  .bar{
    display: flex;
    align-items: center;
    &>li{
      padding: ${5/40}rem ${15/40}rem;
      background-color: #f2f2f2;
      margin: 0 ${20/40}rem 0 0;
      border-radius: ${8/40}rem;
      cursor: pointer;
      &.active{
        background-color: #0f0f0f;
        color: #ffffff;
      }
    }
  }
  .similar-video-list{
    margin: ${20/40}rem 0 0 0;
    &>li{
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 0 0 ${20/40}rem 0;
      .vio-img-container{
        width: ${250/40}rem;
        margin: 0 ${20/40}rem 0 0;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background-color: #e5e5e5;
        display: flex;
        align-items: center;
        img{
          width: 100%;
          cursor: pointer;
        }
        .dt{
          position: absolute;
          left: 100%;
          top: 100%;
          transform: translate(-110%,-110%);
          background-color: rgba(0,0,0,.65);
          color: #ffffff;
          padding: ${3/40}rem ${10/40}rem;
          border-radius: ${8/40}rem;
          font-size: ${14/40}rem;
          font-weight: bolder;
        }
      }
      .right-container{
        width: ${240/40}rem;
        overflow: hidden;
        .label-n{
          width: 100%;
          margin:0 0 ${5/40}rem 0;
          white-space: normal;
          display: flex;
          flex-wrap: wrap;
        }
        .dt-play-count{
          display: flex;
          align-items: center;
          &>p{
            color: #606060;
            font-size: ${15/40}rem;
          }
        }
      }
    }
  }
`
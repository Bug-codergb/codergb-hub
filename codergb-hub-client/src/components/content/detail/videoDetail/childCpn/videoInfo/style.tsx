import styled from "styled-components";
export const VideoInfoWrapper= styled.div`
  padding: ${40/40}rem 0;
  .video-title{
    font-size: ${24/40}rem;
    font-weight: bold;
    margin: 0 0 ${20/40}rem 0;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content{
      display: flex;
      align-items: center;
      .user-msg-container{
        display: flex;
        align-items: center;
        .img-container{
          height: ${60/40}rem;
          width: ${60/40}rem;
          border-radius: 50%;
          overflow: hidden;
          background-color: black;
          img{
            width: 100%;
          }
        }
        .right-msg{
          margin: 0 0 0 ${18/40}rem;
          .user-name{
            margin: 0 0 ${5/40}rem 0;
          }
          .sub-counter{
            margin: 0;
            font-size: ${16/40}rem;
            color: #606060;
          }
        }
      }
      .sub-btn{
        background-color: #0f0f0f;
        color: #fff;
        cursor: pointer;
        font-size: ${20/40}rem;
        padding: ${10/40}rem ${20/40}rem;
        border-radius: ${24/40}rem;
        margin: 0 0 0 ${40/40}rem;
      }
    }
    .right-content{
      display: flex;
      align-items: center;
      .thumb{
        display: flex;
        align-items: center;
        .tread{
          border-left: 1px solid #d9d9d9;
          padding: 0 0 0 ${18/40}rem;
          margin: 0 0 0 ${18/40}rem;
        }
      }
      .thumb,.collection{
        cursor: pointer;
        background-color: #f2f2f2;
        margin: 0 0 0 ${20/40}rem;
        padding: ${9/40}rem ${18/40}rem ${5/40}rem;
        border-radius: ${20/40}rem;
        .thumb-icon,.collection-icon,.tread-icon{
          svg{
            font-size: ${24/40}rem;
          }
        }
        .label{
          margin: 0 0 0 ${15/40}rem;
        }
        .thumb-icon-active{
          svg{
            color: #ff0000;
          }
        }
      }
    }
  }
  .desc{
    background-color: #f2f2f2;
    padding: ${15/40}rem;
    margin: ${15/40}rem 0;
    border-radius: ${10/40}rem;
  }
`
import styled from "styled-components";
export const ReplyWrapper = styled.div`
  .reply-list{
    &>li{
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${15/40}rem 0;
      width: 100%;
      .left-msg{
        width: ${40/40}rem;
        height: ${40/40}rem;
        background-color: #000;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .right-msg{
        flex: 1;
        margin: 0 0 0 ${15/40}rem;
        .user-name-time{
          display: flex;
          align-items: center;
          margin: 0 0 ${10/40}rem 0;
          .user-name{
            font-weight: bold;
            font-size: ${14/40}rem;
            margin: 0 ${5/40}rem 0 0;
          }
          .create-time{
            color: #606060;
          }
        }
        .content{
          font-size: ${18/40}rem;
        }
        .reply-for-name{
          font-size: ${18/40}rem;
          color: #065fd4;
        }
        .reply-controller-btn{
          display: flex;
          align-items: center;
          margin: ${15/40}rem 0 0 0;
          .thumb,.tread,.reply-label{
            margin: 0 ${20/40}rem 0 0;
            cursor: pointer;
            svg{
              font-size: ${24/40}rem;
            }
          }
          .thumb-count{
            margin: 0 0 0 ${5/40}rem;
          }
          .reply-label{
            padding: ${5/40}rem ${15/40}rem;
            border-radius: ${18/40}rem;
            font-size: ${17/40}rem;
            &:hover{
              background-color: #e5e5e5;
            }
          }
        }
        .reply-reply{
          margin: ${15/40}rem 0;
        }
      }
    }
  }
`
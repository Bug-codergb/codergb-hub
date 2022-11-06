import styled from "styled-components";
export const CommentWrapper= styled.div`
  .publish-outer{
    display: flex;
    align-items: center;
    .user-msg{
      margin: 0 ${18/40}rem 0 0 ;
      width: ${55/40}rem;
      height: ${55/40}rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .right-input{
      flex: 1;
     .input-container{
      border-bottom: 2px solid #e5e5e5;
      input{
        width: 100%;
        padding: 0 0 ${8/40}rem 0;
      }
    }
    .input-focus{
      border-bottom-color: #0f0f0f;
    }
      .btn-controller{
        margin: ${10/40}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button{
          cursor: pointer;
          padding: ${8/40}rem ${18/40}rem;
          margin: 0 0 0 ${8/40}rem;
          border-radius: ${20/40}rem;
        }
        .cancel{
          background-color: #fff;
          &:hover{
            background-color: #e5e5e5;
          }
        }
        .confirm{
          background-color: #065fd4;
          color: #fff;
        }
        [disabled]{
          background-color:#f2f2f2 ;
          color: #909090;
        }
      }
    }
  }
  .publish-outer-start{
    align-items: flex-start;
  }
  .comment-list{
    width: 100%;
    margin: ${20/40}rem 0 0 0;
    &>li{
      width: 100%;
      margin: 0 0 ${15/40}rem 0;
      .comment-content{
        width: 100%;
        display: flex;
        align-items: flex-start;
      }
      .left-container{
        width: ${55/40}rem;
        height: ${55/40}rem;
        background-color: black;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .right-container{
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
        .reply-count-btn{
          margin: ${10/40}rem 0 ${15/40}rem 0;
          padding: ${7/40}rem ${20/40}rem;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          border-radius: ${20/40}rem;
          &>span{
            color: #065fd4;
            font-size: ${18/40}rem;
          }
          svg{
            font-size: ${24/40}rem;
          }
          .count{
            margin: 0 0 0 ${5/40}rem;
          }
          &:hover{
            background-color: #def1ff
          }
        }
        .publish-comment-reply-container{
          margin: ${15/40}rem 0;
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
      }
    }
  }
`
import styled from 'styled-components';
export const ChatWindowWrapper = styled.div`
  background-color: #ffffff;
  .recent-title {
    font-size: ${16 / 40}rem;
    color: #666666;
    padding: ${20 / 40}rem ${20 / 40}rem;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .gb-chat-header {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gb-chat {
    height: ${520 / 40}rem;
    overflow-y: scroll;
    background-color: #f4f5f7;
    .chat-history {
      & > li {
        display: flex;
        padding: ${20 / 40}rem 0;
        align-items: flex-start;
        .img-container {
          width: ${50 / 40}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .content-container {
          max-width: 90%;
          margin: 0 0 0 ${10 / 40}rem;
          .content {
            max-width: 100%;
            background-color: #ffffff;
            padding: ${10 / 40}rem ${15 / 40}rem;
            font-size: ${20 / 40}rem;
            border-radius: ${24 / 40}rem;
          }
          .time {
            font-size: ${16 / 40}rem;
            color: #999999;
            display: flex;
            justify-content: flex-start;
            margin: ${10 / 40}rem 0 0 ${5 / 40}rem;
          }
        }
        &.active {
          flex-direction: row-reverse;
          .content {
            margin: 0 ${10 / 40}rem 0 0;
            background-color: #80b9f2;
            color: #fff;
          }
          .time {
            justify-content: flex-end;
          }
        }
      }
    }
  }
  .gb-chat-side {
    min-width: ${320 / 40}rem!important;
    max-width: ${320 / 40}rem!important;
    width: ${320 / 40}rem!important;
    .chat-queue {
      & > li {
        display: flex;
        align-items: flex-start;
        padding: ${10 / 40}rem ${15 / 40}rem;
        cursor: pointer;
        &:hover {
          background-color: #e4e5e6;
        }
        &.active {
          background-color: #e4e5e6;
        }
        .img-container {
          width: ${70 / 40}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .right-container {
          width: 70%;
          background-color: transparent;
          margin: 0 0 0 ${20 / 40}rem;
          .user-name {
            color: #333333;
            font-size: ${18 / 40}rem;
          }
          .content {
            color: #999999;
            font-size: ${14 / 40}rem;
            width: 100%;
          }
        }
      }
    }
  }
  .gb-chat-footer {
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    height: ${200 / 40}rem;
    padding: ${20 / 40}rem ${10 / 40}rem ${20 / 40}rem ${10 / 40}rem;
    .publish-container {
      padding: ${10 / 40}rem 0 0 0;
      display: flex;
      justify-content: flex-end;
      .publish-btn {
        display: inline-flex;
        border: 1px solid #cccccc;
        justify-content: center;
        font-size: ${18 / 40}rem;
        padding: ${5 / 40}rem ${10 / 40}rem;
        cursor: pointer;
        border-radius: 4px;
      }
    }
    .ant-input {
      border: none;
      resize: none;
      outline: none;
      box-shadow: none;
    }
    .ant-input:focus {
      border: none;
      outline: none;
    }
  }
`;

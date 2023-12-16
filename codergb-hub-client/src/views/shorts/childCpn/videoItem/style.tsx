import styled from "styled-components";
export const VideoItemWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  .container {
    height: 87vh;
    width: ${500 / 40}rem;
    background-color: #333;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
    }
    .bottom-level {
      width: 100%;
      top: 100%;
      left: 0;
      position: absolute;
      transform: translate(0, -100%);
      padding: ${16 / 40}rem ${18 / 40}rem;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.1)
      );
      .user {
        display: flex;
        align-items: center;
        .img-container {
          width: ${60 / 40}rem;
          img {
            width: 100%;
            border-radius: 100%;
          }
        }
        .user-name {
          font-size: ${18 / 40}rem;
          color: #fff;
          margin: 0 0 0 10px;
        }
      }
      .title {
        font-size: ${18 / 40}rem;
        color: #fff;
        margin: 10px 0 0 0;
      }
    }
  }
  .control {
    margin: 0 0 0 ${20 / 40}rem;
    .control-list {
      & > li {
        margin: 0 0 ${30 / 40}rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f2f2f2;
          width: ${60 / 40}rem;
          height: ${60 / 40}rem;
          border-radius: 50%;
          margin: 0 0 ${10 / 40}rem 0;
          cursor: pointer;
          .thumb-icon {
            svg {
              font-size: ${26 / 40}rem;
            }
            &.thumb-active {
              svg {
                color: #ea3323;
              }
            }
          }
          .un-thumb-icon {
            svg {
              font-size: ${26 / 40}rem;
            }
            &.un-thumb-active {
              svg {
                color: #ea3323;
              }
            }
          }
          .msg-icon {
            svg {
              font-size: ${26 / 40}rem;
            }
          }
        }
      }
    }
    &.move-control {
      transform: translateX(-170%);
      z-index: 99999;
      .label {
        color: #fff;
      }
      .item {
        .icon {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
      .thumb-icon,
      .un-thumb-icon,
      .msg-icon {
        color: #fff;
      }
    }
  }
  .comment-container {
    height: 87vh;
    width: 0;
    overflow-y: scroll;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: width 0.5s, opacity 0.3s;
    transform-origin: left;
    background-color: #fff;
    z-index: 9;
    opacity: 0;
    &.show-comment {
      transform: rotateY(0);
      width: ${600 / 40}rem;
      padding: ${30 / 40}rem;
      opacity: 1;
      overflow: hidden;
      margin-left: -60px;
      overflow-y: scroll;
    }
    .close-handler {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      .close-outlined {
        cursor: pointer;
      }
    }
  }
  .outer {
    height: 87vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 99999;
    .inner {
      display: flex;
      align-items: flex-end;
    }
  }
`;

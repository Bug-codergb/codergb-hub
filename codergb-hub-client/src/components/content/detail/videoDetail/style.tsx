import styled from 'styled-components';
import { centerWidth } from '../../../../constant/centerWidth';

export const VideoDetailWrapper = styled.div``;
export const CenterContent = styled.div`
  width: ${centerWidth / 40}rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;

interface IProps {
  isSingle: boolean;
}
export const LeftContentWrapper: any = styled.div`
  width: 67%;
  padding: ${20 / 40}rem 0;
  .video-dm-container {
    width: ${1190 / 40}rem;
    height: ${640 / 40}rem;
    position: relative;
    overflow: hidden;
    #vs{
      width: 100%;
      height: 100%;
    }
    .inner {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .start,
      .end {
        width: 400px;
        height: 100%;
      }
      .start {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 99;

        & > ul {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0 20px 0 0;
          & > li {
            text-align: end;
            list-style: none;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 18px;
            padding: 5px 12px 8px 12px;
            color: #fff;
            font-weight: bolder;
            letter-spacing: 2px;
            font-size: ${20 / 40}rem;
            text-shadow: 1px 1px 2px black;
          }
        }
      }
      .text {
        white-space: nowrap;
        color: #ec4141;
      }
    }
  }
  .video-container {
    width: ${1190 / 40}rem;
    height: ${640 / 40}rem;
    overflow: hidden;
    background-color: black;
    border-radius: 3px;
    position: relative;
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: space-between;
      padding: 20px 15px 20px 0;
      .mask-left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        width: 40%;
        .be-going {
          text-align: left;
          width: 100%;
          color: #fff;
          font-size: ${24 / 40};
          font-weight: bold;
          width: ${400 / 40}rem;
          margin: 0 0 10px 0;
        }
        .current-video {
          position: relative;
          width: ${400 / 40}rem;
          .per {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .info {
          color: #fff;
          margin: 10px 0 0 0;
          width: ${400 / 40}rem;
        }
      }
      .mask-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .vio-list {
        overflow-y: auto;
        padding: 10px 0;
        .item {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;
          &.active {
          }
          .left {
            width: ${280 / 40}rem;
            img {
              width: 100%;
              border-radius: 4px;
            }
          }
          .right {
            margin: 0 0 0 10px;
            width: 180px;
          }
          .name {
            color: #fff;
          }
        }
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: contain;
      position: relative;
      z-index: 10;
    }
    .controller-container {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 20px 0 15px 0;
      transform: translate(0, -100%);
      color: #fff;
      background: linear-gradient(to top, rgba(33, 33, 33, 0.9) 1%, rgba(0, 0, 0, 0) 99%);
      z-index: 99999;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .left {
          display: flex;
          align-items: center;
          .play-pause {
            margin: 0 ${8 / 40}rem 0 0;
            display: flex;
            align-items: center;
            svg {
              font-size: ${28 / 40}rem;
              cursor: pointer;
            }
          }
          .dt {
            display: flex;
            align-items: center;
            font-size: 14px;
          }
        }
        .right {
          display: flex;
          align-items: center;
          .volume {
            width: 120px;
          }
          .full {
            margin: 0 0 0 ${8 / 40}rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            svg {
              font-size: ${26 / 40}rem;
            }
          }
        }
      }
    }
  }
`;
export const RightContentWrapper = styled.div`
  padding: 0 0 0 ${26 / 40}rem;
  width: 33%;
`;

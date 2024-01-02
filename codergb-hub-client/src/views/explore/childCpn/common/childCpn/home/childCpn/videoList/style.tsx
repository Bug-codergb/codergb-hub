import styled from 'styled-components';
export const VideoListWrapper = styled.div`
  .common-video-list {
    display: flex !important;
    margin: ${15 / 40}rem 0 ${30 / 40}rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 ${20 / 40}rem;
    position: relative;
    .prev,
    .next {
      width: ${55 / 40}rem;
      height: ${55 / 40}rem;
      position: absolute;
      top: 15%;
      left: 0;
      transform: translate(-50, -50%);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .next {
      left: 100%;
      transform: translateX(-100%);
    }
    & > li {
      width: ${280 / 40}rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
      padding: 0 0 10px 0;
      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.17);
      }
      .img-container {
        width: ${280 / 40}rem;
        img {
          width: 100%;
        }
      }
      .video-name {
        font-size: ${20 / 40}rem;
        padding: 10px 8px 0 8px;
        display: inline-block;
        word-break: break-all;
      }
      .user-name {
        padding: 5px 0 5px 8px;
        font-size: ${18 / 40}rem;
        cursor: pointer;
      }
      .create-time {
        font-size: ${18 / 40}rem;
        padding: 0 0 0 8px;
      }
    }
  }
`;

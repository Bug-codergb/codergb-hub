import styled from "styled-components";
export const HomeWrapper = styled.div`
  .video-tip {
    font-weight: bold;
    margin: 0 0 ${14 / 40}rem 0;
    font-size: ${20 / 40}rem;
  }
  .trailer {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0 ${20 / 40}rem 0;
    margin: 0 0 ${16 / 40}rem 0;
    .left-container {
      width: ${390 / 40}rem;
      position: relative;
      img {
        border-radius: ${8 / 40}rem;
        width: 100%;
      }
      video {
        width: 100%;
        height: ${220 / 40}rem;
        border-radius: 4px;
        object-fit: contain;
        background-color: #333;
      }
    }
    .right-container {
      width: 70%;
      margin: 0 0 0 ${20 / 40}rem;
      .video-name {
        font-size: ${24 / 40}rem;
      }
      .play-count-time {
        display: flex;
        align-items: center;
        margin: ${15 / 40}rem 0;
        p {
          font-size: ${16 / 40}rem;
          color: #606060;
        }
        .count {
          margin: 0 ${8 / 40}rem 0 0;
        }
        .desc {
          font-size: ${18 / 40}rem;
          color: #606060;
        }
      }
    }
  }
`;

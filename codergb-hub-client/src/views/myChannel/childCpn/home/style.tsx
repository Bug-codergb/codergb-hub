import styled from 'styled-components';
export const HomeWrapper = styled.div`
  .trailer {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0 ${20 / 40}rem 0;
    .left-container {
      width: ${380 / 40}rem;
      img {
        border-radius: ${8 / 40}rem;
        width: 100%;
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

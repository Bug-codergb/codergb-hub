import styled from 'styled-components';
export const PlaylisWrapper = styled.div`
  .play-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      width: ${300 / 40}rem;
      height: ${153 / 40}rem;
      margin: 0 0 ${140 / 40}rem 0;
      position: relative;
      .sub {
        display: flex;
        align-items: center;
        .label {
          margin: 0 0 0 5px;
        }
      }
      .container {
        display: flex;
        align-items: flex-start;
        width: 100%;
        justify-content: space-between;
        .g-more {
          margin: ${15 / 40}rem 0 ${5 / 40}rem 0;
          cursor: pointer;
          svg {
            font-size: ${30 / 40}rem;
          }
        }
      }
    }
    .cover {
      width: 100%;
      height: 100%;
      background-color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
        border-radius: 4px;
      }
    }
    .state {
      .name {
        font-size: ${18 / 40}rem;
        margin: ${15 / 40}rem 0 ${5 / 40}rem 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 88%;
        word-break: break-all;
      }
      .create-time,
      .count {
        font-size: ${16 / 40}rem;
        color: #606060;
      }
    }
  }
`;

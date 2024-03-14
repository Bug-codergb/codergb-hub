import styled from 'styled-components';
export const ThumbWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .page {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
  }
  .g-vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${18 / 40}rem;
      border-radius: ${8 / 40}rem;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .more-icon {
        cursor: pointer;
        svg {
          font-size: ${34 / 40}rem;
        }
      }
      .info-container {
        display: flex;
        align-items: center;
        width: 90%;
      }
      .operator {
        white-space: nowrap;
        padding: 0 12px 0 0;
      }
      .cover-container {
        margin: 0 ${24 / 20}rem 0 0;
        width: ${200 / 40}rem;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .later-right-info {
        width: 70%;
        .desc {
          display: flex;
          align-items: center;
          margin: ${16 / 40}rem 0 0 0;
          .user-name,
          .play-count,
          .create-time {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
          .play-count {
            margin: 0 ${8 / 40}rem;
          }
        }
      }
    }
  }
`;

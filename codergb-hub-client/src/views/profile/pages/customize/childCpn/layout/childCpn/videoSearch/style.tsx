import styled from 'styled-components';
export const VideoSearchWrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    .user-self,
    .video-lib {
      flex: 1;
    }
  }
  .video-list {
    height: ${400 / 40}rem;
    padding: ${24 / 40}rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > li {
      padding: ${18 / 40}rem;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${24 / 40}rem 0;
      width: ${220 / 40}rem;
      border-radius: ${4 / 40}rem;
      &:hover {
        border: 1px solid #065fd4;
        cursor: pointer;
      }
      &.active {
        border: 1px solid #065fd4;
      }
      .video-cover {
        img {
          width: 100%;
        }
      }
      .video-name {
        margin: ${15 / 40}rem 0 0 0;
        font-size: ${18 / 40}rem;
        height: ${50 / 40}rem;
      }
    }
  }
`;

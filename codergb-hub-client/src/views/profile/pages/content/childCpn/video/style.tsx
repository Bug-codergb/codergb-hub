import styled from 'styled-components';
export const VideoPageWrapper = styled.div`
  .empty-container {
    margin: 150px 0;
  }
`;
export const VideoListItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${600 / 40}rem;
  .left-container {
    .img-container {
      width: ${160 / 40}rem;
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
  .right-container {
    margin: 0 0 0 ${24 / 40}rem;
    .name {
      font-size: ${20 / 40}rem;
      font-weight: bold;
      margin: 0 0 ${10 / 40}rem;
      color: #0d0d0d;
    }
    .desc {
      font-size: ${16 / 40}rem;
      color: #909090;
    }
  }
`;

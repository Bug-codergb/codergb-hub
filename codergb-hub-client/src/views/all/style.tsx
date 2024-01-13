import styled from 'styled-components';
export const AllWrapper = styled.div`
  max-height: 87vh;
  overflow-y: scroll;
  .carousel-container {
    margin: 0 0 ${25 / 40}rem 0;
    border-radius: 8px;
    overflow: hidden;
    .carousel-item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .video-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    & > li {
      margin: 0 0 ${30 / 40}rem 0;
      transition: transform 0.3s;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
  }
`;

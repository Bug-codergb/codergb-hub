import styled from 'styled-components';
export const VideoListWrapper = styled.div`
  .vio-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      margin: 0 0 ${30 / 40}rem 0;
      transition: transform 0.7s;
    }
  }
`;

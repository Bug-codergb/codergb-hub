import styled from 'styled-components';
export const PlaylistWrapper = styled.div`
  .add-play-list {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${8 / 40}rem 0;
      .left-container {
        display: flex;
        align-items: center;
        .play-list-name {
          margin: 0 0 0 ${30 / 40}rem;
        }
      }
    }
  }
`;

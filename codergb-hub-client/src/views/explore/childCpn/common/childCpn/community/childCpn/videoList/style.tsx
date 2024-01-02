import styled from 'styled-components';
export const VideoListWrapper = styled.div`
  min-height: ${200 / 40}rem;
  .header-content {
    display: flex;
    align-items: center;
  }
  .vio-list {
    display: flex;
    justify-content: space-between;
    margin: ${20 / 40}rem 0 0 0;
    flex-wrap: wrap;
    & > li {
      width: ${240 / 40}rem;
      margin: 0 0 ${15 / 40}rem 0;
      border: 1px solid var(--line-color);
      padding: ${10 / 40}rem;
      border-radius: 4px;
      &:hover {
        border-color: #3399ff;
      }
      &.active {
        border-color: #3399ff;
      }
      .img-container {
        width: ${220 / 40}rem;
        img {
          vertical-align: middle;
          width: 100%;
        }
      }
      .name {
        font-size: ${18 / 40}rem;
        margin: ${15 / 40}rem 0;
        word-break: break-all;
      }
      .user-name {
        font-size: ${16 / 40}rem;
      }
    }
  }
  .page {
    display: flex;
    align-items: center;
    padding: ${15 / 40}rem 0;
    justify-content: center;
  }
`;

import styled from 'styled-components';

export const UserDetailWrapper = styled.div`
  width: 100%;
  height: 86vh;
  background-color: #fff;
  overflow-y: scroll;
  img {
    width: 100%;
  }
  .banner {
    min-height: ${200 / 40}rem;
  }
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: flex-start;
      margin: ${30 / 40}rem 0 ${20 / 40}rem 0;

      .img-container {
        width: ${120 / 40}rem;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .right-info {
        margin: 0 0 0 ${24 / 40}rem;

        .user-name {
          font-size: ${28 / 40}rem;
        }
      }
    }
    .control-btn {
      display: flex;
      align-items: center;
      .sub-btn {
        margin: 0 0 0 ${10 / 40}rem;
      }
    }
  }
`;

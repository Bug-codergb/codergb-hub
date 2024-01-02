import styled from 'styled-components';
export const SubscriptionsWrapper = styled.div`
  .header-title {
    display: flex;
    justify-content: space-between;
    .manage {
      padding: 0 ${20 / 40}rem 0 0;
      color: #065fd4;
      cursor: pointer;
    }
    .current-time {
      font-size: ${24 / 40}rem;
    }
  }
  .sub-user-vio-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${30 / 40}rem 0 0 0;
    & > li {
      margin: 0 0 ${30 / 40}rem 0;
      transition: transform 0.7s;
    }
  }
`;

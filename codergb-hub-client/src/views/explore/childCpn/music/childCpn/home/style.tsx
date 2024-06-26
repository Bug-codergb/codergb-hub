import styled from 'styled-components';
export const HomeWrapper = styled.div`
  padding: 0 0 ${20 / 40}rem 0;
  .col-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 ${20 / 40}rem ${30 / 40}rem 0;
      .img-cover {
        border-radius: 4px;
      }
      .right-container {
        width: ${150 / 40}rem;
        margin: 0 0 0 ${20 / 40}rem;
        .name {
          font-size: ${18 / 40}rem;
          white-space: normal;
          margin: 0 0 ${15 / 40}rem 0;
        }
        .desc {
          font-size: ${12 / 40}rem;
          color: #606060;
          white-space: normal;
        }
        .count {
          font-size: ${12 / 40}rem;
          color: #606060;
          white-space: normal;
          display: flex;
          flex-wrap: wrap;
          margin: ${10 / 40}rem 0 0 0;
        }
      }
    }
  }
  .page {
    padding: ${15 / 40}rem ${18 / 40}rem ${15 / 40}rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e5e5e5;
  }
`;

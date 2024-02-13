import styled from 'styled-components';

export const MomentListWrapper = styled.div`
  margin: ${30 / 40}rem ${30 / 40}rem 0 0;

  .moment-list {
    & > li {
      display: flex;
      align-items: flex-start;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${30 / 40}rem 0;
      border-radius: ${12 / 40}rem;
      padding: ${16 / 40}rem ${30 / 40}rem ${30 / 40}rem ${16 / 40}rem;
    }
  }
  .page {
    display: flex;
    justify-content: center;
    padding: ${20 / 40}rem 0 ${30 / 40}rem 0;
  }
`;

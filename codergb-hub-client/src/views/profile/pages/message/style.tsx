import styled from 'styled-components';
export const MessageWrapper = styled.div`
  .empty-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 200px 0;
  }
`;
export const NotifyWrapper = styled.div`
  width: ${440 / 40}rem;
  .user-name {
    cursor: pointer;
    color: #6080ae;
    margin: 0 2px;
  }
  .info {
    font-weight: bolder;
    margin: 0 2px;
    width: 100%;
    cursor: pointer;
  }
`;

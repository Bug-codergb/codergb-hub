import styled from 'styled-components';
export const CustomizeWrapper = styled.div`
  .title-tip {
    font-size: ${30 / 40}rem;
    font-weight: bolder;
    padding: ${5 / 40}rem 0 ${5 / 40}rem 0;
  }
  .tab-pub {
    display: flex;
    align-items: flex-start;
    .customize-tabs {
      flex: 1;
    }
    .pub-btn {
      cursor: pointer;
      background-color: #065fd4;
      color: #fff;
      padding: ${5 / 40}rem ${15 / 40}rem;
      border-radius: ${6 / 40}rem;
    }
  }
`;

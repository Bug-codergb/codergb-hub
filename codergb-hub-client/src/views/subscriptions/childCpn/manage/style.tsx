import styled from 'styled-components';
export const SubManageWrapper = styled.div`
  .sub-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${26 / 40}rem 0;
      .left-container {
        width: ${160 / 40}rem;
        height: ${160 / 40}rem;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .center-container {
        flex: 8;
        margin: 0 0 0 ${20 / 40}rem;
        .channel-name {
          font-size: ${28 / 40}rem;
        }
        .count {
          & > span {
            font-size: ${18 / 40}rem;
            color: #606060;
            &:nth-child(1) {
              margin: 0 ${5 / 40}rem 0 0;
            }
          }
        }
      }
      .right-container {
        flex: 1;
        padding: 0 ${40 / 40}rem 0;
      }
    }
  }
`;

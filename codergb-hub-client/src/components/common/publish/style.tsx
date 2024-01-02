import styled from 'styled-components';
export const PublishWrapper = styled.div`
  .publish-component-outer {
    display: flex;
    align-items: center;
    .user-msg {
      margin: 0 ${18 / 40}rem 0 0;
      width: ${40 / 40}rem;
      height: ${40 / 40}rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .right-input {
      flex: 1;
      .input-container {
        border-bottom: 2px solid #e5e5e5;
        display: flex;
        align-items: center;
        .at-user {
          display: flex;
          align-items: center;
          background-color: #f2f2f2;
          padding: ${2 / 40}rem ${8 / 40}rem;
          border-radius: 5px;
          margin: 0 ${5 / 40}rem ${5 / 40}rem 0;
          .at-label {
            font-size: ${18 / 40}rem;
          }
          .at-user-name {
            white-space: nowrap;
            font-size: ${18 / 40}rem;
          }
        }
        input {
          width: 100%;
          padding: 0 0 ${8 / 40}rem 0;
        }
      }
      .input-focus {
        border-bottom-color: #0f0f0f;
      }
      .btn-controller {
        margin: ${10 / 40}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button {
          cursor: pointer;
          padding: ${8 / 40}rem ${18 / 40}rem;
          margin: 0 0 0 ${8 / 40}rem;
          border-radius: ${20 / 40}rem;
        }
        .cancel {
          background-color: #fff;
          &:hover {
            background-color: #e5e5e5;
          }
        }
        .confirm {
          background-color: #065fd4;
          color: #fff;
        }
        [disabled] {
          background-color: #f2f2f2;
          color: #909090;
        }
      }
    }
  }
  .publish-component-outer-start {
    align-items: flex-start;
  }
`;

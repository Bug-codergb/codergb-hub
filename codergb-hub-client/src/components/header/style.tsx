import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  .logo-outer {
    padding: 0 0 0 ${20 / 40}rem;
    img {
      width: ${60 / 40}rem;
      cursor: pointer;
    }
    .label {
      font-size: ${28 / 40}rem;
      font-weight: bolder;
      margin: 0 0 0 5px;
      cursor: pointer;
    }
  }
`;
export const CenterContent = styled.div`
  display: flex;
  align-items: center;
  width: ${640 / 40}rem;
  .search-outer {
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    height: ${56 / 40}rem;
    width: 100%;
    input {
      padding: 2px 6px;
      height: 100%;
      width: 90%;
    }
    .search-icon {
      padding: 0 ${30 / 40}rem;
      border-left: 1px solid #cccccc;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f8f8;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
      svg {
        width: ${24 / 40}rem;
        height: ${24 / 40}rem;
      }
    }
  }
`;
export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tip {
    padding: 0 ${46 / 40}rem;
  }
  .upload,
  .tip,
  .user {
    display: flex;
    align-items: center;
    svg {
      width: ${30 / 40}rem;
      height: ${30 / 40}rem;
    }
  }
  .user {
    background-color: #fff;
    padding: 0 ${30 / 40}rem 0 0;
    .logout {
      display: flex;
      align-items: center;
      border: 1px solid #065fd4;
      padding: 0 ${10 / 40}rem;
      height: ${48 / 40}rem;
      border-radius: 2px;
      cursor: pointer;
      svg {
        color: #065fd4;
      }
      .label {
        font-size: ${20 / 40}rem;
        margin: 0 0 0 ${15 / 40}rem;
        color: #065fd4;
      }
    }
    .login-status {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .no-avatar-container {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

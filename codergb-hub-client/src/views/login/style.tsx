import styled from "styled-components";
import bgc from "../../assets/img/login.svg";
export const LoginWrappers = styled.div`
  background-color: #060d20;
  position: relative;
  height: 100%;
  .login-bgc {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    background-image: url(${bgc});
    background-position: center center;
    overflow: hidden;
    .signup-space {
      width: 100%;
    }
    .signup-stars {
      width: 100%;
    }
  }

  .signup-space,
  .signup-stars {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100vh;
    height: 100vw;
  }
  .signup-stars:nth-child(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  .signup-stars:nth-child(2) {
    background-position: 20% 50%;
    background-size: 270px 500px;
    animation-delay: 0.3s;
  }
  .signup-stars:nth-child(3) {
    background-position: 40% -80%;
    animation-delay: 1.2s;
  }
  .signup-stars:nth-child(4) {
    background-position: -20% -30%;
    transform: rotate(60deg);
    animation-delay: 2.5s;
  }
  .signup-stars:nth-child(5) {
    background-image: radial-gradient(
        2px 2px at 10px 100px,
        #eee,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 20px 10px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 150px 40px, #ddd, rgba(0, 0, 0, 0));
    background-position: 80% 30%;
    animation-delay: 4s;
  }
  .signup-stars:nth-child(6) {
    background-position: 50% 20%;
    animation-delay: 6s;
  }
  .signup-stars {
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #eee,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 250px 250px;
    opacity: 0;
    animation: zoom 10s infinite;
  }
  @keyframes zoom {
    0% {
      opacity: 0;
      transform: rotate(5deg);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: calc() 0.2;
      transform: scale(2.2);
    }
  }
  .form-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    text-align: center;
  }
  .login-inner {
    padding: ${80 / 40}rem ${30 / 40}rem ${40 / 40}rem ${30 / 40}rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: ${600 / 40}rem;
    background-color: #0e162b;
    border: 1px solid #212636;
    .ant-form-item {
      .ant-form-item-required {
        color: #5eccc7;
      }
    }
  }
  @keyframes hostTitle {
    from {
      letter-spacing: -20px;
    }
    to {
      letter-spacing: 20px;
    }
  }
  .codergb-hub-title {
    display: flex;
    justify-content: center;
    filter: contrast(130px);
    .label {
      font-size: ${60 / 40}rem;
      letter-spacing: 15px;
      animation: hostTitle 3s infinite;
    }
  }
`;

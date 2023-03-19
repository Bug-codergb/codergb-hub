import styled from "styled-components";
export const LoginWrappers = styled.div`
  position: relative;
  height: 100%;
  .title{
    text-align: center;
  }
  .leMagnify span { animation-name: leMagnify }
  @keyframes leMagnify {
    50% {
      transform: scale(1.8);
      letter-spacing: 26px
    }
  }
  .login-inner{
    padding: ${80/40}rem ${30/40}rem ${40/40}rem ${30/40}rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    width: ${600/40}rem; 
  }
`
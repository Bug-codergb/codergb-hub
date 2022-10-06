import styled from "styled-components";
export const LoginWrappers = styled.div`
  position: relative;
  .login-inner{
    padding: ${50/40}rem ${30/40}rem ${40/40}rem ${30/40}rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,50%);
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    width: ${600/40}rem;
  }
`
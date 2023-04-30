import styled from "styled-components";
export const LoginWrappers = styled.div`
  position: relative;
  height: 100%;
  .title{
    text-align: center;
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
  @keyframes hostTitle{
     from{
       letter-spacing: -20px;
     } 
     to{
       letter-spacing: 20px;
     }
   }
  .codergb-hub-title{
    display: flex;
    justify-content: center;
    filter: contrast(130px);
    .label{
      font-size: ${60/40}rem;
      letter-spacing: 15px;
      animation: hostTitle 3s infinite;
    }
  }
`
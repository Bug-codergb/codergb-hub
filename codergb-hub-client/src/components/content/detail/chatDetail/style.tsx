import styled from 'styled-components';
import chatWindow from '../../../../assets/img/chat-window.jpg';

export const ChatWrapper = styled.div`
  .gb-content {
    width: 100%;
    background-image: url(${chatWindow});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    .gb-content-inner {
      width: ${1620 / 40}rem;
      margin: ${1 / 40}rem auto;
      min-height: ${820 / 40}rem;
      /*background-color: #f0f2f5;*/
      .title {
        background-color: #ffffff;
        padding: ${15 / 40}rem ${20 / 40}rem ${15 / 40}rem;
        border-radius: 10px;
        margin: 0 0 ${15 / 40}rem;
      }
    }
  }
`;

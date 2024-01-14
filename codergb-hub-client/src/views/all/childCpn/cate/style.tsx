import styled from 'styled-components';
import cate from '../../../../assets/img/cate.png';
interface IStyle {
  width: number;
}
export const CateWrapper = styled.div<IStyle>`
  width: 100%;
  .page {
    margin: 20px 0;
    display: flex;
    width: 100%;
    background-color: #ffffff;
    max-width: 100% !important;
  }

  // Start here
  .container {
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    border-radius: 4px;
  }
  .photo-container {
    position: relative;
    top: 0;
    left: 0px; // Adjust
    transform: rotate(0deg);
  }
  .photo-cont-item {
    display: flex;
    //width: 784px; // 320px + 60px margin
    .photo-item {
      white-space: nowrap;
      margin-right: 15px;
      border-radius: 4px;
      padding: 5px 10px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      color: #fff;

      background-image: url(${cate}),
        linear-gradient(312deg, rgb(192, 208, 255) 3%, rgb(112, 147, 204) 100%);
      cursor: pointer;
      &.active {
        background-image: url(${cate}),
          linear-gradient(303deg, rgb(255, 155, 126) -10%, rgb(255, 21, 21) 92%);
      }
    }
  }
  .animation-3 {
    animation: scroller 50s linear infinite;
    display: flex;
  }

  // Animations
  @keyframes scroller {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${(props: IStyle) => props.width}px); // 320px + 60px margin: ;
    }
  }
`;

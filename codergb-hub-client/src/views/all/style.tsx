import styled from 'styled-components';
import cate from '../../assets/img/cate.png';
export const AllWrapper = styled.div`
  .carousel-container {
    margin: 0 0 ${25 / 40}rem 0;
    border-radius: 8px;
    overflow: hidden;
    .carousel-item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .cate-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li.item {
      background-image: url(${cate}),
        linear-gradient(312deg, rgb(192, 208, 255) 3%, rgb(112, 147, 204) 100%);
      background-position: center;
      background-size: cover;
      color: #fff;
      padding: 5px 15px;
      margin: 0 10px 0 0;
      border-radius: 4px;
      cursor: pointer;
      &.active {
        background-image: url(${cate}),
          linear-gradient(303deg, rgb(255, 155, 126) -10%, rgb(255, 21, 21) 92%);
      }
    }
  }
`;

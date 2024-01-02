import styled from 'styled-components';
export const SubBtnWrapper = styled.div`
  background-color: #f2f2f2;
  color: #0f0f0f;
  cursor: pointer;
  font-size: ${20 / 40}rem;

  border-radius: ${24 / 40}rem;
  margin: 0 0 0 ${40 / 40}rem;
  text-align: center;
  .inner {
    width: 100%;
    height: 100%;
    padding: ${10 / 40}rem ${20 / 40}rem;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;

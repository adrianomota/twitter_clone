import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Box = styled.div`
  flex-direction: row;
  display: flex;
  width: 180px;
  height: 60px;
  background: #fff;
  margin: 5px;
  flex: 1;


  p {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 44px;
    color: #7159c1;
  }
`;

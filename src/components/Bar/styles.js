import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 59px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  z-index: 1;
  padding-left: 485px;

  ul {
    display: flex;
    list-style: none;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: #667580;
      font-weight: bold;
      padding: 0 15px;

      position: relative;

      span {
        color: #667580;
        font-size: 12px;
        margin-right: 5px;
      }

      strong {
        font-size: 18px;
        margin-right: 5px;
        font-weight: bold;
        margin-top: 2px;
      }
    }
  }
`;
export const Actions = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3bb9e3;
    height: 34px;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    border: 0;
    border-radius: 16px;
    border: solid 2px #3bb9e3;
  }

  img {
    margin-left: 20px;
  }
`;

export const Active = styled.li`
  ::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #3bb9e3;
  }

  strong {
    color: #3bb9e3;
  }
`;

import styled from 'styled-components';
import search from '../../assets/search.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #667580;
        font-weight: bold;
        margin-left: 30px;

        &:first-child {
          margin: 0;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;

  input {
    width: 220px;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa url(${search}) no-repeat 190px center;
  }

  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3bb9e3;
    color: #fff;
    height: 34px;
    width: 90px;
    font-weight: bold;
    font-size: 14px;
    border: 0;
    border-radius: 16px;
  }
`;

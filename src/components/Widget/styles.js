import styled from 'styled-components';

export const Container = styled.aside`
  width: 290px;
  height: 290px;
  background: #fff;
  padding: 15px;
  margin-top: 10px;
  align-items: baseline;

  strong {
    font-size: 10px;
    color: #1f2226;
  }

  ul {
    list-style: none;
    margin-top: 10px;

    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccd6dd;
      padding-bottom: 10px;
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #ccd6dd;
      }

      &:last-child {
        border: 0;
        span {
          font-size: 12px;
          color: #3bb9e3;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const WidgetFollow = styled.div``;

export const Profile = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3bb9e3;
    height: 27px;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    border: 0;
    border-radius: 16px;
    border: solid 2px #3bb9e3;
    margin-top: 4px;
  }

  strong {
    margin: 0 5px;
    font-size: 14px;
    color: #1f2226;

    span {
      font-weight: normal;
      color: #9a9a9a;
    }
  }
`;

export const ActiveFollow = styled.a`
  font-size: 12px;
  color: #3bb9e3;
  text-decoration: none;
  position: relative;
  padding-left: 10px;

  ::before {
    content: '';
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #222;
    position: absolute;
    left: 4px;
    top: 6px;
  }
`;

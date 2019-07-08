import styled from 'styled-components';

export const Container = styled.aside`
  flex: 1;
  background: #fff;
  margin: 10px 20px 0;
  width: 290px;
  nav {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;

    a {
      font-size: 18px;
      font-weight: bold;
      margin-left: 20px;
    }
  }
`;

export const NormalLink = styled.a`
  text-decoration: none;
  color: #3bb9e3;

  &:first-child {
    margin: 0;
  }
`;

export const ActiveLink = styled.a`
  text-decoration: none;
  color: #1f2226;
`;

export const Tweets = styled.ul`
  list-style: none;

  li {
    display: flex;
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #1f2326;

    span {
      display: flex;
      font-weight: normal;
      font-size: 12px;
      color: #7b8b9a;
    }
    img {
      width: 50%;
      height: 50%;
    }

    p {
      display: flex;
      margin-top: 5px;
      font-size: 14px;
      color: #1f2326;
    }
  }
`;

export const Actions = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #667580;
    font-weight: bold;
    font-size: 12px;
    margin-left: 30px;
    margin-top: 20px;

    img {
      margin-right: 5px;
    }

    :first-child {
      margin-left: 0;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.aside`
  displat: flex;
  width: 260px;

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    margin-top: 20px;

    li {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-top: 5px;
      color: #657786;

      img {
        margin-right: 10px;
      }
    }
  }
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: solid 3px #fff;
    margin-top:-130px;
    overflow: hidden;

  }
`;

export const WidgetFollowers = styled.div`
  margin-top: 10px;

  strong {
    font-weight: normal;
    color: #3bb9e3;
  }

  img {
    margin-right: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 0 auto; /*flex-grow flex-shrink */
      width: 45px;
      height: 45px;
      background: #d0d5d9;
      border-radius: 50%;

      margin: 0 5px 10px 0;
    }
  }
`;

export const WidgetImages = styled.div`
  margin-top: 10px;

  strong {
    font-weight: normal;
    color: #3bb9e3;
  }

  img {
    margin-right: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 0 auto; /*flex-grow flex-shrink */
      width: 80px;
      height: 80px;
      background: #d0d5d9;
      border-radius: 8px;
      margin: 0 5px 10px 0;
    }
  }
`;

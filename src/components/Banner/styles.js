import styled from 'styled-components';

import wallpaper from '../../assets/wallpaper.jpeg';

export const BannerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 480px;
  z-index: -1000;
  background: #000 url(${wallpaper}) center;
  background-size: cover;

  h1 {
    color: #fff;
  }
`;

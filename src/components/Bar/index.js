import React from 'react';

import { Container, Actions, Active } from './styles';
import more from '../../assets/more.svg';

export default function Bar() {
  return (
    <Container>
      <ul>
        <Active>
          <span>Tweets</span>
          <strong>120</strong>
        </Active>
        <li>
          <span>Followings</span>
          <strong>140</strong>
        </li>
        <li>
          <span>Followers</span>
          <strong>160</strong>
        </li>
        <li>
          <span>Favorites</span>
          <strong>170</strong>
        </li>
      </ul>
      <Actions>
        <button type="button">Follow</button>
        <img src={more} alt="More" />
      </Actions>
    </Container>
  );
}

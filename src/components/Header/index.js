import React from 'react';

import { Wrapper, Container, HeaderRight } from './styles';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import home from '../../assets/home.svg';
import notification from '../../assets/notification.svg';
import message from '../../assets/message.svg';

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            {' '}
            <img src={home} alt="Home" /> Home
          </li>
          <li>
            <img src={notification} alt="Notifications" /> Notification
          </li>
          <li>
            {' '}
            <img src={message} alt="Messages" /> Message
          </li>
        </ul>
      </nav>
      <img src={logo} alt="Twitter Klone" />

      <HeaderRight>
        <input type="text" placeholder="search on tweeter" />
        <img src={avatar} alt="avatar" />
        <button type="button">Tweet</button>
      </HeaderRight>
    </Container>
  );
}

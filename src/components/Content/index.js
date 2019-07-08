import React from 'react';

import { Container } from './styles';
import Profile from '../Profile';
import TimeLine from '../TimeLine';
import Widget from '../Widget';

export default function Content() {
  return (
    <Container>
      <Profile />
      <TimeLine />
      <Widget />
    </Container>
  );
}

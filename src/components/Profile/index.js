import React from 'react';

import {
  Container, Avatar, WidgetFollowers, WidgetImages, UlFollowers,
} from './styles';

import avatar from '../../assets/me.jpg';
import place from '../../assets/place.svg';
import url from '../../assets/url.svg';
import joined from '../../assets/joined.svg';
import born from '../../assets/born.svg';
import followers from '../../assets/followers.svg';
import images from '../../assets/images.svg';

export default function Profile() {
  return (
    <Container>
      <strong>
        <Avatar src={avatar} alt="Adriano Mota" />
        <h1>Adriano Mota</h1>
      </strong>
      <span>@adrianomota</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the since the 1500s
      </p>

      <ul>
        <li>
          <img src={place} alt="Place" />
          Namu, Belgium
        </li>
        <li>
          <img src={url} alt="Url" />
          exibit.me
        </li>
        <li>
          <img src={joined} alt="Joined" />
          Joined June 2017
        </li>
        <li>
          <img src={born} alt="Birthday" />
          April 2000
        </li>
      </ul>

      <WidgetFollowers>
        <strong>
          <img src={followers} alt="Followers" />
          73 Followers that you know
        </strong>

        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </WidgetFollowers>

      <WidgetImages>
        <strong>
          <img src={images} alt="Images" />
          266 Photos and Videos
        </strong>

        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </WidgetImages>
    </Container>
  );
}

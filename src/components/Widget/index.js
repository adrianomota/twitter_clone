import React from 'react';

import {
  Container, WidgetFollow, Profile, Info, ActiveFollow,
} from './styles';
import adriano from '../../assets/avatar.png';

export default function Widget() {
  return (
    <Container>
      <WidgetFollow>
        <strong>Who to follow</strong>
        <ActiveFollow href="#">Refresh </ActiveFollow>
        <ActiveFollow href="#">Viwe All</ActiveFollow>

        <ul>
          <li>
            <Profile>
              <img src={adriano} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>

                <button type="button">Follow</button>
              </Info>
            </Profile>
            <a href="#">x</a>
          </li>

          <li>
            <Profile>
              <img src={adriano} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>
                <button type="button">Follow</button>
              </Info>
            </Profile>
            <a href="#">x</a>
          </li>

          <li>
            <Profile>
              <img src={adriano} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>
                <button type="button">Follow</button>
              </Info>
            </Profile>
            <a href="#">x</a>
          </li>

          <li>
            <a href="#">
              <span>Find Friends</span>
            </a>
          </li>
        </ul>
      </WidgetFollow>
    </Container>
  );
}

import React from 'react';

import {
  Container, ActiveLink, NormalLink, Tweets, Info, Actions,
} from './styles';

import avatar from '../../assets/avatar.png';
import comments from '../../assets/comments.svg';
import retweet from '../../assets/retweet.svg';
import like from '../../assets/like.svg';

import miguelLenhador from '../../assets/miguel_lenhador.jpg';
import miguelPraia from '../../assets/praia_miguel.jpg';

export default function TimeLine() {
  return (
    <Container>
      <nav>
        <ActiveLink href="#">Tweets </ActiveLink>
        <NormalLink href="#">Tweets and replies</NormalLink>
        <NormalLink href="#">Medias</NormalLink>
      </nav>

      <Tweets>
        <li>
          <img src={avatar} alt="Avatar" />
          <Info>
            <strong>
              <span> Benooit Vrins @Exibit</span>
              <img src={miguelLenhador} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the since the 1500s
              </p>
            </strong>
            <Actions>
              <a href="#">
                <img src={comments} alt="Comments" /> 3
              </a>
              <a href="#">
                <img src={retweet} alt="Retweet" /> 33
              </a>
              <a href="#">
                <img src={like} alt="Like" /> 300
              </a>
            </Actions>
          </Info>
        </li>
      </Tweets>
      <Tweets>
        <li>
          <img src={avatar} alt="Avatar" />
          <Info>
            <strong>
              <span> Benooit Vrins @Exibit</span>
              <img src={miguelPraia} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the since the 1500s
              </p>
            </strong>
            <Actions>
              <a href="#">
                <img src={comments} alt="Comments" /> 3
              </a>
              <a href="#">
                <img src={retweet} alt="Retweet" /> 33
              </a>
              <a href="#">
                <img src={like} alt="Like" /> 300
              </a>
            </Actions>
          </Info>
        </li>
      </Tweets>
      <Tweets>
        <li>
          <img src={avatar} alt="Avatar" />
          <Info>
            <strong>
              Benooit Vrins
              <span>@Exibit</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the since the 1500s
              </p>
            </strong>
            <Actions>
              <a href="#">
                <img src={comments} alt="Comments" /> 3
              </a>
              <a href="#">
                <img src={retweet} alt="Retweet" /> 33
              </a>
              <a href="#">
                <img src={like} alt="Like" /> 300
              </a>
            </Actions>
          </Info>
        </li>
      </Tweets>
    </Container>
  );
}

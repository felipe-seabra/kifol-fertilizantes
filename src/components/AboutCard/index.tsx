import React from 'react';

import { Link } from 'react-router-dom';
import { Container, ContainerLinkBtn, LogoAbout, TextContainer } from './styles';
import { logo } from '../../images';

import { TEXTS } from '../../database/texts';
import { vimeoId } from '../../database/videos';
import VimeoVideo from '../Video';

function AboutCard() {
  return (
    <Container>
      <LogoAbout src={logo} alt="" />
      <TextContainer>
        {TEXTS.slice(0, 1).map((paragraph) => (
          <p dangerouslySetInnerHTML={{ __html: paragraph }} /> // eslint-disable-line
        ))}
        <VimeoVideo videoId={vimeoId} />
        <ContainerLinkBtn>
          <Link className="home-btn" to="/sobre">
            Saiba Mais
          </Link>
        </ContainerLinkBtn>
      </TextContainer>
    </Container>
  );
}

export default AboutCard;

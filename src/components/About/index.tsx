import React from 'react';

import { Link } from 'react-router-dom';
import { Container, LogoAbout, TextContainer } from './styles';
import { logo } from '../../images';

import { TEXTS } from '../../database/texts';

function About() {
  return (
    <Container>
      <LogoAbout src={logo} alt="" />
      <TextContainer>
        {TEXTS.slice(0, 2).map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <Link className="home-btn" to="/about">
          Saiba Mais
        </Link>
      </TextContainer>
    </Container>
  );
}

export default About;

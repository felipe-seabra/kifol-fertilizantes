import React from 'react';

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
      </TextContainer>
    </Container>
  );
}

export default About;

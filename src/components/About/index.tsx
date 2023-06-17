import React from 'react';

import { Container, LogoAbout, TextContainer } from './styles';
import { logo } from '../../images';

const text = [
  `A empresa KIFOL FERTILIZANTES está localizada em Presidente Prudente, no 
  Oeste Paulista, e possui 45 anos de experiência no mercado, sendo uma das pioneiras no ramo.`,

  `Desde o início, a KIFOL FERTILIZANTES tem se destacado por sua abordagem tecnológica, buscando constantemente inovações e novas perspectivas que facilitem a vida dos agricultores. Com uma visão futurista, a empresa concentra seus esforços em trabalhar exclusivamente com fertilizantes altamente balanceados e formulações exclusivas, que atendem praticamente todas as culturas produzidas no Brasil.`
];

function About() {
  return (
    <Container>
      <LogoAbout src={logo} alt="" />
      <TextContainer>
        {text.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextContainer>
    </Container>
  );
}

export default About;

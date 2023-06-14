import React from 'react';

import { Container, LogoAbout, TextContainer } from './styles';
import { logo } from '../../images';

const text = [
  `A empresa KIFOL FERTILIZANTES, está localizada em Presidente
  Prudente, no Oeste Paulista, com 45 anos no mercado é uma das pioneiras no ramo.`,

  `Desde o início, a KIFOL FERTILIZANTES sempre procurou trabalhar de olho na
  tecnologia, inovando e buscando novas perspectivas que facilitassem a vida do
  agricultor. E, foi nesta visão futurista, que a empresa fincou suas ações,
  dedicou-se a trabalhar somente com inovações: fertilizantes altamente
  balanceados e com formulações exclusivas que atendem praticamente todas as
  culturas produzidas no Brasil.`
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

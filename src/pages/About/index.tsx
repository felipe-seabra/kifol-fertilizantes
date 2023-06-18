import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container, LogoAbout } from './styles';
import { logo } from '../../images';

import { TEXTS } from '../../database/texts';

function About() {
  useEffect(() => {
    setPageTitle('Quem Somos - Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <LogoAbout src={logo} />
      {TEXTS.map((text) => (
        <p>{text}</p>
      ))}
      <blockquote>
        <span>
          &quot; Contando com uma equipe altamente capacitada, a KIFOL atualmente
          desempenha suas atividades em praticamente todo o território nacional.&quot;
        </span>
      </blockquote>
    </Container>
  );
}

export default About;

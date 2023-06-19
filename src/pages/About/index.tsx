import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container, Icon, LogoAbout, Title } from './styles';
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
      <Title>Nos siga também nas redes sociais:</Title>
      <div>
        <a
          href="https://www.instagram.com/kifol_fertilizantes/"
          target="_blank"
          rel="noreferrer">
          <Icon className="bx bxl-instagram" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100065332936387"
          target="_blank"
          rel="noreferrer">
          <Icon className="bx bxl-facebook-circle" />
        </a>
      </div>
    </Container>
  );
}

export default About;

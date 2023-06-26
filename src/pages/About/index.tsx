import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container, Icon, IconsContainer, LogoAbout, Title } from './styles';
import { logo } from '../../images';

import { TEXTS } from '../../database/texts';

const URL_INSTAGRAM = 'https://www.instagram.com/kifol_fertilizantes';
const URL_FACEBOOK = 'https://www.facebook.com/kifol';

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
      <Title>Nos siga nas redes sociais:</Title>
      <IconsContainer>
        <Link to={URL_INSTAGRAM} target="_blank" rel="noreferrer">
          <Icon className="bx bxl-instagram" />
        </Link>
        <Link to={URL_FACEBOOK} target="_blank" rel="noreferrer">
          <Icon className="bx bxl-facebook-circle" />
        </Link>
      </IconsContainer>
    </Container>
  );
}

export default About;

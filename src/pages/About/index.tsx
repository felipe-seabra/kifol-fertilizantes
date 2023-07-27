import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container, Icon, IconsContainer, LogoAbout, TextAbout, Title } from './styles';
import { logo } from '../../images';

import { TEXTS } from '../../database/texts';
import { URL_FACEBOOK, URL_INSTAGRAM, URL_LINKEDIN } from '../../database/social';
import { vimeoId } from '../../database/videos';

import VimeoVideo from '../../components/Video';
import setPageDescription from '../../utils/setPageDescription';

function About() {
  useEffect(() => {
    setPageTitle('Quem Somos - Kifol Fertilizantes');
    setPageDescription(
      'Conheça a Kifol Fertilizantes, uma empresa que atua no mercado de fertilizantes há mais de 45 anos.'
    );
  }, []);

  return (
    <Container>
      <LogoAbout src={logo} />
      {TEXTS.map((text) => (
        <TextAbout dangerouslySetInnerHTML={{ __html: text }} key={text} />
      ))}
      <VimeoVideo videoId={vimeoId} />
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
        <Link to={URL_LINKEDIN} target="_blank" rel="noreferrer">
          <Icon className="bx bxl-linkedin" />
        </Link>
      </IconsContainer>
    </Container>
  );
}

export default About;

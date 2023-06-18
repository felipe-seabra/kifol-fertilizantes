import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container, LogoAbout } from './styles';
import { logo } from '../../images';

const TEXTS = [
  `A empresa KIFOL FERTILIZANTES está localizada em Presidente Prudente, no Oeste Paulista, e possui mais de 45 anos de experiência no mercado, sendo uma das pioneiras no ramo.`,

  `Desde o início, a KIFOL FERTILIZANTES tem se destacado por sua abordagem tecnológica, buscando constantemente inovações e novas perspectivas que facilitem a vida dos agricultores. Com uma visão futurista, a empresa concentra seus esforços em trabalhar exclusivamente com fertilizantes altamente balanceados e formulações exclusivas, que atendem praticamente todas as culturas produzidas no Brasil.`,

  `Ao longo dos anos, a KIFOL FERTILIZANTES tem mantido um compromisso inabalável com os agricultores, estabelecendo uma relação de confiança baseada em resultados concretos no campo. É essa parceria sólida que tem impulsionado o crescimento e a consolidação da empresa na agricultura brasileira.`
];

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

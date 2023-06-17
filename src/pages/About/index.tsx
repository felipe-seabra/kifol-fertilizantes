import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container, LogoAbout } from './styles';
import { logo } from '../../images';

const TEXTS = [
  `A empresa KIFOL FERTILIZANTES, está localizada em Presidente Prudente, no Oeste Paulista, com 45 anos no mercado é uma das pioneiras no ramo.`,

  `Desde o início, a KIFOL FERTILIZANTES sempre procurou trabalhar de olho na tecnologia, inovando e buscando novas perspectivas que facilitassem a vida do agricultor. E, foi nesta visão futurista, que a empresa fincou suas ações, dedicou-se a trabalhar somente com inovações: fertilizantes altamente balanceados e com formulações exclusivas que atendem praticamente todas as culturas produzidas no Brasil.`,

  `A tradição da Empresa sempre foi o compromisso assumido com o agricultor. Essa relação de confiança, conseguida com resultados no campo, foi que fez a empresa crescer e consolidar-se na Agricultura Brasileira.`
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
          &quot;Com uma equipe altamente capacitada, a KIFOL, atua hoje praticamente em
          todo o território Nacional.&quot;
        </span>
      </blockquote>
    </Container>
  );
}

export default About;

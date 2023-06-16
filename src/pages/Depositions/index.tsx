import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { videosPage as videos } from '../../database/videos';

import { Container, TextContainer, VideosCard, VideosContainer } from './styles';

const TEXT = [
  `
Somos uma empresa líder em nosso segmento e acreditamos que o protagonismo de nossas equipes faz de nós um time vencedor.`,

  `Faça parte de nossa história! Junte-se a Nós!`
];

function Depositions() {
  useEffect(() => {
    setPageTitle('Depoimentos - Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <h2>Depoimentos</h2>
      <TextContainer>
        {TEXT.map((text) => (
          <p>{text}</p>
        ))}
      </TextContainer>
      <VideosContainer>
        {videos.map((video) => (
          <VideosCard>
            <iframe key={video.url} src={video.url} title={video.title} allowFullScreen />
            <p>{video.description}</p>
          </VideosCard>
        ))}
      </VideosContainer>
    </Container>
  );
}

export default Depositions;

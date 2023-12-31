import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { videosPage as videos } from '../../database/videos';

import { Container, TextContainer, VideosContainer } from './styles';
import VideoCard from '../../components/VideoCard';
import Separator from '../../components/Separator';
import setPageDescription from '../../utils/setPageDescription';

const TEXT = [
  `
  Somos uma empresa líder em nosso segmento e atribuímos nosso sucesso ao protagonismo de nossas equipes, que nos torna um time vencedor.`,

  <strong>Faça parte de nossa história! Junte-se a Nós!</strong>
];

function Depositions() {
  useEffect(() => {
    setPageTitle('Depoimentos - Kifol Fertilizantes');
    setPageDescription('Depoimentos de clientes e colaboradores da Kifol Fertilizantes.');
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
          <VideoCard id={video.id} url={video.url} title={video.title} />
        ))}
      </VideosContainer>
      <Separator />
    </Container>
  );
}

export default Depositions;

import React from 'react';
import { Container, VideosCard, VideosContainer, VideosTitle } from './styles';
import Separator from '../Separator';

import { videosHome as videos } from '../../database/videos';

function LookTo() {
  return (
    <Container>
      <Separator />
      <h2>Veja o que os nossos clientes estão falando sobre nós!</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideosCard>
            <iframe key={video.url} src={video.url} title={video.title} allowFullScreen />
            <VideosTitle>{video.title}</VideosTitle>
            <p>{video.description}</p>
          </VideosCard>
        ))}
      </VideosContainer>
    </Container>
  );
}

export default LookTo;

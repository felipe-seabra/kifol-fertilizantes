import React from 'react';
import {
  Container,
  VideosCard,
  VideosContainer,
  VideosTitle,
  VideoImage
} from './styles';
import Separator from '../Separator';

import { videosHome as videos } from '../../database/videos';
// import VideoCard from '../VideoCard';

function DepositionsCard() {
  return (
    <Container>
      <Separator />
      <h2>Veja o que os nossos clientes estão falando sobre nós!</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideosCard>
            {/* <VideoCard id={video.id} url={video.url} title={video.title} /> */}
            <VideoImage src={video.url} alt={video.title} />
            <VideosTitle>{video.title}</VideosTitle>
            <p>{video.description}</p>
          </VideosCard>
        ))}
      </VideosContainer>
    </Container>
  );
}

export default DepositionsCard;

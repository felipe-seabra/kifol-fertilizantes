import React from 'react';
import { Container, VideosCard, VideosContainer, VideosTitle } from './styles';
import Separator from '../Separator';

const videos = [
  {
    title: 'Ditinho',
    url: 'https://www.youtube.com/embed/IsQDisUfs4I',
    description: `Ditinho, Produtor de Morangos de Estiva / MG. Neste depoimento o produtor conta que o 
    Organics não pode faltar para quem quer produzir mais. Vejam como fotos e vídeo.`
  },
  {
    title: 'Zezé Machado',
    url: 'https://www.youtube.com/embed/ysXEmWc3yLw',
    description: `Zezé Machado, um dos maiores produtores da Região do Sul de Minas, conta neste vídeo como começou a usar os produtos da Kifol Fertilizates e os Resultados obtidos.`
  },
  {
    title: 'Joaquim Islei Da Silva',
    url: 'https://www.youtube.com/embed/l5cwqktOQYM',
    description: `Produtor de Pimenta- MG conta que usa os produtos há muito tempo. Cirlei como é conhecido destaca as vantagens de usar os produtos da Kifol Fertilizantes.`
  }
];

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

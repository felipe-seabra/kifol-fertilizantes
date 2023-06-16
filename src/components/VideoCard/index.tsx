import React, { useState } from 'react';

import { Video, LoadingContainer } from './styles';
import Loading from '../Loading';

function VideoCard({ id, url, title }: { id: number; url: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayerLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Video>
      {!isLoaded && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      <iframe
        key={id}
        src={url}
        title={title}
        allowFullScreen
        style={{ display: isLoaded ? 'block' : 'none' }}
        onLoad={handlePlayerLoad}
      />
    </Video>
  );
}

export default VideoCard;

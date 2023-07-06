import React, { useEffect, useRef } from 'react';
import VimeoPlayer from '@vimeo/player';

import { Container, VideoWrapper } from './styles';

interface VimeoVideoProps {
  videoId: string;
}

const width = window.matchMedia('(max-width: 991px)').matches ? 350 : 640;
const height = window.matchMedia('(max-width: 991px)').matches ? 200 : 353;

function VimeoVideo({ videoId }: VimeoVideoProps): JSX.Element {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializePlayer = async () => {
      if (videoRef.current) {
        const player = new VimeoPlayer(videoRef.current, {
          id: Number(videoId),
          width,
          height
        });

        await player.ready();
        // Player is ready, you can perform additional actions if needed
      }
    };

    initializePlayer();

    return () => {
      // Cleanup player if necessary
    };
  }, [videoId, width, height]);

  return (
    <Container className="">
      <VideoWrapper ref={videoRef} />
    </Container>
  );
}

export default VimeoVideo;

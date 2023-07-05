import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import AboutCard from '../../components/AboutCard';
import Banner from '../../components/Banner';
import DepositionsCard from '../../components/DepositionsCard';
import VimeoVideo from '../../components/Video';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <Banner />
      <AboutCard />
      <VimeoVideo videoId="842633287" />
      <DepositionsCard />
    </Container>
  );
}

export default Home;

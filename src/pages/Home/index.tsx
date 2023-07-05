import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import AboutCard from '../../components/AboutCard';
import Banner from '../../components/Banner';
import LookTo from '../../components/LookTo';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <Banner />
      <AboutCard />
      <LookTo />
    </Container>
  );
}

export default Home;

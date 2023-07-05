import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import About from '../../components/About';
import Banner from '../../components/Banner';
import LookTo from '../../components/LookTo';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <Banner />
      <About />
      <LookTo />
    </Container>
  );
}

export default Home;

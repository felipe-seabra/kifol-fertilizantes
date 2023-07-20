import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import AboutCard from '../../components/AboutCard';
import Banner from '../../components/Banner';
import CardProductHome from '../../components/CardProductHome';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <Banner />
      <AboutCard />
      <CardProductHome />
    </Container>
  );
}

export default Home;

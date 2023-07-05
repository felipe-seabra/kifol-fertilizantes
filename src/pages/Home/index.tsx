import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import AboutCard from '../../components/AboutCard';
import Banner from '../../components/Banner';
import DepositionsCard from '../../components/DepositionsCard';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <Banner />
      <AboutCard />
      <DepositionsCard />
    </Container>
  );
}

export default Home;

import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import AboutCard from '../../components/AboutCard';
import Banner from '../../components/Banner';
import CardProductHome from '../../components/CardProductHome';
import setPageDescription from '../../utils/setPageDescription';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes - A Nutrição Que Faz A Diferença');
    setPageDescription('Há 45 anos no mercado, sendo uma das pioneiras no ramo.');
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

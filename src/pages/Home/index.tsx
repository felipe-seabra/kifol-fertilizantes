import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import About from '../../components/About';
import ProductsLine from '../../components/ProductsLine';
import LookTo from '../../components/LookTo';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <About />
      <ProductsLine />
      <LookTo />
    </Container>
  );
}

export default Home;

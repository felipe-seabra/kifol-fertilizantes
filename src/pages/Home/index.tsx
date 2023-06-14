import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

import About from '../../components/About';
import ProductsLine from '../../components/ProductsLine';

function Home() {
  useEffect(() => {
    setPageTitle('Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <About />
      <ProductsLine />
    </Container>
  );
}

export default Home;

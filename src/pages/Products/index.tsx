import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Products() {
  useEffect(() => {
    setPageTitle('Produtos - Kifol Fertilizantes');
  }, []);

  return <Container>Produtos</Container>;
}

export default Products;

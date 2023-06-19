import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
// import { products } from '../../images';

export default function ProductsLine() {
  return (
    <Container>
      {/* <ProductsImage src={products} /> */}
      <Link className="home-btn" to="/products">
        Conheça Nossos Produtos
      </Link>
    </Container>
  );
}

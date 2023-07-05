import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
// import { ALLPRODUCTS } from '../../images';

export default function ProductsLine() {
  return (
    <Container>
      {/* <ProductsImage src={ALLPRODUCTS} /> */}
      {/* <Slogan>A NUTRIÇÃO QUE FAZ A DIFERENÇA!</Slogan> */}
      <Link className="home-btn" to="/produtos">
        Conheça Nossos Produtos
      </Link>
    </Container>
  );
}

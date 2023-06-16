import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import {
  Container,
  TitleProducts,
  ContainerProducts,
  ProductContainer,
  ProductImage,
  ProductTitle
} from './styles';

import { products } from '../../database/products';

function Products() {
  useEffect(() => {
    setPageTitle('Produtos - Kifol Fertilizantes');
  }, []);

  return (
    <Container>
      <TitleProducts>Produtos Kifol</TitleProducts>
      <ContainerProducts>
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
            <ProductContainer>
              <ProductImage src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
            </ProductContainer>
          </Link>
        ))}
      </ContainerProducts>
    </Container>
  );
}

export default Products;

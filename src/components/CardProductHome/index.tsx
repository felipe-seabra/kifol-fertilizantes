import React from 'react';
import Button from 'react-bootstrap/Button';

import { Container, ContainerProducts, Title } from './styles';

import { products } from '../../database/products';
import Separator from '../Separator';
import CardProduct from '../CardProduct';

function CardProductHome() {
  const specificProductIds = [1, 11, 10];
  const filteredProducts = products.filter((product) =>
    specificProductIds.includes(product.id)
  );
  const firstThreeProducts = filteredProducts.slice(0, 3);

  return (
    <Container>
      <Separator />
      <Title>Produtos em Destaque</Title>
      <ContainerProducts>
        {firstThreeProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ContainerProducts>
      <Button className="button-product" variant="primary" href="/produtos">
        VEJA TODOS OS PRODUTOS
      </Button>
    </Container>
  );
}

export default CardProductHome;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Container, ContainerProducts, Title } from './styles';

import { products } from '../../database/products';
import Separator from '../Separator';

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
          <Card style={{ width: '18rem', margin: '0.5rem', textAlign: 'center' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description[0]}</Card.Text>
              <Button
                className="button-product"
                variant="primary"
                href={`/produtos/${product.id}`}>
                SAIBA MAIS
              </Button>
            </Card.Body>
          </Card>
        ))}
      </ContainerProducts>
      <Button className="button-product" variant="primary" href="/produtos">
        VEJA TODOS OS PRODUTOS
      </Button>
    </Container>
  );
}

export default CardProductHome;

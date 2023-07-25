import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { ProductContainer } from './styles';
import { IProduct } from '../../interfaces';

type CardProductProps = {
  product: IProduct;
};

export default function CardProduct({
  product: { url, image, name, description }
}: CardProductProps) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const truncarDescricao = (desc: string, maxLength: number) => {
    if (desc.length > maxLength) {
      return `${desc.substring(0, maxLength)}...`;
    }
    return desc;
  };

  return (
    <Link to={`/${url}`}>
      <ProductContainer>
        <Card style={{ width: '18rem', margin: '0.5rem', textAlign: 'center' }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ display: loaded ? 'inline-block' : 'none' }}
            onLoad={handleImageLoad}
          />
          {!loaded && (
            <BlurhashCanvas
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              className="product-img img-fluid"
              width={200}
              height={200}
              punch={1}
            />
          )}
          <Card.Body>
            <Card.Title className="product-titile">{name}</Card.Title>
            <Card.Text>{truncarDescricao(description[0], 100)}</Card.Text>
            <Button className="button-product" variant="primary">
              SAIBA MAIS
            </Button>
          </Card.Body>
        </Card>
      </ProductContainer>
    </Link>
  );
}

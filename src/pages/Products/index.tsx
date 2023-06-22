import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
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
import Separator from '../../components/Separator';

function Products() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPageTitle('Produtos - Kifol Fertilizantes');
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container>
      <TitleProducts>Produtos Kifol</TitleProducts>
      <ContainerProducts>
        {sortedProducts.map((product) => (
          <Link to={`/products/${product.id}`}>
            <ProductContainer>
              <ProductImage
                src={product.image}
                alt={product.name}
                style={{ display: loaded ? 'inline-block' : 'none' }}
                onLoad={handleImageLoad}
              />
              {!loaded && (
                <BlurhashCanvas
                  hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                  className="product-img mb-5 img-fluid"
                  width={200}
                  height={200}
                  punch={1}
                />
              )}
              <ProductTitle>{product.name}</ProductTitle>
            </ProductContainer>
          </Link>
        ))}
      </ContainerProducts>
      <Separator />
    </Container>
  );
}

export default Products;

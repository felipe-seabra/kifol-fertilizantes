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
  ProductTitle,
  InputSearchContainer,
  InputSearch,
  IconSearch
} from './styles';

import { products } from '../../database/products';
import Separator from '../../components/Separator';

function Products() {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPageTitle('Produtos - Kifol Fertilizantes');
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

  const filterProducts = () => {
    return sortedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Container>
      <TitleProducts>Produtos Kifol</TitleProducts>
      <InputSearchContainer>
        <InputSearch
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar produto"
        />
        <IconSearch className="bx bx-search-alt-2" />
      </InputSearchContainer>
      <ContainerProducts>
        {!filterProducts().length && <p>Nenhum produto encontrado.</p>}
        {filterProducts().map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
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

import React, { useEffect, useState } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import {
  Container,
  TitleProducts,
  ContainerProducts,
  InputSearchContainer,
  InputSearch,
  IconSearch
} from './styles';

import { products } from '../../database/products';
import Separator from '../../components/Separator';
import CardProduct from '../../components/CardProduct';
import setPageDescription from '../../utils/setPageDescription';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPageTitle('Produtos - Kifol Fertilizantes');
    setPageDescription(
      'Produtos Kifol Fertilizantes - O segredo dos produtores de sucesso.'
    );
  }, []);

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
          <CardProduct product={product} key={product.id} />
        ))}
      </ContainerProducts>
      <Separator />
    </Container>
  );
}

export default Products;

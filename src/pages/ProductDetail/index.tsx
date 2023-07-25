import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import {
  Container,
  DescriptionContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ContainerButtons
} from './styles';

import { products } from '../../database/products';
import { IProduct } from '../../interfaces';
import setPageDescription from '../../utils/setPageDescription';

function ProductDetail() {
  const { url } = useParams();
  const [productDB, setProductDB] = useState<IProduct>();

  useEffect(() => {
    const productFound = products.find((product) => product.url === url);
    setProductDB(productFound);

    setPageTitle(`${productFound?.name} - Kifol Fertilizantes`);
    if (productFound?.description[0] === undefined)
      setPageDescription('Produto Não Encontrato');
    else setPageDescription(productFound?.description[0]);
  }, []);

  const { name, image, description } = productDB || {};

  return (
    <Container>
      <ProductImage src={image} alt={name} />
      <DescriptionContainer>
        <ProductTitle>{name}</ProductTitle>
        {description?.map((paragraph) => (
          <ProductDescription key={paragraph[0]}>{paragraph}</ProductDescription>
        ))}
        <ContainerButtons>
          <Link className="product-btn" to="/contato">
            Solicite Um Orçamento
          </Link>
          <Link className="more-product-btn" to="/produtos">
            Ver Outros Produtos
          </Link>
        </ContainerButtons>
      </DescriptionContainer>
    </Container>
  );
}

export default ProductDetail;

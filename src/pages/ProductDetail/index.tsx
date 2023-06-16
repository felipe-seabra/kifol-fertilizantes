import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import {
  Container,
  DescriptionContainer,
  ProductImage,
  ProductTitle,
  ProductDescription
} from './styles';

import { products } from '../../database/products';
import { IProduct } from '../../interfaces';

function ProductDetail() {
  const { id } = useParams();
  const [productDB, setProductDB] = useState<IProduct>();

  useEffect(() => {
    const productFound = products.find((product) => product.id === Number(id));
    setProductDB(productFound);

    setPageTitle(`${productFound?.name} - Kifol Fertilizantes`);
  }, []);

  const { name, image, description } = productDB || {};

  return (
    <Container>
      <ProductImage src={image} alt={name} />
      <DescriptionContainer>
        <ProductTitle>{name}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <Link className="product-btn" to="/contact">
          Solicite um Orçamento
        </Link>
      </DescriptionContainer>
    </Container>
  );
}

export default ProductDetail;

import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import { Link } from 'react-router-dom';
import { ProductContainer, ProductImage, ProductTitle } from './styles';
import { IProduct } from '../../interfaces';

type CardProductProps = {
  product: IProduct;
};

export default function CardProduct({ product: { id, image, name } }: CardProductProps) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Link to={`/produtos/${id}`}>
      <ProductContainer>
        <ProductImage
          src={image}
          alt={name}
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
        <ProductTitle>{name}</ProductTitle>
      </ProductContainer>
    </Link>
  );
}

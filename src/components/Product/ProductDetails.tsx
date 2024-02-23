import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

const ProductDetails = () => {
  const { details } = useAppSelector((state) => state.product.currentProduct);

  return details ? (
    <ul>
      {details.map((detail, idx) => (
        <li key={idx}>{detail}</li>
      ))}
    </ul>
  ) : (
    <p>You dont have any details</p>
  );
};

export default ProductDetails;

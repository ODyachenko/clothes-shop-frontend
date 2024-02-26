import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

const ProductDetails = () => {
  const { details } = useAppSelector((state) => state.product.currentProduct);

  return details?.length ? (
    <ul className="list-disc pl-5 lg:text-lg">
      {details.map((detail, idx) => (
        <li className="f mb-4 last:mb-0" key={idx}>
          {detail}
        </li>
      ))}
    </ul>
  ) : (
    <p className="font-bold text-center md:text-lg lg:text-2xl">
      We don't have details for this product
    </p>
  );
};

export default ProductDetails;

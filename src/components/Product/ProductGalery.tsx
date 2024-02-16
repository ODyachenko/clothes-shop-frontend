import React from 'react';
import product from '../../assets/img/product.png';

const ProductGalery = () => {
  return (
    <div className="product__gallery gallery flex flex-col-reverse gap-3 mb-5 sm:flex-row lg:flex-shrink-0 lg:m-0">
      <div className="gallery__col flex gap-3 sm:flex-col">
        <picture className="gallery__thumbnail rounded-3xl max-w-36">
          <img className="rounded-3xl" src={product} alt="" />
        </picture>
        <picture className="gallery__thumbnail rounded-3xl max-w-36">
          <img className="rounded-3xl" src={product} alt="" />
        </picture>
        <picture className="gallery__thumbnail rounded-3xl max-w-36">
          <img className="rounded-3xl" src={product} alt="" />
        </picture>
      </div>
      <picture className="gallery__img bg-card-bg rounded-3xl sm:flex sm:items-center sm:w-full">
        <img className="rounded-3xl mx-auto" src={product} alt="" />
      </picture>
    </div>
  );
};

export default ProductGalery;

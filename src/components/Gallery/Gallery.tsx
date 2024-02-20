import React, { FC, useState } from 'react';
import { productsImages } from '../../data/productsImages';
import GalleryList from './GalleryList';

const Gallery: FC = () => {
  const [img, setImg] = useState<string>(productsImages[0]);

  const onHoverHandler = (value: string) => {
    setImg(value);
  };

  return (
    <div className="gallery flex flex-col-reverse gap-3 mb-5 sm:flex-row lg:flex-shrink-0 lg:m-0 lg:w-w-gallery">
      <GalleryList images={productsImages} handler={onHoverHandler} />
      <picture className="gallery__img bg-card-bg rounded-3xl sm:flex sm:items-center sm:w-full">
        <img className='className="rounded-3xl mx-auto"' src={img} alt="" />
      </picture>
    </div>
  );
};

export default Gallery;

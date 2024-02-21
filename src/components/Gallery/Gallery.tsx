import React, { FC, useState } from 'react';
import { productsImages } from '../../data/productsImages';
import GalleryList from './GalleryList';

const Gallery: FC = () => {
  const [imgIdx, setImgIdx] = useState<number>(0);

  return (
    <div className="gallery flex flex-col-reverse gap-3 mb-5 sm:flex-row lg:flex-shrink-0 lg:m-0 lg:w-w-gallery">
      <GalleryList imgIdx={imgIdx} handler={setImgIdx} />
      <picture className="gallery__img bg-card-bg rounded-3xl sm:flex sm:items-center sm:w-full">
        <img
          className='className="rounded-3xl mx-auto"'
          src={productsImages[imgIdx]}
          alt=""
        />
      </picture>
    </div>
  );
};

export default Gallery;

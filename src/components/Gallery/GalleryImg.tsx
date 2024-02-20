import React, { FC } from 'react';
import { productsImages } from '../../data/productsImages';

type GalleryListProps = {
  img: string;
  idx: number;
  handler: (value: string) => void;
};

const GalleryImg: FC<GalleryListProps> = ({ img, idx, handler }) => {
  return (
    <picture
      onMouseOver={() => handler(img)}
      className={`gallery__thumbnail rounded-3xl max-w-36 border-2 border-solid border-transparent hover:border-black cursor-pointer ${
        img === productsImages[idx] ? 'border-black' : ''
      }`}
    >
      <img className="rounded-3xl" src={img} alt="" />
    </picture>
  );
};

export default GalleryImg;

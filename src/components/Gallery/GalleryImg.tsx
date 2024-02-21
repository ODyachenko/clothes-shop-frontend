import React, { FC } from 'react';
import { productsImages } from '../../data/productsImages';

type GalleryListProps = {
  img: string;
  idx: number;
  imgIdx: number;
  handler: (idx: number) => void;
};

const GalleryImg: FC<GalleryListProps> = ({ img, idx, imgIdx, handler }) => {
  return (
    <picture
      onMouseOver={() => handler(idx)}
      className={`gallery__thumbnail rounded-3xl max-w-36 border-2 border-solid 
       hover:border-black cursor-pointer 
      ${idx === imgIdx ? 'border-black' : 'border-transparent'}`}
    >
      <img className="rounded-3xl" src={img} alt="" />
    </picture>
  );
};

export default GalleryImg;

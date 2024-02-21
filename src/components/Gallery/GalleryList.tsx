import React, { FC } from 'react';
import { productsImages } from '../../data/productsImages';
import GalleryImg from './GalleryImg';

type GalleryListProps = {
  imgIdx: number;
  handler: (index: number) => void;
};

const GalleryList: FC<GalleryListProps> = ({ imgIdx, handler }) => {
  return (
    <div className="gallery__col flex gap-3 sm:flex-col">
      {productsImages.map((image, index) => (
        <GalleryImg
          key={index}
          img={image}
          idx={index}
          imgIdx={imgIdx}
          handler={handler}
        />
      ))}
    </div>
  );
};

export default GalleryList;

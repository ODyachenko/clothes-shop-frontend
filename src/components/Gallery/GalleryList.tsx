import React, { FC } from 'react';
import GalleryImg from './GalleryImg';

type GalleryListProps = {
  images: string[];
  handler: (value: string) => void;
};

const GalleryList: FC<GalleryListProps> = ({ images, handler }) => {
  return (
    <div className="gallery__col flex gap-3 sm:flex-col">
      {images.map((image, index) => (
        <GalleryImg key={index} img={image} idx={index} handler={handler} />
      ))}
    </div>
  );
};

export default GalleryList;

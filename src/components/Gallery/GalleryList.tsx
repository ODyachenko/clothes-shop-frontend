import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
// import { productsImages } from '../../data/productsImages';
import GalleryImg from './GalleryImg';

type GalleryListProps = {
  imgIdx: number;
  handler: (index: number) => void;
};

const GalleryList: FC<GalleryListProps> = ({ imgIdx, handler }) => {
  const { images } = useAppSelector((state) => state.product.currentProduct);

  return (
    <div className="gallery__col flex gap-3 sm:flex-col">
      {images &&
        images.map((image: any, index: any) => (
          <GalleryImg
            key={image.id}
            img={image.image}
            idx={index}
            imgIdx={imgIdx}
            handler={handler}
          />
        ))}
    </div>
  );
};

export default GalleryList;

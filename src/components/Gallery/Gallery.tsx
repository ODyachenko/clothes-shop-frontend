import { FC, useState } from 'react';
import GalleryList from './GalleryList';
import { useAppSelector } from '../../hooks/hooks';

const Gallery: FC = () => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const { currentProduct } = useAppSelector((state) => state.product);

  return (
    <div className="gallery flex flex-col-reverse gap-3 mb-5 sm:flex-row lg:flex-shrink-0 lg:m-0 lg:w-w-gallery">
      <GalleryList imgIdx={imgIdx} handler={setImgIdx} />
      <picture className="gallery__img rounded-3xl sm:flex sm:items-center sm:w-full">
        {currentProduct.images && (
          <img
            className="rounded-3xl mx-auto"
            src={currentProduct.images[imgIdx]?.image}
            alt=""
          />
        )}
      </picture>
    </div>
  );
};

export default Gallery;

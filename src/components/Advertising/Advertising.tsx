import React, { FC, useEffect, useRef, useState } from 'react';
import { ProductType } from '../../../@types';
import CardsList from '../Cards/CardsList';
import CardsSlider from '../Cards/CardsSlider';
import { Wrapper } from '../Wrapper/Wrapper';

type AdvertisingProps = {
  title: string;
  productsList: ProductType[];
  className?: string;
};

const Advertising: FC<AdvertisingProps> = ({
  className,
  title,
  productsList,
}) => {
  const [width, setWidth] = useState<number>(0);
  const sliderRef = useRef<boolean>(true);

  useEffect(() => {
    const handlerResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handlerResize);

    width >= 1023 ? (sliderRef.current = false) : (sliderRef.current = true);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, [width]);

  return (
    <Wrapper className={`advertising ${className}`}>
      <h2 className="advertising__title title text-center mb-8 lg:mb-16">
        {title}
      </h2>
      {sliderRef.current ? (
        <CardsSlider productsList={productsList} />
      ) : (
        <CardsList productsList={productsList} />
      )}
    </Wrapper>
  );
};

export default Advertising;

import React, { FC, useEffect, useState } from 'react';
import { ProductType } from '../../../@types';
import SecondaryBtn from '../../UI/SecondaryBtn';
import CardsList from '../Cards/CardsList';
import CardsSlider from '../Cards/CardsSlider';
import { Wrapper } from '../Wrapper/Wrapper';

type AdvertisingProps = {
  title: string;
  productsList: ProductType[];
  className?: string;
  path: string;
};

const Advertising: FC<AdvertisingProps> = ({
  className,
  title,
  productsList,
  path,
}) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handlerResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, [width]);

  return (
    <Wrapper className={`advertising ${className}`}>
      <h2 className="advertising__title title text-center mb-8 sm:text-left lg:text-center lg:mb-16">
        {title}
      </h2>
      {width < 1024 ? (
        <CardsSlider productsList={productsList} />
      ) : (
        <CardsList
          productsList={productsList}
          className="grid gap-5 grid-cols-4"
          element={
            <SecondaryBtn
              value="View All"
              className="w-56 mx-auto"
              path={path}
            />
          }
        />
      )}
    </Wrapper>
  );
};

export default Advertising;

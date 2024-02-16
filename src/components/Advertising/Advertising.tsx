import React, { FC } from 'react';
import { ProductType } from '../../../@types';
import CardsList from '../Cards/CardsList';
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
  return (
    <Wrapper className={`advertising ${className}`}>
      <h2 className="advertising__title title text-center mb-8 lg:mb-16">
        {title}
      </h2>
      <CardsList productsList={productsList} />
    </Wrapper>
  );
};

export default Advertising;

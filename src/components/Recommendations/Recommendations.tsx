import React, { FC } from 'react';
import { productsList } from '../../data/productsList';
import Advertising from '../Advertising/Advertising';
import { Wrapper } from '../Wrapper/Wrapper';

const Recommendations: FC = () => {
  return (
    <Advertising
      className="recommendations"
      title="You might also like"
      productsList={productsList}
    />
  );
};

export default Recommendations;

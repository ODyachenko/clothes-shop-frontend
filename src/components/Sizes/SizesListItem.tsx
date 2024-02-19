import React, { FC } from 'react';
import { ProductSizeType } from '../../../@types';
import OptionBtn from '../../UI/OptionBtn';

const SizesListItem: FC<ProductSizeType> = ({ value }) => {
  return (
    <li className="sizes__list-item">
      <OptionBtn value={value} />
    </li>
  );
};

export default SizesListItem;

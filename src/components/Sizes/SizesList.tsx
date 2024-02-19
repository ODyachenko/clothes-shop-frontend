import React, { FC } from 'react';
import { ProductSizeType } from '../../../@types';
import OptionBtn from '../../UI/OptionBtn';
import SizesListItem from './SizesListItem';

type SizesListProps = {
  sizes: ProductSizeType[];
};

const SizesList: FC<SizesListProps> = ({ sizes }) => {
  return (
    <ul className="sizes__list flex flex-wrap gap-2">
      {sizes.map((size) => (
        <SizesListItem key={size.id} {...size} />
      ))}
    </ul>
  );
};

export default SizesList;

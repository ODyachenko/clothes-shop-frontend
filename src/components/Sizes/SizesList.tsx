import React, { FC, useState } from 'react';
import { ProductSizeType } from '../../../@types';
import OptionBtn from '../../UI/OptionBtn';
import SizesListItem from './SizesListItem';

type SizesListProps = {
  sizes: ProductSizeType[];
};

const SizesList: FC<SizesListProps> = ({ sizes }) => {
  const [selectedSizeId, setSelectedSizeId] = useState<number>(1);

  return (
    <ul className="sizes__list flex flex-wrap gap-2">
      {sizes.map((size) => (
        <SizesListItem
          key={size.id}
          {...size}
          selectedSizeId={selectedSizeId}
          setSelectedSizeId={setSelectedSizeId}
        />
      ))}
    </ul>
  );
};

export default SizesList;

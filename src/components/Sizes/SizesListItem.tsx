import React, { FC } from 'react';
import { ProductSizeType } from '../../../@types';
import OptionBtn from '../../UI/OptionBtn';

type SizesListItemProps = {
  id: number;
  value: string;
  selectedSizeId: number;
  setSelectedSizeId: (id: number) => void;
};

const SizesListItem: FC<SizesListItemProps> = ({
  id,
  value,
  selectedSizeId,
  setSelectedSizeId,
}) => {
  return (
    <li className="sizes__list-item">
      <OptionBtn
        value={value}
        id={id}
        state={selectedSizeId}
        handler={setSelectedSizeId}
      />
    </li>
  );
};

export default SizesListItem;

import { FC } from 'react';
import SizesListItem from './SizesListItem';
import { ProductSizeType } from '../../../@types';

type SizesListProps = {
  sizes: ProductSizeType[];
  state: number;
  handler: (id: number) => void;
};

const SizesList: FC<SizesListProps> = ({ sizes, state, handler }) => {
  return (
    <ul className="sizes__list flex flex-wrap gap-2">
      {sizes.map((size) => (
        <SizesListItem
          key={size.id}
          {...size}
          selectedSizeId={state}
          setSelectedSizeId={handler}
        />
      ))}
    </ul>
  );
};

export default SizesList;

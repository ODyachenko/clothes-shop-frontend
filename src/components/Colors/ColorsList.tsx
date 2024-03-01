import { FC } from 'react';
import { ProductColorsType } from '../../../@types';
import ColorsListItem from './ColorsListItem';
import './styles.scss';

type ColorsListProps = {
  colors: ProductColorsType[];
  state: number;
  handler: (id: number) => void;
};

const ColorsList: FC<ColorsListProps> = ({ colors, state, handler }) => {
  return (
    <ul className="colors__list flex flex-wrap gap-4">
      {colors.map((color) => (
        <ColorsListItem
          key={color.id}
          {...color}
          selectedColorId={state}
          onClickHandler={handler}
        />
      ))}
    </ul>
  );
};

export default ColorsList;

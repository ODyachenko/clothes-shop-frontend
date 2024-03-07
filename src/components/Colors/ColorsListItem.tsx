import { FC } from 'react';

type ColorsListItemProps = {
  id: number;
  value: string;
  selectedColorId: number;
  onClickHandler: (id: number) => void;
};

const ColorsListItem: FC<ColorsListItemProps> = ({
  id,
  value,
  selectedColorId,
  onClickHandler,
}) => {
  return (
    <li
      className={`colors__list-item rounded-full border-2 border-border-10 
      border-solid  hover:border-gray-400 ${
        id === selectedColorId ? 'active border-gray-400' : ''
      }`}
    >
      <button
        onClick={() => onClickHandler(id)}
        className={`w-10 h-10 rounded-full `}
        style={{ backgroundColor: value }}
        aria-label={`${value} color button`}
      />
    </li>
  );
};

export default ColorsListItem;

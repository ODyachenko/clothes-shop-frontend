import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveCategory } from '../../../redux/slices/filterSlice';
import { FiltersType } from '../../../../@types';

const FiltersListItem: FC<FiltersType> = ({ id, name }) => {
  const { activeCategory } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === activeCategory
      ? dispatch(setActiveCategory(0))
      : dispatch(setActiveCategory(id));
  };

  return (
    <li className="filters__list-item mb-5 last:mb-0">
      <label className="flex items-center gap-3">
        <input
          onChange={() => onClickHandler(id)}
          checked={id === activeCategory}
          name="filters"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <span>{name}</span>
      </label>
    </li>
  );
};

export default FiltersListItem;

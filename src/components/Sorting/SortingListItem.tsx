import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import { SortingType } from '../../../@types';
import { classNames } from '../../utils/classNames';

type SortingListItemProps = {
  value: string;
  idx: number;
  setSelected: (index: number) => void;
};

const SortingListItem: FC<SortingListItemProps> = ({
  value,
  idx,
  setSelected,
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => setSelected(idx)}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700',
            'block px-4 py-2 text-sm w-full'
          )}
        >
          {value}
        </button>
      )}
    </Menu.Item>
  );
};

export default SortingListItem;

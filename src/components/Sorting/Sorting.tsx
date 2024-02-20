import React, { FC, Fragment, useState } from 'react';
import Chevron from '../../UI/Chevron';
import { Menu, Transition } from '@headlessui/react';
import { sortingList } from '../../data/sortingList';
import SortingListItem from './SortingListItem';

const Sorting: FC = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" bg-search-bg text-sm py-2 px-5 lg:px-6 lg:text-base inline-flex w-full justify-center items-center gap-x-1.5 rounded-3xl  hover:bg-gray-50">
          {sortingList[selected].value}
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5306 1.53063L6.5306 6.53063C6.46092 6.60055 6.37813 6.65602 6.28696 6.69388C6.1958 6.73173 6.09806 6.75122 5.99935 6.75122C5.90064 6.75122 5.8029 6.73173 5.71173 6.69388C5.62057 6.65602 5.53778 6.60055 5.4681 6.53063L0.468098 1.53063C0.327202 1.38973 0.248047 1.19864 0.248047 0.999378C0.248047 0.80012 0.327202 0.609024 0.468098 0.468128C0.608994 0.327231 0.800091 0.248077 0.999348 0.248077C1.19861 0.248077 1.3897 0.327231 1.5306 0.468128L5.99997 4.9375L10.4693 0.467503C10.6102 0.326607 10.8013 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5318 0.467503C11.6727 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6727 1.38911 11.5318 1.53L11.5306 1.53063Z"
              fill="black"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortingList.map((rule, idx) => (
              <SortingListItem
                key={rule.id}
                {...rule}
                idx={idx}
                setSelected={setSelected}
              />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Sorting;

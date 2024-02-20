import React, { FC } from 'react';
import { BtnPropsType } from '../../@types';

const SecondaryBtn: FC<BtnPropsType> = ({ value, handler, className }) => {
  return (
    <button
      onClick={handler}
      className={`more-btn border border-solid border-border-10 py-4 px-11 rounded-3xl text-center cursor-pointer hover:bg-black hover:text-white lg:transition-all lg:duration-300 ${className}`}
    >
      {value}
    </button>
  );
};

export default SecondaryBtn;

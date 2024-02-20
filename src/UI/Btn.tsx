import React, { FC } from 'react';
import { BtnPropsType } from '../../@types';

const Btn: FC<BtnPropsType> = ({ value, className, handler }) => {
  return (
    <button
      onClick={handler}
      className={`btn ${className} bg-black text-white px-4 py-3 rounded-3xl text-center border border-solid border-border-10 hover:bg-white hover:text-black lg:transition-all lg:duration-300`}
    >
      {value}
    </button>
  );
};

export default Btn;

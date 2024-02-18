import React, { FC } from 'react';
import { BtnPropsType } from '../../@types';

const Btn: FC<BtnPropsType> = ({ value, className, handler }) => {
  return (
    <button
      onClick={handler}
      className={`btn ${className} bg-black text-white p-4 rounded-3xl text-center`}
    >
      {value}
    </button>
  );
};

export default Btn;

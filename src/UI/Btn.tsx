import React, { FC } from 'react';
import { BeatLoader } from 'react-spinners';
import { BtnPropsType } from '../../@types';

const Btn: FC<BtnPropsType> = ({ value, isLoading, className, handler }) => {
  return (
    <button
      onClick={handler}
      className={`btn ${className} bg-black text-white px-4 py-3 rounded-3xl text-center border border-solid border-border-10 hover:bg-stone-700 lg:transition-all lg:duration-300`}
    >
      {isLoading ? <BeatLoader color="#fff" /> : value}
    </button>
  );
};

export default Btn;

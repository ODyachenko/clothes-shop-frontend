import React, { FC } from 'react';
import { BtnPropsType } from '../../@types';

const OptionBtn: FC<BtnPropsType> = ({ value, handler }) => {
  return (
    <button
      onClick={handler}
      className="option-btn inline-block text-text-o bg-search-bg text-sm py-2 px-5 lg:py-3 lg:px-6 lg:text-base rounded-3xl flex-shrink-0"
    >
      {value}
    </button>
  );
};

export default OptionBtn;

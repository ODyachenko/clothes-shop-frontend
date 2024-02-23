import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SecondaryBtnType } from '../../@types';

const SecondaryBtn: FC<SecondaryBtnType> = ({
  value,
  path,
  handler,
  className,
}) => {
  return (
    <Link
      to={path}
      onClick={handler}
      className={`more-btn block border border-solid border-border-10 py-4 px-11 rounded-3xl text-center cursor-pointer hover:bg-black hover:text-white lg:transition-all lg:duration-300 ${className}`}
    >
      {value}
    </Link>
  );
};

export default SecondaryBtn;

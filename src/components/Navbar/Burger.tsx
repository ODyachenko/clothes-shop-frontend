import React, { FC, useState } from 'react';

type BurgerProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

const Burger: FC<BurgerProps> = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`hamburger hamburger--squeeze js-hamburger ${
        isActive ? 'is-active' : ''
      }`}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;

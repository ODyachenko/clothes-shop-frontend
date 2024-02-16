import React, { FC } from 'react';
import Btn from '../../UI/Btn/Btn';
import HeaderStats from './HeaderStats';
import headerImg_mob from '../../assets/img/header_mob.png';
import headerImg_desc from '../../assets/img/header.png';

const Header: FC = () => {
  return (
    <header className="header bg-header-bg pt-10 lg:pt-24">
      <div className="container sm:flex">
        <div className="header__content">
          <h1 className="header__title text-4xl mb-5 lg:text-4xl lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="header__text mb-6 leading-snug lg:mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Btn
            className="mb-5 max-w-80 mx-auto md:mx-0 md:max-w-52 lg:mb-12"
            value="Shop Now"
          />
          <HeaderStats />
        </div>
        <picture className="max-w-80 self-end shrink-0 md:max-w-96 lg:max-w-full">
          <source media="(min-width: 1024px)" srcSet={headerImg_desc} />
          <source media="(min-width: 300px)" srcSet={headerImg_mob} />
          <img className="mx-auto" src={headerImg_desc} alt="hero image" />
        </picture>
      </div>
    </header>
  );
};

export default Header;

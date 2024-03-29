import { FC } from 'react';
import { Link } from 'react-router-dom';
import HeaderStats from './HeaderStats';
import Btn from '../../UI/Btn';

import headerImg_mob from '../../assets/img/header_mob.png';
import headerImg_mob_webp from '../../assets/img/header_mob.webp';
import headerImg_desc from '../../assets/img/header.png';
import headerImg_desc_webp from '../../assets/img/header.webp';

const Header: FC = () => {
  return (
    <header className="header bg-header-bg pt-10 lg:pt-24">
      <div className="container sm:flex">
        <div className="header__content">
          <h1 className="header__title font-integral text-3xl mb-5 lg:text-5xl lg:mb-8 xl:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="header__text mb-6 leading-snug lg:mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to={'/products'}>
            <Btn
              className="mb-5 w-52 mx-auto md:mx-0 md:max-w-52 lg:mb-14"
              value="Shop Now"
            />
          </Link>

          <HeaderStats />
        </div>
        <picture className="max-w-80 self-end shrink-0 md:max-w-96 lg:max-w-full">
          <source
            media="(min-width: 1024px)"
            srcSet={headerImg_desc_webp}
            type="image/webp"
          />
          <source media="(min-width: 1024px)" srcSet={headerImg_desc} />
          <source
            media="(min-width: 300px)"
            srcSet={headerImg_mob_webp}
            type="image/webp"
          />
          <source media="(min-width: 300px)" srcSet={headerImg_mob} />
          <img
            className="mx-auto"
            src={headerImg_desc}
            alt="Fashionably dressed couple"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;

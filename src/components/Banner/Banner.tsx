import { FC } from 'react';
import BannerList from './BannerList';

const Banner: FC = () => {
  return (
    <div className="banner bg-black py-9 lg:py-11">
      <div className="container">
        <BannerList />
      </div>
    </div>
  );
};

export default Banner;

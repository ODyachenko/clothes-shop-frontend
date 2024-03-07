import { FC } from 'react';
import SocialsList from './SocialsList';

const Footer: FC = () => {
  return (
    <footer className="footer bg-header-bg py-10 lg:py-16">
      <div className="container">
        <h2 className="footer__brand title text-center font-bold mb-4 lg:mb-6">
          SHOP.CO
        </h2>
        <p className="footer__slogan text-sm text-text-o text-center mb-5 lg:mb-9 max-w-md mx-auto">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <SocialsList />
      </div>
    </footer>
  );
};

export default Footer;

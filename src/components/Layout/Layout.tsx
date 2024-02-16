import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Navbar/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

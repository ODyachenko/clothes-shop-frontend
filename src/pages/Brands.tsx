import React, { FC } from 'react';
import BrandsList from '../components/Brands/BrandsList';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';

const Brands: FC = () => {
  return (
    <Layout>
      <Wrapper className="brands">
        <h1 className="title mb-8 lg:mb-16">Brands</h1>
        <BrandsList />
      </Wrapper>
    </Layout>
  );
};

export default Brands;

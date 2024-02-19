import React from 'react';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';
import Sidebar from '../components/Sidebar/Sidebar';
import { Wrapper } from '../components/Wrapper/Wrapper';

const ProductsPage = () => {
  return (
    <Layout>
      <div className="products py-14">
        <div className="products__wrapper container lg:flex gap-5">
          <Sidebar />
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;

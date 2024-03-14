import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';
import Sidebar from '../components/Sidebar/Sidebar';

const ProductsPage: FC = () => {
  return (
    <Layout>
      <div className="products py-10 lg:py-24">
        <div className="products__wrapper container lg:flex gap-5">
          <Sidebar />
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;

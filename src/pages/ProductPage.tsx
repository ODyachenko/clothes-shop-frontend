import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';
import Layout from '../components/Layout/Layout';
import ProductDetails from '../components/Product/ProductDetails';
import ProductFAQ from '../components/Product/ProductFAQ/ProductFAQ';
import ProductInfo from '../components/Product/ProductInfo';
import ProductReviews from '../components/Product/ProductReviews';
import ProductTabs from '../components/Product/ProductTabs/ProductTabs';
import Recommendations from '../components/Recommendations/Recommendations';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useGetProductByIdQuery } from '../redux/API/productsAPI';
import {
  resetCartItem,
  setCartItemId,
  setCartItemInventory,
  setCartItemPrice,
} from '../redux/slices/cartSlice';
import { setProduct } from '../redux/slices/productSlice';
import { calculateDiscountPrice } from '../utils/calculateDiscountPrice';

type ConditionalRenderType = {
  [key: number]: JSX.Element;
};

const conditionalRender: ConditionalRenderType = {
  1: <ProductDetails />,
  2: <ProductReviews />,
  3: <ProductFAQ />,
};

const ProductPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(String(id));
  const { activeTab } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCartItem());

    if (data) {
      dispatch(setProduct(Object(data)));
      dispatch(setCartItemId(Object(data).id));
      dispatch(setCartItemInventory(Object(data).inventory));
      dispatch(
        setCartItemPrice(
          calculateDiscountPrice(Object(data).price, Object(data).discount)
        )
      );
    }
  }, [data]);

  return (
    <Layout>
      <main className="main pt-6">
        <div className="container">
          <div className="product__inner lg:flex lg:gap-10 lg:mb-14">
            <Gallery />
            <ProductInfo />
          </div>
          <ProductTabs />
          {conditionalRender[activeTab]}
          <Recommendations />
        </div>
      </main>
    </Layout>
  );
};

export default ProductPage;

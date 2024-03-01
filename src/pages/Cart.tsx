import React, { FC, useEffect } from 'react';
import CartList from '../components/Cart/CartList';
import CartSummary from '../components/Cart/CartSummary';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useAppDispatch } from '../hooks/hooks';
import { useGetCartQuery } from '../redux/API/cartAPI';
import { setCartList } from '../redux/slices/cartSlice';

const Cart: FC = () => {
  const { data, isLoading, error } = useGetCartQuery('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && dispatch(setCartList(data.results));
  }, [data]);

  return (
    <Layout>
      <Wrapper className="cart">
        {data?.results.length ? (
          <>
            <h1 className="cart__title title mb-5 lg:mb-6">Your Cart</h1>
            <div className="cart__row lg:flex lg:gap-5 lg:items-start">
              <CartList />
              <CartSummary />
            </div>
          </>
        ) : (
          <h2 className="f text-xl font-bold text-center">
            Your Cart is empty
          </h2>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Cart;

import React, { FC } from 'react';
import CartList from '../components/Cart/CartList';
import CartSummary from '../components/Cart/CartSummary';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useAppSelector } from '../hooks/hooks';

const Cart: FC = () => {
  const { cartList } = useAppSelector((state) => state.cart);

  return (
    <Layout>
      <Wrapper className="cart">
        {cartList.length ? (
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

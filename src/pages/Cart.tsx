import React, { FC } from 'react';
import CartList from '../components/Cart/CartList';
import CartSummary from '../components/Cart/CartSummary';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';

const Cart: FC = () => {
  return (
    <Layout>
      <Wrapper className="cart">
        <h1 className="cart__title title mb-5 lg:mb-6">Your Cart</h1>
        <div className="cart__row lg:flex lg:gap-5 lg:items-start">
          <CartList />
          <CartSummary />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Cart;

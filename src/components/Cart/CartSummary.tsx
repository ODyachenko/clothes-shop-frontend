import React, { FC } from 'react';
import Btn from '../../UI/Btn';
import CartSummaryList from './CartSummaryList';

const CartSummary: FC = () => {
  return (
    <div className="cart__summary summary border border-solid border-border-10 rounded-3xl p-4 lg:w-96 lg:flex-shrink-0 xl:w-summary-2">
      <h2 className="summary__title text-xl font-bold mb-4 lg:text-2xl lg:mb-6">
        Order Summary
      </h2>
      <CartSummaryList />
      <div className="summary__footer">
        <div className="summary__item flex items-center justify-between mb-5 lg:text-xl">
          <span className="text-text-o">Total</span>
          <strong className="font-bold text-xl">$567</strong>
        </div>
        <Btn value="Go to Checkout" className="w-full" />
      </div>
    </div>
  );
};

export default CartSummary;

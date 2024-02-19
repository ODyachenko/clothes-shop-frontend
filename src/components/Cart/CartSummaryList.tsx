import React, { FC } from 'react';

const CartSummaryList: FC = () => {
  return (
    <ul className="summary__list border-b border-solid border-border-10 mb-5 pb-5">
      <div className="summary__item flex items-center justify-between mb-5 lg:text-xl">
        <span className="text-text-o">Subtotal</span>
        <strong className="font-bold">$565</strong>
      </div>
      <div className="summary__item flex items-center justify-between mb-5 lg:text-xl">
        <span className="text-text-o">Discount(-20%)</span>
        <strong className="font-bold text-red-500">-$113</strong>
      </div>
      <div className="summary__item flex items-center justify-between lg:text-xl">
        <span className="text-text-o">Delivery Fee</span>
        <strong className="font-bold">$16</strong>
      </div>
    </ul>
  );
};

export default CartSummaryList;

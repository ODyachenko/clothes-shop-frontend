import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Btn from '../../UI/Btn';
import { calculateTotal } from '../../utils/calculateTotal';

const CartSummary: FC = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const total = calculateTotal(cartList);
  const deliveryFee = 16;

  return (
    <div className="cart__summary summary border border-solid border-border-10 rounded-3xl p-4 lg:w-96 lg:flex-shrink-0 xl:w-summary-2">
      <h2 className="summary__title text-xl font-bold mb-4 lg:text-2xl lg:mb-6">
        Order Summary
      </h2>
      <ul className="summary__list border-b border-solid border-border-10 mb-5 pb-5">
        <div className="summary__item flex items-center justify-between mb-5 lg:text-xl">
          <span className="text-text-o">Subtotal</span>
          <strong className="font-bold">${total.toFixed(2)}</strong>
        </div>
        <div className="summary__item flex items-center justify-between lg:text-xl">
          <span className="text-text-o">Delivery Fee</span>
          <strong className="font-bold">$16</strong>
        </div>
      </ul>
      <div className="summary__footer">
        <div className="summary__item flex items-center justify-between mb-5 lg:text-xl">
          <span className="text-text-o">Total</span>
          <strong className="font-bold text-xl">
            ${(total + deliveryFee).toFixed(2)}
          </strong>
        </div>
        <Btn value="Go to Checkout" className="w-full" />
      </div>
    </div>
  );
};

export default CartSummary;

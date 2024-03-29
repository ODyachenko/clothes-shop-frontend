import { FC } from 'react';
import CartItem from './CartItem';
import { useAppSelector } from '../../hooks/hooks';

const CartList: FC = () => {
  const { cartList } = useAppSelector((state) => state.cart);

  return (
    <ul className="cart__list border border-solid border-border-10 rounded-3xl p-4 divide-y divide-solid divide-border-10 mb-5 lg:mb-0 lg:w-full">
      {cartList.map((item) => (
        <CartItem key={item?.id} {...item} />
      ))}
    </ul>
  );
};

export default CartList;

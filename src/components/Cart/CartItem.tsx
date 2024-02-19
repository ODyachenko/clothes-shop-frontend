import React, { FC, useState } from 'react';
import { CartType } from '../../../@types';
import Counter from '../../UI/Counter';
import RemoveBtn from '../../UI/RemoveBtn';

const CartItem: FC<CartType> = ({
  name,
  size,
  color,
  price,
  quantity,
  img,
}) => {
  const [count, setCount] = useState(quantity);

  return (
    <li className="cart__item py-4 last:pb-0 flex flex-wrap gap-4 sm:flex-nowrap">
      <picture className="block mx-auto">
        <img className="rounded-lg" src={img} alt={name} />
      </picture>
      <div className="cart__item-info w-full">
        <div className="cart__body mb-4">
          <div className="cart__item-inner flex items-center justify-between gap-4 mb-3">
            <h2 className="cart__item-name font-bold lg:text-xl">{name}</h2>
            <RemoveBtn />
          </div>
          <span className="cart__item-size block text-xs text-text-o mb-2 lg:text-sm">
            <strong className="text-black">Size:</strong> {size}
          </span>
          <span className="cart__item-color block text-xs text-text-o lg:text-sm">
            <strong className="text-black">Color:</strong> {color}
          </span>
        </div>
        <div className="cart__item-footer flex items-center justify-between">
          <span className="cart__item-price text-xl font-bold lg:text-2xl">
            ${price}
          </span>
          <Counter state={count} setState={setCount} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

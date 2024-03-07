import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import {
  useDeleteCartItemMutation,
  useUpdateCartQuantityMutation,
} from '../../redux/API/cartAPI';
import Counter from '../../UI/Counter';
import RemoveBtn from '../../UI/RemoveBtn';

const CartItem: FC<any> = ({
  id,
  productItem,
  size,
  color,
  total_price,
  quantity,
}) => {
  const [deleteItem] = useDeleteCartItemMutation();
  const [updateItem] = useUpdateCartQuantityMutation();
  const { cartItem } = useAppSelector((state) => state.cart);
  const [productQuantity, setProductQuantity] = useState<number>(quantity);
  const btnRef = useRef(false);
  const navigate = useNavigate();

  const onClickRemoveBtn = () => {
    if (window.confirm('Do you want remove this product?')) {
      deleteItem(id);
    }
  };

  const onClickNavigate = () => {
    navigate(`/products/${productItem.id}`);
  };

  useEffect(() => {
    if (btnRef.current) {
      updateItem({ id, body: { quantity: productQuantity } });
      btnRef.current = false;
    }
  }, [productQuantity, updateItem, id]);

  const onChangeQuantity = (value: number) => {
    setProductQuantity(value);
    btnRef.current = true;
  };

  return (
    <li className="cart__item py-4 last:pb-0 flex flex-wrap gap-4 sm:flex-nowrap">
      <picture
        className="block mx-auto max-w-32 cursor-pointer"
        onClick={onClickNavigate}
      >
        <img
          className="rounded-lg"
          src={productItem.images[0].image}
          alt={productItem.name}
        />
      </picture>
      <div className="cart__item-info w-full">
        <div className="cart__body mb-4">
          <div className="cart__item-inner flex items-center justify-between gap-4 mb-3">
            <h2
              className="cart__item-name font-bold cursor-pointer lg:text-xl"
              onClick={onClickNavigate}
            >
              {productItem.name}
            </h2>
            <RemoveBtn handler={onClickRemoveBtn} />
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
            ${total_price}
          </span>
          <Counter
            maxValue={cartItem.inventory}
            state={productQuantity}
            setState={onChangeQuantity}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

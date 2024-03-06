import { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCartItemColor } from '../../redux/slices/cartSlice';

const ProductColors: FC = () => {
  const { colors } = useAppSelector((state) => state.product.currentProduct);
  const { cartItem } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === cartItem.color
      ? dispatch(setCartItemColor(0))
      : dispatch(setCartItemColor(id));
  };

  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Select Colors</h3>
      <div className="product__colors flex items-center gap-4">
        {colors && (
          <ColorsList
            colors={colors}
            state={cartItem.color}
            handler={onClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ProductColors;

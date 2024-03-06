import { FC } from 'react';
import SizesList from '../Sizes/SizesList';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCartItemSize } from '../../redux/slices/cartSlice';

const ProductSizes: FC = () => {
  const { sizes } = useAppSelector((state) => state.product.currentProduct);
  const { cartItem } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === cartItem.size
      ? dispatch(setCartItemSize(0))
      : dispatch(setCartItemSize(id));
  };

  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Choose Size</h3>
      <div className="product__sizes flex items-center gap-2 lg:gap-3 overflow-x-auto">
        {sizes && (
          <SizesList
            sizes={sizes}
            state={cartItem.size}
            handler={onClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ProductSizes;

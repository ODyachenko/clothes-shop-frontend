import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Rating from '../Rating/Rating';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { usePostToCartMutation } from '../../redux/API/cartAPI';
import { setCartItemQuantity } from '../../redux/slices/cartSlice';
import { setActiveTab } from '../../redux/slices/productSlice';
import Btn from '../../UI/Btn';
import Counter from '../../UI/Counter';
import { calculateDiscountPrice } from '../../utils/calculateDiscountPrice';

const ProductInfo: FC = () => {
  const { currentProduct } = useAppSelector((state) => state.product);
  const { isAuth } = useAppSelector((state) => state.user);
  const { cartItem } = useAppSelector((state) => state.cart);
  const [createCartItem, { isLoading }] = usePostToCartMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveTab(1));
  }, [dispatch]);

  const onClickHandler = () => {
    !Object.values(cartItem).some((value) => value === 0)
      ? createCartItem(cartItem)
      : alert('Color and size are required!');
  };

  const setQuantity = (id: number) => {
    dispatch(setCartItemQuantity(id));
  };

  return (
    <div className="product__info max-w-w-600">
      <h1 className="product__title font-integral text-2xl lg:text-3xl xl:text-4xl font-bold mb-3">
        {currentProduct.name}
      </h1>
      {!!currentProduct.rating && (
        <Rating className="mb-3" value={currentProduct.rating} />
      )}
      {!!currentProduct.discount ? (
        <div className="product__price price flex items-center gap-3 mb-5">
          <strong className="price__new font-bold text-2xl lg:text-3xl">
            ${' '}
            {calculateDiscountPrice(
              currentProduct.price,
              currentProduct.discount
            )}
          </strong>
          <strong className="price__old font-bold text-price-30 text-2xl lg:text-3xl line-through">
            $ {currentProduct.price}
          </strong>
          <span className="inline-block bg-discount-bg text-red-500 rounded-3xl py-2 px-4">
            - {currentProduct.discount}%
          </span>
        </div>
      ) : (
        <div className="product__price price mb-5">
          <strong className="price__new font-bold text-2xl lg:text-3xl">
            $ {currentProduct.price}
          </strong>
        </div>
      )}
      <p className="product__description text-text-o mb-6 pb-6 border-b border-solid border-border-10">
        {currentProduct.description}
      </p>
      <ProductColors />
      <ProductSizes />
      <div className="flex items-center gap-5 mb-12">
        <Counter
          state={cartItem.quantity}
          setState={setQuantity}
          maxValue={currentProduct.inventory}
        />
        {isAuth ? (
          <Btn
            handler={onClickHandler}
            value={isLoading ? <BeatLoader color="#fff" /> : 'Add to Cart'}
            className="w-full"
          />
        ) : (
          <Btn value={<Link to={'/login'}>Login</Link>} className="w-full" />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;

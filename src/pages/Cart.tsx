import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import CartList from '../components/Cart/CartList';
import CartSummary from '../components/Cart/CartSummary';
import { useAppSelector } from '../hooks/hooks';

const Cart: FC = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth ? navigate('/login') : navigate('/cart');
  }, [isAuth, navigate]);

  return (
    <Layout>
      <Wrapper className="cart">
        {cartList.length ? (
          <>
            <h1 className="cart__title title mb-5 lg:mb-6">Your Cart</h1>
            <div className="cart__row lg:flex lg:gap-5 lg:items-start">
              <CartList />
              <CartSummary />
            </div>
          </>
        ) : (
          <h2 className="text-xl font-bold text-center">Your Cart is empty</h2>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Cart;

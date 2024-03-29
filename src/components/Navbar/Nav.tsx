import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useGetCartQuery } from '../../redux/API/cartAPI';
import { setCartList } from '../../redux/slices/cartSlice';
import Burger from './Burger';
import NavList from './NavList';
import Search from '../Search/Search';

import './styles.scss';
import NavAccount from './NavAccount';

const Nav: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { cartList } = useAppSelector((state) => state.cart);
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { data } = useGetCartQuery('', {
    skip: !isAuth,
  });

  useEffect(() => {
    data && dispatch(setCartList(data.results));
  }, [data, dispatch]);

  useEffect(() => {
    isActive
      ? document.documentElement.classList.add('scroll-hidden')
      : document.documentElement.classList.remove('scroll-hidden');
  }, [isActive]);

  return (
    <nav className="nav relative py-6 border-b border-solid border-border-10">
      <div className="nav__wrapper container flex items-center justify-between gap-4 lg:gap-10 lg:justify-start">
        <Burger isActive={isActive} setIsActive={setIsActive} />
        <NavLink
          className="nav__brand font-integral text-2xl font-bold mr-auto lg:text-3xl lg:mr-0"
          to={'/'}
        >
          SHOP.CO
        </NavLink>
        <div
          onClick={() => setIsActive(false)}
          className={`nav__content ${isActive ? 'active' : ''}`}
        >
          <NavList />
        </div>
        <Search />
        <NavLink className="nav__cart" to={'/cart'}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          {!!cartList.length && (
            <span className="nav__cart-count">{cartList.length}</span>
          )}
        </NavLink>
        {isAuth ? (
          <NavAccount />
        ) : (
          <NavLink to={`/login`}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.125 0C8.12247 0 6.1649 0.593821 4.49986 1.70637C2.83481 2.81892 1.53706 4.40023 0.770724 6.25033C0.00438702 8.10043 -0.196122 10.1362 0.194554 12.1003C0.585229 14.0643 1.54954 15.8685 2.96555 17.2845C4.38156 18.7005 6.18566 19.6648 8.14971 20.0555C10.1138 20.4461 12.1496 20.2456 13.9997 19.4793C15.8498 18.7129 17.4311 17.4152 18.5436 15.7501C19.6562 14.0851 20.25 12.1275 20.25 10.125C20.247 7.4406 19.1793 4.86699 17.2812 2.96883C15.383 1.07067 12.8094 0.00297771 10.125 0ZM5.58469 16.5534C6.10695 15.8393 6.79028 15.2585 7.57918 14.8581C8.36808 14.4577 9.24031 14.249 10.125 14.249C11.0097 14.249 11.8819 14.4577 12.6708 14.8581C13.4597 15.2585 14.1431 15.8393 14.6653 16.5534C13.3384 17.4945 11.7518 18 10.125 18C8.49823 18 6.91165 17.4945 5.58469 16.5534ZM7.5 9.375C7.5 8.85582 7.65396 8.34831 7.9424 7.91663C8.23083 7.48495 8.6408 7.1485 9.12046 6.94982C9.60012 6.75114 10.1279 6.69915 10.6371 6.80044C11.1463 6.90172 11.614 7.15173 11.9812 7.51884C12.3483 7.88596 12.5983 8.35369 12.6996 8.86289C12.8009 9.37209 12.7489 9.89989 12.5502 10.3795C12.3515 10.8592 12.0151 11.2692 11.5834 11.5576C11.1517 11.846 10.6442 12 10.125 12C9.42881 12 8.76113 11.7234 8.26885 11.2312C7.77657 10.7389 7.5 10.0712 7.5 9.375ZM16.3125 14.9944C15.5833 14.0669 14.6539 13.3164 13.5938 12.7987C14.2694 12.1146 14.7276 11.2458 14.9108 10.3019C15.0939 9.35788 14.9938 8.38083 14.623 7.49361C14.2523 6.6064 13.6274 5.84864 12.827 5.31568C12.0267 4.78271 11.0866 4.49834 10.125 4.49834C9.16343 4.49834 8.22333 4.78271 7.42297 5.31568C6.62262 5.84864 5.99775 6.6064 5.62698 7.49361C5.25621 8.38083 5.1561 9.35788 5.33924 10.3019C5.52239 11.2458 5.98061 12.1146 6.65625 12.7987C5.5961 13.3164 4.66668 14.0669 3.9375 14.9944C3.02161 13.8333 2.45114 12.4379 2.2914 10.9677C2.13165 9.49754 2.3891 8.01211 3.03425 6.68144C3.67941 5.35078 4.6862 4.22866 5.93939 3.44355C7.19257 2.65843 8.6415 2.24203 10.1203 2.24203C11.5991 2.24203 13.0481 2.65843 14.3012 3.44355C15.5544 4.22866 16.5612 5.35078 17.2064 6.68144C17.8515 8.01211 18.109 9.49754 17.9492 10.9677C17.7895 12.4379 17.219 13.8333 16.3031 14.9944H16.3125Z"
                fill="black"
              />
            </svg>
          </NavLink>
        )}

        <div className={`nav__overflow ${isActive ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Nav;

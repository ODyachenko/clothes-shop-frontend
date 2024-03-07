import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './hooks/hooks';
import { setIsAuth } from './redux/slices/userSlice';
import ScrollToTop from './utils/ScrollToTop';
import Loader from './components/Loader/Loader';

const Homepage = lazy(() => import('./pages/Homepage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NewArrivals = lazy(() => import('./pages/NewArrivals'));
const Sale = lazy(() => import('./pages/Sale'));
const Brands = lazy(() => import('./pages/Brands'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setIsAuth(true));
    }
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

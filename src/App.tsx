import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import Brands from './pages/Brands';
import ScrollToTop from './utils/ScrollToTop';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks';
import { setIsAuth } from './redux/slices/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setIsAuth(true));
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}

export default App;

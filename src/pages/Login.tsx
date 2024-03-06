import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import LoginForm from '../components/Forms/LoginForm';

const Login: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return (
    <div className="login py-6 lg:py-14">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

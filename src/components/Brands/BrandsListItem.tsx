import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setActiveBrand } from '../../redux/slices/filterSlice';
import { BrandsType } from '../../../@types';

const BrandsListItem: FC<BrandsType> = ({ id, name, logo }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    dispatch(setActiveBrand(id));
    navigate('/products');
  };

  return (
    <li
      onClick={() => onClickHandler(id)}
      className="bg-white cursor-pointer rounded-2xl shadow-card-sh px-4 py-6 mb-4 sm:mb-0 lg:transition-all lg:duration-300 hover:shadow-none"
    >
      <img className="logo max-h-16 mx-auto mb-4" src={logo} alt={name} />
      <h2 className="font-bold text-center lg:text-xl">{name}</h2>
    </li>
  );
};

export default BrandsListItem;

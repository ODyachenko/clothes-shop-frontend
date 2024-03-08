import { FC } from 'react';
import { useGetOnSaleProductsQuery } from '../../redux/API/productsAPI';
import Advertising from '../Advertising/Advertising';

const Recommendations: FC = () => {
  const { data } = useGetOnSaleProductsQuery('limit=4');

  return data ? (
    <Advertising
      className="recommendations"
      title="You might also like"
      productsList={data.results}
      path="/sale"
    />
  ) : (
    <p>We don't have any promotions</p>
  );
};

export default Recommendations;

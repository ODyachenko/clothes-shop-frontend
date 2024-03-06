import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import CardsList from '../components/Cards/CardsList';
import SkelletonsList from '../components/Cards/SkelletonsList';
import { useGetNewProductsQuery } from '../redux/API/productsAPI';

const NewArrivals: FC = () => {
  const { data, isLoading } = useGetNewProductsQuery('limit=8');

  return (
    <Layout>
      <Wrapper className="new-arrivals">
        {data ? (
          <CardsList
            productsList={data.results}
            className="min-[480px]:grid gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4"
          />
        ) : isLoading ? (
          <SkelletonsList className="min-[480px]:grid gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4" />
        ) : (
          <p>Ooops something wrong!</p>
        )}
      </Wrapper>
    </Layout>
  );
};

export default NewArrivals;

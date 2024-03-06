import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import CardsList from '../components/Cards/CardsList';
import SkelletonsList from '../components/Cards/SkelletonsList';
import { useGetOnSaleProductsQuery } from '../redux/API/productsAPI';

const Sale: FC = () => {
  const { data, isLoading } = useGetOnSaleProductsQuery('');

  return (
    <Layout>
      <Wrapper className="sale">
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

export default Sale;

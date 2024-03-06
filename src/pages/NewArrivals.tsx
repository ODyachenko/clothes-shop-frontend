import React, { FC } from 'react';
import CardsList from '../components/Cards/CardsList';
import SkelletonsList from '../components/Cards/SkelletonsList';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useGetNewProductsQuery } from '../redux/API/productsAPI';

const NewArrivals: FC = () => {
  const { data, isLoading, error } = useGetNewProductsQuery('limit=8');

  return (
    <Layout>
      <Wrapper className="new-arrivals">
        {data ? (
          <CardsList
            productsList={data.results}
            className="sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          />
        ) : isLoading ? (
          <SkelletonsList className="sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-4" />
        ) : (
          <p>Ooops something wrong!</p>
        )}
      </Wrapper>
    </Layout>
  );
};

export default NewArrivals;

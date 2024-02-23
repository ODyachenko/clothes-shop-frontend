import React, { FC } from 'react';
import CardsList from '../components/Cards/CardsList';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useGetOnSaleProductsQuery } from '../redux/API/productsAPI';

const Sale: FC = () => {
  const { data, isLoading, error } = useGetOnSaleProductsQuery('');

  return (
    <Layout>
      <Wrapper className="sale">
        {data && (
          <CardsList
            productsList={data.results}
            className="grid gap-5 grid-cols-4"
          />
        )}
      </Wrapper>
    </Layout>
  );
};

export default Sale;

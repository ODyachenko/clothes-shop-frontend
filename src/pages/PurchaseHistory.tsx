import React from 'react';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';

const PurchaseHistory = () => {
  return (
    <Layout>
      <Wrapper className="purchase">
        <h1 className="title mb-8">Purchase history</h1>
      </Wrapper>
    </Layout>
  );
};

export default PurchaseHistory;

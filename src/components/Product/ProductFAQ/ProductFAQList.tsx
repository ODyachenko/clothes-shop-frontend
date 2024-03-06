import { FC } from 'react';
import ProductFAQListItem from './ProductFAQListItem';
import { FAQList } from '../../../data/FAQList';

const ProductFAQList: FC = () => {
  return (
    <ul className="list-decimal pl-5">
      {FAQList.map((item) => (
        <ProductFAQListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ProductFAQList;

import { FC } from 'react';
import { FAQType } from '../../../../@types';

const ProductFAQListItem: FC<FAQType> = ({ question, answer }) => {
  return (
    <li className="mb-4 last:mb-0">
      <h3 className="font-bold mb-2">{question}</h3>
      <p>{answer}</p>
    </li>
  );
};

export default ProductFAQListItem;

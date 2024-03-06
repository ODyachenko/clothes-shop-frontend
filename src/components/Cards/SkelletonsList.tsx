import { FC } from 'react';
import CardSkelleton from './CardSkelleton';

type SkelletonsListProps = {
  className?: string;
};

const SkelletonsList: FC<SkelletonsListProps> = ({ className }) => {
  return (
    <div className={className}>
      {new Array(4).fill('').map((_, idx) => (
        <CardSkelleton key={idx} />
      ))}
    </div>
  );
};

export default SkelletonsList;

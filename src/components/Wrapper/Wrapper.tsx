import { FC } from 'react';
import { WrapperType } from '../../../@types';

export const Wrapper: FC<WrapperType> = ({ children, className }) => {
  return (
    <section className={`wrapper ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

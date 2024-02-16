import React, { FC } from 'react';

type RatingPropsType = {
  value: number;
  className?: string;
};

const Rating: FC<RatingPropsType> = ({ value, className }) => {
  return <div className={`${className}`}>{value}</div>;
};

export default Rating;

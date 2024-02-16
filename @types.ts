import React from 'react';

export type WrapperType = {
  children: React.ReactNode;
  className?: string;
};

export type NavLinksType = {
  id: number;
  value: string;
  path: string;
};

export type HeaderStatsType = {
  id: number;
  name: string;
  value: string;
};

export type BtnPropsType = {
  value: string;
  className?: string;
  handler?: () => void;
};

export type ImageType = {
  id: number;
  path: string;
  name: string;
};

export type ProductType = {
  id: number;
  img: string;
  name: string;
  rating: number;
  price: number;
};

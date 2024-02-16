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
  value: string | number;
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

export type ReviewType = {
  id: number;
  user: string;
  rating: number;
  review: string;
};

export type SocialType = {
  id: number;
  path: string;
  icon: React.ReactNode;
};

export type CounterType = {
  state: number;
  setState: (state: number) => void;
};

export type ProductSizeType = {
  id: number;
  value: string;
};

export type ProductColorsType = ProductSizeType;
export type ProductTabType = ProductSizeType;

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
  id?: number;
  value: string | number;
  className?: string;
  type?: 'button' | 'submit';
  state?: number;
  isLoading?: Boolean;
  handler?: () => void;
};

export type BannerType = {
  id: number;
  path: string;
  name: string;
};

export type SecondaryBtnType = {
  id?: number;
  value: string | number;
  className?: string;
  path: string;
  state?: number;
  handler?: () => void;
};

export type ChevronType = {
  className?: string;
  handler?: () => void;
};

export type ImageType = {
  id: number;
  image: string;
};

export type CartType = {
  id: number;
  img: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
};

export type CreateUserType = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginUserType = {
  username: string;
  password: string;
};

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
};

export type ReviewType = {
  id: number;
  user: UserType;
  rating: number;
  text: string;
  create_at: string;
};

export type SocialType = {
  id: number;
  path: string;
  icon: React.ReactNode;
};

export type CounterType = {
  maxValue?: number;
  state: number;
  setState: (state: number) => void;
};

export type PriceValueType = {
  min: number;
  max: number;
};

export type RangeSliderType = {
  min: number;
  max: number;
  value: any;
  step: number;
  onChange: (obj: PriceValueType) => void;
};

export type FieldType = {
  type: 'text' | 'password' | 'email';
  label?: string;
  placeholder: string;
  className?: string;
  register?: any;
  errors?: any;
  name: string;
};

export type ProductSizeType = {
  id: number;
  value: string;
};

export type ProductTabType = ProductSizeType;
export type ProductColorsType = ProductSizeType;
export type FiltersType = ProductSizeType;
export type SortingType = ProductSizeType;

export type ProductType = {
  id: number;
  images: ImageType[];
  name: string;
  description: string;
  details?: string[];
  category: string;
  rating: number;
  discount: number;
  price: string;
  inventory: number;
  sizes: ProductSizeType[];
  colors: ProductColorsType[];
  on_sale: boolean;
  reviews: ReviewType[];
  create_at: string;
};

export type FAQType = {
  id: number;
  question: string;
  answer: string;
};

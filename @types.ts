import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
  value: string | number | React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  state?: number;
  isLoading?: Boolean;
  disabled?: boolean;
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

export type CreateUserType = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type UserInfoType = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  city: string;
  state: string;
  street_address: string;
  zip_code: string;
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: string;
};

export type ProfileHookFormType = {
  register: UseFormRegister<UserInfoType>;
  errors: FieldErrors<UserInfoType>;
};

export type ReviewFormType = {
  rating: number;
  text: string;
};

export type ReviewType = {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
  };
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
  value: PriceValueType;
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

export type SearchFieldType = {
  value: string;
  onChange: (e: string) => void;
  onBlur: () => void;
};

export type SortingType = {
  id: number;
  value: string;
  slug: string;
};

export type FiltersType = {
  id: number;
  name: string;
};

export type SearchListType = FiltersType;

export type BrandsType = {
  id: number;
  name: string;
  logo: string;
};

export type ProductSizeType = {
  id: number;
  value: string;
};

export type ProductTabType = ProductSizeType;
export type ProductColorsType = ProductSizeType;

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

export type CartType = {
  id?: number;
  user?: number;
  productItemId?: number;
  productItem?: ProductType;
  size: number;
  color: number;
  quantity: number;
  inventory: number;
  unit_price: string;
  total_price?: string;
};

export type FAQType = {
  id: number;
  question: string;
  answer: string;
};

export type QueryObj = {
  ordering: string;
  category: number;
  brand: number;
  dress_style: number;
  colors: number;
  sizes: number;
  min_price: number;
  max_price: number;
  page: number;
};

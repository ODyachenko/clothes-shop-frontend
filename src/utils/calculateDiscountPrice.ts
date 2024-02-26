export const calculateDiscountPrice = (
  price: string | any,
  dicount: number
) => {
  return (+price * (1 - dicount / 100)).toFixed(2);
};

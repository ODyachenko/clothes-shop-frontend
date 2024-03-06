import { FC } from 'react';

type OptionBtnProps = {
  id: number;
  value: string | number;
  className?: string;
  state: number;
  handler: (id: number) => void;
};

const OptionBtn: FC<OptionBtnProps> = ({ id, value, state, handler }) => {
  return (
    <button
      onClick={() => handler(id)}
      className={`option-btn inline-block 
      text-sm py-2 px-5 lg:px-6 lg:text-base rounded-3xl flex-shrink-0 
      transition-all  hover:bg-black hover:text-white
      ${id === state ? 'bg-black text-white' : 'text-text-o bg-search-bg '}
      `}
    >
      {value}
    </button>
  );
};

export default OptionBtn;

import { FC } from 'react';
import { CounterType } from '../../@types';

const Counter: FC<CounterType> = ({ state, setState, maxValue }) => {
  return (
    <div className="counter inline-flex items-center bg-search-bg py-3 px-5 rounded-3xl gap-9 transition-all hover:shadow-md">
      <button
        disabled={state <= 1}
        onClick={() => setState(state - 1)}
        className={`counter__btn text-xl font-bold ${
          state <= 1 ? 'text-gray-300' : ''
        }`}
      >
        -
      </button>
      <span className="counter__value font-bold w-4">{state ? state : 0}</span>
      <button
        disabled={state === maxValue}
        onClick={() => setState(state + 1)}
        className={`counter__btn text-xl font-bold ${
          state === maxValue ? 'text-gray-300' : ''
        }`}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

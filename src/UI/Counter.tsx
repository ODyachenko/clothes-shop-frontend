import React, { FC } from 'react';
import { CounterType } from '../../@types';

const Counter: FC<CounterType> = ({ state, setState }) => {
  return (
    <div className="counter inline-flex items-center bg-search-bg py-3 px-5 rounded-3xl gap-9">
      <button
        onClick={() => setState(state - 1)}
        className="counter__btn text-xl font-bold"
      >
        -
      </button>
      <span className="counter__value font-bold">{state ? state : 0}</span>
      <button
        onClick={() => setState(state + 1)}
        className="counter__btn text-xl font-bold"
      >
        +
      </button>
    </div>
  );
};

export default Counter;

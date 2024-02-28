import React, { FC, useEffect, useState } from 'react';
import { RangeSliderType } from '../../../@types';
import './styles.scss';

const RangeSlider: FC<RangeSliderType> = ({
  min,
  max,
  value,
  step,
  onChange,
}) => {
  const [minValue, setMinValue] = useState<number>(value ? value.min : min);
  const [maxValue, setMaxValue] = useState<number>(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const onMinChange = (e: {
    preventDefault: () => void;
    target: { value: string | number };
  }) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);

    !value && setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const onMaxChange = (e: {
    preventDefault: () => void;
    target: { value: string | number };
  }) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);

    !value && setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="range">
      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={onMinChange}
        />
        <input
          className="input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={onMaxChange}
        />
      </div>

      <div className="control-wrapper">
        <div className="control" style={{ left: `${minPos}%` }}>
          <span className="control-value">${value.min}</span>
        </div>
        <div className="rail">
          <div
            className="inner-rail"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="control" style={{ left: `${maxPos}%` }}>
          <span className="control-value">${value.max}</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;

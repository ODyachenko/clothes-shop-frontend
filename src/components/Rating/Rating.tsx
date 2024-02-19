import React, { FC } from 'react';

type RatingPropsType = {
  value: number;
  className?: string;
};

const Rating: FC<RatingPropsType> = ({ value, className }) => {
  return (
    <div className={`${className} flex items-center gap-3`}>
      <figure style={{ width: value * 19.8 }} className=" overflow-hidden">
        <svg
          width="99"
          height="18"
          viewBox="0 0 139 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
            fill="#FFC633"
          />
          <path
            d="M40.3553 0L43.5537 6.8872L51.0922 7.80085L45.5305 12.971L46.9911 20.4229L40.3553 16.731L33.7195 20.4229L35.1801 12.971L29.6183 7.80085L37.1568 6.8872L40.3553 0Z"
            fill="#FFC633"
          />
          <path
            d="M69.421 0L72.6195 6.8872L80.158 7.80085L74.5962 12.971L76.0568 20.4229L69.421 16.731L62.7852 20.4229L64.2458 12.971L58.6841 7.80085L66.2226 6.8872L69.421 0Z"
            fill="#FFC633"
          />
          <path
            d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
            fill="#FFC633"
          />
          <path
            d="M127.553 0L130.751 6.8872L138.289 7.80085L132.728 12.971L134.188 20.4229L127.553 16.731L120.917 20.4229L122.377 12.971L116.816 7.80085L124.354 6.8872L127.553 0Z"
            fill="#FFC633"
          />
        </svg>
      </figure>
      <span className="f text-sm">{value}/5</span>
    </div>
  );
};

export default Rating;

import { FC } from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-40 fixed top-0 right-0 bottom-0 left-0 z-[1000]">
      <ScaleLoader color="#fff" width={6} height={40} />
    </div>
  );
};

export default Loader;

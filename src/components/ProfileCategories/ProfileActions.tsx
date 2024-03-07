import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileActions: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-stone-700 lg:transition-all lg:duration-300"
      >
        Save
      </button>
    </div>
  );
};

export default ProfileActions;

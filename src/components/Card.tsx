import React, { useState, FC } from 'react';
import { useAppDispatch } from '../store/hooks';
import { removeItem } from '../store/counterSlice';
import { CounterState } from '../utils';


interface CardProps {
  item: CounterState;
  openEdit: (id: CounterState) => void; // Define the openEdit function prop
}

const Card: FC<CardProps> = ({ item, openEdit }) => {
  const dispatch = useAppDispatch();

  const [view, setView] = useState<boolean>(false);

  const handleEdit = () => {
    openEdit(item); // Call the openEdit function with the item's id
  };

  return (
    <div className="xl:w-1/3 md:w-3/5 w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="flex justify-between mb-2">
          <div className="flex flex-wrap">
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              First Name: <span className="ml-3 font-serif font-bold">{item.firstName}</span>
            </h2>
            <h2 className={`text-lg text-gray-900 font-medium title-font mb-2 ${view ? 'block' : 'hidden'}`}>
              Last Name: <span className="ml-3 font-serif font-bold">{item.lastName}</span>
            </h2>
            <h2 className={`text-lg text-gray-900 font-medium title-font mb-2 ${view ? 'block' : 'hidden'}`}>
              Status: <span className="ml-3 font-serif font-bold">{item.status}</span>
            </h2>
          </div>
          <button
            onClick={() => setView(!view)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            View Details
          </button>
        </div>

        <div className="mt-6 -mb-1 flex justify-center items-center">
          <button
            className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

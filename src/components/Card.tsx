import React,{useState} from 'react'
import { MdModeEdit} from "react-icons/md";
import Modal from './Modal';
import ContactForm from './ContactForm';
const Card = () => {

    const [open, setopen] = useState<boolean>(false)
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
<div className='flex justify-between mb-2'>     
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">First Name:</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View Details
</button>
</div>

      <div className='mt-6 -mb-1 flex justify-center items-center'>
      <button  className=" mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
  Edit
</button>

<button className=" mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
  Delete
</button>
</div>
    </div>
  </div>
  )
}

export default Card
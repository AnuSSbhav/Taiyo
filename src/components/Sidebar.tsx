import React,{ReactNode} from 'react';
import { Link } from 'react-router-dom';
import { IoIosContacts } from "react-icons/io";
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
interface SidebarProps {
    children: ReactNode;
  }

  const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <IoIosContacts size={20} />
            </div>
            Contact
          </Link>
          
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          {/* <Link to='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link> */}
          {/* <Link to='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link> */}
          {/* <Link to='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link> */}
          {/* <Link to='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link> */}
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};
export default Sidebar
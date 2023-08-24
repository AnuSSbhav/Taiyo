import React,{ReactNode} from 'react';
import { Link } from 'react-router-dom';
import { IoIosContacts } from "react-icons/io";
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { MdDashboard } from "react-icons/md";

interface SidebarProps {
    children: ReactNode;
  }

  const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-slate-400 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          {/* Contact Page */}
          <Link to='/'>
            <div className='bg-purple-800 text-white hover:bg-gray-200 p-3 rounded-lg inline-block'>
              <IoIosContacts size={20} />
            </div>
            Contact
          </Link>
          
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link to='/graphs'>
            <div className='bg-purple-800 text-white hover:bg-gray-200 cursor-pointer mt-3 p-3 rounded-lg inline-block'>
              <MdDashboard size={20} />
            </div>
            Graphs
          </Link>
         
              
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};
export default Sidebar
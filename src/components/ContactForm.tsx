import React from 'react'
import { useAppSelector,useAppDispatch } from '../store/hooks'

type formData={
firstName:string;
lastName:string;
status:string;
}

const ContactForm = () => {
    const dispatch=useAppDispatch()
    const handleForm=()=>{
        
    }

    const handleFieldChange=()=>{

    }

  return (
    <div className="w-full max-w-xs">
    <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className='mb-4 text-gray-700 text-xl font-bold '>Create Contact Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
         First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" onChange={handleFieldChange}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Last Name
        </label>
        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" onChange={handleFieldChange}/>
      </div>
      <div className=' flex'>
      <label className="block text-gray-700 text-sm font-bold mt-5 mr-4" htmlFor="username">Status</label>
    <div className=' flex flex-col'>
      <div className="flex items-center mb-4">
    <input id="status" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleFieldChange}/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">Inactive</label>
</div>
<div className="flex items-center mb-4">
    <input id="status" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleFieldChange}/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 ">Active</label>
</div></div>
</div>
      <div className="mx-auto">
        <button typeof='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Save
        </button>
        
      </div>
    </form>
 
  </div>
  )
}

export default ContactForm
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from './loader';
const WorldCard = () => {

    
  const { data, isLoading, isError } = useQuery(['world'], async () => {
    const response = await axios.get(
      'https://disease.sh/v3/covid-19/all'
    );
    return response.data;
  });

  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
console.log(data)

  return (
    <div className="bg-white mx-auto shadow-md xs:w-2/3  md:w-1/2 rounded px-8 pt-6 pb-8 my-4">
    <h2 className="mb-4 text-gray-700 text-xl font-bold text-center">World Wide Data</h2>
    <div className="mb-4">
      {Object.entries(data).map(([key, value]) => (
        <p className='text-center' key={key}>{`${key} : ${value}`}</p>
      ))}
    </div>
    <div className="mx-auto"></div>
  </div>
  
  )
}

export default WorldCard